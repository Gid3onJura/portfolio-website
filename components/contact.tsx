"use client"

import React from "react"
import SectionHeading from "./sectionheading"
import { useSectionInView } from "@/lib/hooks"
import { motion } from "framer-motion"

export default function Contact() {
  const { ref } = useSectionInView("Kontakt", 0.5)

  return (
    <section ref={ref} id="contact" className="scroll-mt-28 max-w-[53rem] text-center sm:mb-40">
      <SectionHeading>Kontakt</SectionHeading>
      sdsdsdsd sdsdsdsd sdsdsdsd sdsdsdsd sdsdsdsd sdsdsdsd sdsdsdsd sdsdsdsd sdsdsdsd sdsdsdsd
    </section>
  )
}
