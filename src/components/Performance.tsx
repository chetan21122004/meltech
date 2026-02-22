import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const Performance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Select specific products to feature
  const featuredLarge = products.find(p => p.id === "brass-cpvc-upvc-inserts") || products[0];
  const featuredSmall1 = products.find(p => p.id === "stamping-components") || products[4] || products[0];
  const featuredSmall2 = products.find(p => p.id === "turning-components") || products[2] || products[0];

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
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Performance
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a]">
            High-Precision Components
          </h2>
        </motion.div>

        {/* Performance Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Large Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
              <img
                src={featuredLarge.image}
                alt={featuredLarge.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-wider mb-3">
                  {featuredLarge.category}
                </span>
                <h3 className="text-2xl font-black text-white mb-2">
                  {featuredLarge.title}
                </h3>
                <p className="text-white/70 mb-6 text-sm line-clamp-2 max-w-sm font-medium">
                  {featuredLarge.shortDescription}
                </p>
                <Link
                  to={`/products/${featuredLarge.id}`}
                  className="inline-flex items-center gap-3 text-primary font-black uppercase text-xs tracking-widest hover:gap-4 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Two Small Cards */}
          <div className="space-y-8">
            {[featuredSmall1, featuredSmall2].map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="group"
              >
                <div className="flex flex-col sm:flex-row bg-white border border-border/50 rounded-3xl overflow-hidden h-auto sm:h-48 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-full sm:w-1/2 relative overflow-hidden h-48 sm:h-auto">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center">
                    <span className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mb-3">
                      {product.category || "Precision Engineering"}
                    </span>
                    <h4 className="text-xl font-black text-[#1a1a1a] mb-4 leading-tight">
                      {product.title}
                    </h4>
                    <Link
                      to={`/products/${product.id}`}
                      className="inline-flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest hover:gap-3 transition-all"
                    >
                      View Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
