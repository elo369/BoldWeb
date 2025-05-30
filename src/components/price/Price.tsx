"use client";
import React from "react";
import { motion } from "framer-motion";
import Template from "./Template";

const plans = [
  {
    title: "Basic",
    price: 29,
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
    ],
  },
  {
    title: "Pro",
    price: 79,
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
    ],
    isPopular: true,
  },
  {
    title: "Business",
    price: 149,
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
      "Multi-user access",
      "API integration",
    ],
  },
];

const Price = () => {
  return (
    <div className="min-h-screen bg-black mx-auto px-4 py-10">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bold text-4xl md:text-6xl text-white"
        >
          Pricing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-xl py-1 mx-auto max-w-3xl"
        >
          Choose the right plan to meet your SEO needs and start optimizing
          today.
        </motion.p>
        <div className="grid md:grid-cols-3 py-6 gap-4 mx-auto w-[80%]">
          {plans.map((e, index) => (
            <Template
              key={index}
              title={e.title}
              price={e.price}
              isPopular={e.isPopular}
              features={e.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
