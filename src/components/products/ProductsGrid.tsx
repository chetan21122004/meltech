import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: "brass-cpvc-upvc-inserts",
    title: "Brass C-PVC & U-PVC Inserts",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: "micro-turning-components",
    title: "Micro Turning Components",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
  },
  {
    id: "turning-components",
    title: "Turning Components",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
  },
  {
    id: "brass-cnc-parts",
    title: "Brass CNC Parts",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
  },
  {
    id: "stamping-components",
    title: "Stamping Components",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
  },
  {
    id: "brass-gas-parts",
    title: "Brass Gas Parts",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: "sliding-head-components",
    title: "Sliding Head Components",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
  },
  {
    id: "turn-mill-parts",
    title: "Turn-Mill Parts",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
  },
  {
    id: "brass-electrical-parts",
    title: "Brass Electrical Parts",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
  },
  {
    id: "hydraulic-pneumatic-parts",
    title: "Hydraulic & Pneumatic Parts",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
  },
  {
    id: "auto-gas-parts",
    title: "Auto Gas Parts",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: "brass-fasteners",
    title: "Brass Fasteners",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
  },
  {
    id: "plastic-injection-moulding",
    title: "Plastic Injection Moulding",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
  },
  {
    id: "rubber-moulding",
    title: "Rubber Moulding",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
  },
  {
    id: "assembly-products",
    title: "Assembly Products",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
  },
];

const ProductsGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
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
              Our Products
            </span>
            <span className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Precision Components & Integrated<br />Manufacturing Solutions
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                to={`/products/${product.id}`}
                className="group block relative aspect-[4/3] rounded-2xl overflow-hidden bg-card"
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Product Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg leading-tight mb-4">
                    {product.title}
                  </h3>
                  
                  {/* Explore Button - Hidden by default, shown on hover */}
                  <div className="flex items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm uppercase tracking-wide">
                      Explore Product
                    </span>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-background">
                      <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                    </span>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-2xl transition-colors duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
