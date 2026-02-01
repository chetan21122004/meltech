import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
    description: "High-grip threaded and knurled inserts for leak-proof, long-lasting performance in plastic assemblies.",
    image: product1,
  },
  {
    category: "Sheet Metal Precision",
    location: "Automotive & Electrical",
    title: "Stamping Components",
    description: "Accurate, high-volume stamped parts for consistent quality in demanding assemblies.",
    image: product2,
  },
  {
    category: "Swiss Turning",
    location: "Electronics & Fluid Systems",
    title: "Sliding Head Components",
    description: "Ultra-precise sliding head machining for micro and complex profile parts.",
    image: product3,
  },
  {
    category: "Moulded Solutions",
    location: "Consumer & Industrial",
    title: "Plastic Injection Moulding",
    description: "Custom-engineered injection moulded parts built for consistency, precision, and strength.",
    image: product4,
  },
];

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 bg-muted" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            High-Precision Components<br />Built for Performance
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-card rounded-3xl overflow-hidden h-full hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {product.location}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                  <a 
                    href="#"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
