import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const industries = [
  {
    title: "Automotive",
    description: "High-performance brass and CNC components for engines, fuel systems, and assemblies.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&q=80",
  },
  {
    title: "Electrical & Electronics",
    description: "Precision terminals, connectors, and assemblies ensuring safe electrical performance.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80",
  },
  {
    title: "Gas & LPG",
    description: "Safe and certified precision parts for gas regulators, valves, and LPG systems.",
    image: "https://images.unsplash.com/photo-1644217209694-5ca176114adb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hydraulic & Pneumatic",
    description: "Durable fittings, adapters, and parts designed for fluid power systems.",
    image: "https://plus.unsplash.com/premium_photo-1661915186352-98d5fab14183?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Telecommunications",
    description: "Connectors and precision parts ensuring seamless telecom infrastructure.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80",
  },
  {
    title: "Renewable Energy",
    description: "Supporting solar, wind, and green energy systems with reliable components.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&q=80",
  },
  {
    title: "Medical & Healthcare",
    description: "Precision-engineered parts for medical devices, ensuring safety and reliability.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80",
  },
  {
    title: "Oil & Petroleum",
    description: "High-strength precision parts for oil exploration and fuel delivery systems.",
    image: "https://plus.unsplash.com/premium_photo-1682148782647-d6565344ecce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Aerospace",
    description: "Precision-engineered lightweight components meeting global aerospace standards.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&q=80",
  },
  {
    title: "Defense",
    description: "Reliable and robust precision parts built for defense and security applications.",
    image: "https://plus.unsplash.com/premium_photo-1661883619516-b1475e23885b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Marine",
    description: "Corrosion-resistant parts and marine-grade components for offshore applications.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80",
  },
  {
    title: "Consumer Goods",
    description: "Everyday precision solutions powering durable consumer products worldwide.",
    image: "https://media.istockphoto.com/id/1219933495/photo/shopping-trolley-cart.jpg?s=612x612&w=0&k=20&c=_sEmK6BacdNMpla5zFSMmNNX0QdseZnDo61oPDtfBFE=",
  },
];

/** Single industry card with the floating-image hover effect */
const IndustryCard = ({
  industry,
  index,
}: {
  industry: (typeof industries)[0];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative bg-white border border-border rounded-2xl p-7 overflow-hidden min-h-[210px] cursor-pointer"
    >
      {/* Dark overlay */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 rounded-2xl bg-card pointer-events-none"
      />

      {/* Floating image card — slides up from below on hover */}
      <motion.div
        animate={
          hovered
            ? { y: 8, x: 8, rotate: 3 }
            : { y: "115%", x: 16, rotate: 7 }
        }
        transition={{ duration: 0.5, ease: [0.34, 1.3, 0.64, 1] }}
        className="pointer-events-none absolute bottom-0 right-0 w-[58%] h-[75%] rounded-xl overflow-hidden shadow-2xl z-10"
      >
        <img
          src={industry.image}
          alt={industry.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Orange dot */}
      <motion.div
        animate={{ scale: hovered ? 1 : 0 }}
        transition={{ duration: 0.25, delay: hovered ? 0.2 : 0 }}
        className="pointer-events-none absolute bottom-[28%] right-[53%] w-4 h-4 rounded-full bg-primary z-20"
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.h3
          animate={{ color: hovered ? "#ffffff" : "hsl(var(--foreground))" }}
          transition={{ duration: 0.3 }}
          className="font-bold text-xl mb-4"
        >
          {industry.title}
        </motion.h3>
        <motion.p
          animate={{ color: hovered ? "rgba(255,255,255,0.72)" : "hsl(var(--muted-foreground))" }}
          transition={{ duration: 0.3 }}
          className="text-sm leading-relaxed max-w-[55%]"
        >
          {industry.description}
        </motion.p>
      </div>
    </motion.div>
  );
};


const IndustriesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Industries We Serve - Automotive, Electrical, Gas & More"
        description="Meltech Melting Technology serves automotive, electrical, gas & LPG, hydraulic, pneumatic, aerospace, defense, medical, marine, and renewable energy industries with precision CNC turned components."
        keywords="automotive brass parts, electrical components manufacturer, gas fittings supplier, hydraulic parts, pneumatic components, aerospace components India, defense precision parts, medical device components, marine grade components"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-card overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1920&q=80"
            alt="Industries we serve"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-card via-card/80 to-card/60" />
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Industries We Serve
              </motion.h1>

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
                <span className="text-primary font-medium">Industries</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:max-w-md"
            >
              <p className="text-white/70 text-sm leading-relaxed">
                From automotive to hydraulics, Meltech Melting Technology delivers precision-engineered brass and CNC parts, supporting diverse industries worldwide with reliability and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="py-20 bg-background">
        <div className="container">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">— INDUSTRIES WE SERVE —</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
              Precision Components<br />For Every Industry
            </h2>
          </motion.div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.title} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustriesPage;
