"use client"

import { motion } from "framer-motion"
import { Send, Instagram, Twitter, Linkedin, Github } from "lucide-react"

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto w-full max-w-2xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Get in Touch
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {"Let's Connect"}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="glass rounded-2xl p-8 sm:p-10"
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="rounded-lg border border-indigo/50 bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="rounded-lg border border-indigo/50 bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your project..."
                className="resize-none rounded-lg border border-indigo/50 bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-[#a855f7] px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
            >
              <Send className="h-4 w-4" />
              Connect
            </button>
          </form>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/10"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 text-center text-xs text-muted-foreground"
        >
          {"Designed & built with passion. \u00A9 2026 All rights reserved."}
        </motion.p>
      </motion.div>
    </section>
  )
}
