"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className='w-full h-full relative flex justify-center items-center'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, ease: "easeInOut" }}
        className="relative"
      >
        {/* Photo and circle with same size */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.5, ease: "easeInOut" }}
          className="w-[180px] h-[180px] xl:w-[400px] xl:h-[400px] relative"
        >
          {/* Image */}
          <Image
            src="/assets/t.jpg"
            fill
            priority
            quality={100}
            alt=""
            className='object-cover rounded-full'
          />

          {/* Animated circle */}
          <motion.svg
            className="w-full h-full absolute top-0 left-0"
            fill="transparent"
            viewBox="0 0 420 420"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="210"
              cy="210"
              r="208"
              stroke="#00ff99"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "10 5" }}
              animate={{
                strokeDasharray: ["15 25 5 5", "10 50 20 20", "5 208 10 10"],
                rotate: [0, 360]
              }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo
