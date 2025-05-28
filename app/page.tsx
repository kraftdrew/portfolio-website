import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Andrew Kravchuk | Data Engineer & BI Developer",
  description:
    "Portfolio of Andrew Kravchuk, a Data Engineer and BI Developer specializing in Snowflake, Azure, Power BI, and Data Platform solutions.",
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Skills />
      {/* <Projects /> */}
    </div>
  )
}
