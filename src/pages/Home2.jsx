import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollBanner from "../components/ScrollBanner";
import CategoryShowcase from "../components/CategoryShowcase";

const Hero = () => {
  const { scrollY } = useScroll();
  const fasX = useTransform(scrollY, [0, 600], [0, -150]);
  const hionX = useTransform(scrollY, [0, 600], [0, 150]);
  const textY = useTransform(scrollY, [0, 600], [0, 150]);

  useEffect(() => {
    scrollY.onChange((y) => console.log("ScrollY:", y));
  }, [scrollY]);

  return (
    <div>
    <section className="relative  bg-black text-white  overflow-hidden">
      {/* Main Title */}
      <div className="absolute text-[18vw] sm:text-[15vw] md:text-[17vw] font-bold uppercase leading-none tracking-tight z-10 flex top-[24%] sm:top-[9%] gap-2 sm:gap-4 md:gap-8 px-4 sm:px-0">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ x: fasX, y: textY }}
          className="mr-3 sm:mr-2 relative left-[9%]"
        >
          FAS
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{ x: hionX, y: textY }}
          className="ml-1 sm:ml-2 md:ml-45 relative left-[9%]"
        >
          HION
        </motion.div>
      </div>

      {/* Model Image */}
      <div className="z-20 flex justify-center items-center w-full">
        <motion.img
          src="/model.png"
          alt="Model"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="w-[100vw] h-[100vw] sm:w-[60vw] sm:h-[60vw] md:w-[50vw] md:h-[50vw] object-contain relative  md:right-[2%] mt-[60%] sm:mt-[17%] md:mt-[15%] lg:mt-[12%]"
        />
      </div>

      {/* Stats Section */}
      
      <motion.div 
        className="absolute bottom-88 tracking-tighter sm:bottom-52 md:bottom-16 lg:bottom-auto left-[50%] md:left-[60%] lg:right-8 xl:right-16 2xl:right-60 lg:top-1/2 lg:transform lg:-translate-y-1/2 text-center lg:text-right z-30 flex flex-row lg:flex justify-center  sm:gap-4 lg:gap-8 items-center px-4 sm:px-0"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <div className="text-1xl sm:text-3xl lg:text-4xl font-semibold border-r-2   border-slate-400 flex flex-col justify-center items-center min-w-[50px] sm:min-w-[100px]">
          4k+ <span className="text-xs sm:text-sm block font-normal">Items</span>
        </div>
        <div className="text-1xl sm:text-3xl lg:text-4xl font-semibold border-r-2   border-slate-400 flex flex-col justify-center items-center min-w-[50px] sm:min-w-[100px]">
          10+ <span className="text-xs sm:text-sm block font-normal">Brands</span>
        </div>
        <div className="text-1xl sm:text-3xl lg:text-4xl font-semibold flex flex-col justify-center items-center min-w-[50px] sm:min-w-[100px]">
          4.9 <span className="text-xs sm:text-sm block font-normal">Review</span>
        </div>
      </motion.div>
    </section>
      <ScrollBanner/>
    <CategoryShowcase/>
    </div>
  );
};

export default Hero;