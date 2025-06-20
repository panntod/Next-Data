import cn from '@/lib/clsx'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { LinkButtonProps } from '../types/LinkButton.types'
import { buttonVariants } from '../utils'

export function ButtonLink({
  text,
  href,
  variant,
  className = '',
  target,
  scroll,
  download,
  disabledProgressBar,
  prefetch,
  size = 'medium',
  children
}: PropsWithChildren<LinkButtonProps>) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      target={target}
      scroll={scroll}
      download={download}
      data-disable-nprogress={disabledProgressBar}
      prefetch={prefetch}
    >
      {text || children}
    </Link>
  )
}
