"use client"

import { motion } from "framer-motion"
import { Film, Figma, Palette, Users, Megaphone, Trophy } from "lucide-react"

const tools = [
  { name: "Wondershare Filmora", icon: Film },
  { name: "Figma", icon: Figma },
  { name: "Canva", icon: Palette },
]

const timeline = [
  {
    role: "Creative Lead",
    description: "Spearheading visual identity and creative direction across campaigns and multimedia projects.",
    icon: Users,
  },
  {
    role: "PR Management",
    description: "Crafting compelling narratives and managing public-facing communications for events and organizations.",
    icon: Megaphone,
  },
  {
    role: "Event Hosting (GDG/Sports)",
    description: "Hosting and organizing community events, workshops, and sports meetups with engaging on-stage presence.",
    icon: Trophy,
  },
]

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto w-full max-w-6xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Capabilities
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The Toolkit & Leadership
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Block A: The Toolbox */}
          <div>
            <h3 className="mb-8 text-2xl font-bold text-foreground">The Toolbox</h3>
            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-6"
            >
              {tools.map((tool) => {
                const Icon = tool.icon
                return (
                  <motion.div
                    key={tool.name}
                    variants={itemFadeUp}
                    className="galaxy-border flex flex-col items-center gap-3 rounded-2xl bg-card p-6 animate-float-y"
                    style={{ animationDelay: `${Math.random() * 1.5}s` }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{tool.name}</span>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Block B: Leadership Odyssey */}
          <div>
            <h3 className="mb-8 text-2xl font-bold text-foreground">Leadership Odyssey</h3>
            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative flex flex-col gap-8"
            >
              {/* Timeline line */}
              <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />

              {timeline.map((item) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.role}
                    variants={itemFadeUp}
                    className="relative flex gap-5 pl-2"
                  >
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-card">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{item.role}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
