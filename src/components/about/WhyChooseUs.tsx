import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Shield, Target, Handshake, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutBuilding from "@/assets/about-building.jpg";
import aboutComponents from "@/assets/about-components.jpg";

const reasons = [
  {
    icon: Shield,
    title: "Safety & Compliance",
    description: "Certified processes and disciplined shop-floor safety with full material traceability and RoHS/REACH compliance.",
    number: "01",
  },
  {
    icon: Target,
    title: "Experience & Precision",
    description: "CNC & sliding-head turning, micro-machining, and tight-tolerance stamping—built for repeatable PPAP-ready quality.",
    number: "02",
  },
  {
    icon: Handshake,
    title: "Engineering Ethics",
    description: "DFM support, transparent costing, and on-time commitments—partner-first collaboration from quote to qualification.",
    number: "03",
  },
  {
    icon: Leaf,
    title: "Sustainability & Reliability",
    description: "Responsible sourcing, optimized cycle times, and long-life components—manufactured for up to 450,000 hours of service.",
    number: "04",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 bg-card overflow-hidden" ref={ref}>
      {/* Decorative pattern bottom left */}
      <div className="absolute left-0 bottom-0 w-[438px] h-[597px] bg-[url('/pattern-3.png')] bg-no-repeat bg-contain opacity-10 pointer-events-none" />
      
      <div className="container relative">
        {/* Header Row */}
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-px bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Why Choose
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground leading-tight">
              Why Choose<br />Meltech Melting Technology
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md"
          >
            <Button variant="industrial" size="lg" className="gap-2 pr-2 mb-4">
              LEARN MORE
              <span className="w-10 h-10 rounded-full bg-card-foreground flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-card" />
              </span>
            </Button>
            <p className="text-muted-foreground">
              Precision turned parts, stamping, molding, and assemblies—under one roof. We deliver speed, scale, and traceable quality for electrical, gas, hydraulic & pneumatic applications.
            </p>
          </motion.div>
        </div>
        
        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Images Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-[2rem] overflow-hidden">
                <img 
                  src={aboutBuilding} 
                  alt="Manufacturing facility" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              {/* Overlapping second image */}
              <div className="absolute -bottom-16 left-12 w-64 h-48 rounded-[2rem] overflow-hidden border-8 border-card shadow-2xl animate-float">
                <img 
                  src={aboutComponents} 
                  alt="Precision machining" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Reasons Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-10 lg:pl-8"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative pl-20"
              >
                {/* Icon */}
                <div className="absolute left-0 top-1">
                  <reason.icon className="w-14 h-14 text-primary stroke-1" />
                </div>
                
                {/* Number */}
                <div className="absolute -right-4 top-0 text-8xl font-raleway font-extrabold text-stroke opacity-20">
                  {reason.number}
                </div>
                
                {/* Content */}
                <h4 className="text-xl font-bold text-card-foreground mb-3">
                  {reason.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
