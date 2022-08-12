import { IconType } from 'react-icons'
import { SiWindicss, SiJsonwebtokens } from 'react-icons/si'

export type Demo = {
  icon: IconType
  title: string
  src: string
  intro: string
}

export const demos: Demo[] = [
  {
    icon: SiWindicss,
    title: 'Pure Demo',
    src: 'https://github.com/3fuyang/pure-demo',
    intro: 'Demo of some pure front-end skills.'
  },
  {
    icon: SiJsonwebtokens,
    title: 'Authorization Demo',
    src: 'https://github.com/3fuyang/authorization_demo',
    intro: 'A demo to implement JWT(JSON Web Token), including both the front end and the back end.'
  }
]