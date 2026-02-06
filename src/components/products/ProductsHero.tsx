import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductsHero = () => {
  return (
    <section className="relative min-h-[50vh] bg-card overflow-hidden pt-32 pb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1920&q=80"
          alt="Industrial manufacturing"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card via-card/80 to-card/60" />
      </div>

      {/* Decorative vertical text */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <span className="text-[120px] font-bold text-white/5 tracking-wider writing-vertical">
          WWW.M
        </span>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          {/* Left Content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Our Products
            </motion.h1>

            {/* Breadcrumbs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 text-sm"
            >
              <Link to="/" className="text-white/70 hover:text-primary transition-colors">
                Home
              </Link>
              <span className="text-white/50">&gt;</span>
              <span className="text-primary font-medium">Products</span>
            </motion.div>
          </div>

          {/* Right Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:max-w-md"
          >
            <p className="text-white/70 text-sm leading-relaxed">
              Explore Meltech Melting Technology's wide product range—precision CNC turned parts, brass fittings, stamping, molding, and assembly solutions designed for performance and trusted by industries worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
