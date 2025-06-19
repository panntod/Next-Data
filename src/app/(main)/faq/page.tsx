import { Accordion } from "@/components/accordion";
import { FooterLink } from "@/components/footer";
import { MainWrapper, SectionWrapper } from "@/components/layout";
import { Navbar } from "@/components/navbar";
import { Typography } from "@/components/typography";
import { Metadata } from "next";
import { faq_en } from "./constant/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function Faq() {
  return (
    <>
      <Navbar />
      <MainWrapper id="FAQ" className="pt-32">
        <SectionWrapper id="faq-section-1">
          <Typography
            size="DISPLAY_LG"
            className="text-secondary-blue text-center"
          >
            Frequently Asked Questions
          </Typography>
          <Typography size="BODY_MD_NORMAL" className="my-6 text-center">
            Here, you&apos;ll find answers to the most common questions about
            our services, AI solutions, and how we can help you achieve your
            business goals. If you have any other inquiries, feel free to reach
            out to us directly.
          </Typography>
          <Accordion showNumber data={faq_en} />
        </SectionWrapper>
      </MainWrapper>
      <FooterLink />
    </>
  );
}
