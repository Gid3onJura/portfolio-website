import React, { useState, useEffect } from "react"
import { useActiveSectionContext } from "@/context/activeSectionContext"
import { useInView } from "react-intersection-observer"
import { SectionName } from "./types"

// type useSectionInViewProps = {
//   sectionName: SectionName
// }

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
    ref,
  }
}
