import { type VariantProps } from 'class-variance-authority'
import { LinkProps as NextLinkProps } from 'next/link'
import { HTMLAttributeAnchorTarget } from 'react'
import { buttonVariants } from '../utils'

export interface LinkButtonProps extends NextLinkProps, VariantProps<typeof buttonVariants> {
  href: string
  scroll?: boolean
  target?: HTMLAttributeAnchorTarget
  className?: string
  download?: boolean
  disabledProgressBar?: boolean
  text?: string
}
