import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


// Animation Variants
const textVariants = {
  hidden: (dir) => ({
    x: dir === "left" ? -200 : 200,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const imageVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: 0.3 },
  },
};

// Slide Component
const CarouselSlide = ({ title, subtitle, imgLeft, imgRight, direction }) => {
  return (
    <div className="relative w-full min-h-screen bg-[#fefcf8] overflow-hidden flex items-center justify-center">
      {/* Title */}
      <motion.h1
        className="absolute top-24 text-6xl md:text-8xl font-bold text-[#1B1B1B] z-0"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={direction}
      >
        {title}
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        className="absolute top-44 text-6xl md:text-8xl font-bold text-[#1B1B1B] mt-12 z-3"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={direction === "left" ? "right" : "left"}
      >
        {subtitle}
      </motion.h2>

      {/* Left Image */}
      <motion.img
        src={imgLeft}
        alt="left visual"
        className="absolute top-[12%] left-[35%] w-40 md:w-60 z-2"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Right Image */}
      <motion.img
        src={imgRight}
        alt="right visual"
        className="absolute top-[28%] right-[33%] w-40 md:w-60 z-2"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      />
    </div>
  );
};

// Main Carousel Component
const Home2Carousel = () => {
  const slides = [
    {
      title: "2025 SUMMER",
      subtitle: "COLLECTION",
      imgLeft: "/category1.jpeg",
      imgRight: "/mens1.jpeg",
      direction: "left",
    },
    {
      title: "NEW ARRIVAL",
      subtitle: "PICKS",
      imgLeft: "/model.png",
      imgRight: "/mens1.jpeg",
      direction: "right",
    },
    {
      title: "EXCLUSIVE",
      subtitle: "DROPS",
      imgLeft: "/category1.jpeg",
      imgRight: "/model.png",
      direction: "left",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen">
      <CarouselSlide key={index} {...slides[index]} />

      {/* Navigation Buttons */}
      <div className="absolute bottom-10 w-full flex justify-center gap-6 z-10">
            <button
                onClick={prevSlide}
                className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition"
            >
                <ChevronRight size={24} />
            </button>
        </div>

    </div>
  );
};

export default Home2Carousel;
