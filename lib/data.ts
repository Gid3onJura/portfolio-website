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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description: "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
