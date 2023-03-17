import { ReactNode } from 'react'

export interface ImageCardProps {
  src: string
  alt: string
  size?: 'sm' | 'lg'
  children?: ReactNode
}
