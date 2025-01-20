import { Typography } from '@/components/Typography'
import Image from 'next/image'
import Link from 'next/link'
import { company_links, other_links, service_link } from '../constant/LINKS'
import { FooterProps } from '../types/Footer.types'

const FooterLinksSection = ({ title, links }: Readonly<FooterProps>) => (
  <div className='w-full sm:w-auto flex flex-col space-y-2 mb-8 sm:mb-0'>
    <Typography size='BODY_LG_BOLDEST' className='text-dark'>
      {title}
    </Typography>
    {links.map((link, index) => (
      <Link key={index} href={link.href}>
        <Typography size='BODY_MD_NORMAL'>{link.label}</Typography>
      </Link>
    ))}
  </div>
)

export const FooterLink = () => {
  return (
    <>
      <section className='bg-light-blue py-12 flex flex-col sm:flex-row justify-around items-start w-full px-6 sm:px-0'>
        <div className='w-full sm:w-1/3 mb-8 sm:mb-0'>
          <Link href='/' className='flex items-center gap-3 mb-4'>
            <div className='w-[60px] h-[60px]'>
              <Image
                width={200}
                height={80}
                src='/logo.svg'
                alt='NextData Logo'
                className='object-contain w-full h-full'
              />
            </div>
            <Typography size='DISPLAY_SM' className='text-dark'>
              NextData
            </Typography>
          </Link>
          <Typography>
            Building a smarter tomorrow by connecting AI freelancers with clients in need of innovative solutions.
          </Typography>
        </div>

        <FooterLinksSection title='Our Links' links={company_links} />
        <FooterLinksSection title='Our Services' links={service_link} />
        <FooterLinksSection title='Other Links' links={other_links} />
      </section>

      <section className='bg-light-blue py-3 w-full text-center'>
        <Typography size='SUBTITLE_SM'>
          All Right Reserved &copy; {new Date().getFullYear()} Next Data Indonesia
        </Typography>
      </section>
    </>
  )
}
