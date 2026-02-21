import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import process1 from "@/assets/process-1.png";
import process2 from "@/assets/process-2.jpg";
import process3 from "@/assets/process-3.jpg";
import product1 from "@/assets/process-4.png";
import product2 from "@/assets/process-5.png";
import product3 from "@/assets/process-6.png";

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
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Auto-scroll logic for mobile
  useEffect(() => {
    const container = mobileContainerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const cardWidth = container.offsetWidth * 0.85; // 85vw
      const gap = 16; // 1rem
      const nextStep = (activeStep + 1) % steps.length;

      container.scrollTo({
        left: nextStep * (cardWidth + gap),
        behavior: 'smooth'
      });
      setActiveStep(nextStep);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeStep]);

  // Update active step on manual scroll
  const handleScroll = () => {
    const container = mobileContainerRef.current;
    if (!container) return;

    const cardWidth = container.offsetWidth * 0.85;
    const scrollPosition = container.scrollLeft;
    const newActiveStep = Math.round(scrollPosition / cardWidth);

    if (newActiveStep !== activeStep && newActiveStep >= 0 && newActiveStep < steps.length) {
      setActiveStep(newActiveStep);
    }
  };

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

        {/* Mobile View: Horizontal Snap Carousel */}
        <div
          ref={mobileContainerRef}
          onScroll={handleScroll}
          className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 scrollbar-hide"
        >
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative flex-none w-[85vw] h-[450px] rounded-3xl overflow-hidden snap-center"
            >
              {/* Image */}
              <img
                src={step.image}
                alt={step.fullTitle}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white font-bold text-sm border border-white/20">
                      {step.step}
                    </span>
                    <div className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium uppercase tracking-wider">
                      {step.category}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                    {step.fullTitle}
                  </h3>

                  <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
                    {step.description}
                  </p>
                </div>

                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Interactive Accordion */}
        <div className="hidden md:flex gap-4 h-[400px] max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 1, 0.5, 1]
                }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isHovered ? "flex-[3]" : "flex-[1]"
                  }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image */}
                <img
                  src={step.image}
                  alt={step.fullTitle}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-110 scale-100"
                />

                {/* Desktop Overlay */}
                <div
                  className={`absolute inset-0 transition-colors duration-500 ease-in-out ${isHovered ? "bg-black/40" : "bg-black/60"
                    }`}
                />

                {/* Content Container */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between overflow-hidden">
                  {/* Top Label */}
                  <div className="flex flex-col justify-start gap-4">
                    <span className="text-2xl font-bold text-white/90">
                      {step.step}
                    </span>

                    {/* Collapsed Text (Vertical) */}
                    <div
                      className={`transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isHovered ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0"
                        }`}
                    >
                      <span
                        className="text-2xl font-bold text-white/90 whitespace-nowrap absolute  bottom-3 origin-bottom-left rotate-90"
                      >
                        {step.title.replace("\n", " ")}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div
                    className={`flex flex-col gap-4 transition-all duration-500 delay-75 ease-[cubic-bezier(0.25,1,0.5,1)] ${isHovered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 absolute bottom-0 left-0 right-0 p-8 pointer-events-none"
                      }`}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-primary font-medium tracking-wide text-base">{step.category}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white leading-tight whitespace-nowrap">
                      {step.fullTitle}
                    </h3>

                    <p className="text-white/80 text-sm leading-relaxed max-w-[95%] line-clamp-3">
                      {step.description}
                    </p>

                    <div className="pt-2">
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-colors duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Progress Indicator */}
        <div className="md:hidden flex justify-center mt-4 gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const container = mobileContainerRef.current;
                if (!container) return;
                const cardWidth = container.offsetWidth * 0.85;
                const gap = 16;
                container.scrollTo({
                  left: index * (cardWidth + gap),
                  behavior: 'smooth'
                });
                setActiveStep(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === activeStep ? "w-8 bg-primary" : "w-1.5 bg-muted-foreground/30"
                }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
