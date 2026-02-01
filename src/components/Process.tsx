import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import process1 from "@/assets/process-1.jpg";
import process2 from "@/assets/process-2.jpg";
import process3 from "@/assets/process-3.jpg";

const steps = [
  {
    step: "01",
    icon: "📦",
    title: "Raw Material",
    subtitle: "Material Sourcing",
    description: "Premium brass, copper, and metal sourcing",
    image: process1,
    fullTitle: "Material\nSelection"
  },
  {
    step: "02",
    icon: "⚙️",
    title: "CNC Machining",
    subtitle: "Precision Cutting",
    description: "Advanced CNC turning and milling",
    image: process2,
    fullTitle: "Precision\nMachining"
  },
  {
    step: "03",
    icon: "🔍",
    title: "Quality Control",
    subtitle: "Inspection & Packaging",
    description: "Dimensional and visual inspection",
    image: process3,
    fullTitle: "Quality\nAssurance"
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 bg-background" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Precision-Driven Steps<br />
            <span className="text-stroke text-foreground/30">From Raw Material To Finished Component</span>
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border hidden lg:block" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-muted rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    
                    {/* Step Number */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{step.step}</span>
                    </div>

                    {/* Floating Title */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-card-foreground whitespace-pre-line">
                        {step.fullTitle}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{step.subtitle}</span>
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <a href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
