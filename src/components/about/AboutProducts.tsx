import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import img00 from "@/assets/products/00.png";
import img01 from "@/assets/products/01.png";
import img02 from "@/assets/products/02.png";
import img03 from "@/assets/products/03.png";
import img04 from "@/assets/products/04.png";
import img05 from "@/assets/products/05.png";
import img06 from "@/assets/products/06.png";
import img07 from "@/assets/products/07.png";
import img08 from "@/assets/products/08.png";
import img09 from "@/assets/products/09.png";
import img10 from "@/assets/products/10.png";
import img11 from "@/assets/products/11.png";
import img12 from "@/assets/products/12.png";
import img13 from "@/assets/products/13.png";
import img14 from "@/assets/products/14.png";

const products = [
  {
    title: "Brass C-PVC & U-PVC Inserts",
    description: "Durable brass inserts for CPVC & UPVC fittings with knurled surfaces for perfect grip.",
    link: "#",
    image: img00,
  },
  {
    title: "Micro Turning Components",
    description: "High-precision micro turned parts designed for compact and intricate applications.",
    link: "#",
    image: img01,
  },
  {
    title: "Turning Components",
    description: "Precision-engineered turning parts meeting diverse industrial needs with accuracy.",
    link: "#",
    image: img02,
  },
  {
    title: "Brass CNC Parts",
    description: "CNC machined brass components for unmatched precision and consistent performance.",
    link: "#",
    image: img03,
  },
  {
    title: "Stamping Components",
    description: "Stamped precision parts and sheet cutting solutions with superior finish and strength.",
    link: "#",
    image: img04,
  },
  {
    title: "Brass Gas Parts",
    description: "Reliable and durable brass components designed for gas systems and fittings.",
    link: "#",
    image: img05,
  },
  {
    title: "Sliding Head Components",
    description: "Advanced sliding-head turned components for medical, automotive, and electronics.",
    link: "#",
    image: img06,
  },
  {
    title: "Turn-Mill Parts",
    description: "Complex parts made in one setup with CNC turn-mill for precision and consistency.",
    link: "#",
    image: img07,
  },
  {
    title: "Brass Electrical Parts",
    description: "Precision brass terminals, connectors, sockets, and more for electrical assemblies.",
    link: "#",
    image: img08,
  },
  {
    title: "Hydraulic & Pneumatic Parts",
    description: "High-pressure brass and metal components for hydraulic and pneumatic systems.",
    link: "#",
    image: img09,
  },
  {
    title: "Auto Gas Parts",
    description: "LPG and CNG components including valves, fittings, and regulators for automotive gas.",
    link: "#",
    image: img10,
  },
  {
    title: "Brass Fasteners",
    description: "Precision fasteners like screws, nuts, bolts, and studs for industrial use.",
    link: "#",
    image: img11,
  },
  {
    title: "Plastic Injection Moulding",
    description: "Custom plastic molded parts for electronics, appliances, and industrial components.",
    link: "#",
    image: img12,
  },
  {
    title: "Rubber Moulding",
    description: "High-quality rubber molded parts with excellent sealing and durability.",
    link: "#",
    image: img13,
  },
  {
    title: "Assembly Products",
    description: "Complete sub-assemblies combining metal, plastic, and rubber parts.",
    link: "#",
    image: img14,
  },
];

const MarqueeRow = ({ items, direction = "left", speed = 20, isPaused = false }: { items: typeof products; direction?: "left" | "right"; speed?: number; isPaused?: boolean }) => {
  return (
    <div className="relative flex overflow-hidden select-none group">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        className="flex gap-6 min-w-full group-hover:[animation-play-state:paused]"
      >
        {[...items, ...items, ...items, ...items].map((product, idx) => ( // Quadrupled for smoothness
          <Link
            key={`${product.title}-${idx}`}
            to={product.link}
            className="relative flex-shrink-0 w-[280px] md:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden group/card"
          >
            {/* Image */}
            <div className="absolute inset-0">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                <h4 className="text-xl font-bold text-white mb-2 leading-tight">
                  {product.title}
                </h4>
                <p className="text-white/70 text-sm line-clamp-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 delay-75">
                  {product.description}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

const AboutProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [rowDirections, setRowDirections] = useState<("left" | "right")[]>(["left", "right", "left"]);

  // Split into 3 rows
  const chunkSize = Math.ceil(products.length / 3);
  const row1 = products.slice(0, chunkSize);
  const row2 = products.slice(chunkSize, chunkSize * 2);
  const row3 = products.slice(chunkSize * 2);

  const handlePrev = () => {
    setRowDirections(["right", "right", "right"]);
  };

  const handleNext = () => {
    setRowDirections(["left", "left", "left"]);
  };

  return (
    <section className="relative py-24 bg-muted overflow-hidden" ref={ref}>
      {/* Decorative pattern pattern-3.png */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-[url('/pattern-3.png')] bg-no-repeat opacity-10 pointer-events-none" />

      <div className="container relative mb-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-px bg-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Products
            </span>
            <span className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
            Precision Components<br />Engineered for Performance
          </h2>
        </motion.div>
      </div>

      {/* Marquee Rows */}
      <div className="relative w-full flex flex-col gap-6">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none" />

        <MarqueeRow items={row1} direction={rowDirections[0]} speed={15} />
        <MarqueeRow items={row2} direction={rowDirections[1]} speed={20} />
        <MarqueeRow items={row3} direction={rowDirections[2]} speed={18} />
      </div>

      {/* Navigation Control + View All */}
      <div className="container mt-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Fake Navigation Buttons (Visual Control) */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 bg-background hover:bg-primary hover:text-primary-foreground border-2 transition-all active:scale-95"
              onClick={handlePrev}
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider select-none">Control Direction</span>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 bg-background hover:bg-primary hover:text-primary-foreground border-2 transition-all active:scale-95"
              onClick={handleNext}
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          <div className="w-px h-8 bg-border hidden md:block" />

          <Link to="/products">
            <Button variant="industrial" size="lg" className="gap-2 px-8">
              VIEW FULL CATALOG <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutProducts;
