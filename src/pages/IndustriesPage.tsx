import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const industries = [
  {
    title: "Automotive",
    description: "High-performance brass and CNC components for engines, fuel systems, and assemblies.",
    image: null
  },
  {
    title: "Electrical & Electronics",
    description: "Precision terminals, connectors, and assemblies ensuring safe electrical performance.",
    image: null
  },
  {
    title: "Gas & LPG",
    description: "Safe and certified precision parts for gas regulators, valves, and LPG systems.",
    image: null
  },
  {
    title: "Hydraulic & Pneumatic",
    description: "Durable fittings, adapters, and parts designed for fluid power systems.",
    image: null
  },
  {
    title: "Telecommunications",
    description: "Connectors and components for seamless telecom infrastructure.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80"
  },
  {
    title: "Renewable Energy",
    description: "Supporting solar, wind, and green energy systems with reliable components.",
    image: null
  },
  {
    title: "Medical & Healthcare",
    description: "Precision-engineered parts for medical devices, ensuring safety and reliability.",
    image: null
  },
  {
    title: "Oil & Petroleum",
    description: "High-strength precision parts for oil exploration and fuel delivery systems.",
    image: null
  },
  {
    title: "Aerospace",
    description: "Precision-engineered lightweight components meeting global aerospace standards.",
    image: null
  },
  {
    title: "Defense",
    description: "Reliable and robust precision parts built for defense and security applications.",
    image: null
  },
  {
    title: "Marine",
    description: "Corrosion-resistant parts and marine-grade components.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80"
  },
  {
    title: "Consumer Goods",
    description: "Everyday precision solutions powering durable consumer products worldwide.",
    image: null
  }
];

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
          <div className="relative mb-16">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 opacity-10">
              <img
                src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=200&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">— INDUSTRIES WE SERVE —</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
                Precision Components<br />For Every Industry
              </h2>
            </motion.div>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative bg-white border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 overflow-hidden min-h-[180px]"
              >
                {industry.image && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
                  </div>
                )}

                <div className={`relative z-10 ${industry.image ? 'group-hover:text-white' : ''} transition-colors duration-300`}>
                  <h3 className="font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${industry.image ? 'text-muted-foreground group-hover:text-white/80' : 'text-muted-foreground'}`}>
                    {industry.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustriesPage;
