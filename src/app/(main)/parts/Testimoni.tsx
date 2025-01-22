import { Card } from '@/components/Card'
import { MainWrapper, SectionWrapper } from '@/components/Layout'
import { Typography } from '@/components/Typography'
import { Counter } from '@/components/Typography/component/Counter'
import { en_testimoni } from '../constant/TESTIMONI'

export function Testimoni() {
  return (
    <MainWrapper id='testimoni' className='flex flex-col justify-center'>
      <SectionWrapper id='testimoni-section-1' className='w-full sm:w-[700px]'>
        <Typography size='DISPLAY_LG' className='text-secondary-blue'>
          Fostering Mutually Beneficial Opportunities
        </Typography>
        <Typography className='my-6'>
          Delivering impactful projects and building lasting customer satisfaction.
        </Typography>
      </SectionWrapper>
      <SectionWrapper
        id='testimoni-section-2'
        className='w-full my-12 flex flex-col sm:flex-row justify-center items-center gap-12'
      >
        {en_testimoni.map(({ number, title, additional }, index) => (
          <Card key={'card-' + index} size='small' className='flex-col'>
            <div className='flex text-secondary-blue'>
              <Counter duration={2} endCount={number} size='DISPLAY_XL' />
              {additional && <Typography size='DISPLAY_LG'>+</Typography>}
            </div>
            <Typography size='BODY_LG_BOLDEST'>{title}</Typography>
          </Card>
        ))}
      </SectionWrapper>
    </MainWrapper>
  )
}
