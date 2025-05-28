"use client"

import React, { useState, useEffect } from "react"
import { ModeToggle } from "./mode-toggle"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/70 backdrop-blur-lg shadow-sm border-b border-border/50" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-bold gradient-text">AK</span>
          </motion.div>
        </div>

        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
