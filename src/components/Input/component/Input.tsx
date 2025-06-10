'use client'

import cn from '@/lib/clsx'
import { forwardRef, useId } from 'react'
import { InputProps } from '../types/Input.types'

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = false, className, wrapperClassName, id, disabled, required, ...props }, ref) => {
    const generatedId = useId()
    const inputId = id || generatedId

    return (
      <div className={cn('flex flex-col mb-4', fullWidth && 'w-full', wrapperClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'mb-2 text-sm font-medium',
              disabled ? 'text-gray-400' : 'text-gray-700',
              error && 'text-red-500'
            )}
          >
            {label}
            {required && <span className='text-red-500 ml-1'>*</span>}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          disabled={disabled}
          required={required}
          className={cn(
            'bg-[#F4F4F5] rounded-md px-4 py-2.5 outline-none transition-all duration-200',
            'placeholder:text-gray-400 placeholder:text-sm',
            !disabled ? 'text-gray-800 focus:ring-2 focus:ring-blue-500' : 'text-gray-400',
            error && 'border border-red-500 focus:ring-red-500',
            fullWidth && 'w-full',
            className
          )}
          {...props}
        />
        {error && <p className='mt-1 text-xs text-red-500'>{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
