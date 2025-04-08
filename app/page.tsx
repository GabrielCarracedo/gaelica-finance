import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { DataVisualization } from "@/components/data-visualization"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"
import { SiteFooter } from "@/components/site-footer"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <Hero />
        <Features />
        <DataVisualization />
        <Testimonials />
        <CallToAction />
      </main>
      <SiteFooter />
    </div>
  )
}
