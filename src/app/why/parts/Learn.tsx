import { Card } from '@/components/Card'
import { MainWrapper, SectionWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'

export function Learn() {
  return (
    <MainWrapper id='learn' className='flex flex-col justify-center'>
      <SectionWrapper id='learn-section-1' className='w-full'>
        <Typography size='DISPLAY_LG' className='text-secondary-blue'>
          100% Legal and Certified Data Across Platforms
        </Typography>
        <Typography size='BODY_MD_NORMAL'>
          We provide 100% legal, approved data and offer online training with expert native trainers to help you excel
          in AI and technology.
        </Typography>
      </SectionWrapper>

      <SectionWrapper
        id='testimoni-section-2'
        className='w-full my-12 flex flex-col sm:flex-row justify-center items-center gap-12 text-center'
      >
        <Card size='medium' className='flex-col p-4'>
          <Typography size='BODY_MD_NORMAL'>
            Gain new skills with our expert-led online training on AI platforms, guided by native speaker trainers.
          </Typography>
        </Card>
        <Card size='medium' className='flex-col p-4'>
          <Typography size='BODY_MD_NORMAL'>
            Our mission is to inspire a love for learning by offering training in native languages, led by native
            speakers for each AI project.
          </Typography>
        </Card>
        <Card size='medium' className='flex-col p-4'>
          <Typography size='BODY_MD_NORMAL'>
            We offer free online training sessions to equip our talented freelancers for top performance on AI projects.
          </Typography>
        </Card>
      </SectionWrapper>
    </MainWrapper>
  )
}
