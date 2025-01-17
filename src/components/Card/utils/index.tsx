import { cva } from 'class-variance-authority'

export const cardVariants = cva('rounded-xl sm:rounded-2xl shadow-lg bg-light flex justify-center items-center', {
  variants: {
    size: {
      small: 'w-[280px] sm:w-[300px] min-h-[140px] sm:min-h-[160px]',
      medium: 'w-[320px] md:w-[400px] min-h-[160px] md:min-h-[200px]',
      large: 'w-[360px] md:w-[500px] min-h-[220px] md:min-h-[260px]'
    }
  },
  defaultVariants: {
    size: 'medium'
  }
})
