'use client'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { MainWrapper, SectionWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'
import Image from 'next/image'
import { useState } from 'react'
import { DetailModal, SelectedDetail } from '../components/Modal'
import { services_en } from '../constant/SERVICES'

export function Service() {
  const [selectedData, setSelectedData] = useState<SelectedDetail | null>(null)

  const handleClose = () => setSelectedData(null)

  const truncateText = (text: string, maxLength: number) => {
    const words = text.split(' ')
    let truncatedText = ''

    for (let i = 0; i < words.length; i++) {
      if ((truncatedText + words[i]).length + 1 > maxLength) {
        break
      }

      truncatedText += (truncatedText ? ' ' : '') + words[i]
    }

    if (truncatedText.length < text.length) {
      truncatedText += '...'
    }

    return truncatedText
  }

  return (
    <MainWrapper id='service' className='flex flex-col items-center justify-center'>
      <SectionWrapper id='why-section-1'>
        <Typography size='DISPLAY_LG' className='text-secondary-blue text-center'>
          Elevate Your Business with Seamless AI Solutions
        </Typography>
        <Typography size='BODY_MD_NORMAL' className='my-6 text-center'>
          Unlock growth and efficiency with tailored AI-driven solutions.
        </Typography>
      </SectionWrapper>

      <SectionWrapper id='why-section-2' className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12'>
        {services_en.map((service, index) => (
          <Card
            key={'card-' + index}
            size='medium'
            className='flex flex-col items-start justify-start p-0 overflow-hidden'
          >
            <Image
              src={'/services' + service.image}
              className='w-full h-[180px] md:h-[300px]'
              alt={service.title}
              width={500}
              height={300}
            />

            <SectionWrapper id='card-body' className='p-6'>
              <Typography size='BODY_MD_BOLDEST'>{service.title}</Typography>
              <Typography size='BODY_SM_NORMAL'>{truncateText(service.description, 110)}</Typography>
              <Button size='small' onClick={() => setSelectedData(service)} className='mt-4'>
                Learn More
              </Button>
            </SectionWrapper>
          </Card>
        ))}

        <DetailModal onClose={handleClose} isOpen={!!selectedData} data={selectedData} />
      </SectionWrapper>
    </MainWrapper>
  )
}
