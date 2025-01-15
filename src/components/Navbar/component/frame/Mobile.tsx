import Link from 'next/link'
import { NavbarProps } from '../../types/Navbar.types'

export const NavMobile = ({ data, handleOpen, location }: NavbarProps) => {
  return (
    <div className='md:hidden bg-transparent backdrop-blur-xl w-full px-4 pb-4 shadow-md transition-all'>
      <div className='flex flex-col space-y-4'>
        {data.map(item => (
          <Link
            key={item.name}
            href={item.link}
            className={
              location.split('/')[1] === item.link.split('/')[1]
                ? 'text-primary-blue text-center'
                : 'text-gray-700 hover:text-primary-blue duration-300 transition-all text-center'
            }
            onClick={handleOpen}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
