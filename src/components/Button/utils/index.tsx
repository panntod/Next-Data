import { cva } from 'class-variance-authority'

export const buttonVariants = cva('transition-all duration-300 text-light hover:text-light', {
  variants: {
    variant: {
      'text-primary': 'text-primary-blue hover:bg-primary-blue',
      primary: 'bg-primary-blue hover:bg-secondary-blue',
      secondary: 'bg-secondary-blue',
      danger: 'bg-red-500 hover:bg-red-700',
      warning: 'bg-yellow-500 hover:bg-yellow-700',
      success: 'bg-green-500 hover:bg-green-700'
    },
    size: {
      small: 'px-[16px] py-[8px] text-sm rounded-[6px]',
      medium: 'px-[20px] md:px-[24px] py-[12px] md:py-[16px] text-base rounded-[12px]',
      large: 'px-[28] md:px-[32px] py-[16px] md:py-[20px] text-lg rounded-[16px]'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium'
  }
})
