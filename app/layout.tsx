import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import { Chatbot } from "@/components/chatbot"
import "./globals.css"

export const metadata: Metadata = {
  title: "Bader Ech-chalh - Email Marketing Specialist & Developer",
  description:
    "Professional portfolio of Bader Ech-chalh, Email Marketing Specialist & Developer with expertise in cloud platforms, database development, and digital marketing.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
        <Chatbot />
      </body>
    </html>
  )
}
