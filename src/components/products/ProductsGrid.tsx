import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import img00 from "@/assets/products/00.png";
import img01 from "@/assets/products/01.png";
import img02 from "@/assets/products/02.png";
import img03 from "@/assets/products/03.png";
import img04 from "@/assets/products/04.png";
import img05 from "@/assets/products/05.png";
import img06 from "@/assets/products/06.png";
import img07 from "@/assets/products/07.png";
import img08 from "@/assets/products/08.png";
import img09 from "@/assets/products/09.png";
import img10 from "@/assets/products/10.png";
import img11 from "@/assets/products/11.png";
import img12 from "@/assets/products/12.png";
import img13 from "@/assets/products/13.png";
import img14 from "@/assets/products/14.png";
import img16 from "@/assets/products/16.png";

const products = [
  {
    id: "brass-cpvc-upvc-inserts",
    title: "Brass C-PVC & U-PVC Inserts",
    image: img00,
  },
  {
    id: "micro-turning-components",
    title: "Micro Turning Components",
    image: img01,
  },
  {
    id: "turning-components",
    title: "Turning Components",
    image: img02,
  },
  {
    id: "brass-cnc-parts",
    title: "Brass CNC Parts",
    image: img03,
  },
  {
    id: "stamping-components",
    title: "Stamping Components",
    image: img04,
  },
  {
    id: "brass-gas-parts",
    title: "Brass Gas Parts",
    image: img05,
  },
  {
    id: "sliding-head-components",
    title: "Sliding Head Components",
    image: img06,
  },
  {
    id: "turn-mill-parts",
    title: "Turn-Mill Parts",
    image: img07,
  },
  {
    id: "brass-electrical-parts",
    title: "Brass Electrical Parts",
    image: img08,
  },
  {
    id: "hydraulic-pneumatic-parts",
    title: "Hydraulic & Pneumatic Parts",
    image: img09,
  },
  {
    id: "auto-gas-parts",
    title: "Auto Gas Parts",
    image: img10,
  },
  {
    id: "brass-fasteners",
    title: "Brass Fasteners",
    image: img11,
  },
  {
    id: "plastic-injection-moulding",
    title: "Plastic Injection Moulding",
    image: img12,
  },
  {
    id: "rubber-moulding",
    title: "Rubber Moulding",
    image: img13,
  },
  {
    id: "assembly-products",
    title: "Assembly Products",
    image: img14,
  },
  {
    id: "new-product",
    title: "New Product",
    image: img16,
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
