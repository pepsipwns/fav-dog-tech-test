import { ReactNode } from 'react'

interface NavLink {
  name: string
  path: string
}

export interface NavigationProps {
  links: NavLink[]
}
