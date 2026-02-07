import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CursorFollower = () => {
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use motion values for smooth interpolation
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Spring animation for smooth following - different configs for dot and ring
  const dotSpringConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const ringSpringConfig = { damping: 20, stiffness: 150, mass: 0.8 };
  
  const dotXSpring = useSpring(cursorX, dotSpringConfig);
  const dotYSpring = useSpring(cursorY, dotSpringConfig);
  const ringXSpring = useSpring(cursorX, ringSpringConfig);
  const ringYSpring = useSpring(cursorY, ringSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Check for button/link hover
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = !!(
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        target.classList.contains("cursor-pointer")
      );
      
      setIsHoveringButton(isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleElementHover);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot - Orange filled circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotXSpring,
          y: dotYSpring,
        }}
        animate={{
          scale: isHoveringButton ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: "spring", damping: 20, stiffness: 300 },
          opacity: { duration: 0.2 },
        }}
      >
        <div 
          className="w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-primary"
        />
      </motion.div>

      {/* Outer ring - Orange stroke circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: ringXSpring,
          y: ringYSpring,
        }}
        animate={{
          scale: isHoveringButton ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: "spring", damping: 15, stiffness: 200 },
          opacity: { duration: 0.3 },
        }}
      >
        <div className="w-10 h-10 -ml-5 -mt-5 rounded-full border-2 border-primary" />
      </motion.div>
    </>
  );
};

export default CursorFollower;
