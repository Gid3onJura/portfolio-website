"use server"

import React from "react"
import { Resend } from "resend"
import { getErrorMessage, validateEmail, validateString } from "@/lib/utils"
import ContactFormEmail from "@/email/contact-form"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const contactEmail = formData.get("email") as string
  const contactMessage = formData.get("message")
  const contactTo = process.env.RESEND_TO

  if (!validateString(contactEmail, 30) || !validateEmail(contactEmail)) {
    return {
      error: "Email invalide",
      statusCode: 400,
    }
  }

  if (!validateString(contactMessage, 1000)) {
    return {
      error: "Message invalide",
      statusCode: 400,
    }
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: contactTo as string,
      subject: "Portfolio Contact Message - " + contactEmail,
      reply_to: contactEmail as string,
      // text: contactMessage as string,
      react: React.createElement(ContactFormEmail, {
        contactMessage: contactMessage as string,
        contactEmail: contactEmail as string,
      }),
    })
  } catch (error: unknown) {
    console.log(error)
    return {
      error: getErrorMessage(error),
      statusCode: 500,
    }
  }
}
