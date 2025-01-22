import { MainWrapper, SectionWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'
import { Particle } from '../components/Particle'

export function Landing() {
  return (
    <>
      <MainWrapper id='landing' className='flex justify-center items-center pt-32 relative'>
        <SectionWrapper id='landing-content' className='text-center space-y-4'>
          <Typography size='DISPLAY_MD' className='text-secondary-blue'>
            Next Data Indonesia always proud of supporting Freelancer&apos;s self development process
          </Typography>
          <Typography size='BODY_MD_NORMAL' className='text-center'>
            Our mission is to inspire a lifelong-love of learning with a focus on providing our trainings on native
            languages with native speaker trainers for each AI project separately{' '}
          </Typography>
        </SectionWrapper>
        <Particle />
      </MainWrapper>
    </>
  )
}
