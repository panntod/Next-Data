import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

import { About } from './parts/About'
import { Landing } from './parts/Landing'
import { Stories } from './parts/Stories'
import { Testimoni } from './parts/Testimoni'

export default function page() {
  return (
    <>
      <Navbar />
      <Landing />
      <Testimoni />
      <About />
      <Stories />
      <Footer />
    </>
  )
}
