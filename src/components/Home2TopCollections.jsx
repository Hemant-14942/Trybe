// src/components/Home2TopCollections.jsx
import React from "react";

const collections = [
  {
    title: "Ethereal Luxe Tote",
    image: "/model.png", // replace with actual path
    colSpan: "col-span-2 row-span-2",
  },
  {
    title: "CozyEdge Coat",
    image: "/mens1.jpeg",
  },
  {
    title: "BreezeBloom Dress",
    image: "/category1.jpeg",
  },
  {
    title: "LunaLayer Jacket",
    image: "/model.png",
  },
];

export default function Home2TopCollections() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
        Top Collections
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
        {collections.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg ${item.colSpan || ""}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <h3 className="text-white text-lg md:text-xl font-semibold text-center px-2">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
