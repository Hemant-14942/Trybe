import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const categories = [
  {
    name: "Men’s",
    image1: "/mens1.jpeg",
    image2: "/mens1.jpeg",
  },
  {
    name: "Women’s",
    image1: "/category1.jpeg",
    image2: "/images/men.jpg",
  },
  {
    name: "Bestseller",
    image1: "/images/men.jpg",
    image2: "/images/men.jpg",
  },
  {
    name: "New Arrival",
    image1: "/images/men.jpg",
    image2: "/images/men.jpg",
  },
];

export default function CategoryShowcase() {
  const [active, setActive] = useState(categories[0]);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // when it enters and exits viewport
  });

  // left image goes slightly down (0 to 40px)
  const leftY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  // right image goes slightly up (0 to -40px)
  const rightY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={containerRef}
      className="flex md:h-screen w-screen flex-col md:flex-row items-center justify-around py-16 bg-[#faf8f3] text-black gap-10 md:gap-28"
    >
      {/* Left Image */}
      <motion.div
        style={{ y: leftY }}
        className="hidden md:block md:w-[250px] md:h-[300px] overflow-hidden relative"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={active.image1}
            src={active.image1}
            alt={active.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover rounded"
          />
        </AnimatePresence>
      </motion.div>

      {/* Center Text */}
      <div className="text-center md:text-left space-y-6">
        <p className="uppercase tracking-wide text-sm text-gray-600">
          Shop by Category
        </p>
        <div className="space-y-4 text-2xl md:text-3xl font-medium">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onMouseEnter={() => setActive(cat)}
              className={`cursor-pointer transition-all duration-200 ${
                active.name === cat.name
                  ? "text-orange-500 underline underline-offset-4 decoration-2"
                  : ""
              }`}
            >
              {cat.name}
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <motion.div
        style={{ y: rightY }}
        className="md:w-[250px] md:h-[300px] overflow-hidden relative hidden md:block"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={active.image2 + "-right"}
            src={active.image2}
            alt={active.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover rounded"
          />
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
