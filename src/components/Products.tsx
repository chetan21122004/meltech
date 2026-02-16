import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { products as sourceProducts } from "@/data/products";

const featuredIds = [
  { id: "brass-cpvc-upvc-inserts", cardPosition: "left" },
  { id: "stamping-components", cardPosition: "left" },
  { id: "sliding-head-components", cardPosition: "right" },
  { id: "plastic-injection-moulding", cardPosition: "right" },
];

const products = featuredIds.map(item => {
  const p = sourceProducts.find(sp => sp.id === item.id);
  return {
    ...item,
    category: p?.category || "Components",
    location: p?.location || "Industrial",
    title: p?.title || "Product",
    description: p?.shortDescription || "High-quality component",
    image: p?.image || "",
  };
});

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
      className="sticky top-16 md:top-20 h-[500px] md:h-[80vh] min-h-[500px] md:min-h-[600px] mb-6 md:mb-12"
    >
      <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
        {/* Background Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />

        {/* Info Card Overlay - Responsive positioning */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 ${isRight ? "right-12" : "left-12"
            } hidden md:block`}
        >
          <div className="bg-white rounded-[1.5rem] p-10 w-[400px] shadow-xl relative">
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
            <h3 className="text-[2rem] font-bold text-foreground mt-6 leading-[1.2] tracking-tight">
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

        {/* Mobile Info Overlay (Gradient + Text) */}
        <div className="absolute inset-0 md:hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/20 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                {product.title}
              </h3>

              <div className="flex items-center gap-2 text-white/70 mb-3 text-xs">
                <MapPin className="w-3 h-3" />
                <span>{product.location}</span>
              </div>

              <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">
                {product.description}
              </p>

              <a
                href="#"
                className="flex items-center justify-between w-full p-1 pl-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full group"
              >
                <span className="text-white font-medium text-sm">View Details</span>
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-active:scale-95 transition-transform">
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </span>
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

        {/* Sticky Stack Cards Container */}
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
