import { FooterLink } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Metadata } from 'next'
import { Content } from './parts/Content'

export const metadata: Metadata = {
  title: 'Privacy Policy'
}

export default function Tos() {
  return (
    <>
      <Navbar />
      <Content />
      <FooterLink />
    </>
  )
}
