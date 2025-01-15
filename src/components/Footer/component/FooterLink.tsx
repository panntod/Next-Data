import { Typography } from '@/components/Typography'
import Image from 'next/image'
import Link from 'next/link'
import { companyLinks, otherLinks, serviceLinks } from '../constant/link'
import { FooterProps } from '../types/Footer.types'

const FooterLinksSection = ({ title, links }: Readonly<FooterProps>) => (
  <div className='w-full sm:w-auto flex flex-col space-y-2 mb-8 sm:mb-0'>
    <Typography size='DISPLAY_SM' className='text-dark'>
      {title}
    </Typography>
    {links.map((link, index) => (
      <Link key={index} href={link.href}>
        <Typography>{link.label}</Typography>
      </Link>
    ))}
  </div>
)

export const FooterLink = () => {
  return (
    <footer>
      <section className='bg-[#E2F2FF] pt-24 sm:pt-72 pb-24 mt-0 sm:-mt-64 flex flex-col sm:flex-row justify-around items-start w-full px-6 sm:px-0'>
        <div className='w-full sm:w-1/3 mb-8 sm:mb-0'>
          <Link href='/' className='flex items-center gap-3 mb-4'>
            <div className='w-[60px] h-[60px]'>
              <Image
                width={200}
                height={80}
                src='/nextdata.svg'
                alt='NextGenAi nextdata'
                className='object-contain w-full h-full'
              />
            </div>
            <Typography size='DISPLAY_SM' className='text-dark'>
              NextGenAi
            </Typography>
          </Link>
          <Typography>
            Join NextGenAI and harness the power of AI to drive your business forward. We&apos;re here to support your
            journey.
          </Typography>
        </div>

        <FooterLinksSection title='Our Links' links={companyLinks} />
        <FooterLinksSection title='Our Services' links={serviceLinks} />
        <FooterLinksSection title='Other Links' links={otherLinks} />
      </section>

      <Typography className='bg-[#E2F2FF] text-center py-3'>
        All Right Reserved &copy; {new Date().getFullYear()} Next Data Indonesia
      </Typography>
    </footer>
  )
}
