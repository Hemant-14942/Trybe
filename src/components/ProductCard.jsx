// src/components/ProductCard.jsx
import React from "react";

export default function ProductCard({ image, title, price }) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 ">
        <div className="w-[250px] h-[340px] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-[250px] h-[340px] object-cover bg-[#f3f3f0] rounded hover:scale-115 transition duration-300 ease-in-out"
      />
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-500">NONE &nbsp; | &nbsp; <span className="text-black font-semibold">${price}</span></p>
      </div>
    </div>
  );
}
