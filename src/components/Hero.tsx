import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import slide2Bg from "@/assets/process-1.jpg";
import slide3Bg from "@/assets/about-components.jpg";
import meltechVideo from "@/assets/meltech_vdo.mp4";

const slides = [
  {
    badge: "Engineered For Performance",
    title: (
      <>
        From <span className="text-stroke-white font-raleway italic">Prototype</span> To
        <br />
        Production
      </>
    ),
    description:
      "Rapid NPI With DFM Inputs, Controlled Tolerances, And PPAP-Ready Documentation For Electrical, Gas, Hydraulic & Pneumatic Components.",
    bg: heroBg,
  },
  {
    badge: "Quality You Can Measure",
    title: (
      <>
        Consistent{" "}
        <span className="text-stroke-white font-raleway italic">Precision</span>
        <br />
        Delivered
      </>
    ),
    description:
      "SPC-Driven Processes, 100% Critical Checks, And On-Time Delivery Across Brass, Stainless Steel, Aluminium, And Engineered Polymers.",
    bg: slide2Bg,
  },
  {
    badge: "Precision Manufacturing At Scale",
    title: (
      <>
        Your Trusted
        <br />
        <span className="text-stroke-white font-raleway italic">Manufacturing</span>{" "}
        Partner
      </>
    ),
    description:
      "Micro Turning, CNC & Turn-Mill, Stamping, Plastic & Rubber Molding, And Assembly—Integrated Capabilities For Speed, Quality, And Value.",
    bg: slide3Bg,
  },
];

const SLIDE_DURATION = 5000;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  }, [current, goTo]);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setDirection(1);
    }, SLIDE_DURATION);
  }, []);

  useEffect(() => {
    if (!videoOpen) startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [videoOpen, startAutoPlay]);

  const openVideo = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setVideoOpen(true);
  };

  const closeVideo = () => {
    setVideoOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  const slide = slides[current];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slides */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={{
              enter: (dir: number) => ({ opacity: 0, scale: 1.04, x: dir > 0 ? 1000 : -1000 }),
              center: { opacity: 1, scale: 1, x: 0 },
              exit: (dir: number) => ({ opacity: 0, scale: 0.98, x: dir > 0 ? -1000 : 1000 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) > 50 || Math.abs(velocity.x) > 500;
              if (swipe) {
                if (offset.x > 0) prev();
                else next();
              }
            }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat cursor-grab active:cursor-grabbing"
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            <div className="absolute inset-0 bg-card/65" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="container relative z-10 text-center pt-20">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col items-center"
            >
              {/* Badge */}
              <span className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm mb-8">
                {slide.badge}
              </span>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 md:mb-8 text-card-foreground">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 max-w-3xl mx-auto text-secondary-foreground px-4">
                {slide.description}
              </p>

              {/* CTA */}
              <div className="flex items-center justify-center gap-3">
                <Link to="/products">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-10 py-6 bg-card-foreground text-card border-none font-semibold text-base hover:bg-card-foreground/90"
                  >
                    Explore Products
                  </Button>
                </Link>
                <button
                  onClick={openVideo}
                  className="w-14 h-14 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg group"
                  aria-label="Watch video"
                >
                  <Play className="w-5 h-5 text-white fill-white group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Dots + Progress */}
          <div className="flex items-center justify-center gap-3 mt-14">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  goTo(i, i > current ? 1 : -1);
                  startAutoPlay();
                }}
                className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                style={{ width: i === current ? 48 : 12, background: "rgba(255,255,255,0.3)" }}
                aria-label={`Go to slide ${i + 1}`}
              >
                {i === current && (
                  <motion.div
                    key={current}
                    className="absolute inset-y-0 left-0 bg-primary rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>



        {/* Bottom Social Links */}
        <div className="absolute bottom-4 left-0 right-0 md:right-auto md:bottom-8 bg-card/80 backdrop-blur-sm py-4 px-8 flex justify-center md:justify-start z-10">
          <div className="flex items-center gap-4 text-card-foreground text-xs md:text-sm">
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            <span className="text-muted-foreground">—</span>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <span className="text-muted-foreground">—</span>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={videoRef}
                src={meltechVideo}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeVideo}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/90 transition-colors"
                aria-label="Close video"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;