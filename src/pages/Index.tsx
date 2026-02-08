import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Products from "@/components/Products";
import Performance from "@/components/Performance";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Process />
      <Products />
      <Testimonials />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
