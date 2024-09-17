import Image from "next/image";

import { H1, P } from "@/components/Text";
import { Button } from "@/components/Button";
import { MainWrapper, SectionWrapper } from "@/components/Wrapper";

export function Landing() {
  return (
    <MainWrapper className="flex flex-col-reverse sm:flex-row items-center sm:justify-between py-24 sm:pt-0">
      <SectionWrapper className="w-full sm:w-[520px] text-wrap">
        <H1 className="text-secondary-blue">
          Working Closely With Customers In{" "}
          <span className="text-primary-blue">NextGenAI</span>
        </H1>
        <P className="my-6">
          Looking for AI professionals to elevate your projects? Our platform
          connects you with top talent in machine learning, data science, and
          more.
        </P>
        <Button variant="primary">Get Started Now</Button>
      </SectionWrapper>
      <figure className="w-auto sm:w-[570px] h-auto sm:h-[440px]">
        <Image
          src="/computer-vector.png"
          alt="vector computer"
          className="object-contain w-full h-full"
          width={570}
          height={440}
        />
      </figure>
    </MainWrapper>
  );
}
