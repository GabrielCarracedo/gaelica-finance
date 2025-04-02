import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { DataVisualization } from "@/components/data-visualization"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#141414]">
      <SiteHeader />
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

