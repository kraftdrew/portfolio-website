import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Andrew Kravchuk | Data Engineer & BI Developer",
  description:
    "Portfolio of Andrew Kravchuk, a Data Engineer and BI Developer specializing in Snowflake, Azure, Power BI, and Data Platform solutions.",
  keywords: [
    "Andrew Kravchuk",
    "Data Engineer",
    "BI Developer",
    "Snowflake",
    "Azure",
    "Power BI",
    "Data Platform",
    "Python",
    "SQL",
  ],
  authors: [{ name: "Andrew Kravchuk" }],
  creator: "Andrew Kravchuk",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andrewkravchuk.com",
    title: "Andrew Kravchuk | Data Engineer & BI Developer",
    description:
      "Portfolio of Andrew Kravchuk, a Data Engineer and BI Developer specializing in Snowflake, Azure, Power BI, and Data Platform solutions.",
    siteName: "Andrew Kravchuk Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Andrew Kravchuk Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Kravchuk | Data Engineer & BI Developer",
    description:
      "Portfolio of Andrew Kravchuk, a Data Engineer and BI Developer specializing in Snowflake, Azure, Power BI, and Data Platform solutions.",
    creator: "@andrewkravchuk",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}


import './globals.css'