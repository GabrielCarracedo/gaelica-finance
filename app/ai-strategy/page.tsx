"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Layers,
  Code,
  Users,
  Network,
  Brain,
  Lightbulb,
  ArrowLeft,
} from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

export default function AIStrategyPage() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-background overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px]" />
          <div className="absolute inset-0 [mask-image:radial-gradient(black,transparent_70%)]" />

          <div className="container relative">
            <div className="flex flex-col items-start max-w-3xl mx-auto">
              <Link
                href="/#services"
                className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>

              <div className="inline-flex items-center rounded-full border border-border/30 bg-muted/10 px-3 py-1 text-sm text-muted-foreground mb-4">
                <span className="mr-1">•</span> AI Strategy
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                AI Strategy & Business Transformation
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Strategic Intelligence for Business Evolution
              </p>

              <p className="text-xl text-muted-foreground mb-8">
                At Gaelica Finance, we believe that the transformative power of Artificial Intelligence lies not in following trends, but in applying strategic clarity to each opportunity.
              </p>

              <p className="text-xl text-muted-foreground mb-8">
                Our AI Strategy & Business Transformation service delivers a structured diagnosis of where and how AI can elevate your business — whether through operational efficiency, financial modeling automation, strategic insight, or customer-centric innovation.
              </p>

              <p className="text-xl text-muted-foreground">
                Unlike generic consultancies, we apply what we propose. Our experience in leading-edge AI development — including the creation of proprietary solutions like Delphion, our AI-powered valuation and analytics platform — ensures that each recommendation is grounded in practical expertise, technical execution, and strategic precision.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Approach</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Strategic Gap Assessment</h3>
                  <p className="text-muted-foreground">
                    We map business processes, workflows, and decision layers to uncover where AI can create tangible improvements.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Opportunity Prioritization</h3>
                  <p className="text-muted-foreground">
                    We assess AI use cases by feasibility, ROI potential, risk profile, and alignment with your business priorities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Network className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Roadmap Development</h3>
                  <p className="text-muted-foreground">
                    We design a tailored, phased roadmap to embed AI initiatives with speed, efficiency, and strategic coherence.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Technology & Execution Advisory</h3>
                  <p className="text-muted-foreground">
                    From models to platforms to integration, we guide decisions across build-or-buy options with a business-first lens.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Proof of Concept & Pilot Oversight</h3>
                  <p className="text-muted-foreground">
                    We help design, manage, and evaluate pilots to validate value before broader deployment — reducing risks and accelerating learning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Strategic Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Strategic Benefits</h2>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Enhanced Decision-Making Speed & Precision</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Cost and Process Optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Scalable Innovation with AI as a Growth Driver</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Governance and Responsible Deployment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Competitive Edge through Applied Intelligence</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Gaelica Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Gaelica</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">We Build What We Recommend</h3>
                  <p className="text-muted-foreground">
                    From Delphion to proprietary automations, our portfolio reflects real-world delivery — not theory.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Senior-Led Strategy & Execution</h3>
                  <p className="text-muted-foreground">
                    Your project is led by experienced partners with deep expertise in finance, AI, governance, and innovation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Selective Tech Ecosystem</h3>
                  <p className="text-muted-foreground">
                    We work with a curated set of AI developers, platforms, and specialists — always tailored to your business context.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Clarity Over Hype</h3>
                  <p className="text-muted-foreground">
                    We don't sell buzzwords. We deliver insight, roadmap, and value creation rooted in strategic logic.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Lead With Intelligence?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's identify where AI can move the needle in your business — and make it real.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}