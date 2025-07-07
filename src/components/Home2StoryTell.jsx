// src/components/Home2StoryTell.jsx
import React from "react";

export default function Home2StoryTell() {
  return (
    <section className="bg-[#fdfbf7] py-20 px-6 md:px-16 flex flex-col items-center text-center md:flex-row md:justify-center md:text-left gap-10">
      {/* Left Image */}
      <div className="md:w-1/3 flex justify-center">
        <img
          src="/category1.jpeg" 
          alt="Left Style"
          className="w-[250px] md:w-[300px] rotate-[-12deg] rounded-lg shadow-lg"
        />
      </div>

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
      <div className="md:w-1/3 flex justify-center">
        <img
          src="/model.png" 
          alt="Right Style"
          className="w-[300px] md:w-[340px] rotate-[20deg] rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
