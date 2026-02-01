import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import testimonialBg from "@/assets/testimonial-bg.jpg";

const testimonials = [
  {
    quote: "Their team's capability to handle urgent orders without compromising on quality is impressive. We consider Meltech an integral extension of our manufacturing unit.",
    author: "Rajesh Kumar",
    position: "Senior Engineer, Gas Equipment Supplier",
  },
  {
    quote: "Meltech Melting Technology has been a reliable manufacturing partner for our precision electrical parts. Their attention to detail and on-time delivery have exceeded our expectations every time.",
    author: "Priya Mehta",
    position: "Procurement Manager, Electrical OEM",
  },
  {
    quote: "We trust Meltech for complex CNC machined parts because of their consistent quality, excellent machining accuracy, and professional communication throughout the process.",
    author: "John Carter",
    position: "Operations Head, Hydraulic Systems Manufacturer",
  },
];

const stats = [
  { value: "500", suffix: "+", label: "Products Made" },
  { value: "150", suffix: "+", label: "B2B Clients" },
  { value: "25", suffix: "+", label: "Years Experience" },
  { value: "20", suffix: "", label: "Team Members" },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${testimonialBg})` }}
      >
        <div className="absolute inset-0 bg-card/90" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Reviews Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-card-foreground">5.9K Reviews</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <div className="flex -space-x-3 mb-4">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-12 h-12 rounded-full bg-muted border-2 border-card flex items-center justify-center text-lg"
                  >
                    👤
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground">
                Trusted by <span className="text-primary font-semibold">industry-leading OEMs</span>
              </p>
            </div>
          </motion.div>

          {/* Right - Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`p-6 rounded-3xl ${index === 0 ? 'bg-card border border-border/10' : 'bg-secondary/30'}`}
              >
                <p className="text-card-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <span className="font-bold text-card-foreground">{testimonial.author}</span>
                  <span className="text-muted-foreground text-sm block">{testimonial.position}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center relative">
              {index > 0 && (
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-muted-foreground/0 via-muted-foreground/30 to-muted-foreground/0 hidden md:block" />
              )}
              <div className="text-5xl md:text-6xl font-bold text-card-foreground mb-2">
                {stat.value}<span className="text-primary">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
