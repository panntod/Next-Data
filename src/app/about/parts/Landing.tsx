import { ButtonLink } from '@/components/Button'
import { Card } from '@/components/Card'
import { MainWrapper, SectionWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'
import Image from 'next/image'

export function Landing() {
  return (
    <MainWrapper id='about' className='flex flex-col-reverse lg:flex-row justify-between items-center pt-32'>
      <SectionWrapper
        id='about-section-2'
        className='w-full sm:w-1/2 relative overflow-hidden sm:overflow-visible py-6 text-start'
      >
        <div className='w-[400px] lg:w-[520px] h-[400px] lg:h-[520px] absolute -z-10 bg-light-blue rounded-full' />

        <Card size='small' className='mx-auto sm:mx-0 sm:ml-24 justify-start'>
          <Image src='/nextdata.svg' alt='nextdata' className='object-contain' width={100} height={100} />
          <div>
            <Typography size='DISPLAY_XL' className='text-secondary-blue'>
              55K
            </Typography>
            <Typography size='BODY_MD_NORMAL' className='font-semibold'>
              Freelancers Worldwide
            </Typography>
          </div>
        </Card>

        <Card size='small' className='mx-auto sm:mx-0 sm:ml-auto my-6 justify-start'>
          <Image src='/nextdata.svg' alt='nextdata' className='object-contain' width={100} height={100} />
          <div>
            <Typography size='DISPLAY_XL' className='text-secondary-blue'>
              500+
            </Typography>
            <Typography size='BODY_MD_NORMAL' className='font-semibold'>
              Project Done
            </Typography>
          </div>
        </Card>

        <Card size='small' className='mx-auto sm:mx-0 justify-start'>
          <Image src='/nextdata.svg' alt='nextdata' className='object-contain' width={100} height={100} />
          <div>
            <Typography size='DISPLAY_XL' className='text-secondary-blue'>
              1M+
            </Typography>
            <Typography size='BODY_MD_NORMAL' className='font-semibold'>
              Working Hours
            </Typography>
          </div>
        </Card>
      </SectionWrapper>

      <SectionWrapper id='about-section-1' className='w-full lg:w-[600px] py-6'>
        <Typography size='DISPLAY_LG' className='text-primary-blue'>
          Better AI, Better Future
        </Typography>
        <Typography size='DISPLAY_SM' className='text-secondary-blue'>
          A leading global hub for top freelancers specializing in remote AI projects.
        </Typography>
        <Typography size='BODY_MD_NORMAL' className='my-6'>
          Founded in 2024, Next Data Indonesia is a fast-growing tech company and official partner of leading tech
          giants. With 55,000+ freelancers across 154 countries, we deliver innovative AI solutions and comprehensive
          services, shaping the future with cutting-edge technology.
        </Typography>
        <ButtonLink variant='primary' size='medium' href='http://wa.me/6282335692537'>
          Get Started Now
        </ButtonLink>
      </SectionWrapper>
    </MainWrapper>
  )
}
