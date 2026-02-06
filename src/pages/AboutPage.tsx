import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutProducts from "@/components/about/AboutProducts";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import HowWeDeliver from "@/components/about/HowWeDeliver";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
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
