"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "This product has completely transformed how I manage my projects and deadlines",
    author: "Talia Taylor",
    role: "Digital Marketing Director @ Quantum",
    image:
      "https://i.pinimg.com/474x/59/91/ab/5991ab031c825e28e5a0e9a88d9af02d.jpg",
  },
  {
    quote:
      "The AI-powered insights have given us a competitive edge in our market",
    author: "Marcus Chen",
    role: "SEO Specialist @ TechFlow",
    image:
      "https://i.pinimg.com/736x/ca/cb/19/cacb196590d8f40c55d825902e8ab733.jpg",
  },
  {
    quote:
      "Implementing this solution doubled our organic traffic in just 3 months",
    author: "Sarah Mitchell",
    role: "Growth Lead @ Innovate",
    image:
      "https://i.pinimg.com/474x/40/08/b9/4008b900de9d0f325fdb856f352058f4.jpg",
  },
];

const Testimonials = () => {
  const [change, setChange] = useState(0);

  let next = () => {
    setChange((current) => (current + 1) % testimonials.length);
  };

  let previous = () => {
    setChange(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div id="testimonial" className="bg-black min-h-screen py-10">
      <div className="mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bold text-4xl md:text-6xl text-white"
        >
          Our Clients
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-xl mx-auto max-w-3xl"
        >
          Hear firsthand how our solutions have boosted online success for users
          like you.
        </motion.p>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={change}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 items-center max-w-6xl pt-20 mx-auto"
            >
              <div className="sm:w-[300px] sm:h-[350px] w-[250px] h-[250px]  relative mx-auto ">
                <div className="absolute rounded-2xl inset-0 bg-gradient-to-t from-red-900/50 to-transparent z-10" />
                <img
                  src={testimonials[change].image}
                  alt="testimonials"
                  className="rounded-2xl w-full h-full object-cover object-center"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-700/20 rounded-full blur-2xl" />
                <div className="absolute inset-0 border-2 border-red-500/20 rounded-2xl transform translate-x-4 translate-y-4" />
              </div>
              <div className="flex flex-col gap-7">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative text-white sm:text-3xl md:text-4xl sm:text-center sm:pt-4 md:pt-0 md:text-start"
                >
                  "{testimonials[change].quote}"
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center md:items-start"
                >
                  <span className="text-white font-semibold ">
                    {testimonials[change].author}
                  </span>
                  <span className=" text-red-500">
                    {testimonials[change].role}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex gap-4 justify-center mt-12">
          <button
            onClick={previous}
            className="rounded-full p-1 border text-white border-gray-100/20 bg-gray-800 hover:border-red-400 hover:bg-gray-600 "
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="rounded-full p-1 border text-white border-gray-100/20 bg-gray-800 hover:border-red-400 hover:bg-gray-600 "
          >
            <ChevronRight />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setChange(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                change === index ? "bg-red-500 w-6" : "bg-red-800"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
