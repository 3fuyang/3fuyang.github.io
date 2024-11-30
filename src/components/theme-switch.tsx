import { useTernaryDarkMode, type TernaryDarkMode } from 'usehooks-ts'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { MonitorIcon, MoonStarIcon, SunIcon } from 'lucide-react'

export default function ThemeSwitch() {
  const { isDarkMode, ternaryDarkMode, setTernaryDarkMode } =
    useTernaryDarkMode({
      // For SSR usage
      // @see https://github.com/juliencrn/usehooks-ts/issues/644
      initializeWithValue: false,
    })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {isDarkMode ? (
          <MoonStarIcon className="size-5" />
        ) : (
          <SunIcon className="size-5" />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={ternaryDarkMode}
          onValueChange={(value) => {
            setTernaryDarkMode(value as TernaryDarkMode)

            const isDarkOS = window.matchMedia(
              '(prefers-color-scheme: dark)',
            ).matches
            const isDarkMode =
              value === 'dark' || (value === 'system' && isDarkOS)
            if (isDarkMode) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          }}
        >
          <DropdownMenuRadioItem value="light">
            <SunIcon className="mr-2 size-4" />
            Light
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem value="dark">
            <MoonStarIcon className="mr-2 size-4" />
            Dark
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem value="system">
            <MonitorIcon className="mr-2 size-4" />
            System
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
