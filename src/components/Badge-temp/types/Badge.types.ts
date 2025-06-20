import { type VariantProps } from 'class-variance-authority'
import { badgeVariants } from '../utils'

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  text: string
}
