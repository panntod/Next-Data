'use client'

import cn from '@/lib/clsx'
import { animate, motion, useInView, useMotionValue, useTransform } from 'motion/react'
import { useEffect, useRef } from 'react'
import { SIZE_VARIANT } from '../constant/SIZE'
import { CounterProps } from '../types/Counter.types'

export function Counter({ endCount = 100, duration = 5, size = 'BODY_MD_NORMAL', className = '' }: CounterProps) {
  const { className: sizeClassName } = SIZE_VARIANT[size]
  const count = useMotionValue(0)
  const ref = useRef(null)

  const rounded = useTransform(count, value => Math.round(value))
  const isInView = useInView(ref, { once: true }) // Trigger hanya sekali

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, endCount, { duration })
      return () => controls.stop()
    }
  }, [count, duration, endCount, isInView])

  return (
    <motion.pre ref={ref} className={cn(sizeClassName, className)}>
      {rounded}
    </motion.pre>
  )
}
