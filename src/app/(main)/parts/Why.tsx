import { Card } from '@/components/Card'
import { MainWrapper, SectionWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'
import Image from 'next/image'

export function Why() {
  return (
    <MainWrapper className='flex flex-col items-center justify-center'>
      <SectionWrapper>
        <Typography size='DISPLAY_LG' className='text-secondary-blue text-center'>
          What Sets Next Data Indonesia Apart?
        </Typography>
        <Typography size='BODY_MD_NORMAL' className='my-6 text-center'>
          With 55,000+ freelancers in 154 countries, Next Data Indonesia is a premier hub for AI projects, offering
          diverse talent and unmatched expertise.
        </Typography>
      </SectionWrapper>

      <SectionWrapper className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <Card size='large' className='flex flex-col items-start px-6'>
          <Image src='/nextdata-outline.svg' alt='nextdata outlined' width={80} height={80} />

          <Typography size='BODY_MD_BOLDEST'>Leading the Future of AI Solutions</Typography>
          <Typography size='BODY_MD_NORMAL'>
            One of the fastest-growing AI solution providers, expanding teams and partnering with tech giants to drive
            innovation.
          </Typography>
        </Card>

        <Card size='large' className='flex flex-col items-start px-6'>
          <Image src='/nextdata-outline.svg' alt='nextdata outlined' width={80} height={80} />

          <Typography size='BODY_MD_BOLDEST'>Global Reach with 55,000 Freelancers</Typography>
          <Typography size='BODY_MD_NORMAL'>
            Serving 154 countries, our network of 55,000+ active freelancers delivers exceptional AI solutions
            worldwide.
          </Typography>
        </Card>

        <Card size='large' className='flex flex-col items-start px-6'>
          <Image src='/nextdata-outline.svg' alt='nextdata outlined' width={80} height={80} />

          <Typography size='BODY_MD_BOLDEST'>On-Time Delivery of AI Projects Since 2024</Typography>
          <Typography size='BODY_MD_NORMAL'>
            Next Data Indonesia has consistently delivered every AI training project on schedule, ensuring reliability
            and excellence.
          </Typography>
        </Card>

        <Card size='large' className='flex flex-col items-start px-6'>
          <Image src='/nextdata-outline.svg' alt='nextdata outlined' width={80} height={80} />

          <Typography size='BODY_MD_BOLDEST'>Continuous Training for AI Excellence</Typography>
          <Typography size='BODY_MD_NORMAL'>
            Keeps freelancers ahead in AI innovation with ongoing, free training on the latest technologies.
          </Typography>
        </Card>
      </SectionWrapper>
    </MainWrapper>
  )
}
