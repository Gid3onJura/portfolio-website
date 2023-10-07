"use client"

import Image from "next/image"
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"
import { useSectionInView } from "@/lib/hooks"
import { useActiveSectionContext } from "@/context/activeSectionContext"

export default function Intro() {
  const [pastYears, setPastYears] = useState(0)
  useEffect(() => {
    const year = new Date("2020-08-01").getFullYear()
    const currentYear = new Date().getFullYear()
    setPastYears(currentYear - year)
  }, [])

  const { ref } = useSectionInView("Start", 0.5)

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section ref={ref} id="start" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
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
              className="h-24 w-24 rounded-full border-[0.35rem] border-orange-300 object-cover shadow-xl"
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

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, Ich bin Richard.</span> Ich bin ein{" "}
        <span className="font-bold">Full-Stack Entwickler</span> mit{" "}
        <span className="font-bold">{pastYears > 8 ? "mehr als 8" : pastYears} Jahren</span> Berufserfahrung. Ich liebe
        es <span className="italic">Web-Seiten & Apps</span> zu bauen.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 
          hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all"
        >
          Schreibe mir{" "}
          <BsArrowRight
            className="opacity-70 group-hover:translate-x-1 transition"
            onClick={() => {
              setActiveSection("Kontakt")
              setTimeOfLastClick(Date.now())
            }}
          />
        </Link>

        <a
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 
          hover:scale-110 active:scale-105 transition-all group cursor-pointer border border-black/10"
          href="/CV.pdf"
          download
        >
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] 
          hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all group cursor-pointer border border-black/10"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] 
          hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all group cursor-pointer border border-black/10"
          href="https://github.com/Gid3onJura"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
