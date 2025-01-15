import { Card } from '@/components/Card'
import { MainWrapper, SectionWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'

export function Testimoni() {
  return (
    <MainWrapper className='flex flex-col justify-center'>
      <SectionWrapper className='w-full sm:w-[700px]'>
        <Typography size='DISPLAY_LG' className='text-secondary-blue'>
          We Provide Facilities for Two Mutually Beneficial Positions
        </Typography>
        <Typography className='my-6'>Our number of projects and satisfied customers.</Typography>
      </SectionWrapper>
      <SectionWrapper className='w-full my-12 flex flex-col sm:flex-row justify-center items-center gap-12'>
        <Card size='small' className='flex-col'>
          <Typography size='DISPLAY_XL' className='text-secondary-blue'>
            6+
          </Typography>
          <Typography className='text-xl font-semibold'>Field</Typography>
        </Card>
        <Card size='small' className='flex-col'>
          <Typography size='DISPLAY_XL' className='text-secondary-blue'>
            35+
          </Typography>
          <Typography className='text-xl font-semibold'>Complete Work</Typography>
        </Card>
      </SectionWrapper>
    </MainWrapper>
  )
}
