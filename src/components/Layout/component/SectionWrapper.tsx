import cn from '@/lib/clsx'
import { SectionWrapperProps } from '../types/Wrapper.types'

export function SectionWrapper({ className = '', id, children }: Readonly<SectionWrapperProps>) {
  return (
    <section id={id} className={cn('px-4', className)}>
      {children}
    </section>
  )
}
