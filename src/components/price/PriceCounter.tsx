"use client";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface valuecount {
  value: number;
  duration?: number;
}

const PriceCounter = ({ value, duration = 1 }: valuecount) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
        let start = 0
        let increment = value/(duration * 60)
        const timer = setInterval(()=>{
            start +=increment
             if (start >= value) {
                setCount(value)
                clearInterval(timer)
             }else{
                setCount(Math.floor(start))
             }
        },20)
        return () => clearInterval(timer)
    }

  }, [value,duration,isInView]);
  return <div ref={ref} className="inline">{count}</div>;
};

export default PriceCounter;
