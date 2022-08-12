import { IconType } from 'react-icons'
import { BsCart } from 'react-icons/bs'
import { GiPlagueDoctorProfile } from 'react-icons/gi'
import { SiJest } from 'react-icons/si'

export type Project = {
  logo: IconType
  title: string
  src: string
  intro: string
  type: 'vue' | 'react'
}

export const projects: Project[] = [
  {
    logo: BsCart,
    title: 'TJ Flea',
    src: 'https://github.com/3fuyang/flea-market',
    intro: 'A classic online flea market for TJSSE software enginnering course.',
    type: 'vue'
  },
  {
    logo: GiPlagueDoctorProfile,
    title: 'Flog',
    src: 'https://github.com/3fuyang/3fuyang.github.io',
    intro: 'Means Fwio\'s blog.',
    type: 'react'
  },
  {
    logo: SiJest,
    title: 'Libre Testing',
    src: 'https://github.com/3fuyang/libre-testing',
    intro: 'An automatic testing platform for TJSSE software testing course.',
    type: 'vue'
  }
]