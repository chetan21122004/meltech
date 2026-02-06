import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Phone, Award, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutBuilding from "@/assets/about-building.jpg";
import aboutComponents from "@/assets/about-components.jpg";

const features = [
  "High-precision CNC & sliding-head turning",
  "Integrated stamping, molding & assemblies",
  "Serving electrical, gas, hydraulic & pneumatic sectors",
];

const AboutIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Decorative pattern top right */}
      <div className="absolute right-20 top-20 w-96 h-72 bg-[url('/pattern-3.png')] bg-no-repeat opacity-20 pointer-events-none" />
      
      {/* Large "ABOUT" vertical text */}
      <div className="absolute left-0 top-24 hidden lg:block">
        <span className="text-[180px] font-raleway font-extrabold uppercase leading-none tracking-wider text-stroke opacity-30 block" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          about
        </span>
      </div>
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:pl-16"
          >
            {/* Section Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Who We Are
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Crafting Precision, Delivering Performance
            </h2>
            
            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Meltech Melting Technology is a trusted manufacturer of precision-turned parts, CNC sliding-head components, stamping, molding, and assemblies. With decades of experience, we combine engineering excellence with innovation to power industries worldwide—from electrical and gas applications to hydraulic and pneumatic systems.
            </p>
            
            {/* Feature List */}
            <ul className="space-y-5 mb-10">
              {features.map((feature, index) => (
                <motion.li 
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center gap-4 text-foreground font-bold text-lg"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-muted rounded-2xl p-6">
                <p className="text-sm text-muted-foreground mb-2">Our mission is simple: deliver high-quality components</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">15,900</span>
                  <span className="text-primary text-2xl font-bold">+</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Projects Complete</p>
              </div>
              <div className="flex items-center gap-3 p-6">
                <Award className="w-16 h-16 text-primary stroke-1" />
                <div>
                  <p className="text-foreground font-bold leading-tight">
                    Recognized for global<br />manufacturing excellence
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-6">
              <Button variant="industrial" size="lg" className="gap-2 pr-2">
                EXPLORE SERVICES
                <span className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-card-foreground" />
                </span>
              </Button>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-foreground font-bold text-xl">+91 98765 43210</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main large image */}
            <div className="relative rounded-[2rem] overflow-hidden">
              <img 
                src={aboutBuilding} 
                alt="Manufacturing facility" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating circular images */}
            <div className="absolute -right-8 top-8 w-36 h-36 rounded-full border-4 border-background overflow-hidden shadow-xl animate-float">
              <img 
                src={aboutComponents} 
                alt="CNC machining" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -right-8 bottom-16 w-36 h-36 rounded-full border-4 border-background overflow-hidden shadow-xl">
              <img 
                src={aboutComponents} 
                alt="Precision assembly" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
