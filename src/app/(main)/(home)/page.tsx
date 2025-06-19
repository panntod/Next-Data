import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

import { About } from "./parts/About";
import { Landing } from "./parts/Landing";
import { Testimoni } from "./parts/Testimoni";
import { Why } from "./parts/Why";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Testimoni />
      <About />
      <Why />
      <Footer />
    </>
  );
}
