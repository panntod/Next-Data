import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Landing } from "./parts/Landing";
import { Testimoni } from "./parts/Testimoni";
import { About } from "./parts/About";
import { Stories } from "./parts/Stories";

export default function page() {
  return (
    <>
      <Navbar />
      <Landing />
      <Testimoni />
      <About />
      <Stories />
      <Footer />
    </>
  );
}
