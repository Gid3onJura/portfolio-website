import React from "react"
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components"

import { Tailwind } from "@react-email/tailwind"

type ContactFormEmailProps = {
  contactMessage: string
  contactEmail: string
}

export default function ContactFormEmail({ contactMessage, contactEmail }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Neue Nachricht von deiner NextJs-Portfolio-Seite</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">Folgende Nachricht vom Kontaktformular:</Heading>
              <Text>{contactMessage}</Text>
              <Hr />
              <Text>Die Mail-Adresse des Senders ist: {contactEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
