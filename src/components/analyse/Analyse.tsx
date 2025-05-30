"use client";
import { Target } from "lucide-react";
import React from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const data = [
  { value: 40000 },
  { value: 35000 },
  { value: 45000 },
  { value: 55000 },
  { value: 35000 },
  { value: 40000 },
  { value: 45000 },
  { value: 35000 },
  { value: 50000 },
];

const fadeInUp = {
  hidden:{opacity:0,y:20},
  visible:{opacity:1,y:0}
}

const fadeinscale = {
  hidden:{opacity:0,scale:0.9},
  visible:{opacity:1,scale:1}
}
const Analyse = () => {
  return (
    <div className="min-h-screen bg-black px-6 w-full space-y-3">
      <motion.div 
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      transition={{duration:0.5}}
      viewport={{once:true,margin:"-100px"}}
      className="pt-3 text-center"
      >
        <h1 className="font-bold text-3xl md:text-5xl text-gray-200 w-[80%] md:w-[60%] mx-auto">
          Making Search Engine Optimization Effortless and Accessible Through
          the Power of AI.
        </h1>
      </motion.div>
        <motion.div 
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        viewport={{once:true,margin:"-100px"}}
        variants={fadeinscale}
        className="grid md:grid-cols-2 gap-6 px-6 max-w-6xl mx-auto"
        >
          <div className=" bg-gradient-to-b from-zinc-900 to-zinc-950 space-y-6 p-8 rounded-xl">
            <div className="w-24 relative h-16">
              <div>
                <Target className="text-red-600" />
              </div>
            </div>
            <h2 className="font-bold text-2xl text-white">SEO Goal Setting</h2>
            <p className="text-zinc-400">
              Helps you set and achieve SEO goals with guided assistance.
            </p>
          </div>
          <div className=" bg-gradient-to-b from-zinc-900 to-zinc-950 space-y-6 p-6 rounded-2xl">
            <div className=" flex justify-between items-baseline">
              <span className="text-red-500">Visibility</span>
              <div>
                <span className="text-white font-bold text-2xl">20.88%</span>
                <span className="text-green-400 text-1xl ml-1">+8.8%</span>
              </div>
            </div>
            <div className="h-[100px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#db0f2e"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <h1 className="text-white font-bold text-2xl">
              User-friendly Dashboard
            </h1>
            <p className="text-gray-400 text-1xl">
              Perform complex SEO audits and optimizations with a single click.
            </p>
          </div>
        </motion.div>
        <motion.div 
         initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        viewport={{once:true,margin:"-100px"}}
        variants={fadeinscale}
        className=" w-[88%] mx-auto pt-5 col-span-2">
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 rounded-2xl">
            <div className="justify-between flex p-4">
              <h1 className="text-red-600">Traffic</h1>
              <div>
                <span className="font-bold text-white text-2xl">90.9K</span>
                <span className="text-green-400 ml-1">+10.7%</span>
              </div>
            </div>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#db0f2e"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="p-3 space-y-3">
              <h1 className="font-bold text-white text-2xl">Visual Reports</h1>
              <p className="text-gray-300">
                Visual insights into your site's performance.
              </p>
            </div>
          </div>
        </motion.div>
    </div>
  );
};

export default Analyse;
