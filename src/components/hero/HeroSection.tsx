"use client"
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Cover } from "@/components/ui/cover";
import { easeInOut, motion } from "framer-motion";
import { Code2Icon, File, MonitorCheck } from "lucide-react";

const HeroSection = () => {
   const floatingElements = [
    { id: 1, left: 10, top: 40, icon: <File className="w-8 h-8 text-red-500 sm:inline-block hidden" />},
    { id: 2, left: 50, top: 15, icon: <MonitorCheck className="w-8 h-8 text-red-500 hidden sm:inline-block" /> },
    { id: 3, left: 85, top: 70, icon: <Code2Icon className="w-8 h-8 text-red-500 hidden sm:inline-block" /> },
  ];
  return (
    <div className="min-h-screen w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div >
        <motion.button 
        initial={{opacity:0,y:10}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-0.5 text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>Transfering idea into reality</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </motion.button>
      </div>
      <div className="pt-3 text-center">
        <motion.h1 
         initial={{opacity:0,y:10,filter:"blur(10px)"}}
        whileInView={{opacity:1,y:0,filter:"blur(0)"}}
        viewport={{once:true}}
        className="font-bold  text-5xl text-gray-200 ">
          Build amazing websites <br /> with <Cover>BoldWeb</Cover>
        </motion.h1>
      </div>
      <div className="pt-3 sm:mx-auto px-3 sm:px-0  sm:w-[50%]">
        <motion.p 
         initial={{opacity:0,y:10}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className="text-gray-500 sm:text-2xl text-4   text-center ">
          Create stunning, high-performance web applications with our modern
          development solutions. Experience the perfect blend of design and
          functionality.
        </motion.p>
      </div>
      <div className="flex item-center justify-center gap-2 pt-4">
        <motion.button 
         initial={{opacity:0,y:10}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.2}}
        className="bg-gradient-to-r from-gray-300 to-red-800 rounded-sm text-black py-2 px-4 text-sm font-semibold">
          Get Started
        </motion.button>
        <motion.button 
         initial={{opacity:0,y:10}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.4}}
        className="bg-white rounded-sm text-black py-2 px-4 text-sm font-semibold">
          Learn More
        </motion.button>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element)=>(
             <motion.div 
             key={element.id}
           initial={{opacity:0,y:20}}
           animate={{opacity:1,y:0}}
           >
            <motion.div 
            className="absolute"
            style={{
              top:`${element.top}%`,
              left:`${element.left}%`
            }}
            animate={{
              y:[0,-20,0],
              opacity:[1,0.8,1]
            }}
            transition={{
              ease:"easeInOut",
              delay:1+element.id * 0.8,
              repeat:Infinity,
              duration:3
            }}
            >
                  {element.icon}
            </motion.div>
           </motion.div>
        ))}
          
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default HeroSection;
