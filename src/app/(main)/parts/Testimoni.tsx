import { Card } from '@/components/Card'
import { MainWrapper, SectionWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'

export function Testimoni() {
  return (
    <MainWrapper className='flex flex-col justify-center'>
      <SectionWrapper className='w-full sm:w-[700px]'>
        <Typography size='DISPLAY_LG' className='text-secondary-blue'>
          Fostering Mutually Beneficial Opportunities
        </Typography>
        <Typography className='my-6'>
          Delivering impactful projects and building lasting customer satisfaction.
        </Typography>
      </SectionWrapper>
      <SectionWrapper className='w-full my-12 flex flex-col sm:flex-row justify-center items-center gap-12'>
        <Card size='small' className='flex-col'>
          <Typography size='DISPLAY_LG' className='text-secondary-blue'>
            55K+
          </Typography>
          <Typography size='BODY_LG_BOLDEST'>Freelancers Worldwide</Typography>
        </Card>
        <Card size='small' className='flex-col'>
          <Typography size='DISPLAY_LG' className='text-secondary-blue'>
            35+
          </Typography>
          <Typography size='BODY_LG_BOLDEST'>Languages and Dialects</Typography>
        </Card>
        <Card size='small' className='flex-col'>
          <Typography size='DISPLAY_LG' className='text-secondary-blue'>
            154
          </Typography>
          <Typography size='BODY_LG_BOLDEST'>Country We Serve</Typography>
        </Card>
      </SectionWrapper>
    </MainWrapper>
  )
}
