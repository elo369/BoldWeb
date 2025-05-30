"use client";
import React from 'react'
import { BarChart2, Bell, Brain, LineChart, Search, Target } from 'lucide-react';
import Card from './Card';
import { motion } from 'framer-motion';
const features = [
  {
    title: 'User-Friendly Dashboard',
    description: 'Perform complex SEO audits and optimizations with a single click.',
    icon: BarChart2,
  },
  {
    title: 'Visual Reports',
    description: "Visual insights into your site's performance.",
    icon: LineChart,
  },
  {
    title: 'SEO Goal Setting',
    description: 'Helps you set and achieve SEO goals with guided assistance.',
    icon: Target,
  },
  {
    title: 'Content Evaluation',
    description: 'Simple corrections for immediate improvements.',
    icon: Search,
  },
  {
    title: 'Smart Keyword Generator',
    description: 'Automatic suggestions and the best keywords to target.',
    icon: Brain,
  },
  {
    title: 'Automated Alerts',
    description: 'Automatic notifications about your SEO health, including quick fixes.',
    icon: Bell,
  },
];

const ContainerCard = () => {
  return (
    <div id='features' className='bg-black py-24 min-h-screen'>
      <div className='mx-auto items-center flex flex-col space-y-3 px-8'>
        <motion.h1 
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className='font-bold text-4xl text-white'>Elevate your SEO efforts.</motion.h1>
        <motion.p 
         initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className='text-gray-400 text-2xl'>Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.</motion.p>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 '>
        {features.map((card,index)=>(
            <Card
             key={index}
             title={card.title}
             description={card.description}
             icon={card.icon}
            />
        ))}
      </div>
      </div>
    </div>
  )
}

export default ContainerCard
