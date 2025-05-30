"use client"
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

interface footer {
  href:string,
  children:React.ReactNode
}
const FooterGrid = ({href,children}:footer) => {
  return (
    <motion.div 
    whileHover={{x:4}}
    transition={{duration:0.2 }}
    >
      <Link href={href} className='text-gray-300'>
      {children}
      </Link>
    </motion.div>
  )
}

export default FooterGrid
