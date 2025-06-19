'use client'

import cn from '@/lib/clsx'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { CardProps } from '../types/Card.types'
import { cardVariants } from '../utils'

export function Card({ children, className = '', size }: Readonly<CardProps>) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.article
      ref={ref}
      className={cn(cardVariants({ size }), className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 20
      }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      {children}
    </motion.article>
  )
}
