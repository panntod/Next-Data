import React from "react";

import { SmallCard } from "@/components/Card";
import { H1, H2, P } from "@/components/Text";
import { MainWrapper, SectionWrapper } from "@/components/Wrapper";

export function Testimoni() {
  return (
    <MainWrapper className="flex flex-col justify-center">
      <SectionWrapper className="w-full sm:w-[600px]">
        <H2 className="text-secondary-blue">
          We Provide Facilities for Two Mutually Beneficial Positions
        </H2>
        <P className="my-6">Our number of projects and satisfied customers.</P>
      </SectionWrapper>
      <SectionWrapper className="w-full my-12 flex flex-col sm:flex-row justify-center items-center gap-12">
        <SmallCard className="flex-col">
          <H1 className="text-secondary-blue">6+</H1>
          <P className="text-xl font-semibold">Field</P>
        </SmallCard>
        <SmallCard className="flex-col">
          <H1 className="text-secondary-blue">35+</H1>
          <P className="text-xl font-semibold">Complete Work</P>
        </SmallCard>
      </SectionWrapper>
    </MainWrapper>
  );
}
