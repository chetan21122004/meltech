import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Building2, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutComponents from "@/assets/about-components.jpg";
import aboutBuilding from "@/assets/about-building.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Section - Badge + Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Who We Are
              </span>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-12 gap-4">
              {/* Left Image - Components */}
              <div className="col-span-4">
                <div className="relative rounded-3xl overflow-hidden h-full min-h-[400px]">
                  <img 
                    src={aboutComponents}
                    alt="Precision components"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Learn More Button */}
                <div className="mt-6">
                  <Button variant="industrial" size="lg" className="gap-2 pr-2">
                    LEARN MORE
                    <span className="w-8 h-8 rounded-full bg-card flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-card-foreground" />
                    </span>
                  </Button>
                </div>
              </div>

              {/* Right Image - Building */}
              <div className="col-span-8">
                <div className="relative rounded-3xl overflow-hidden h-full min-h-[500px]">
                  <img 
                    src={aboutBuilding}
                    alt="Meltech headquarters"
                    className="w-full h-full object-cover"
                  />
                  {/* Orange indicator dot */}
                  <div className="absolute top-6 left-1/3">
                    <div className="w-4 h-4 rounded-full bg-primary border-2 border-primary/30 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Title + Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-10">
              A Trusted Partner In Precision Manufacturing And Component Solutions
            </h2>

            {/* Vision & Mission */}
            <div className="space-y-8 mb-10">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the preferred global source for precision components, 
                  delivering innovation, reliability, and value across every industry we serve.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To manufacture high-quality, application-specific components 
                  through advanced technology, skilled craftsmanship, and a 
                  commitment to on-time delivery.
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-3xl p-6">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                  Global Reach
                </div>
                <div className="flex justify-end mb-4">
                  <Building2 className="w-12 h-12 text-muted-foreground stroke-1" />
                </div>
                <div className="border-t border-border pt-4">
                  <div className="text-4xl font-bold text-card-foreground">
                    25<span className="text-primary">+</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Countries Served</div>
                </div>
              </div>

              <div className="bg-card rounded-3xl p-6">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                  Skilled Workforce
                </div>
                <div className="flex justify-end mb-4">
                  <HardHat className="w-12 h-12 text-muted-foreground stroke-1" />
                </div>
                <div className="border-t border-border pt-4">
                  <div className="text-4xl font-bold text-card-foreground">
                    150<span className="text-primary">+</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Trained Professionals</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;