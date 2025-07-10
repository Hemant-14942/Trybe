// src/components/Home2FollowUs.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home2FollowUs() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Outer left image: more movement
  const outerLeftX = useTransform(scrollYProgress, [0, 1], ["150%", "-90%"]);
  const outerLeftRotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-60deg"]);

  // Inner left image: less movement
  const innerLeftX = useTransform(scrollYProgress, [0, 1], ["100%", "-85%"]);
  const innerLeftRotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-25deg"]);

  // Inner right image: less movement
  const innerRightX = useTransform(scrollYProgress, [0, 1], ["-100%", "65%"]);
  const innerRightRotate = useTransform(scrollYProgress, [0, 1], ["0deg", "20deg"]);

  // Outer right image: more movement
  const outerRightX = useTransform(scrollYProgress, [0, 1], ["-150%", "80%"]);
  const outerRightRotate = useTransform(scrollYProgress, [0, 1], ["0deg", "50deg"]);

  return (
    <section
      ref={ref}
      className="h-[100vh] bg-[#fdfbf7] flex items-center justify-center"
    >
      <div className="sticky top-0 w-full py-20 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl text-center font-serif mb-16">
          Follow us
        </h2>

        <div className="flex gap-6 px-4 relative z-10">
          {/* Outer Left Image */}
          <motion.div style={{ x: outerLeftX, rotate: outerLeftRotate }}>
            <img
              src="/model.png"
              alt="model1"
              className="w-32 md:w-67 rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Inner Left Image */}
          <motion.div style={{ x: innerLeftX, rotate: innerLeftRotate }}>
            <img
              src="/category1.jpeg"
              alt="model2"
              className="w-32 md:w-67 rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Inner Right Image */}
          <motion.div style={{ x: innerRightX, rotate: innerRightRotate }}>
            <img
              src="/mens1.jpeg"
              alt="model3"
              className="w-32 md:w-67 rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Outer Right Image */}
          <motion.div style={{ x: outerRightX, rotate: outerRightRotate }}>
            <img
              src="/category1.jpeg"
              alt="model4"
              className="w-32 md:w-67 rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
