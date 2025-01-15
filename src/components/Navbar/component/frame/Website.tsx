import { Typography } from '@/components/Typography'
import Image from 'next/image'
import Link from 'next/link'
import { NavbarProps } from '../../types/Navbar.types'

export const NavWebsite = ({ data, location, handleOpen, isOpen }: NavbarProps) => {
  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-between sm:justify-around h-24'>
        <Link href='/' className='flex items-center gap-1 sm:gap-3'>
          <div className='w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]'>
            <Image
              width={200}
              height={80}
              src='/nextdata.svg'
              alt='NextData'
              className='object-contain w-full h-full'
            />
          </div>
          <Typography size='DISPLAY_SM' className='text-dark text-xl sm:text-2xl'>
            NextData
          </Typography>
        </Link>
        <div className='flex items-center'>
          <div className='hidden md:flex ml-10 items-baseline space-x-4'>
            {data.map(item => (
              <Link
                key={item.name}
                href={item.link}
                className={
                  location.split('/')[1] === item.link.split('/')[1]
                    ? 'text-primary-blue'
                    : 'text-gray-700 hover:text-primary-blue duration-300 transition-all'
                }
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* <div className="hidden md:flex gap-2">
          <ButtonLink href="login" variant="text-primary">
            Login
          </ButtonLink>
          <ButtonLink
            href="register"
            variant="text-primary"
            className="border border-primary-blue"
          >
            Register
          </ButtonLink>
        </div> */}

          <button onClick={handleOpen} className='md:hidden text-gray-700 focus:outline-none'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
              )}
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
