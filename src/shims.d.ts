// get TS support (JSX/TSX) for preset-attributify
import type { AttributifyAttributes } from '@unocss/preset-attributify'

// valueless attrbutify not work, react-dom warning, e.g. Received `true` for a non-boolean attribute `flex`.
// according to antfu, this is a limitation of React, and using valueless attributify mode need to be avoided.
declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}