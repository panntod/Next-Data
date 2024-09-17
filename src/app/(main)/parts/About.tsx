import { ButtonLink } from "@/components/Button";
import { SmallCard } from "@/components/Card";
import { H2, H4, P } from "@/components/Text";
import { MainWrapper, SectionWrapper } from "@/components/Wrapper";
import Image from "next/image";

export function About() {
  return (
    <MainWrapper className="flex flex-col sm:flex-row justify-between items-center">
      <SectionWrapper className="w-full sm:w-[600px]">
        <H2 className="text-secondary-blue">Supply Chain Optimization</H2>
        <P className="my-6">
          Whether you&apos;re an AI freelancer looking for exciting projects or
          a client seeking innovative AI solutions, our platform is the ideal
          place to connect and succeed. Sign up today and start transforming
          your ideas with AI.
        </P>
        <ButtonLink variant="primary" href="">Read More</ButtonLink>
      </SectionWrapper>

      <SectionWrapper className="w-full sm:w-1/2 relative overflow-hidden sm:overflow-visible">
        <div className="w-[710px] h-[710px] absolute sm:-top-10 -z-10 bg-[#E2F2FF] rounded-full" />
        <SmallCard className="sm:ml-24 my-6 justify-start">
          <Image
            src="/nextdata-outline.svg"
            alt="nextdata outlined"
            className="object-contain"
            width={150}
            height={150}
          />
          <div>
            <P className="text-xl font-semibold">Data</P>
            <H4 className="text-secondary-blue">Optimizing data generation</H4>
          </div>
        </SmallCard>
        <SmallCard className="sm:ml-auto my-6 justify-start">
          <Image
            src="/nextdata-outline.svg"
            alt="nextdata outlined"
            className="object-contain"
            width={150}
            height={150}
          />
          <div>
            <P className="text-xl font-semibold">AI</P>
            <H4 className="text-secondary-blue">Assist with AI generation</H4>
          </div>
        </SmallCard>
        <SmallCard className="my-6 justify-start">
          <Image
            src="/nextdata-outline.svg"
            alt="nextdata outlined"
            className="object-contain"
            width={150}
            height={150}
          />
          <div>
            <P className="text-xl font-semibold">Product</P>
            <H4 className="text-secondary-blue">Product AI support</H4>
          </div>
        </SmallCard>
      </SectionWrapper>
    </MainWrapper>
  );
}