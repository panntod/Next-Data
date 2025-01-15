import { ButtonLink } from '@/components/Button'
import { Card } from '@/components/Card'
import { MainWrapper, SectionWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'
import Image from 'next/image'

export function About() {
  return (
    <MainWrapper className='flex flex-col sm:flex-row justify-between items-center'>
      <SectionWrapper className='w-full sm:w-[600px]'>
        <Typography size='DISPLAY_LG' className='text-secondary-blue'>
          Supply Chain Optimization
        </Typography>
        <Typography size='BODY_MD_NORMAL' className='my-6'>
          Whether you&apos;re an AI freelancer looking for exciting projects or a client seeking innovative AI
          solutions, our platform is the ideal place to connect and succeed. Sign up today and start transforming your
          ideas with AI.
        </Typography>

        <ButtonLink variant='primary' href='' text='Read More' />
      </SectionWrapper>

      <SectionWrapper className='w-full sm:w-1/2 relative overflow-hidden sm:overflow-visible'>
        <div className='w-[710px] h-[710px] absolute sm:-top-10 -z-10 bg-[#E2F2FF] rounded-full' />
        <Card size='medium' className='sm:ml-24 my-6 justify-start'>
          <Image
            src='/nextdata-outline.svg'
            alt='nextdata outlined'
            className='object-contain'
            width={150}
            height={150}
          />
          <div>
            <Typography size='BODY_MD_NORMAL' className='text-xl font-semibold'>
              Data
            </Typography>
            <Typography size='DISPLAY_SM' className='text-secondary-blue'>
              Optimizing data generation
            </Typography>
          </div>
        </Card>
        <Card size='medium' className='sm:ml-auto my-6 justify-start'>
          <Image
            src='/nextdata-outline.svg'
            alt='nextdata outlined'
            className='object-contain'
            width={150}
            height={150}
          />
          <div>
            <Typography size='BODY_SM_NORMAL' className='text-xl font-semibold'>
              AI
            </Typography>
            <Typography size='DISPLAY_SM' className='text-secondary-blue'>
              Assist with AI generation
            </Typography>
          </div>
        </Card>
        <Card size='medium' className='my-6 justify-start'>
          <Image
            src='/nextdata-outline.svg'
            alt='nextdata outlined'
            className='object-contain'
            width={150}
            height={150}
          />
          <div>
            <Typography size='BODY_SM_NORMAL' className='text-xl font-semibold'>
              Product
            </Typography>
            <Typography size='DISPLAY_SM' className='text-secondary-blue'>
              Product AI support
            </Typography>
          </div>
        </Card>
      </SectionWrapper>
    </MainWrapper>
  )
}
