// src/components/Home2StoryTell.jsx
import React,{useRef}  from "react";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Home2StoryTell() {
  const ref = useRef(null); 
  
  const {scrollYProgress} = useScroll(
    {
      target:ref,
      offset:["start end","end start"],
    }
  );

  const leftimg = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const rightimg = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const leftx = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rightx = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section className="bg-[#fdfbf7] py-20 px-6 md:px-16 flex flex-col items-center text-center md:flex-row md:justify-center md:text-left ">
      {/* Left Image */}
      <motion.div
      ref={ref}
      style={{rotate: leftimg, x: leftx}}
       className="hidden md:flex md:w-1/3  justify-end ">
        <img
          src="/category1.jpeg" 
          alt="Left Style"
          className="w-[250px] md:w-[300px] rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Center Text */}
      <div className="md:w-1/3 flex flex-col justify-center items-center md:items-start">
        <h2 className="text-4xl font-serif font-semibold mb-4">
          Style that tells a story
        </h2>
        <p className="text-gray-700 text-base max-w-md mb-6">
          Each piece in our collection speaks volumes, reflecting your unique journey. Express your personality and style through our curated designs.
        </p>
        <button className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
          LEARN MORE
        </button>
      </div>

      {/* Right Image */}
      <motion.div
      ref={ref}
      style={{rotate: rightimg, x: rightx}}
       className=" hidden md:flex md:w-1/3  justify-start">
        <img
          src="/model.png" 
          alt="Right Style"
          className="w-[300px] md:w-[340px]  rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
}
