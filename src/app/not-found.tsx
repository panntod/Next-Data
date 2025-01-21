import { ButtonLink } from '@/components/Button'
import { MainWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'
import Image from 'next/image'

export default function Page() {
  return (
    <MainWrapper id='landing' className='flex flex-col items-center justify-center text-center'>
      <figure className='w-auto sm:w-[570px] h-auto sm:h-[300px]'>
        <Image
          src='/404-vector.png'
          alt='vector computer'
          className='object-contain w-full h-full'
          width={600}
          height={300}
        />
      </figure>

      <Typography size='DISPLAY_XL' className='text-secondary-blue'>
        Page Not Found
      </Typography>
      <Typography className='my-6'>Please return to our homepage, we apologize for the inconvenience.</Typography>
      <ButtonLink variant='primary' size='medium' href='/'>
        Back To Home
      </ButtonLink>
    </MainWrapper>
  )
}
