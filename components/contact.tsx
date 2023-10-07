"use client"

import React from "react"
import SectionHeading from "./sectionheading"
import { useSectionInView } from "@/lib/hooks"
import { motion } from "framer-motion"
import { FaPaperPlane } from "react-icons/fa"

export default function Contact() {
  const { ref } = useSectionInView("Kontakt")

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-40 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Schreibe mir</SectionHeading>
      <p className="text-orange-400 -mt-6">
        Kontaktiere mich direkt über{" "}
        <a className="underline" href="mailto:hbkdes@googlemail.com">
          hbkdes@googlemail.com
        </a>{" "}
        oder über diese Form.
      </p>

      <form className="mt-10 flex flex-col ">
        <input type="email" className="h-14 rounded-lg borderBlack px-4" placeholder="Deine Mailadresse" />
        <textarea className="h-52 my-3 rounded-lg borderBlack p-4" placeholder="Deine Nachricht" />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all
          focus:scale-110 hover:bg-gray-950 hover:scale-110 active:scale-105"
        >
          Senden{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all
          group-hover:translate-x-1
          group-hover:-translate-y-1
          "
          />
        </button>
      </form>
    </motion.section>
  )
}
