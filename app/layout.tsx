import Header from "@/components/header"
import "./globals.css"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gideon Jura | Personal Portfolie",
  description: "Full-Stack-Developer Portfolio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-gray-700 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
        <div className="bg-[#b89767] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#0c90a1] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <Header />

        {children}

        {/* <Footer /> */}
      </body>
    </html>
  )
}