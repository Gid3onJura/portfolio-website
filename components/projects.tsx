import React from "react"
import SectionHeading from "./sectionheading"
import { projectsData } from "@/lib/data"
import Project from "./project"

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading>Projekte</SectionHeading>
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
