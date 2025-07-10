// src/components/Home2NewArrival.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home2NewArrival() {
  const ref = useRef(null);

  // Observe scroll progress relative to the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
    const width = useTransform(scrollYProgress, [0, 1], ["50%", "150%"]);
  const height = useTransform(scrollYProgress, [0, 1], ["50%", "140%"]);

  return (
    <section className="h-[150vh] bg-[#fdfbf7] ">
      {/* Sticky image container */}
      <div ref={ref} className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{width,height, y }}
          className=" absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[80%] h-[60vh] md:w-[60%] md:h-[60vh] overflow-hidden shadow-2xl"
        >
          <img
            src="/category1.jpeg"
            alt="New Arrival"
            className="w-full h-full object-cover object-top-center  "
          />
        </motion.div>

        {/* Text content fades out as image scales up */}
        <motion.div
          style={{  }}
          className="absolute text-center flex flex-col items-center"
        >
          <h2 className="text-3xl text-white md:text-7xl font-serif font-semibold mb-7">
            WEAR THE BEST
          </h2>
          <p className="text-gray-700 w-fit md:text-lg cursor-pointer bg-white px-4  py-2 border-2 border-white rounded-full hover:bg-transparent">
            SHOP NEW ARRIVALS
          </p>
        </motion.div>
      </div>
    </section>
  );
}
