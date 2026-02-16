import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products as sourceProducts } from "@/data/products";

const products = sourceProducts.map(p => ({
  title: p.title,
  description: p.shortDescription,
  link: `/products/${p.id}`,
  image: p.image,
}));

const MarqueeRow = ({ items, direction = "left", speed = 20, isPaused = false }: { items: typeof products; direction?: "left" | "right"; speed?: number; isPaused?: boolean }) => {
  return (
    <div className="relative flex overflow-hidden select-none group">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        className="flex gap-6 min-w-full group-hover:[animation-play-state:paused]"
      >
        {[...items, ...items, ...items, ...items].map((product, idx) => ( // Quadrupled for smoothness
          <Link
            key={`${product.title}-${idx}`}
            to={product.link}
            className="relative flex-shrink-0 w-[280px] md:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden group/card"
          >
            {/* Image */}
            <div className="absolute inset-0">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                <h4 className="text-xl font-bold text-white mb-2 leading-tight">
                  {product.title}
                </h4>
                <p className="text-white/70 text-sm line-clamp-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 delay-75">
                  {product.description}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

const AboutProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [rowDirections, setRowDirections] = useState<("left" | "right")[]>(["left", "right", "left"]);

  // Split into 3 rows
  const chunkSize = Math.ceil(products.length / 3);
  const row1 = products.slice(0, chunkSize);
  const row2 = products.slice(chunkSize, chunkSize * 2);
  const row3 = products.slice(chunkSize * 2);

  const handlePrev = () => {
    setRowDirections(["right", "right", "right"]);
  };

  const handleNext = () => {
    setRowDirections(["left", "left", "left"]);
  };

  return (
    <section className="relative py-16 bg-muted overflow-hidden" ref={ref}>
      {/* Decorative pattern pattern-3.png */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-[url('/pattern-3.png')] bg-no-repeat opacity-10 pointer-events-none" />

      <div className="container relative mb-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-px bg-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Products
            </span>
            <span className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
            Precision Components<br />Engineered for Performance
          </h2>
        </motion.div>
      </div>

      {/* Marquee Rows */}
      <div className="relative w-full flex flex-col gap-6">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none" />

        <MarqueeRow items={row1} direction={rowDirections[0]} speed={15} />
        <MarqueeRow items={row2} direction={rowDirections[1]} speed={20} />
        <MarqueeRow items={row3} direction={rowDirections[2]} speed={18} />
      </div>

    </section>
  );
};

export default AboutProducts;
