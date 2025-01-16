import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

import { About } from './parts/About'
import { Landing } from './parts/Landing'
import { Testimoni } from './parts/Testimoni'
import { Why } from './parts/Why'

export default function Main() {
  return (
    <>
      <Navbar />
      <Landing />
      <Testimoni />
      <About />
      <Why />
      <Footer />
    </>
  )
}
