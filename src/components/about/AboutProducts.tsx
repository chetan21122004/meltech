import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    title: "Brass C-PVC & U-PVC Inserts",
    description: "Durable brass inserts for CPVC & UPVC fittings with knurled surfaces for perfect grip.",
    link: "#",
    image: product1,
  },
  {
    title: "Micro Turning Components",
    description: "High-precision micro turned parts designed for compact and intricate applications.",
    link: "#",
    image: product2,
  },
  {
    title: "Turning Components",
    description: "Precision-engineered turning parts meeting diverse industrial needs with accuracy.",
    link: "#",
    image: product3,
  },
  {
    title: "Brass CNC Parts",
    description: "CNC machined brass components for unmatched precision and consistent performance.",
    link: "#",
    image: product4,
  },
  {
    title: "Stamping Components",
    description: "Stamped precision parts and sheet cutting solutions with superior finish and strength.",
    link: "#",
    image: product1,
  },
  {
    title: "Brass Gas Parts",
    description: "Reliable and durable brass components designed for gas systems and fittings.",
    link: "#",
    image: product2,
  },
  {
    title: "Sliding Head Components",
    description: "Advanced sliding-head turned components for medical, automotive, and electronics.",
    link: "#",
    image: product3,
  },
  {
    title: "Turn-Mill Parts",
    description: "Complex parts made in one setup with CNC turn-mill for precision and consistency.",
    link: "#",
    image: product4,
  },
  {
    title: "Brass Electrical Parts",
    description: "Precision brass terminals, connectors, sockets, and more for electrical assemblies.",
    link: "#",
    image: product1,
  },
  {
    title: "Hydraulic & Pneumatic Parts",
    description: "High-pressure brass and metal components for hydraulic and pneumatic systems.",
    link: "#",
    image: product2,
  },
  {
    title: "Auto Gas Parts",
    description: "LPG and CNG components including valves, fittings, and regulators for automotive gas.",
    link: "#",
    image: product3,
  },
  {
    title: "Brass Fasteners",
    description: "Precision fasteners like screws, nuts, bolts, and studs for industrial use.",
    link: "#",
    image: product4,
  },
  {
    title: "Plastic Injection Moulding",
    description: "Custom plastic molded parts for electronics, appliances, and industrial components.",
    link: "#",
    image: product1,
  },
  {
    title: "Rubber Moulding",
    description: "High-quality rubber molded parts with excellent sealing and durability.",
    link: "#",
    image: product2,
  },
  {
    title: "Assembly Products",
    description: "Complete sub-assemblies combining metal, plastic, and rubber parts.",
    link: "#",
    image: product3,
  },
];

const ProductCard = ({ product, index, isInView }: { product: typeof products[0]; index: number; isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flip-card h-[280px]"
    >
      <div className="flip-card-inner relative w-full h-full">
        {/* Front Face - White card */}
        <div className="flip-card-front absolute inset-0 bg-background rounded-2xl p-8 border border-border/50 flex flex-col justify-between">
          <div>
            <h4 className="text-xl font-bold text-foreground mb-4">
              <Link to={product.link} className="hover:text-primary transition-colors">
                {product.title}
              </Link>
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {product.description}
            </p>
          </div>
          <Link
            to={product.link}
            className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Back Face - Image with dark overlay */}
        <div className="flip-card-back absolute inset-0 rounded-2xl overflow-hidden flex flex-col justify-between p-8">
          <img
            src={product.image}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/85 via-foreground/70 to-foreground/50" />

          <div className="relative z-10">
            <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <h4 className="text-xl font-bold text-background mb-3">
              {product.title}
            </h4>
            <p className="text-background/70 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>
          <Link
            to={product.link}
            className="relative z-10 inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

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
            <ProductCard
              key={product.title}
              product={product}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProducts;
