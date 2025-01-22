import { SIZE_VARIANT } from '../constant/SIZE'

export interface CounterProps {
  endCount?: number
  duration?: number
  size?: keyof typeof SIZE_VARIANT
  className?: string
}
