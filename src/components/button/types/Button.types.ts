import { type VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'
import { buttonVariants } from '../utils'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'>, VariantProps<typeof buttonVariants> {
  text?: string
  type?: 'button' | 'reset' | 'submit'
  isDisabled?: boolean
  className?: string
}
