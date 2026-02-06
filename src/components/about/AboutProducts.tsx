import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Brass C-PVC & U-PVC Inserts",
    description: "Durable brass inserts for CPVC & UPVC fittings with knurled surfaces for perfect grip.",
    link: "#",
  },
  {
    title: "Micro Turning Components",
    description: "High-precision micro turned parts designed for compact and intricate applications.",
    link: "#",
  },
  {
    title: "Turning Components",
    description: "Precision-engineered turning parts meeting diverse industrial needs with accuracy.",
    link: "#",
  },
  {
    title: "Brass CNC Parts",
    description: "CNC machined brass components for unmatched precision and consistent performance.",
    link: "#",
  },
  {
    title: "Stamping Components",
    description: "Stamped precision parts and sheet cutting solutions with superior finish and strength.",
    link: "#",
  },
  {
    title: "Brass Gas Parts",
    description: "Reliable and durable brass components designed for gas systems and fittings.",
    link: "#",
  },
  {
    title: "Sliding Head Components",
    description: "Advanced sliding-head turned components for medical, automotive, and electronics.",
    link: "#",
  },
  {
    title: "Turn-Mill Parts",
    description: "Complex parts made in one setup with CNC turn-mill for precision and consistency.",
    link: "#",
  },
  {
    title: "Brass Electrical Parts",
    description: "Precision brass terminals, connectors, sockets, and more for electrical assemblies.",
    link: "#",
  },
  {
    title: "Hydraulic & Pneumatic Parts",
    description: "High-pressure brass and metal components for hydraulic and pneumatic systems.",
    link: "#",
  },
  {
    title: "Auto Gas Parts",
    description: "LPG and CNG components including valves, fittings, and regulators for automotive gas.",
    link: "#",
  },
  {
    title: "Brass Fasteners",
    description: "Precision fasteners like screws, nuts, bolts, and studs for industrial use.",
    link: "#",
  },
  {
    title: "Plastic Injection Moulding",
    description: "Custom plastic molded parts for electronics, appliances, and industrial components.",
    link: "#",
  },
  {
    title: "Rubber Moulding",
    description: "High-quality rubber molded parts with excellent sealing and durability.",
    link: "#",
  },
  {
    title: "Assembly Products",
    description: "Complete sub-assemblies combining metal, plastic, and rubber parts.",
    link: "#",
  },
];

const AboutProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 bg-muted overflow-hidden" ref={ref}>
      {/* Decorative pattern */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-[url('/pattern-3.png')] bg-no-repeat opacity-10 pointer-events-none" />
      
      <div className="container relative">
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
              Our Products
            </span>
            <span className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Precision Components<br />Engineered for Performance
          </h2>
        </motion.div>
        
        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-background rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Title */}
              <h4 className="text-xl font-bold text-foreground mb-4 min-h-[56px] flex items-center">
                <Link to={product.link} className="hover:text-primary transition-colors">
                  {product.title}
                </Link>
              </h4>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {product.description}
              </p>
              
              {/* Read More Link */}
              <Link 
                to={product.link}
                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProducts;
