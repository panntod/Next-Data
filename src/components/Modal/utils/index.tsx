import { cva } from 'class-variance-authority'

export const modalSizeVariants = cva('relative w-full max-h-full', {
  variants: {
    size: {
      small: 'max-w-md',
      medium: 'max-w-lg',
      large: 'max-w-4xl',
      extralarge: 'max-w-7xl'
    }
  },
  defaultVariants: {
    size: 'medium'
  }
})

export const modalPositionVariants = cva(
  'fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-full max-h-full flex bg-gray-800 bg-opacity-50',
  {
    variants: {
      position: {
        center: 'justify-center items-center',
        top: 'justify-center items-start',
        bottom: 'justify-center items-end',
        left: 'justify-start items-center',
        right: 'justify-end items-center'
      }
    },
    defaultVariants: {
      position: 'center'
    }
  }
)
