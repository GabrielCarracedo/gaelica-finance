"use client"

import { useEffect } from "react"
import { Building2, Users, BookOpen, ArrowRight, RefreshCw, ChevronRight, CheckCircle2, MessageSquare, FileText, GraduationCap, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import React from 'react'
import { SiteFooter } from "@/components/site-footer"

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo)
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

export default function CorporateGovernanceAdvisory() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ErrorBoundary>
      <div className="flex min-h-screen flex-col bg-background">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="container relative">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col items-start gap-4">
                  <div className="inline-flex items-center rounded-lg border bg-background/50 px-3 py-1 text-sm backdrop-blur-sm">
                    <Building2 className="mr-2 h-4 w-4" />
                    <span>Corporate Governance Advisory</span>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Governance is not about restriction — it's about realization.
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    At Gaelica, we see governance as the silent engine that transforms power into value — and ambiguity into clarity. Not merely a mechanism of oversight, but a framework of alignment. A living architecture that protects what matters most — including from the very forces that could compromise it.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Link 
                      href="#our-approach"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                    >
                      Explore Our Approach
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Challenges Section */}
          <section id="challenges" className="py-20 bg-muted/50">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Your Challenges</h2>
                <p className="text-xl text-muted-foreground">
                  Navigating the complexities of corporate governance in today's evolving business landscape
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Family Business Structure</h3>
                  </div>
                  <p className="text-muted-foreground">
                    How do I structure governance in a family-owned or evolving business?
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Power Alignment</h3>
                  </div>
                  <p className="text-muted-foreground">
                    How do I align power, voice, and responsibility among partners and executives?
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Board Model Selection</h3>
                  </div>
                  <p className="text-muted-foreground">
                    What's the right board model for the stage and strategy of my company?
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <RefreshCw className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Generational Continuity</h3>
                  </div>
                  <p className="text-muted-foreground">
                    How do I ensure generational continuity without compromising agility?
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <ArrowUpRight className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Strategic Advantage</h3>
                  </div>
                  <p className="text-muted-foreground">
                    How do I make governance a strategic advantage — not a mere safeguard?
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why We Do It Section */}
          <section id="why-we-do-it" className="py-20">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <div className="bg-card rounded-lg p-8 shadow-sm border">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MessageSquare className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Why We Do It</h2>
                    <p className="text-xl text-muted-foreground">
                      Because governance is not a bureaucratic obligation — it's a strategic asset. It channels authority with fairness, and enables decisions with legitimacy.
                    </p>
                    <blockquote className="text-lg italic border-l-4 border-primary pl-4 mt-4">
                      Our role is to design governance systems that bring coherence, agility, and resilience — adapted to your reality and future vision.
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Advisory Approach Section */}
          <section id="our-approach" className="py-20 bg-muted/50">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Our Advisory Approach</h2>
                <p className="text-xl text-muted-foreground">
                  A comprehensive framework for building effective governance structures
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Family Business & Complex Structures</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Stakeholder and influence mapping across ownership, management, and legacy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Review of shareholder dynamics, succession pathways, and governance pain points</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Identification of power asymmetries and governance blind spots</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Governance Architecture & Design</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Creation of tailored frameworks: decision rights, board structure, roles & processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Support in building policies for succession, conflict resolution, transparency, sustainability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Integration with organizational culture and strategic cycles</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Board Maturity & Effectiveness</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Definition of profiles and roles (internal, external, independent)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Board member selection, onboarding and development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Charters, mandates, and operational rituals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Shadow boards and pilot programs for progressive governance</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Empowerment Through Shared Language</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Tailored governance literacy programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Capacity building for founders, partners, heirs, or new board members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Education on governance culture and its strategic purpose</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 bg-card rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <RefreshCw className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Governance as a Living System</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span>Cycles of review, refinement, and evolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span>Adjustments triggered by growth, complexity, or external demand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span>Preparation for capital markets, partnerships, or liquidity events</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground italic">
                  We also integrate governance with living layers of intelligence, such as our Delphion initiative — a strategic platform developed to support real-time decision-making, pattern recognition, and institutional memory across evolving structures.
                </p>
              </div>
            </div>
          </section>

          {/* Methodology Section */}
          <section id="methodology" className="py-20">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Methodology: A Phased Journey</h2>
                <p className="text-xl text-muted-foreground">
                  Our structured approach to building effective governance
                </p>
              </div>
              <div className="max-w-3xl mx-auto">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Stakeholder Mapping & Diagnosis</h3>
                      <p className="text-muted-foreground">
                        Interviews, material review, trust-mapping, governance gap analysis
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Model & Design</h3>
                      <p className="text-muted-foreground">
                        Proposal of governance structure and policies aligned to context
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Board Structuring</h3>
                      <p className="text-muted-foreground">
                        Profile matrix, selection support, operating design
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Empowerment & Capacity Building</h3>
                      <p className="text-muted-foreground">
                        Training and onboarding of new actors
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Pilot Governance & Refinement</h3>
                      <p className="text-muted-foreground">
                        Trial period, observation, recalibration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deliverables Section */}
          <section id="deliverables" className="py-20 bg-muted/50">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight mb-4">What We Deliver</h2>
                <p className="text-xl text-muted-foreground">
                  Tangible outputs that drive governance excellence
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Strategic Diagnostic</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Comprehensive governance diagnostic report
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Governance Model</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Tailored model and board structuring
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Policy Framework</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Policy drafts for continuity, conflict and legitimacy
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Training Plans</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Onboarding and training plans
                  </p>
                </div>
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <ArrowUpRight className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Future Roadmap</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Governance roadmap and future-readiness plan
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Transform Your Governance?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Let's discuss how we can help you build a governance framework that drives value and enables sustainable growth.
                </p>
                <div className="bg-card rounded-lg p-8 shadow-sm border">
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MessageSquare className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Contact Us</h3>
                    <div className="text-center space-y-2">
                      <p className="font-semibold">Gabriel C. Carracedo</p>
                      <p className="text-muted-foreground">Partner, Gaelica Finance</p>
                      <div className="space-y-1">
                        <p className="flex items-center justify-center gap-2">
                          <span className="text-muted-foreground">📞</span>
                          <a href="tel:+5511999168448" className="hover:text-primary">+55 (11) 99916-8448</a>
                        </p>
                        <p className="flex items-center justify-center gap-2">
                          <span className="text-muted-foreground">📧</span>
                          <a href="mailto:gcarracedo@gaelicafinance.com" className="hover:text-primary">gcarracedo@gaelicafinance.com</a>
                        </p>
                        <p className="flex items-center justify-center gap-2">
                          <span className="text-muted-foreground">🌐</span>
                          <a href="https://www.gaelicafinance.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">www.gaelicafinance.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </ErrorBoundary>
  )
} 