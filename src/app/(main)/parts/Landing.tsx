import Image from 'next/image'

import { Button } from '@/components/Button'
import { MainWrapper, SectionWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'

export function Landing() {
  return (
    <MainWrapper className='flex flex-col-reverse sm:flex-row items-center sm:justify-between py-24 sm:pt-0'>
      <SectionWrapper className='w-full sm:w-[600px] text-wrap'>
        <Typography size='DISPLAY_XL' className='text-secondary-blue'>
          Working Closely With Customers In <span className='text-primary-blue'>NextGenAI</span>
        </Typography>
        <Typography className='my-6'>
          Looking for AI professionals to elevate your projects? Our platform connects you with top talent in machine
          learning, data science, and more.
        </Typography>
        <Button variant='primary' text='Get Started Now' />
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
