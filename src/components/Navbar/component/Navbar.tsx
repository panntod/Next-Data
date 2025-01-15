'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { NavMobile } from './frame/Mobile'
import { NavWebsite } from './frame/Website'

export const Navbar = () => {
  const location = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navOptions = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' }
  ]

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='bg-transparent fixed z-50 top-0 w-full backdrop-blur-xl'>
      <NavWebsite data={navOptions} location={location} handleOpen={handleOpen} isOpen={isOpen} />

      {isOpen && <NavMobile data={navOptions} handleOpen={handleOpen} location={location} />}
    </nav>
  )
}
