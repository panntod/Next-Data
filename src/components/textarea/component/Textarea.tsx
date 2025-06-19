'use client'

import cn from '@/lib/clsx'
import { forwardRef, useId } from 'react'
import { TextareaProps } from '../types/Textarea.types'

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, fullWidth = false, className, wrapperClassName, id, tip, disabled, ...props }, ref) => {
    const generatedId = useId()
    const textareaId = id || generatedId

    return (
      <div className={cn('flex flex-col mb-4', fullWidth && 'w-full', wrapperClassName)}>
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              'mb-2 text-sm font-medium',
              disabled ? 'text-gray-400' : 'text-gray-700',
              error && 'text-red-500'
            )}
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          disabled={disabled}
          className={cn(
            'bg-[#F4F4F5] rounded-md px-4 py-2.5 outline-none transition-all duration-200',
            'placeholder:text-gray-400 placeholder:text-sm resize-none',
            !disabled ? 'text-gray-800 focus:ring-2 focus:ring-blue-500' : 'text-gray-400',
            error && 'border border-red-500 focus:ring-red-500',
            fullWidth && 'w-full',
            className
          )}
          {...props}
        />
        {error ? (
          <p className='mt-1 text-xs text-red-500'>{error}</p>
        ) : tip ? (
          <p className='mt-1 text-xs text-gray-500'>{tip}</p>
        ) : null}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
