import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import phoneMockup from "@/assets/phone-mockup.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/80 to-card/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-card-foreground">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm mb-6">
                Precision Manufacturing Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              From <span className="text-stroke-white">Prototype</span> To Production
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
            >
              Delivering high-precision brass, metal, and plastic components with 
              unmatched quality for industrial applications worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button variant="industrial" size="lg" className="gap-2">
                Discover More
                <ArrowRight className="w-5 h-5" />
              </Button>
              <button className="flex items-center gap-4 group">
                <span className="w-14 h-14 rounded-full bg-primary flex items-center justify-center border-4 border-card-foreground/30 group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 text-primary-foreground ml-1" />
                </span>
                <span className="text-card-foreground font-medium">Watch Video</span>
              </button>
            </motion.div>
          </div>

          {/* Right Content - Phone Mockup & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <img 
                src={phoneMockup} 
                alt="Meltech App" 
                className="w-72 mx-auto animate-float"
              />
              
              {/* Stats Cards */}
              <div className="absolute top-10 -right-10 bg-card/90 backdrop-blur-sm rounded-3xl p-4 shadow-xl">
                <div className="text-center">
                  <span className="text-3xl font-bold text-primary">25+</span>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>

              <div className="absolute bottom-20 -left-10 bg-card/90 backdrop-blur-sm rounded-3xl p-4 shadow-xl">
                <div className="text-center">
                  <span className="text-3xl font-bold text-primary">150+</span>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-0 bg-card-foreground/10 backdrop-blur-sm rounded-r-full py-4 px-6"
        >
          <div className="flex items-center gap-6 text-card-foreground text-sm">
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
