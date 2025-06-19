import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Landing } from "./parts/Landing";
import { Learn } from "./parts/Learn";
import { Paid } from "./parts/Paid";

export default function Why() {
  return (
    <>
      <Navbar />
      <Landing />
      <Learn />
      <Paid />
      <Footer />
    </>
  );
}
