import React from "react";
import { motion } from "motion/react";

interface MotibeType {
  isopen: boolean;
  onClose: () => void;
}
const MobileNav = ({ isopen, onClose }: MotibeType) => {
  const navigationLinks = [
    { label: "Features", href: "#features" },
    { label: "Dashboard", href: "#dash" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#price" },
  ];
  return (
    <div>
      {isopen && (
        <nav className="justify-center h-90 items-center p-2 flex text-white gap-6 flex-col w-full bg-black ">
          {navigationLinks.map((nav, i) => (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i}
            >
              <motion.a href={nav.href} className="text-gray-400 font-bold">
                {nav.label}
              </motion.a>
            </motion.div>
          ))}
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
