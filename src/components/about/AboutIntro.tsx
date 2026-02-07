import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Phone, ArrowUpRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutBuilding from "@/assets/about-building.jpg";
import aboutComponents from "@/assets/about-components.jpg";
import aboutImage from "@/assets/about-image.jpg";

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
      {/* Large "ABOUT" vertical text on left edge */}
      <div className="absolute left-2 top-20 hidden lg:block pointer-events-none select-none">
        <span
          className="text-[160px] font-raleway font-extrabold uppercase leading-none tracking-wider block"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            color: "transparent",
            WebkitTextStroke: "2px hsl(var(--muted-foreground) / 0.15)",
          }}
        >
          about
        </span>
      </div>

      {/* Small decorative circle on the left */}
      <div className="absolute left-6 top-[55%] hidden lg:block">
        <div className="w-4 h-4 rounded-full border-2 border-primary" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:pl-20"
          >
            {/* Section Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-primary" style={{ backgroundImage: 'repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, hsl(var(--primary)) 4px, transparent 4px, transparent 8px)' }} />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Who We Are
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] font-bold text-foreground leading-[1.15] mb-8">
              Crafting Precision,<br />
              Delivering<br />
              Performance
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg">
              Meltech Melting Technology is a trusted manufacturer of precision-turned parts, CNC sliding-head components, stamping, molding, and assemblies. With decades of experience, we combine engineering excellence with innovation to power industries worldwide—from electrical and gas applications to hydraulic and pneumatic systems.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center gap-4 text-foreground font-bold text-base"
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={3} />
                  </div>
                  {feature}
                </motion.li>
              ))}
            </ul>

            {/* Mission Quote Card */}
            <div className="border border-border rounded-2xl p-6 flex items-center gap-6 mb-10 max-w-lg">
              <p className="text-foreground text-base leading-relaxed flex-1">
                Our mission is simple—deliver uncompromising quality, speed, and scalability while building long-term partnerships based on trust.
              </p>
              <div className="flex flex-col items-center flex-shrink-0">
                <span className="text-primary font-bold text-sm tracking-wide">R. PATEL</span>
                <span className="text-muted-foreground text-xs mb-2">CEO & Founder</span>
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-muted">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face"
                    alt="R. Patel - CEO & Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="industrial" size="lg" className="gap-2 pr-2">
                EXPLORE PRODUCTS
                <span className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-card-foreground" />
                </span>
              </Button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-xs">Call Us 24/7</span>
                  <span className="text-foreground font-bold text-lg">+91 98765 43210</span>
                </div>
              </div>

              {/* Dark pill indicator */}
              <div className="hidden md:flex items-center gap-1 bg-foreground rounded-full px-4 py-2 ml-2">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-background/50" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:min-h-[700px]"
          >
            {/* Main large image - robot arm / factory */}
            <div className="relative w-[75%] h-[500px] rounded-[2rem] overflow-hidden">
              <img
                src={aboutBuilding}
                alt="Manufacturing facility with robotic arm"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top right circular image - sparks / CNC */}
            <div className="absolute -right-4 -top-4 w-48 h-48 rounded-full border-4 border-background overflow-hidden shadow-2xl z-10">
              <img
                src={aboutComponents}
                alt="CNC precision machining"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom right large circular image - brass components */}
            <div className="absolute right-0 bottom-20 w-64 h-64 rounded-full border-4 border-background overflow-hidden shadow-2xl z-10">
              <img
                src={aboutImage}
                alt="Precision brass components"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom left - mold/stamping image (partially behind main) */}
            <div className="absolute left-[10%] bottom-8 w-48 h-40 rounded-2xl overflow-hidden shadow-xl z-0 hidden lg:block">
              <img
                src={aboutComponents}
                alt="Stamping and molding"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gold medal badge - bottom right */}
            <div className="absolute right-8 bottom-0 z-20 flex items-center gap-3">
              <div className="relative">
                <Award className="w-14 h-14 text-primary fill-primary/80" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] text-primary-foreground font-extrabold text-lg">1</span>
              </div>
              <p className="text-foreground font-bold leading-tight text-sm">
                Recognized for global<br />manufacturing excellence
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
