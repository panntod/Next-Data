import Image from "next/image";

import { H2, P } from "@/components/Text";
import { MainWrapper, SectionWrapper } from "@/components/Wrapper";

export function Stories() {
  return (
    <MainWrapper className="flex flex-col sm:flex-row justify-between items-center">
      <SectionWrapper className="w-full sm:w-[500px] p-4 sm:p-0">
        <div className="mb-8">
          <H2 className="text-secondary-blue text-center sm:text-left">
            See Our Success Stories
          </H2>
          <P className="my-6 text-xl text-center sm:text-left">
            NextGenAi dramatically accelerates our go-to-market by cutting data
            collection time <br /> - <strong>Loly Arianty</strong>
          </P>
        </div>
        <div className="text-center sm:text-left">
          <P className="text-secondary-blue font-semibold text-lg">NextGenAi</P>
          <P>Innovating The Future</P>
        </div>
      </SectionWrapper>

      <SectionWrapper className="w-full sm:w-1/2 relative flex items-center justify-center p-4 sm:p-0">
        <Image
          width={500}
          height={500}
          src="/testimonial/person.png"
          alt="person images"
          className="w-3/4 sm:w-auto"
        />
        <Image
          width={180}
          height={180}
          src="/testimonial/1.png"
          alt="icon rocket"
          className="absolute w-1/4 sm:w-[179px] -top-12 sm:-top-24 left-0"
        />
        <Image
          width={175}
          height={175}
          src="/testimonial/2.png"
          alt="icon motivation"
          className="absolute w-1/4 sm:w-[174px] -top-16 sm:-top-32 -right-2 sm:-right-4"
        />
        <Image
          width={130}
          height={130}
          src="/testimonial/3.png"
          alt="icon motivation"
          className="absolute w-1/4 sm:w-[134px] -bottom-12 sm:-bottom-24 right-12 sm:right-24"
        />
      </SectionWrapper>
    </MainWrapper>
  );
}
