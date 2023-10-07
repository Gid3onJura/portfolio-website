import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import aitools from "@/public/aitools.png"
import reactnativeapp from "@/public/reactnativeapp.png"
import travelapp from "@/public/travelapp.png"

export const links = [
  {
    name: "Start",
    hash: "#start",
  },
  {
    name: "Ich",
    hash: "#about",
  },
  {
    name: "Projekte",
    hash: "#projects",
  },
  {
    name: "Fähigkeiten",
    hash: "#skills",
  },
  {
    name: "Erfahrung",
    hash: "#experience",
  },
  {
    name: "Kontakt",
    hash: "#contact",
  },
] as const

export const experiencesData = [
  {
    title: "Ausbildung Anwendungsentwickler",
    location: "Halle, DE",
    description: "dreijährige Ausbildung zum Anwendungsentwickler",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Backend-Developer",
    location: "Halle, DE",
    description: "Nach der Ausbildung habe ich weitere Erfahrung im Bereich Backend (NodeJS, MySQL, Docker) gesammelt",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Halle, DE",
    description:
      "Auf der Suche nach neuen Herausforderungen und der Aussicht auf Web-/App-Entwicklung, gefunden und sehr zufrieden mit der Entscheidung.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const

export const projectsData = [
  {
    title: "AI-Tools",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: aitools,
  },
  {
    title: "Karate Lern App",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: reactnativeapp,
  },
  {
    title: "Mobile Travel App",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: travelapp,
  },
] as const

export const skillsData = [
  "PHP",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "React-Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MySQL",
  "GraphQL",
  "Express",
  "Framer Motion",
] as const
