"use client"

import React from "react"
import SectionHeading from "./sectionheading"
import { useSectionInView } from "@/lib/hooks"
import { motion } from "framer-motion"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { experiencesData } from "@/lib/data"

export default function Experience() {
  // const { ref } = useSectionInView("Erfahrung")

  return (
    <section id="experience">
      <SectionHeading>Meine Erfahrungen</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.location}</p>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
