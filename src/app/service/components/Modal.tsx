import { SectionWrapper } from '@/components/Layout'
import { Modal } from '@/components/Modal'
import { Typography } from '@/components/Typography'
import Image from 'next/image'

interface DetailModalProps {
  isOpen: boolean
  onClose: () => void
  data: SelectedDetail | null
}

export interface SelectedDetail {
  image: string
  title: string
  description: string
}

export function DetailModal({ isOpen, onClose, data }: DetailModalProps) {
  if (!data) return null

  return (
    <Modal isOpen={isOpen} closeable onClose={onClose}>
      <SectionWrapper id='detail-modal'>
        <Image
          src={'/services' + data.image}
          className='mb-2 w-full h-[180px] md:h-[300px] rounded-md'
          alt='admin'
          width={500}
          height={300}
        />
        <Typography size='BODY_MD_BOLDEST'>{data.title}</Typography>
        <Typography size='BODY_SM_NORMAL'>{data.description}</Typography>
      </SectionWrapper>
    </Modal>
  )
}
