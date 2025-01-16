import { cva } from 'class-variance-authority'

export const badgeVariants = cva('font-medium', {
  variants: {
    variant: {
      primary: 'bg-primary-blue text-secondary-blue',
      default: 'bg-gray-100 text-gray-800',
      danger: 'bg-red-100 text-red-800',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      info: 'bg-indigo-100 text-indigo-800'
    },
    size: {
      small: 'text-xs px-2 py-0.5',
      medium: 'text-sm px-3 py-1',
      large: 'text-base px-4 py-1.5'
    },
    style: {
      rect: 'rounded',
      circular: 'rounded-full'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'medium',
    style: 'rect'
  }
})
