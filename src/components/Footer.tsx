import React from "react";
import Link from "next/link";
import Image from "next/image";

import { H2, H4, P } from "./Text";
import { ButtonLink } from "./Button";
import { SmallCard } from "./Card";
import { MainWrapper, SectionWrapper } from "./Wrapper";

interface FooterProps {
    title: string
    links: FooterLink[]
}
interface FooterLink {
  href: string;
  label: string;
}

const FooterLinksSection = ({ title, links }: Readonly<FooterProps>) => (
  <div className="w-full sm:w-auto flex flex-col space-y-2 mb-8 sm:mb-0">
    <H4 className="text-dark">{title}</H4>
    {links.map((link, index) => (
      <Link key={index} href={link.href}>
        <P>{link.label}</P>
      </Link>
    ))}
  </div>
);

export default function Footer() {
  const companyLinks: FooterLink[] = [
    { href: "/", label: "Home" },
    { href: "/", label: "About Us" },
    { href: "/", label: "Service" },
    { href: "/", label: "Team" },
    { href: "/", label: "Blog" },
  ];

  const serviceLinks: FooterLink[] = [
    { href: "/", label: "Strategy & Research" },
    { href: "/", label: "Web Development" },
    { href: "/", label: "Web Solution" },
    { href: "/", label: "Digital Marketing" },
    { href: "/", label: "App Design" },
  ];

  const otherLinks: FooterLink[] = [
    { href: "/", label: "FAQ" },
    { href: "/", label: "Portfolio" },
    { href: "/", label: "Privacy Policy" },
    { href: "/", label: "Terms & Conditions" },
    { href: "/", label: "Support" },
  ];

  return (
    <>
      <MainWrapper
        id="footer"
        className="flex flex-col items-center justify-center"
      >
        <SectionWrapper className="flex items-center justify-center w-full max-w-[1250px] h-auto sm:h-[526px] bg-primary-blue rounded-lg sm:rounded-[62px] z-10 p-6 sm:p-0">
          <div className="w-full max-w-[600px] text-center">
            <H2 className="text-white text-[24px] md:text-5xl">
              Get in Touch with Our AI Community
            </H2>
            <P className="text-white my-6">
              We&apos;d love to hear from you! Whether you have a question about
              our services, need support, or want to provide feedback, feel free
              to reach out.
            </P>
            <SmallCard className="w-auto h-[60px] flex justify-between px-6 mx-auto">
              <P className="text-lg">More Information</P>
              <ButtonLink variant="secondary" href="">
                Contact Here
              </ButtonLink>
            </SmallCard>
          </div>
        </SectionWrapper>
      </MainWrapper>

      <footer className="bg-[#E2F2FF] pt-24 sm:pt-72 pb-24 mt-0 sm:-mt-64 flex flex-col sm:flex-row justify-around items-start w-full px-6 sm:px-0">
        <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <div className="w-[60px] h-[60px]">
              <Image
              width={200}
              height={80}
                src="/nextdata.svg"
                alt="NextGenAi nextdata"
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

        <FooterLinksSection title="Our Links" links={companyLinks} />
        <FooterLinksSection title="Our Services" links={serviceLinks} />
        <FooterLinksSection title="Other Links" links={otherLinks} />
      </footer>

      <P className="text-center py-2">All Right Reserved &copy; 2024 Next Data Indonesia</P>
    </>
  );
}
