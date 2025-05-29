import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Card } from '@/components/Card'
import { MainWrapper, SectionWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'

export function About() {
  return (
    <MainWrapper id='about' className='flex flex-col lg:flex-row justify-between items-center mb-24'>
      <SectionWrapper id='about-section-1' className='w-full lg:w-[600px] py-6'>
        <Typography size='DISPLAY_LG' className='text-secondary-blue'>
          Shaping the Future Through AI Training
        </Typography>
        <Typography size='BODY_MD_NORMAL' className='my-6'>
          Whether you&apos;re an AI freelancer seeking impactful projects or a client in need of innovative solutions,
          our platform is where connections lead to success. Join us today and turn your ideas into AI-driven reality.
        </Typography>

        <ButtonLink variant='primary' href='' text='Read More' />
      </SectionWrapper>

      <SectionWrapper
        id='about-section-2'
        className='w-full sm:w-1/2 relative overflow-hidden sm:overflow-visible py-6 '
      >
        <div className='w-[460px] lg:w-[620px] h-[480px] lg:h-[640px] absolute -z-10 bg-light-blue rounded-full -mt-4 md:-mt-12' />

        <Card size='small' className='mx-auto sm:mx-0 sm:ml-24 justify-start'>
          <Image
            src='/nextdata-outline.svg'
            alt='nextdata outlined'
            className='object-contain'
            width={100}
            height={100}
          />
          <div>
            <Typography size='BODY_MD_NORMAL' className='font-semibold'>
              TRUST
            </Typography>
            <Typography size='BODY_LG_BOLDEST' className='text-secondary-blue'>
              100% Legal and Officially Verified Data.
            </Typography>
          </div>
        </Card>

        <Card size='small' className='mx-auto sm:mx-0 sm:ml-auto my-6 justify-start'>
          <Image
            src='/nextdata-outline.svg'
            alt='nextdata outlined'
            className='object-contain'
            width={100}
            height={100}
          />
          <div>
            <Typography size='BODY_MD_NORMAL' className='font-semibold'>
              QUALITY
            </Typography>
            <Typography size='BODY_LG_BOLDEST' className='text-secondary-blue'>
              Skilled Freelancers Across 154 Countries.
            </Typography>
          </div>
        </Card>

        <Card size='small' className='mx-auto sm:mx-0 justify-start'>
          <Image
            src='/nextdata-outline.svg'
            alt='nextdata outlined'
            className='object-contain'
            width={100}
            height={100}
          />
          <div>
            <Typography size='BODY_MD_NORMAL' className='font-semibold'>
              EXPERIENCE
            </Typography>
            <Typography size='BODY_LG_BOLDEST' className='text-secondary-blue'>
              1M+ Hours and 500+ AI Projects Completed.
            </Typography>
          </div>
        </Card>
      </SectionWrapper>
    </MainWrapper>
  )
}
