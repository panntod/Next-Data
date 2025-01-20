import { cva } from 'class-variance-authority'

export const buttonVariants = cva('transition-all duration-300 text-light hover:text-light', {
  variants: {
    // Variants for colors (primary, secondary, danger, warning, success)
    variant: {
      primary: 'bg-primary-blue hover:bg-secondary-blue',
      secondary: 'bg-secondary-blue hover:bg-secondary-blue',
      danger: 'bg-red-500 hover:bg-red-700',
      warning: 'bg-yellow-500 hover:bg-yellow-700',
      success: 'bg-green-500 hover:bg-green-700',

      // Additional color styles for outlined buttons
      'primary-outline': 'border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white',
      'secondary-outline': 'border border-secondary-blue text-secondary-blue hover:bg-secondary-blue hover:text-white',
      'danger-outline': 'border border-red-500 text-red-500 hover:bg-red-500 hover:text-white',
      'warning-outline': 'border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white',
      'success-outline': 'border border-green-500 text-green-500 hover:bg-green-500 hover:text-white',

      // Additional color styles for plain buttons
      'primary-plain': 'text-primary-blue hover:text-secondary-blue',
      'secondary-plain': 'text-secondary-blue hover:text-primary-blue',
      'danger-plain': 'text-red-500 hover:text-red-700',
      'warning-plain': 'text-yellow-500 hover:text-yellow-700',
      'success-plain': 'text-green-500 hover:text-green-700'
    },
    size: {
      small: 'px-[16px] py-[8px] text-sm rounded-[6px]',
      medium: 'px-[20px] md:px-[22px] py-[10px] md:py-[12px] text-base rounded-[8px]',
      large: 'px-[24] md:px-[26px] py-[14px] md:py-[16px] text-lg rounded-[10px]'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium'
  }
})
