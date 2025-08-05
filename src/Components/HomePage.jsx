import About from "./About";
import Contact from "./Contact";
import CTASection from "./CTASection";
import Features from "./Feature";
import Hero from "./Hero";
import NewsSection from "./NewSection";
import Services from "./Services";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";



export default function HomePage() {
  return (
    <div>
      <Hero/>
      <Features/>
      <Stats />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <NewsSection />
      <CTASection />
      <About />
      <Contact />
    </div>
  )
}
