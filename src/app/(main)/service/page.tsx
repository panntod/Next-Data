import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Landing } from "./parts/Landing";
import { Service } from "./parts/Service";

export default function OurService() {
  return (
    <>
      <Navbar />
      <Landing />
      <Service />
      <Footer />
    </>
  );
}
