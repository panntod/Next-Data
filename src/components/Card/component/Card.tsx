import cn from '@/lib/clsx'
import { CardProps } from '../types/Card.types'
import { cardVariants } from '../utils'

export function Card({ children, className = '', size }: Readonly<CardProps>) {
  return <article className={cn(cardVariants({ size }), className)}>{children}</article>
}
