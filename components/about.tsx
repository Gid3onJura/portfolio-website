"use client"

import React from "react"
import SectionHeading from "./sectionheading"
import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <SectionHeading>Über mich</SectionHeading>
      <p className="mb-3">
        Meine Begeisterung für Programmierung entdeckte ich bereits in der Schulzeit. Ich entschied, diesen Weg weiter
        zu gehen, in dem ich ein Universität für <span className="font-medium">Informatik</span> besuchte. Dieses
        Studium brachte mir keinen Erfolg und ich fühlte mich nicht als Programmierer. Daher entschied ich eine
        praxisnähere Ausbildung für <span className="font-medium">Anwendungsentwicklung</span> anzufangen. Am{" "}
        <span className="underline">liebsten</span> mag ich am Programmieren den{" "}
        <span className="italic">Aspekt des Problemlösens</span>. Ich liebe das Gefühl, wenn ich endlich eine Lösung für
        ein Problem gefunden habe. Meine Kernefähigkeiten liegen bei{" "}
        <span className="font-medium">PHP, Javascript und MySQL</span>. Sehr vertraut bin ich auch mit React, Node.js
        oder Prisma. Ich bin immer auf der Suche nach neue Technologien zu erlernen.{" "}
      </p>
      <p>
        <span className="italic">Wenn ich nicht programmiere</span>, entspanne ich beim Joggen oder Wandern in der
        Natur. Ich mag es aber auch, gemütlich auf der Couch zu sitzen, um Filme zu schauen oder Video-Spiele zu
        spielen. Um mit den neuen Technologien mitzuhalten <span className="font-medium">programmiere ich privat</span>{" "}
        sehr gerne. Das bringt mich weiter.
      </p>
    </motion.section>
  )
}
