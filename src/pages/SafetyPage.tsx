import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Settings, Users, FileCheck } from "lucide-react";
import SEO from "@/components/SEO";
import safetyImage from "@/assets/safety.jpg";

const safetyFeatures = [
  {
    icon: Shield,
    title: "Safety Management System",
    description: "A formal, ISO-aligned EHS framework with risk assessments, near-miss reporting, and layered audits to drive continuous improvement and incident prevention."
  },
  {
    icon: Settings,
    title: "Process & Machine Safety",
    description: "Guarding, interlocks, LOTO, and poka-yoke built into CNC, stamping, and molding cells. Standardized SOPs and JSA/FMEA reduce variability and eliminate hazards at the source."
  },
  {
    icon: Users,
    title: "People & Training",
    description: "Role-based onboarding, annual refreshers, and task-specific certifications. Mandatory PPE, ergonomic reviews, and safety huddles keep teams prepared and protected."
  },
  {
    icon: FileCheck,
    title: "Compliance & Responsibility",
    description: "Aligned with global regulations and best practices: material traceability and MSDS control, chemical handling standards, and emergency response readiness on every shift."
  }
];

const SafetyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Safety & Sustainability - EHS Standards"
        description="Meltech Melting Technology embeds rigorous safety protocols, ISO-aligned EHS frameworks, LOTO procedures, and machine safety standards to protect people, processes, and performance in precision manufacturing."
        keywords="manufacturing safety, EHS standards, workplace safety, machine safety, LOTO procedures, safety management system, ISO safety compliance, PPE, manufacturing sustainability"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-card overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Industrial safety"
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
                Safety
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
                <span className="text-primary font-medium">Safety</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:max-w-md"
            >
              <p className="text-white/70 text-sm leading-relaxed">
                Safety without compromise—Meltech Melting Technology embeds rigorous protocols, ISO compliance, and precision practices to protect people, processes, and performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Features Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={safetyImage}
                alt="Safety equipment"
                className="rounded-lg w-full"
              />
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {safetyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-14 h-14 flex-shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SafetyPage;
