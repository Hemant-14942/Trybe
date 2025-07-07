// src/components/Home2ElegantDressCollc.jsx
import React from "react";

export default function Home2ElegantDressCollc() {
  return (
    <section className="px-6 md:px-16 py-20 bg-white grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Side */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">2025</h2>
          <p className="text-gray-700 mt-2 max-w-sm">
            Discover timeless elegance with our curated collection of stylish dresses, perfect for every occasion.
          </p>
        </div>
        <img
          src="/category1.jpeg"
          alt="Main Elegant"
          className="rounded-lg w-full object-cover"
        />
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-8">
        <h2 className="text-6xl font-semibold text-gray-900">Elegant dress collection</h2>

        {/* Product 1 */}
        <div>
          <h3 className="text-lg font-medium">FrostShield Jacket</h3>
          <p className="text-sm text-gray-600">Stay warm, stylish, and cozy in cold weather.</p>
          <p className="text-sm font-semibold mt-1">$89.99</p>
        </div>

        {/* Grid of 2 product cards */}
        <div className="grid grid-cols-2 gap-4">
          {/* Product 2 */}
          <div>
            <img
              src="/mens1.jpeg"
              alt="Arctic Puff Coat"
              className="w-full h-auto object-cover rounded"
            />
            <h3 className="text-sm font-medium mt-2">ArcticPuff Coat</h3>
            <p className="text-sm font-semibold">$99.99</p>
          </div>

          {/* Product 3 */}
          <div>
            <img
              src="/model.png" 
              alt="SnowGuard Parka"
              className="w-full h-auto object-cover rounded"
            />
            <h3 className="text-sm font-medium mt-2">SnowGuard Parka</h3>
            <p className="text-sm font-semibold">$119.99</p>
          </div>
        </div>
      </div>
    </section>
  );
}
