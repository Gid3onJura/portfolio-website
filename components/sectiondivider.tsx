"use client"

import React from "react"
import { motion } from "framer-motion"

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-orange-200 my-24 h-16 w-1 rounded-full hidden sm:block"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    ></motion.div>
  )
}
