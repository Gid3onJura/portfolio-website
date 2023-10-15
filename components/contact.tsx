"use client"

import React from "react"
import SectionHeading from "./sectionheading"
import { useSectionInView } from "@/lib/hooks"
import { motion } from "framer-motion"
import { sendEmail } from "@/actions/sendEmail"
import Submitbutton from "./submitbutton"
import toast from "react-hot-toast"

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

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData)
          if (error) {
            toast.error(error)
            return
          }
          toast.success("Email gesendet!")
        }}
      >
        <input
          type="email"
          className="h-14 rounded-lg borderBlack px-4"
          placeholder="Deine Mailadresse"
          required
          maxLength={30}
          name="email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Deine Nachricht"
          required
          maxLength={1000}
          name="message"
        />
        <Submitbutton />
      </form>
    </motion.section>
  )
}
