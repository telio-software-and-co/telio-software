import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Teams } from "@/components/sections/teams";
import { About } from "@/components/sections/about";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Problem />
        <Services />
        <Process />
        <Teams />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
