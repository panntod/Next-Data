import cn from '@/lib/clsx'
import Link from 'next/link'
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
  prefetch
}: Readonly<LinkButtonProps>) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant }), className)}
      target={target}
      scroll={scroll}
      download={download}
      data-disable-nprogress={disabledProgressBar}
      prefetch={prefetch}
    >
      {text}
    </Link>
  )
}
