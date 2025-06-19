import { FooterLink } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Metadata } from "next";
import { Content } from "./parts/Content";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function Tos() {
  return (
    <>
      <Navbar />
      <Content />
      <FooterLink />
    </>
  );
}
