import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

// Avatar images - using professional placeholder avatars
const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
];

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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative curved shape on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[500px] pointer-events-none">
        <div className="absolute inset-0 border-[40px] border-muted rounded-[200px] opacity-50" 
          style={{ 
            clipPath: "inset(0 0 0 50%)",
            borderColor: "hsl(var(--muted))"
          }} 
        />
      </div>

      <div className="container relative z-10">
        {/* Top Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-6 mb-12"
        >
          {/* Left side - Reviews, Avatars, Trust text */}
          <div className="flex flex-wrap items-center gap-8">
            {/* Reviews count & stars */}
            <div>
              <span className="text-2xl font-bold text-foreground block">5.9K Reviews</span>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
            </div>

            {/* Avatar stack */}
            <div className="flex -space-x-3">
              {avatars.map((avatar, i) => (
                <div 
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-background overflow-hidden"
                >
                  <img 
                    src={avatar} 
                    alt={`Customer ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Trusted by text */}
            <div>
              <span className="text-muted-foreground block">Trusted by</span>
              <span className="text-foreground font-semibold">industry-leading OEMs</span>
            </div>
          </div>

          {/* Discover More button */}
          <Button variant="industrial" size="lg" className="gap-2 pr-2">
            DISCOVER MORE
            <span className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-background" />
            </span>
          </Button>
        </motion.div>

        {/* Testimonial Content */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Main Quote Area */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Quote */}
                <blockquote className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.3] tracking-tight mb-10">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* Author */}
                <div>
                  <p className="text-lg font-bold text-foreground">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[activeIndex].position}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Pagination Dots */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 flex lg:flex-col justify-center items-center gap-4"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary border-4 border-primary/30 scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center relative">
              {index > 0 && (
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-muted-foreground/0 via-muted-foreground/30 to-muted-foreground/0 hidden md:block" />
              )}
              <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">
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
