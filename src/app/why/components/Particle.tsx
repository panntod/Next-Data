'use client'

import cn from '@/lib/clsx'
import { motion } from 'motion/react'

interface Shape {
  id: number
  x: number
  y: number
}

// Fungsi untuk menghasilkan ukuran acak
const generateRandomSize = () => ({
  width: Math.random() * 40 + 20, // Lebar acak antara 20px dan 60px
  height: Math.random() * 40 + 20 // Tinggi acak antara 20px dan 60px
})

export function Particle() {
  // ! NOTE: Jangan Menaruh X: 40-60 & Y: 30-80
  const shapes: Shape[] = [
    { id: 0, x: 0, y: 20 },
    { id: 1, x: 93, y: 19 },
    { id: 2, x: 31, y: 24 },
    { id: 3, x: 72, y: 26 },
    { id: 4, x: 12, y: 30 },
    { id: 5, x: 82, y: 32 },
    { id: 6, x: 22, y: 82 },
    { id: 7, x: 67, y: 78 },
    { id: 8, x: 78, y: 82 },
    { id: 9, x: 33, y: 84 },
    { id: 10, x: 0, y: 92 },
    { id: 11, x: 98, y: 98 }
  ]

  const getRandomTailwindColor = () => {
    const colors = ['bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-blue-500']
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }

  return (
    <div className='absolute inset-0 z-0'>
      {shapes.map(shape => {
        const size = generateRandomSize() // Menambahkan ukuran acak
        return (
          <motion.div
            key={shape.id}
            style={{
              position: 'absolute',
              top: `${shape.y}%`, // Gunakan nilai x dan y dari objek shape
              left: `${shape.x}%`,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            }}
          >
            <motion.div
              className={cn('opacity-80 animate-float', getRandomTailwindColor())}
              style={{
                width: `${size.width}px`,
                height: `${size.height}px`
              }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
