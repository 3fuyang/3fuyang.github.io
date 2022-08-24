import { IconType } from 'react-icons'
import { SiWindicss, SiJsonwebtokens } from 'react-icons/si'
import { GiPuzzle } from 'react-icons/gi'

export interface Demo {
  icon: IconType
  title: string
  src: string
  intro: string
  type: 'js' | 'ts' | 'vue' | 'react'
}

export const demos: Demo[] = [
  {
    icon: SiWindicss,
    title: 'Pure Demo',
    src: 'https://github.com/3fuyang/pure-demo',
    intro: 'Demo of some pure front-end skills.',
    type: 'vue'
  },
  {
    icon: SiJsonwebtokens,
    title: 'Authorization Demo',
    src: 'https://github.com/3fuyang/authorization_demo',
    intro: 'A demo to implement JWT(JSON Web Token), including both the front end and the back end.',
    type: 'vue'
  },
  {
    icon: GiPuzzle,
    title: 'Type Challenges',
    src: 'https://gist.github.com/3fuyang/fe7fe44b6d7a2d7996577ab9c6324adc',
    intro: 'Just resolutions to type challenges.',
    type: 'ts'
  }
]