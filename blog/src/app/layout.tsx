import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import Navbar from "@/components/base/navbar"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Blog Application",
  description: "A modern blog application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="container mx-auto px-4 py-8 max-w-[70%]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

