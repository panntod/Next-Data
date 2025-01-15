import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'rounded-[14px] px-[24px] py-[16px] transition-all duration-300 text-light hover:text-light',
  {
    variants: {
      variant: {
        'text-primary': 'text-primary-blue hover:bg-primary-blue',
        primary: 'bg-primary-blue hover:bg-secondary-blue ',
        secondary: 'bg-secondary-blue',
        danger: 'bg-red-500 hover:bg-red-700',
        warning: 'bg-yellow-500 hover:bg-yellow-700',
        success: 'bg-green-500 hover:bg-green-700'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)
