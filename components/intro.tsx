"use client"

import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              alt="avatar"
              src="/avatar.jpg"
              width={200}
              height={200}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-orange-900 object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-3xl absolute bottom-0 right-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🤘
          </motion.span>
        </div>
      </div>
    </section>
  )
}
