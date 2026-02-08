import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import process1 from "@/assets/process-1.jpg";
import process2 from "@/assets/process-2.jpg";
import process3 from "@/assets/process-3.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const steps = [
  {
    step: "01",
    category: "Verification",
    title: "Raw Material\nQuality",
    fullTitle: "Material Testing & Verification",
    description: "Premium brass, copper, and metal sourcing with rigorous quality checks.",
    image: process1,
  },
  {
    step: "02",
    category: "Turning",
    title: "High-Precision\nComponent",
    fullTitle: "CNC Turning Operations",
    description: "Advanced CNC turning for complex geometries and tight tolerances.",
    image: process2,
  },
  {
    step: "03",
    category: "Operations",
    title: "Precision\nStamping",
    fullTitle: "Sheet Metal Stamping",
    description: "High-speed precision stamping for consistent, repeatable parts.",
    image: process3,
  },
  {
    step: "04",
    category: "Moulding",
    title: "Injection &\nCompression",
    fullTitle: "Plastic & Rubber Moulding",
    description: "Custom injection and compression moulding for polymer components.",
    image: product1,
  },
  {
    step: "05",
    category: "Solutions",
    title: "Final\nAssembly",
    fullTitle: "Assembly & Integration",
    description: "Complete assembly services with quality verification at each stage.",
    image: product2,
  },
  {
    step: "06",
    category: "Inspection",
    title: "Dimensional\n& Visual",
    fullTitle: "Inspection & Packaging",
    description: "Comprehensive dimensional and visual inspection before dispatch.",
    image: product3,
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="process" className="py-24 bg-card" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary" />
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Our Manufacturing Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card-foreground italic">
            Precision-Driven Steps<br />
            From Raw Material To Finished<br />
            Component
          </h2>
        </motion.div>

        {/* Process Cards Container */}
        <div className="flex gap-4 h-[500px] overflow-hidden">
          {steps.map((step, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: isInView ? 1 : 0, 
                  y: isInView ? 0 : 50,
                  flex: isHovered ? 3 : 1,
                  minWidth: isHovered ? "350px" : "120px",
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  flex: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
                  minWidth: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
                }}
                className="relative h-full rounded-3xl overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image */}
                <img
                  src={step.image}
                  alt={step.fullTitle}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />

                {/* Collapsed State - Vertical Text */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-end pb-8"
                  animate={{ opacity: isHovered ? 0 : 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <span
                      className="text-2xl font-bold text-card-foreground whitespace-pre-line text-center"
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {step.title}
                    </span>
                    <span
                      className="text-xs text-muted-foreground italic"
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {step.category}
                    </span>
                  </div>
                </motion.div>

                {/* Expanded State - Full Content */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-8"
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut", delay: isHovered ? 0.15 : 0 }}
                >
                  <div className="space-y-4">
                    {/* Step Number */}
                    <span className="text-sm text-muted-foreground">
                      Step {step.step}
                    </span>

                    {/* Category with Icon */}
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-card-foreground" />
                      <span className="text-card-foreground">{step.category}</span>
                    </div>

                    {/* Divider Line */}
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-px bg-muted-foreground/30" />
                      <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-card-foreground">
                      {step.fullTitle}
                    </h3>

                    {/* CTA Button */}
                    <div className="flex items-center gap-3 pt-4">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                      >
                        Learn More
                        <span className="w-8 h-8 rounded-full bg-card flex items-center justify-center">
                          <ArrowUpRight className="w-4 h-4 text-card-foreground" />
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Pagination Indicator */}
        <div className="flex justify-center mt-8">
          <div className="w-16 h-1 bg-muted-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Process;
