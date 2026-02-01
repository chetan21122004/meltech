import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-image.jpg";
import phoneMockup from "@/assets/phone-mockup.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-industrial-light" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] mt-40">
                  <img 
                    src={aboutImage}
                    alt="Precision parts"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                  <img 
                    src={phoneMockup}
                    alt="Meltech analytics"
                    className="w-full h-full object-contain bg-gradient-to-br from-primary/10 to-secondary"
                  />
                </div>
              </div>
            </div>

            {/* Floating Title */}
            <h2 className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl md:text-4xl font-bold text-foreground whitespace-nowrap">
              Precision-Driven Steps
            </h2>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver precision-engineered components that exceed industry standards, 
                  supporting our clients' manufacturing excellence from prototype to mass production.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the global leader in precision manufacturing, recognized for innovation, 
                  quality, and sustainable practices in metal and plastic component production.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-industrial-dark rounded-3xl p-6 text-center">
                  <div className="text-xs text-card-foreground/60 uppercase tracking-wider mb-2">Years Experience</div>
                  <div className="text-4xl font-bold text-card-foreground">25<span className="text-primary">+</span></div>
                </div>
                <div className="bg-industrial-dark rounded-3xl p-6 text-center">
                  <div className="text-xs text-card-foreground/60 uppercase tracking-wider mb-2">Products Made</div>
                  <div className="text-4xl font-bold text-card-foreground">150<span className="text-primary">K</span></div>
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
