"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { 
  ArrowLeft, 
  ArrowRight, 
  Brain, 
  Network, 
  LineChart, 
  Search, 
  FileText, 
  Lightbulb,
  Lock
} from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { DelphionLogo } from "@/components/delphion-logo"

export default function DelphionPage() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    window.scrollTo(0, 0)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-background" />
  }

  // Use resolvedTheme para detecção mais confiável do tema
  const currentTheme = resolvedTheme || theme

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-background overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px]" />
          <div className="absolute inset-0 [mask-image:radial-gradient(black,transparent_70%)]" />

          <div className="container relative">
            <div className="flex flex-col items-start max-w-3xl mx-auto">
              <Link
                href="/#approach"
                className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Our Approach
              </Link>

              <div className="inline-flex items-center rounded-full border border-border/30 bg-muted/10 px-3 py-1 text-sm text-muted-foreground mb-4">
                <span className="mr-1">•</span> Delphion
              </div>

              <div className="mt-4 mb-8 relative">
                <Image
                  src="/images/delphion-logo.png"
                  alt="Delphion Logo Dark"
                  width={600}
                  height={180}
                  priority
                  className="transform -ml-8 dark:block hidden"
                />
                <Image
                  src="/images/delphion-logo-fundo-branco.png"
                  alt="Delphion Logo Light"
                  width={600}
                  height={180}
                  priority
                  className="transform -ml-8 dark:hidden block"
                />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
                AI-Powered Financial & Strategic Intelligence
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Built by Gaelica. Powered by intelligence. Focused on results.
              </p>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Delphion operates as a corporate decision intelligence system, enabling organizations to structure, simulate, and trace high-impact decisions across business units, financial models, and strategic fronts.
                </p>
                <p>
                  At its core, Delphion builds a strategic connectome — a dynamic, AI-augmented map of how decisions emerge, evolve, and influence value.
                </p>
                <p>
                  It's not just about calculating value. It's about structuring how value is created, governed, and multiplied.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Delphion Delivers Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What Delphion Delivers</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">AI-Augmented Valuation Engine</h3>
                  <p className="text-muted-foreground">
                    Structured models, real-time multiples, discount curves, and growth assumptions — integrated and dynamically processed.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Network className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Decision Connectome & Traceability</h3>
                  <p className="text-muted-foreground">
                    Every decision modeled in Delphion is linked to its assumptions, drivers, and ripple effects. A traceable logic system that grows with the business.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Strategic Scenario Engine</h3>
                  <p className="text-muted-foreground">
                    Simulate downside, base, and upside cases. Adjust market, operational, and capital variables to visualize full-chain outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Comparable Benchmarking & Tier Grouping</h3>
                  <p className="text-muted-foreground">
                    Define and refine peer groups. Use AI to extract comparable multiples, margins, and capital structures, automatically.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Insights & Stakeholder Outputs</h3>
                  <p className="text-muted-foreground">
                    Generate targeted reports, Q&A flows, dashboards, and presentations — optimized for clarity, rigor, and strategic speed.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Organizational Decision Intelligence</h3>
                  <p className="text-muted-foreground">
                    Delphion identifies logic patterns, blind spots, and decision bottlenecks. It helps organizations think with structure and act with precision.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Who It's For</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              <div className="bg-background p-6 rounded-lg border border-border">
                <p className="text-muted-foreground">Investment Committees & M&A Teams</p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <p className="text-muted-foreground">CFOs, FP&A & Strategic Finance Leaders</p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <p className="text-muted-foreground">Private Equity & Venture Capital Firms</p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <p className="text-muted-foreground">Corporate Development & Decision Governance Units</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Want to See Delphion in Action?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We are offering early access to selected corporate partners and strategy teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2 bg-[#9b9b9b] hover:bg-[#9b9b9b]/90 text-background" asChild>
                  <Link href="/contact">
                    Request Access <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-[#9b9b9b] text-[#9b9b9b] hover:bg-[#9b9b9b]/10" asChild>
                  <Link href="/contact">
                    Talk to Our Team <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="py-8 bg-card">
          <div className="container">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" />
              <p>Powered by Delphion — Proprietary AI architecture for Strategic Finance and Governance</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
} 