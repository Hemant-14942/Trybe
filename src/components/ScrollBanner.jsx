// components/ScrollBanner.jsx
import { motion } from "framer-motion";

const ScrollBanner = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#88857f] py-2 border-t border-b border-white text-white">
      <motion.div
        className="flex whitespace-nowrap gap-8 text-lg font-medium"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {/* Repeat pattern twice for smooth looping */}
        {Array(2)
          .fill(0)
          .map((_, idx) => (
            <div key={idx} className="flex gap-9 py-4">
              {Array(10)
                .fill("Scroll down ✦")
                .map((text, i) => (
                  <span key={i} className="text-2xl">{text}</span>
                ))}
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default ScrollBanner;
