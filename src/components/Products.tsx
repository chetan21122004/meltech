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

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.85]);

  const isRight = product.cardPosition === "right";

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className="sticky top-20 h-[80vh] min-h-[600px] mb-6"
    >
      <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
        {/* Background Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />

        {/* Orange Dot Indicator - positioned outside the info card */}
        <div 
          className={`absolute top-1/2 ${
            isRight ? "right-[420px] md:right-[460px]" : "left-[420px] md:left-[460px]"
          } z-10`}
        >
          <div className="w-4 h-4 rounded-full bg-primary border-[3px] border-primary/30" />
        </div>

        {/* Info Card Overlay */}
        <div 
          className={`absolute top-1/2 -translate-y-1/2 ${
            isRight ? "right-6 md:right-12" : "left-6 md:left-12"
          }`}
        >
          <div className="bg-white rounded-[1.5rem] p-8 md:p-10 w-[340px] md:w-[400px] shadow-xl relative">
            {/* Category */}
            <h4 className="text-primary font-semibold text-base tracking-wide">
              {product.category}
            </h4>
            
            {/* Location */}
            <div className="flex items-center gap-2 text-foreground/80 mt-2">
              <MapPin className="w-4 h-4 text-foreground/60" strokeWidth={1.5} />
              <span className="text-sm font-medium">{product.location}</span>
            </div>

            {/* Title */}
            <h3 className="text-[1.75rem] md:text-[2rem] font-bold text-foreground mt-6 leading-[1.2] tracking-tight">
              {product.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-[15px] mt-5 leading-relaxed">
              {product.description}
            </p>

            {/* Arrow Button - bottom right */}
            <div className="flex justify-end mt-6">
              <a 
                href="#"
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <ArrowUpRight className="w-6 h-6" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator line */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="w-20 h-1 bg-white/40 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="products" className="py-24 bg-muted" ref={containerRef}>
      <div className="container max-w-7xl">
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight"
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
