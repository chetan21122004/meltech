import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Products from "@/components/Products";
import Performance from "@/components/Performance";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Precision CNC Turned Components Manufacturer in India"
        description="Meltech Melting Technology - Leading manufacturer of precision CNC turned brass components, stamping, molding & assembly solutions. Serving electrical, automotive, gas, plumbing & electronics industries worldwide from Jamnagar, India."
        keywords="CNC turned parts, brass CNC components, precision turning, CNC machined components, precision turned metal parts, high-tolerance CNC components, custom CNC parts, micro turned components, brass inserts manufacturer, brass electrical components, brass gas fittings, stamping components, Meltech, Jamnagar, India"
      />
      <Header />
      <Hero />
      <About />
      <Process />
      <Products />
      <Testimonials />
      <FAQ />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
