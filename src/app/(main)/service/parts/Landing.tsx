import { ButtonLink } from '@/components/Button'
import { MainWrapper, SectionWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'
import Image from 'next/image'

export function Landing() {
  return (
    <MainWrapper id='landing' className='flex flex-col sm:flex-row items-center sm:justify-between pt-32'>
      <figure className='w-auto sm:w-[570px] h-auto sm:h-[440px]'>
        <Image
          src='/service-vector.png'
          alt='vector computer'
          className='object-contain w-full h-full'
          width={570}
          height={440}
        />
      </figure>
      <SectionWrapper id='landing-section' className='w-full sm:w-[700px] text-wrap'>
        <Typography size='DISPLAY_XL' className='text-secondary-blue'>
          We Offer a Wide Range of Services for Customers
        </Typography>
        <Typography className='my-6'>
          Whether you&apos;re looking to incorporate machine learning, data science, or advanced analytics into your
          projects, NextGenAI delivers the talent and expertise needed to drive innovation and success.
        </Typography>
        <ButtonLink variant='primary' size='medium' href='http://wa.me/6282335692537' text='Get Started Now' />
      </SectionWrapper>
    </MainWrapper>
  )
}
