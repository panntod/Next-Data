import cn from '@/lib/clsx'
import { ButtonProps } from '../types/Button.types'
import { buttonVariants } from '../utils'

export function Button({
  type = 'button',
  onClick,
  text = 'Button',
  isDisabled,
  className = '',
  variant = 'primary'
}: Readonly<ButtonProps>) {
  return (
    <button type={type} onClick={onClick} disabled={isDisabled} className={cn(buttonVariants({ variant }), className)}>
      <p className='leading-[160%] text-light text-xl sm:text-sm'>{text}</p>
    </button>
  )
}
