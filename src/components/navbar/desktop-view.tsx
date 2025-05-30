"use client";
import React, { useState } from "react";
import MobileNav from "@/components/navbar/MobileNav";
import { Menu, X, Zap } from "lucide-react";
import { motion } from "motion/react";

const DesktopNavbar = () => {
  const [isopen, setIsopen] = useState(false);

  const navigationLinks = [
    { label: "Features", href: "#features" },
    { label: "Dashboard", href: "#dash" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#price" },
  ];

  return (
    <div>
      <div className="bg-black w-full h-16 text-black flex justify-between fixed z-50">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{delay:0.2}}
          className="flex my-auto gap-2 pl-2"
        >
          <Zap className="text-red-500 w-8 h-8 " />
          <h1 className="font-bold text-2xl bg-gradient-to-b from-white to-red-400 text-transparent bg-clip-text">
            BoldWeb
          </h1>
        </motion.div>
        <nav className="m-auto hidden md:flex text-white gap-6 ">
          {navigationLinks.map((nav, i) => (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              key={i}
            >
              <a href={nav.href} className="text-gray-400 font-semibold hover:text-red-400 transition ease-in">
                {nav.label}
              </a>
            </motion.div>
          ))}
        </nav>
        <motion.div 
         initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{delay:0.2}}
        className="float-right relative right-3 my-auto hidden md:block">
          <button className="bg-white rounded-sm text-black px-2 py-2 text-sm">
            Join Waitlist
          </button>
        </motion.div>
        {isopen ? (
          <div className="block md:hidden my-auto p-4">
            <X className="text-white" onClick={() => setIsopen(!isopen)} />
          </div>
        ) : (
          <div className="block md:hidden my-auto p-4">
            <Menu className="text-white " onClick={() => setIsopen(!isopen)} />
          </div>
        )}
      </div>
      <MobileNav isopen={isopen} onClose={() => setIsopen(false)} />
    </div>
  );
};

export default DesktopNavbar;
