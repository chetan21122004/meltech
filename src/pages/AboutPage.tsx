import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutProducts from "@/components/about/AboutProducts";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import HowWeDeliver from "@/components/about/HowWeDeliver";
import SEO from "@/components/SEO";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us - Precision Brass Components Manufacturer"
        description="Learn about Meltech Melting Technology - 30+ years of expertise in precision CNC turned components, brass fittings, stamping, molding & assembly. ISO certified, GIDC Jamnagar, Gujarat, India."
        keywords="about Meltech, brass components manufacturer India, precision engineering company, CNC machining Jamnagar, ISO certified manufacturer, brass parts supplier Gujarat"
      />
      <Header />
      <AboutHero />
      <AboutIntro />
      <AboutProducts />
      <WhyChooseUs />
      <HowWeDeliver />
      <Footer />
    </div>
  );
};

export default AboutPage;
