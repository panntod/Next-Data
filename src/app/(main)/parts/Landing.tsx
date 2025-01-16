import Image from 'next/image'

import { Button } from '@/components/Button'
import { MainWrapper, SectionWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'

export function Landing() {
  return (
    <MainWrapper className='flex flex-col-reverse sm:flex-row items-center sm:justify-between'>
      <SectionWrapper className='w-full sm:w-[700px] text-wrap'>
        <Typography size='DISPLAY_XL' className='text-secondary-blue'>
          Empowering Businesses with Cutting-Edge AI Solutions at{' '}
          <span className='text-primary-blue'>Next Data Indonesia</span>
        </Typography>
        <Typography className='my-6'>
          Connect with top AI professionals to elevate your projects. Since 2024, we&apos;ve been innovating and shaping
          the future through AI training and design.
        </Typography>
        <Button variant='primary' size='medium' text='Get Started Now' />
      </SectionWrapper>
      <figure className='w-auto sm:w-[570px] h-auto sm:h-[440px]'>
        <Image
          src='/computer-vector.png'
          alt='vector computer'
          className='object-contain w-full h-full'
          width={570}
          height={440}
        />
      </figure>
    </MainWrapper>
  )
}
