import { BadgeProps } from '../types/Badge.types'
import { badgeVariants } from '../utils'

export function Badge({ text, variant = 'default', size = 'medium', style = 'rect' }: BadgeProps) {
  return <span className={badgeVariants({ variant, size, style })}>{text}</span>
}
