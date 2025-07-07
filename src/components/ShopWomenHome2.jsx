// src/components/ShopWomenHome2.jsx
import React from "react";

export default function ShopWomenHome2() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-[#f9f8f4]">
      {/* Left Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900">
          Best street style <br />
          moments of 2025 <br />
          in sweden
        </h2>
        <button className="bg-black text-white text-sm font-semibold px-6 py-3 rounded-full">
          SHOP WOMEN’S
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <img
          src="/category1.jpeg" // Update this path based on your setup
          alt="Street Style 2025"
          className="w-full max-w-[500px] mx-auto object-cover rounded"
        />
      </div>
    </section>
  );
}
