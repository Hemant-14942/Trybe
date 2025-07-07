// src/components/ProductHome2.jsx
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "Ridge knit jacket",
    price: 85,
    image: "/mens1.jpeg", // replace with correct image paths
  },
  {
    title: "Adventure Ready Boys’ Sweater",
    price: 45,
    image: "/model.png",
  },
  {
    title: "Pure Whimsy Baby Tee",
    price: 32,
    image: "/category1.jpeg",
  },
  {
    title: "Ultimate Comfort FlexFit Leggings",
    price: 32,
    image: "/model.png",
  },
];

export default function ProductHome2() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white text-black">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
        Popular Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 place-items-center">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
