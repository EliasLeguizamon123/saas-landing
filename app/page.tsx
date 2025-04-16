"use client"

import Header from "@/components/Header"
import Features from "@/sections/Features"
import Hero from "@/sections/Hero"
import Footer from "@/sections/Footer"

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
