import { ReactNode } from 'react'
import { SizeVariant } from '../constant/size'

export interface TypographyProps {
  children: ReactNode
  size?: SizeVariant
  className?: string
}
