import { type VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef, MouseEventHandler } from 'react'
import { buttonVariants } from '../utils'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'>, VariantProps<typeof buttonVariants> {
  text?: string
  type?: 'button' | 'reset' | 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
  isDisabled?: boolean
  className?: string
}
