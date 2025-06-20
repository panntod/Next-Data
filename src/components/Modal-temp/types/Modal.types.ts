import { VariantProps } from 'class-variance-authority'
import { modalPositionVariants, modalSizeVariants } from '../utils'

export interface ModalProps extends VariantProps<typeof modalSizeVariants>, VariantProps<typeof modalPositionVariants> {
  isOpen: boolean
  onClose?: () => void
  onOk?: () => void
  positiveLabel?: string
  negativeLabel?: string
  title?: string
  description?: string
  closeable: boolean
}
