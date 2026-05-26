import NavbarWrapper from "@/components/NavbarWrapper";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CaseStudies from "@/components/CaseStudies";
import CareerHighlights from "@/components/CareerHighlights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavbarWrapper />
      <main>
        <Hero />
        <About />
        <Skills />
        <CaseStudies />
        <CareerHighlights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
