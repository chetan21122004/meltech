import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, TestTube, Settings, Users, Heart, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";

const qualityFeatures = [
  {
    icon: Award,
    title: "ISO Certified Standards",
    description: "We follow globally recognized ISO 9001:2015 standards to ensure world-class quality."
  },
  {
    icon: TestTube,
    title: "Stringent Testing",
    description: "Every component undergoes multiple quality checks for precision, durability and performance."
  },
  {
    icon: Settings,
    title: "Advanced Infrastructure",
    description: "Equipped with state-of-the-art CNC, sliding head, and testing machines for zero-error output."
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description: "Experienced engineers and trained operators ensure consistent quality in every project."
  },
  {
    icon: Heart,
    title: "Customer-Centric Approach",
    description: "We align with client specifications, ensuring on-time delivery and lasting partnerships."
  }
];

const stats = [
  { label: "QUALITY CHECKS", value: "13+", icon: "🔍" },
  { label: "ON-TIME DELIVERY", value: "98%", icon: "📦" },
  { label: "FIRST-PASS YIELD", value: "99%", icon: "✓" },
  { label: "DEFECT RATE", value: "35 PPM", icon: "📊" }
];

const QualityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Quality Assurance - ISO 9001:2015 Certified Manufacturer"
        description="Meltech Melting Technology ensures uncompromised quality through ISO 9001:2015 certification, 13+ quality checks, 99% first-pass yield, and 35 PPM defect rate. Precision testing and advanced infrastructure."
        keywords="quality assurance, ISO 9001:2015, quality control brass components, precision testing, manufacturing quality standards, first-pass yield, PPM defect rate, quality certified manufacturer India"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-card overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
            alt="Quality control"
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
                Quality
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
                <span className="text-primary font-medium">Quality</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:max-w-md"
            >
              <p className="text-white/70 text-sm leading-relaxed">
                Excellence at every stage—Meltech Melting Technology ensures uncompromised quality through precision testing, ISO standards, and innovative processes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Policy Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">OUR QUALITY POLICY</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
              Delivering Precision,<br />Reliability & Trust
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80"
                alt="Manufacturing facility"
                className="rounded-lg w-full"
              />
              <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm px-4 py-2 rounded">
                <span className="text-primary font-bold text-2xl">M</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">— OUR LEGACY</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                History Of Quality Manufacturing
              </h2>
              <p className="text-white/70 mb-8">
                For over three decades, Meltech Melting Technology has been setting benchmarks in precision engineering. From brass turning and CNC machining to stamping, molding, and assemblies, our focus has always been on delivering uncompromised quality and reliability across industries worldwide.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Decades of expertise in precision turned parts",
                  "Advanced CNC, stamping, and molding facilities",
                  "Commitment to global quality standards & certifications"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <div>
                  <span className="text-5xl font-bold text-white">30<sup className="text-primary text-2xl">+</sup></span>
                  <p className="text-white/60 text-sm">Years Experience</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-primary font-bold">M PATEL</p>
                    <p className="text-white/60 text-sm">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-border rounded-lg p-6 text-center"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{stat.label}</p>
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QualityPage;
