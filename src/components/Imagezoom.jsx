import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

 function ImageZoom() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // From top to bottom
  });

  // Scroll progress maps to image scale
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <div className="h-[200vh] relative">
      {/* Animated Section */}
      <motion.div
        ref={containerRef}
        className="sticky top-0 h-screen w-screen overflow-hidden"
      >
        <motion.img
          src="/model.png"
          style={{ scale, opacity }}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content to scroll below */}
      <div className="absolute top-[120vh] px-12 text-4xl text-white">
        <p>Your immersive content here...</p>
      </div>
    </div>
  );
}

export default ImageZoom;
