import { Card } from '@/components/Card'
import { MainWrapper, SectionWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'
import Image from 'next/image'
import { en_why } from '../constant/WHY'

export function Why() {
  return (
    <MainWrapper id='why' className='flex flex-col items-center justify-center'>
      <SectionWrapper id='why-section-1'>
        <Typography size='DISPLAY_LG' className='text-secondary-blue text-center'>
          What Sets Next Data Indonesia Apart?
        </Typography>
        <Typography size='BODY_MD_NORMAL' className='my-6 text-center'>
          With 55,000+ freelancers in 154 countries, Next Data Indonesia is a premier hub for AI projects, offering
          diverse talent and unmatched expertise.
        </Typography>
      </SectionWrapper>

      <SectionWrapper id='why-section-2' className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {en_why.map(({ title, description }, index) => (
          <Card key={'card-' + index} size='large' className='flex flex-col items-start p-6'>
            <Image
              src={index == 0 || index == 3 ? '/nextdata.svg' : '/nextdata-outline.svg'}
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
