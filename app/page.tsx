import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Features from "./components/Features";
import ProductPreview from "./components/ProductPreview";
import Workflow from "./components/Workflow";
import About from "./components/About";
import UseCases from "./components/UseCases";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Problem />
      <Solution />
      <Features />
      <ProductPreview />
      <Workflow />
      <About />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
