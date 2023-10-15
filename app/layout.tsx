import Header from "@/components/header"
import "./globals.css"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import ActiveSectionContextProvider from "@/context/activeSectionContext"
import { Toaster } from "react-hot-toast"
import Themeswitch from "@/components/themeswitch"
import ThemeContextProvider from "@/context/themeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gideon Jura | Personal Portfolie",
  description: "Full-Stack-Developer Portfolio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-700 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div
          className="bg-[#b89767] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]
        dark:bg-[#946263]"
        ></div>
        <div className="bg-[#0c90a1] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Themeswitch />
            <Toaster position="top-right" />
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
