"use client";
import React from "react";
import FooterGrid from "./FooterGrid";
import { Flashlight, FlashlightIcon, X, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Integration", href: "/integration" },
      { label: "Updates", href: "/updates" },
      { label: "FAQ", href: "/faq" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Manifesto", href: "/manifesto" },
      { label: "Press", href: "/press" },
      { label: "Contract", href: "/contract" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Examples", href: "/examples" },
      { label: "Community", href: "/community" },
      { label: "Guides", href: "/guides" },
      { label: "Docs", href: "/docs" },
      { label: "Press", href: "/press" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/security" },
    ],
  },
};

const Footer = () => {
  return (
    <div className="bg-black min-h-screen py-10 border-t border-border/200 ">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold text-white"
        >
          AI-Driven SEO For Everyone.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex gap-3 justify-center mt-6 p-2 "
        >
          <input
            type="email"
            placeholder="Your Email"
            className="text-white border border-gray-700 text-sm font-bold p-1 sm:p-1.5 w-70 sm:w-90 rounded-md"
          />
          <button className="text-black p-1 sm:p-2 text-sm rounded-md border bg-white">
            Join Waitlist
          </button>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-gray-300 text-sm mt-2"
        >
          No credit card required - 30 days are free for use{" "}
        </motion.h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 py-10 px-10">
        {Object.entries(footerLinks).map(([key, section], index) => (
          <div key={key}>
            <h1 className="text-white font-semibold text-md py-3">
              {section.title}
            </h1>
            <div className="space-y-2">
              {section.links.map((e, index) => (
                <FooterGrid key={index} href={e.href}>
                  {e.label}
                </FooterGrid>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-[95%] border-t border-border/50 mx-auto flex py-8 justify-between">
        <div className="text-gray-300 flex gap-2 ">
          <Zap className="text-red-400" /> © 2025 Your Company, Inc.
        </div>
        <div className="space-x-2">
          <Link
            href={"https://www.x.com"}
            target="_blank"
            className="text-gray-300"
          >
            𝕏
          </Link>
          <Link
            href={"https://www.instagram.com"}
            target="_blank"
            className="text-gray-300"
          >
            Instagram
          </Link>
          <Link
            href={"https://www.facebook.com/"}
            target="_blank"
            className="text-gray-300"
          >
            Facebook
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
