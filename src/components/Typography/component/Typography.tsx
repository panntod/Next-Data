import cn from '@/lib/clsx'
import { SIZE_VARIANT } from '../constant/size'
import { TypographyProps } from '../types/Typography.types'

export function Typography({ children, size = 'BODY_LG_NORMAL', className = '' }: Readonly<TypographyProps>) {
  const { className: sizeClassName, tag: Tag } = SIZE_VARIANT[size]

  const Element = Tag as keyof JSX.IntrinsicElements

  return <Element className={cn(sizeClassName, className)}>{children}</Element>
}
