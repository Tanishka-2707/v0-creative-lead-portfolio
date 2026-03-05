"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

const projects = [
  {
    title: "Travel Journey App Commercial",
    category: "Featured",
    span: "col-span-1 md:col-span-2",
    gradient: "from-indigo/30 to-deep-violet/30",
  },
  {
    title: "GDG Promo Video",
    category: "Promo",
    span: "col-span-1",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Sports Club Posters",
    category: "Design",
    span: "col-span-1",
    gradient: "from-accent/20 to-indigo/20",
  },
  {
    title: "Instagram Reels Collection",
    category: "Social",
    span: "col-span-1 md:col-span-2",
    gradient: "from-deep-violet/20 to-primary/20",
  },
]

export function ShowreelSection() {
  return (
    <section id="showreel" className="relative px-6 py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto w-full max-w-6xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Selected Work
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The Showreel
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className={`group relative cursor-pointer overflow-hidden rounded-xl border border-border/50 ${project.span}`}
            >
              {/* Gradient placeholder background */}
              <div
                className={`aspect-video w-full bg-gradient-to-br ${project.gradient} bg-secondary`}
              />

              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-background/70 backdrop-blur-[5px] transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-primary">
                  <Play className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-widest">
                    View Project
                  </span>
                </div>
                <p className="mt-2 text-lg font-bold text-foreground">{project.title}</p>
              </motion.div>

              {/* Always-visible label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-5">
                <p className="text-xs font-medium uppercase tracking-widest text-primary">
                  {project.category}
                </p>
                <p className="mt-1 text-base font-semibold text-foreground">{project.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
