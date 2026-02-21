import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, TestTube, Settings, Users, Heart, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import counter01 from "@/assets/quality/counter-01.svg";
import counter02 from "@/assets/quality/counter-02.svg";
import counter03 from "@/assets/quality/counter-03.svg";
import counter04 from "@/assets/quality/counter-04.svg";
import quality from "@/assets/quality/quality.jpg";
import card2 from "@/assets/quality/card-2.png";
import card1 from "@/assets/quality/card-1.png";

const qualityFeatures = [
  {
    icon: Award,
    title: "ISO Certified Standards",
    description: "We follow globally recognized ISO 9001:2015 standards to ensure world-class quality.",
    hoverImage: card1
  },
  {
    icon: TestTube,
    title: "Stringent Testing",
    description: "Every component undergoes multiple quality checks for precision, durability and performance.",
    hoverImage: card2
  },
  {
    icon: Settings,
    title: "Advanced Infrastructure",
    description: "Equipped with state-of-the-art CNC, sliding head, and testing machines for zero-error output.",
    hoverImage: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=400&q=80"
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description: "Experienced engineers and trained operators ensure consistent quality in every project.",
    hoverImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80"
  },
  {
    icon: Heart,
    title: "Customer-Centric Approach",
    description: "We align with client specifications, ensuring on-time delivery and lasting partnerships.",
    hoverImage: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const stats = [
  { label: "QUALITY CHECKS", value: "13+", icon: counter01 },
  { label: "ON-TIME DELIVERY", value: "98%", icon: counter02 },
  { label: "FIRST-PASS YIELD", value: "99%", icon: counter03 },
  { label: "DEFECT RATE", value: "35 PPM", icon: counter04 }
];

const QualityPage = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <SEO
        title="Quality Assurance - ISO 9001:2015 Certified Manufacturer"
        description="Meltech Melting Technology ensures uncompromised quality through ISO 9001:2015 certification, 13+ quality checks, 99% first-pass yield, and 35 PPM defect rate. Precision testing and advanced infrastructure."
        keywords="quality assurance, ISO 9001:2015, quality control brass components, precision testing, manufacturing quality standards, first-pass yield, PPM defect rate, quality certified manufacturer India"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-card overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
            alt="Quality control"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-card via-card/80 to-card/60" />
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative inline-block mb-4">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                    Quality
                  </h1>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 text-sm mt-4"
              >
                <Link to="/" className="text-white/70 hover:text-primary transition-colors">
                  Home
                </Link>
                <span className="text-white/30">--</span>
                <span className="text-white/90 font-medium">Quality</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:max-w-md"
            >
              <p className="text-white/80 text-base leading-relaxed font-medium">
                Excellence at every stage—Meltech Melting Technology ensures uncompromised quality through precision testing, ISO standards, and innovative processes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Policy Section */}
      <section className="py-8 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-12 bg-primary/20" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">OUR QUALITY POLICY</span>
              <span className="h-px w-12 bg-primary/20" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] mt-4 leading-tight">
              Delivering Precision,<br />Reliability & Trust
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-start p-8 rounded-[2.5rem] border border-border bg-white shadow-sm group cursor-pointer transition-all duration-300 overflow-visible"
              >
                {/* Dark Background Overlay - z-0 to stay above bg-white but below content */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                {/* Popup Image Overlay - z-20 to stay on top */}
                <div className="absolute -top-16 -right-4 w-48 h-32 rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-white pointer-events-none hidden lg:block opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 translate-y-4 group-hover:translate-y-0">
                  <img src={feature.hoverImage} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="relative z-10 flex flex-col items-start w-full">
                  <div className="w-16 h-16 mb-8 bg-primary rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 transition-transform group-hover:rotate-0">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="font-black text-xl mb-4 leading-tight text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed font-medium text-muted-foreground group-hover:text-white/70 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-8 bg-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute bg-primary/5 rounded-[2.5rem] -rotate-2" />
              <img
                src={quality}
                alt="Manufacturing facility"
                className="relative rounded-[2rem] w-full h-[500px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-xl hidden md:block">
                <span className="text-white font-bold text-4xl block">100%</span>
                <span className="text-white/80 text-sm uppercase tracking-wider">Quality Assurance</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">----- OUR LEGACY -----</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mt-4 mb-8 leading-tight">
                History Of Quality Manufacturing
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                For over three decades, Meltech Melting Technology has been setting benchmarks in precision engineering. From brass turning and CNC machining to stamping, molding, and assemblies, our focus has always been on delivering uncompromised quality and reliability across industries worldwide.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  "Decades of expertise in precision turned parts",
                  "Advanced CNC, stamping, and molding facilities",
                  "Commitment to global quality standards & certifications"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <CheckCircle className="w-4 h-4 text-primary group-hover:text-white" />
                    </div>
                    <span className="text-[#1a1a1a] font-bold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-10 border-t border-border pt-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black text-[#1a1a1a]">30</span>
                  <span className="text-primary text-4xl font-bold">+</span>
                  <p className="text-muted-foreground text-sm font-bold uppercase ml-2">Years<br />Experience</p>
                </div>

                <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-2xl">
                  <div className="w-14 h-14 rounded-full border-2 border-primary overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="H Patel" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-primary font-black uppercase tracking-tight">H PATEL</h4>
                    <p className="text-muted-foreground text-xs font-bold">FOUNDER</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="  rounded-3xl p-10 group bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col gap-6">
                  <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">{stat.label}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-5xl font-black text-[#1a1a1a] tracking-tighter">{stat.value}</p>
                    <img src={stat.icon} alt={stat.label} className="w-12 h-12  transition-all opacity-80" />
                  </div>
                </div>
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
