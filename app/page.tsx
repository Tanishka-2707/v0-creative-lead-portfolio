"use client"

import { Starfield } from "@/components/starfield"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ShowreelSection } from "@/components/showreel-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="cosmic-bg relative min-h-screen overflow-x-hidden">
      <Starfield />
      <Navbar />
      <main>
        <HeroSection />
        <ShowreelSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  )
}
