import { Card } from '@/components/Card'
import { MainWrapper, SectionWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'
import Image from 'next/image'
import { en_payment } from '../constant/PAID'

export function Paid() {
  return (
    <MainWrapper id='why' className='flex flex-col items-center justify-center'>
      <SectionWrapper id='why-section-1'>
        <Typography size='DISPLAY_LG' className='text-secondary-blue text-center'>
          Get Paid from All Around the World
        </Typography>
        <Typography size='BODY_MD_NORMAL' className='my-6 text-center'>
          Earn globally by working on AI projects with clients from diverse industries, no matter where you are.
        </Typography>
      </SectionWrapper>

      <SectionWrapper id='why-section-2' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {en_payment.map(({ title, description }, index) => (
          <Card key={'card-' + index} size='medium' className='flex flex-col items-start p-6'>
            <Image
              src={index % 2 === 0 ? '/nextdata.svg' : '/nextdata-outline.svg'}
              alt='nextdata outlined'
              width={80}
              height={80}
            />

            <Typography size='BODY_MD_BOLDEST'>{title}</Typography>
            <Typography size='BODY_MD_NORMAL'>{description}</Typography>
          </Card>
        ))}
      </SectionWrapper>
    </MainWrapper>
  )
}
