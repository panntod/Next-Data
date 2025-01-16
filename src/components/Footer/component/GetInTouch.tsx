import { ButtonLink } from '@/components/Button'
import { MainWrapper, SectionWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'

export const GetInTouch = () => {
  return (
    <MainWrapper id='footer' className='flex flex-col items-center justify-center'>
      <SectionWrapper className='flex items-center justify-center w-full max-w-[1250px] h-auto sm:h-[526px] bg-primary-blue rounded-lg sm:rounded-[62px] z-10 p-6 sm:p-0'>
        <div className='w-full max-w-[600px] text-center'>
          <Typography size='DISPLAY_LG' className='text-white text-[24px] md:text-5xl'>
            Get in Touch with Our AI Community
          </Typography>
          <Typography className='text-white my-6'>
            We&apos;d love to hear from you! Whether you have a question about our services, need support, or want to
            provide feedback, feel free to reach out.
          </Typography>

          <article className='w-auto h-[60px] flex justify-between px-6 mx-auto rounded-xl sm:rounded-2xl shadow-lg bg-light items-center'>
            <Typography className='text-lg'>More Information</Typography>
            <ButtonLink variant='secondary' size='small' href='https://wa.me/6282335692537' text='Contact' />
          </article>
        </div>
      </SectionWrapper>
    </MainWrapper>
  )
}
