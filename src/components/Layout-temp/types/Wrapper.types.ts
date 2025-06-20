import { ReactNode } from 'react'

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode
  id: string
  className?: string
  bgColor?: string
}
