import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  fullWidth?: boolean
  className?: string
  labelClassName?: string
  wrapperClassName?: string
  required?: boolean
}
