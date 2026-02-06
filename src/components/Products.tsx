import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    category: "Brass Components",
    location: "Plumbing & Industrial",
    title: "Brass C-PVC, U-PVC Inserts",
    description: "High-Grip Threaded And Knurled Inserts For Leak-Proof, Long-Lasting Performance In Plastic Assemblies.",
    image: product1,
    cardPosition: "left",
  },
  {
    category: "Sheet Metal Precision",
    location: "Automotive & Electrical",
    title: "Stamping Components",
    description: "Accurate, High-Volume Stamped Parts For Consistent Quality In Demanding Assemblies.",
    image: product2,
    cardPosition: "left",
  },
  {
    category: "Swiss Turning",
    location: "Electronics & Fluid Systems",
    title: "Sliding Head Components",
    description: "Ultra-Precise Sliding Head Machining For Micro And Complex Profile Parts.",
    image: product3,
    cardPosition: "right",
  },
  {
    category: "Moulded Solutions",
    location: "Consumer & Industrial",
    title: "Plastic Injection Moulding",
    description: "Custom-Engineered Injection Moulded Parts Built For Consistency, Precision, And Strength.",
    image: product4,
    cardPosition: "right",
  },
];

const ProductCard = ({ 
  product, 
  index 
}: { 
  product: typeof products[0]; 
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.8]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className="sticky top-24 h-[85vh] mb-8"
    >
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

        {/* Info Card Overlay */}
        <div 
          className={`absolute top-1/2 -translate-y-1/2 ${
            product.cardPosition === "left" ? "left-8 md:left-16" : "right-8 md:right-16"
          }`}
        >
          <div className="bg-card/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 max-w-sm shadow-xl">
            {/* Category */}
            <span className="text-primary font-semibold text-sm md:text-base uppercase tracking-wide">
              {product.category}
            </span>
            
            {/* Location */}
            <div className="flex items-center gap-2 text-muted-foreground mt-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm md:text-base">{product.location}</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mt-6 leading-tight">
              {product.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm md:text-base mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Dot indicator */}
            <div className="flex items-center justify-between mt-6">
              <div className="w-3 h-3 rounded-full bg-primary/30 border-2 border-primary animate-pulse" />
              
              {/* Arrow Button */}
              <a 
                href="#"
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <ArrowUpRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-16 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="products" className="py-24 bg-muted" ref={containerRef}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
          >
            Our Products
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
          >
            High-Precision Components Built For<br />Performance
          </motion.h2>
        </div>

        {/* Sticky Stack Cards */}
        <div className="relative">
          {products.map((product, index) => (
            <ProductCard 
              key={product.title} 
              product={product} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
