"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const handleScrollToShowreel = (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.querySelector("#showreel")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="intro"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-20"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto w-full max-w-6xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl font-bold leading-none tracking-tight text-foreground sm:text-7xl lg:text-8xl"
        >
          TANISHKA
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            JAIN
          </span>
          <br />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 text-lg text-muted-foreground sm:text-xl"
        >
          Creative Lead | Videographer | PR Manager
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10"
        >
          <button
            onClick={handleScrollToShowreel}
            className="group relative inline-flex items-center gap-2 rounded-full border border-primary/50 px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:text-primary animate-pulse-glow"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10">View my Odyssey</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-scroll-indicator" />
        </div>
      </motion.div>
    </section>
  )
}
