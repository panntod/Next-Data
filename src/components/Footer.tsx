import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { H2, H4, P } from './Text'
import { ButtonLink } from './Button'
import { SmallCard } from './Card'
import { MainWrapper, SectionWrapper } from './Wrapper'

export default function Footer() {
  return (
    <>
    <MainWrapper id='footer' className="flex flex-col items-center justify-center">
      <SectionWrapper className="flex items-center justify-center w-full max-w-[1250px] h-auto sm:h-[526px] bg-primary-blue rounded-lg sm:rounded-[62px] z-10 p-6 sm:p-0">
        <div className="w-full max-w-[600px] text-center">
          <H2 className="text-white text-[24px] md:text-5xl ">
            Get in Touch with Our AI Community
          </H2>
          <P className="text-white my-6">
            We&apos;d love to hear from you! Whether you have a question about
            our services, need support, or want to provide feedback, feel free
            to reach out.
          </P>
          <SmallCard className="w-auto h-[60px] flex justify-between px-6 mx-auto">
            <P className="text-lg">More Information</P>
            <ButtonLink variant='secondary' href=''>Contact Here</ButtonLink>
          </SmallCard>
        </div>
      </SectionWrapper>
    </MainWrapper>
    <footer className="bg-[#E2F2FF] pt-24 sm:pt-72 pb-24 mt-0 sm:-mt-64 flex flex-col sm:flex-row justify-around items-start w-full px-6 sm:px-0">
      <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
        <Link href="/" className="flex items-center gap-3 mb-4">
          <div className="w-[60px] h-[60px]">
            <Image
              src="/logo.svg"
              alt="NextGenAi logo"
              className="object-contain w-full h-full"
            />
          </div>
          <H4 className="text-dark">NextGenAi</H4>
        </Link>
        <P>
          Join NextGenAI and harness the power of AI to drive your business
          forward. We&apos;re here to support your journey.
        </P>
      </div>
      <div className="w-full sm:w-auto flex flex-col space-y-2 mb-8 sm:mb-0">
        <H4 className="text-dark">Our Links</H4>
        <Link href="/">
          <P>Home</P>
        </Link>
        <Link href="/">
          <P>About Us</P>
        </Link>
        <Link href="/">
          <P>Service</P>
        </Link>
        <Link href="/">
          <P>Team</P>
        </Link>
        <Link href="/">
          <P>Blog</P>
        </Link>
      </div>
      <div className="w-full sm:w-auto flex flex-col space-y-2 mb-8 sm:mb-0">
        <H4 className="text-dark">Our Services</H4>
        <Link href="/">
          <P>Strategy & Research</P>
        </Link>
        <Link href="/">
          <P>Web Development</P>
        </Link>
        <Link href="/">
          <P>Web Solution</P>
        </Link>
        <Link href="/">
          <P>Digital Marketing</P>
        </Link>
        <Link href="/">
          <P>App Design</P>
        </Link>
      </div>
      <div className="w-full sm:w-auto flex flex-col space-y-2">
        <H4 className="text-dark">Other Links</H4>
        <Link href="/">
          <P>FAQ</P>
        </Link>
        <Link href="/">
          <P>Portfolio</P>
        </Link>
        <Link href="/">
          <P>Privacy Policy</P>
        </Link>
        <Link href="/">
          <P>Terms & Conditions</P>
        </Link>
        <Link href="/">
          <P>Support</P>
        </Link>
      </div>
    </footer>
    <P className="text-center py-2">All Right Reserved &copy; 2024 PinPan</P>
  </>
  )
}