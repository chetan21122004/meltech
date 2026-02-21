import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import img00 from "@/assets/products/00.png";
import img03 from "@/assets/products/03.png";
import img04 from "@/assets/products/04.png";
import img12 from "@/assets/products/12.png";

const performanceItems = [
  {
    title: "Brass C-PVC, U-PVC Inserts",
    category: "Brass Components",
    image: img00,
    size: "large",
  },
  {
    title: "Stamping Components",
    category: "Sheet Metal",
    image: img04,
    size: "small",
  },
  {
    title: "CNC Machined Parts",
    category: "Precision Parts",
    image: img03,
    size: "small",
  },
  {
    title: "Plastic Injection Moulding",
    category: "Moulded Solutions",
    image: img12,
    size: "large",
  },
];

const Performance = () => {
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
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Performance
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
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
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <img
                src={img00}
                alt="Brass Components"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-primary/80 text-primary-foreground rounded-full text-xs font-semibold mb-2">
                  Brass Components
                </span>
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  Brass C-PVC, U-PVC Inserts
                </h3>
                <p className="text-muted-foreground mb-4">
                  High-grip threaded and knurled inserts for leak-proof performance.
                </p>
                <Link to="/products/brass-cpvc-upvc-inserts" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Two Small Cards */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="flex flex-col sm:flex-row bg-muted rounded-3xl overflow-hidden h-auto sm:h-48">
                <div className="w-full sm:w-1/2 relative overflow-hidden h-48 sm:h-auto">
                  <img
                    src={img04}
                    alt="Stamping Components"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                    Sheet Metal
                  </span>
                  <h4 className="text-lg font-bold text-foreground mb-2">Stamping Components</h4>
                  <Link to="/products/stamping-components" className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="flex flex-col sm:flex-row bg-muted rounded-3xl overflow-hidden h-auto sm:h-48">
                <div className="w-full sm:w-1/2 relative overflow-hidden h-48 sm:h-auto">
                  <img
                    src={img03}
                    alt="CNC Machined Parts"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                    Precision Parts
                  </span>
                  <h4 className="text-lg font-bold text-foreground mb-2">CNC Machined Parts</h4>
                  <Link to="/products/turning-components" className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
