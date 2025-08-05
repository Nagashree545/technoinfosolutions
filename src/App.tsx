import About from "./Components/About";
import Contact from "./Components/Contact";
import CTASection from "./Components/CTASection";
import Features from "./Components/Feature";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import NewsSection from "./Components/NewSection";
import Services from "./Components/Services";
import Stats from "./Components/Stats";
import Testimonials from "./Components/Testimonials";
import WhyChooseUs from "./Components/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <NewsSection />
      <CTASection />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
