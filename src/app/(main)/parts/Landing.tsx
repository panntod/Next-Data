import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { MainWrapper, SectionWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'

export function Landing() {
  return (
    <MainWrapper id='landing' className='flex flex-col-reverse sm:flex-row items-center sm:justify-between'>
      <SectionWrapper id='landing-section' className='w-full sm:w-[700px] text-wrap'>
        <Typography size='DISPLAY_XL' className='text-secondary-blue'>
          Empowering Businesses with Cutting-Edge AI Solutions at{' '}
          <span className='text-primary-blue'>Next Data Indonesia</span>
        </Typography>
        <Typography className='my-6'>
          Connect with top AI professionals to elevate your projects. Since 2024, we&apos;ve been innovating and shaping
          the future through AI training and design.
        </Typography>
        <ButtonLink variant='primary' size='medium' href='http://wa.me/6282335692537' text='Get Started Now' />
      </SectionWrapper>
      <figure className='w-auto sm:w-[570px] h-auto sm:h-[440px]'>
        <Image
          src='/landing-vector.svg'
          alt='vector computer'
          className='object-contain w-full h-full'
          width={570}
          height={440}
        />
      </figure>
    </MainWrapper>
  )
}
