import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }}>
      <div className="absolute inset-0 bg-card/60" />
    </div>

    {/* Content - Centered */}
    <div className="container relative z-10 text-center pt-20">
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="flex flex-col items-center">
        {/* Badge */}
        <span className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm mb-8">
          Engineered For Performance
        </span>
      </motion.div>

      <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 md:mb-8 text-card-foreground">
        From <span className="text-stroke-white font-raleway italic">Prototype</span> To
        <br />
        Production
      </motion.h1>

      <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 max-w-3xl mx-auto text-secondary-foreground px-4">
        Rapid NPI With DFM Inputs, Controlled Tolerances, And PPAP-Ready
        <br className="hidden md:block" />
        Documentation For Electrical, Gas, Hydraulic & Pneumatic Components.
      </motion.p>

      <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="flex items-center justify-center gap-0">
        <Button variant="outline" size="lg" className="rounded-full px-10 py-6 bg-card-foreground text-card border-none font-semibold text-base hover:bg-card-foreground/90">
          Explore Products
        </Button>
        <button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors -ml-2">
          <Play className="w-5 h-5 text-primary-foreground ml-1" fill="currentColor" />
        </button>
      </motion.div>

      {/* Pagination dots */}
      <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }} className="flex items-center justify-center gap-2 mt-16">
        <div className="w-8 h-1 rounded-full bg-card-foreground/30" />
      </motion.div>
    </div>

    {/* Bottom Social Links */}
    <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      delay: 0.8
    }} className="absolute bottom-4 left-0 right-0 md:right-auto md:bottom-8 bg-card/80 backdrop-blur-sm py-4 px-8 flex justify-center md:justify-start">
      <div className="flex items-center gap-4 text-card-foreground text-xs md:text-sm">
        <a href="#" className="hover:text-primary transition-colors">Facebook</a>
        <span className="text-muted-foreground">—</span>
        <a href="#" className="hover:text-primary transition-colors">Instagram</a>
        <span className="text-muted-foreground">—</span>
        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
      </div>
    </motion.div>
  </section>;
};
export default Hero;