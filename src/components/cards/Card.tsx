import { LucideIcon } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

interface FeatureCard {
  title:string,
  description:string,
  icon:LucideIcon
}

const Card = ({title,description,icon:Icon}:FeatureCard) => {
  return (
    <motion.div
     initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{delay:0.5}}
    className=' p-6 border border-border/50 backdrop-blur-sm bg-card/50 rounded-lg'>
      <Icon className='text-red-500 w-10 h-10 mb-4'/>
      <h1 className='text-white font-bold mb-2'>{title}</h1>
      <p className='text-muted-foreground text-white'>{description}</p>
    </motion.div>
  )
}

export default Card
