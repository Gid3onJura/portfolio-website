"use client"

import React from "react"
import SectionHeading from "./sectionheading"
import { projectsData } from "@/lib/data"
import Project from "./project"
import { useSectionInView } from "@/lib/hooks"

export default function Projects() {
  const { ref } = useSectionInView("Projekte", 0.5)

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>Meine Projekte</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
