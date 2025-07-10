// src/components/Home2TopCollections.jsx
import React from "react";
import { motion } from "framer-motion";

const collections = [
  {
    title: "Ethereal Luxe Tote",
    image: "/model.png", 
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
];

export default function Home2TopCollections() {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
        Top Collections
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
        {collections.map((item, index) => (
          <motion.div
            key={index}
      
            className={`relative overflow-hidden rounded-lg ${item.colSpan || ""}`}
          >
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              src={item.image}
              alt={item.title}
              className="w-full h-full "
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <h3 className="text-white text-lg md:text-xl font-extrabold text-center px-2">
                {item.title}
              </h3>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
             className="absolute w-full bg-black/10 h-full inset-0  flex items-end justify-center ">
              <h3 className="text-black text-2xl md:text-xl text-center px-3 py-2 mb-13 text-upper bg-amber-50 rounded-full">
                VIEW PRODUCT
              </h3>
            </motion.div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
