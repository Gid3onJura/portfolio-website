"use client"

import React from "react"
import SectionHeading from "./sectionheading"
import { useSectionInView } from "@/lib/hooks"
import { motion } from "framer-motion"

export default function Experience() {
  const { ref } = useSectionInView("Erfahrung")

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 max-w-[53rem] text-center sm:mb-40">
      <SectionHeading>Meine Erfahrungen</SectionHeading>
      sdsdsdsd sdsdsdsd sdsdsdsd sdsdsdsd sdsdsdsd sdsdsdsd sdsdsdsd sdsdsdsd sdsdsdsd sdsdsdsd
    </section>
  )
}
