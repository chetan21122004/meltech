import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Cog, Scissors, Package } from "lucide-react";
import { Link } from "react-router-dom";

const processes = [
  {
    icon: Cog,
    number: "01",
    title: "CNC & Turning",
    description: "High-precision CNC and sliding-head turning ensure tight tolerances for brass, steel, and alloys.",
    link: "#",
  },
  {
    icon: Scissors,
    number: "02",
    title: "Stamping & Cutting",
    description: "Precision stamping and sheet cutting processes create consistent, durable, and complex components.",
    link: "#",
  },
  {
    icon: Package,
    number: "03",
    title: "Molding & Assembly",
    description: "Plastic and rubber molding combined with product assembly delivers fully integrated solutions.",
    link: "#",
  },
];

const HowWeDeliver = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 bg-background" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-px bg-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Manufacturing Process
            </span>
            <span className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            How We Deliver<br />Precision & Reliability
          </h2>
        </motion.div>
        
        {/* Process Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-background rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-500 border border-border/30 overflow-hidden"
            >
              {/* Large background number */}
              <div className="absolute right-8 top-10 text-[110px] font-raleway font-extrabold leading-none text-transparent" style={{ WebkitTextStroke: '2px hsl(var(--primary))' }}>
                {process.number}
              </div>
              
              {/* Icon */}
              <div className="relative mb-10">
                <process.icon className="w-14 h-14 text-primary stroke-1" />
              </div>
              
              {/* Title */}
              <h3 className="relative text-2xl font-bold text-foreground mb-4">
                <Link to={process.link} className="hover:text-primary transition-colors">
                  {process.title}
                </Link>
              </h3>
              
              {/* Description */}
              <p className="relative text-muted-foreground leading-relaxed mb-8">
                {process.description}
              </p>
              
              {/* Read More Link */}
              <Link 
                to={process.link}
                className="relative inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-3 transition-all"
              >
                Read More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliver;
