import { cva } from 'class-variance-authority'

export const cardVariants = cva('rounded-xl sm:rounded-2xl shadow-lg bg-light flex justify-center items-center', {
  variants: {
    size: {
      small: 'w-[300px] h-[150px]',
      medium: 'w-[400px] h-[200px]',
      large: 'w-[500px] h-[300px]'
    }
  },
  defaultVariants: {
    size: 'medium'
  }
})
