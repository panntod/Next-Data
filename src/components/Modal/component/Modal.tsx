'use client'

import { Button } from '@/components/Button'
import { Typography } from '@/components/Typography'
import { PropsWithChildren } from 'react'
import { ModalProps } from '../types/Modal.types'
import { modalPositionVariants, modalSizeVariants } from '../utils'

export function Modal({
  isOpen = false,
  onClose,
  onOk,
  positiveLabel,
  negativeLabel,
  title,
  description,
  position = 'center',
  closeable = false,
  size = 'medium',
  children
}: PropsWithChildren<ModalProps>) {
  const renderContent = () => (
    <>
      <header className='flex items-center justify-between p-4'>
        <div>
          <Typography size='BODY_LG_BOLDEST'>{title}</Typography>
          <Typography size='LABEL_SM_NORMAL'>{description}</Typography>
        </div>

        {closeable && (
          <button
            type='button'
            onClick={() => onClose?.()}
            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
          >
            <svg
              className='w-3 h-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
              />
            </svg>
            <span className='sr-only'>Close modal</span>
          </button>
        )}
      </header>

      {children}
    </>
  )

  const renderAction = () => (
    <div className='flex items-center justify-end p-4 md:p-5 gap-2'>
      {negativeLabel && (
        <Button text={negativeLabel} onClick={() => onClose?.()} variant='primary-plain' size='small' />
      )}

      {positiveLabel && <Button text={positiveLabel} onClick={() => onOk?.()} variant='primary' size='small' />}
    </div>
  )

  return (
    <>
      {isOpen && (
        <dialog className={modalPositionVariants({ position })}>
          <section className={modalSizeVariants({ size })}>
            <div className='relative bg-white rounded-lg shadow'>
              {renderContent()}
              {renderAction()}
            </div>
          </section>
        </dialog>
      )}
    </>
  )
}
