import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const AboutHero = () => {
  return (
    <section
      className="relative pt-48 pb-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-card/80" />

      <div className="container relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-card-foreground mb-12"
        >
          About Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-6"
        >
          {/* Breadcrumb */}
          <ul className="flex items-center gap-4">
            <li className="relative pr-4 after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-1.5 after:h-1.5 after:bg-primary after:rounded-full">
              <Link
                to="/"
                className="text-card-foreground hover:text-primary transition-colors font-semibold"
              >
                Home
              </Link>
            </li>
            <li className="text-card-foreground font-semibold">
              About Us
            </li>
          </ul>

          {/* Tagline */}
          <p className="text-card-foreground max-w-xs text-base leading-relaxed">
            Precision, performance, and trust—discover the story behind Meltech Melting Technology, where innovation meets reliability.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
