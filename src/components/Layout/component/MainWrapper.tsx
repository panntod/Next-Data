import cn from '@/lib/clsx'
import { SectionWrapperProps } from '../types/Wrapper.types'

export function MainWrapper({ className = '', id, children }: Readonly<SectionWrapperProps>) {
  return (
    <main id={id} className={cn('container mx-auto md:max-w-7xl min-h-screen py-12 md:py-24', className)}>
      {children}
    </main>
  )
}
