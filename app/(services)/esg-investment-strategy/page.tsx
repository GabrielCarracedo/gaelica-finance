"use client"

import React, { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { Leaf, ArrowRight, BarChart3, PieChart, TrendingUp, LineChart, Layers, Shield, Scale, Briefcase, Compass, Brain, Building } from "lucide-react"
import Image from "next/image"

export default function ESGInvestmentStrategyPage() {
  useEffect(() => {
    // Ensure the page starts at the top when loaded
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-background overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px]" />
          <div className="absolute inset-0 [mask-image:radial-gradient(black,transparent_70%)]" />
          
          <div className="container relative">
            <div className="flex flex-col items-start max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-muted/30 bg-muted/10 px-3 py-1 text-sm text-muted-foreground mb-4">
                <Leaf className="mr-2 h-4 w-4" />
                ESG & Investment Strategy
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground mb-6">
                Sustainable Value Creation Through Intentional Capital Allocation
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                At Gaelica, we embed ESG principles into investment strategy not as a trend, but as a critical layer of business logic. We support clients in building strategies where environmental, social, and governance factors are not externalities — they're value drivers.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-[#9b9b9b] hover:bg-[#9b9b9b]/90 text-background">
                  <Link href="#challenges">
                    Explore Our Approach
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Your Challenges Section */}
        <section id="challenges" className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Your Challenges</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Navigating the intersection of ESG and investment performance
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Performance Integration</h3>
                <p className="text-muted-foreground">
                  How do I integrate ESG without compromising performance?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Capital Access</h3>
                <p className="text-muted-foreground">
                  Can sustainability enhance my access to capital?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">ROI Assessment</h3>
                <p className="text-muted-foreground">
                  What's the ROI of ESG-aligned investments?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <PieChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Capital Planning</h3>
                <p className="text-muted-foreground">
                  How do I structure a capital plan that meets both financial and impact goals?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Decision Alignment</h3>
                <p className="text-muted-foreground">
                  How do I align internal decision-making with external sustainability expectations?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section id="what-we-deliver" className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What We Deliver</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive ESG investment strategy solutions
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4">
                    <Compass className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">ESG-Integrated Capital Planning</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Mapping of ESG risks and opportunities across investment cycles
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Alignment of capital allocation with impact objectives
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Simulation of trade-offs between sustainability and financial performance
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Sustainable Capital Structures</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Structuring green and sustainability-linked debt
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Modeling of ESG-adjusted cost of capital
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Alignment with frameworks such as IFRS S2, CVM 193, SFDR, and ISSB
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Impact-Based Investment Prioritization</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Tools to compare initiatives based on ROI + ESG materiality
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Support for decision-making under stakeholder and regulatory scrutiny
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Design of ESG governance for investment committees
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">ESG Dashboards & Investment Policies</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Integrated monitoring of financial and non-financial KPIs
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Policy frameworks to embed ESG in recurring capital decisions
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Reporting aligned with global standards (e.g. &lt;IR&gt;, SDG, TCFD)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section id="why-it-matters" className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why It Matters</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The strategic value of ESG integration
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="w-24 h-24 flex items-center justify-center rounded-full bg-primary/10">
                      <Leaf className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Strategic Advantage Through ESG</h3>
                    <p className="text-muted-foreground mb-4">
                      Companies that treat ESG as a strategic vector — not a reporting duty — outperform in resilience, access to capital, and stakeholder trust.
                    </p>
                    <p className="text-muted-foreground">
                      We help organizations evolve from ESG awareness to ESG intelligence, transforming sustainability from a compliance requirement into a competitive advantage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3 mt-8">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Enhanced Resilience</h3>
                  <p className="text-muted-foreground">
                    ESG-integrated strategies build organizational resilience against market volatility and regulatory changes.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Improved Capital Access</h3>
                  <p className="text-muted-foreground">
                    ESG-aligned companies attract a broader range of investors and benefit from lower cost of capital.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Stakeholder Trust</h3>
                  <p className="text-muted-foreground">
                    Strong ESG performance builds trust with customers, employees, and communities, creating long-term value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Integrate ESG into Your Investment Strategy?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's work together to create a sustainable investment strategy that aligns with your business goals and ESG objectives.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                  Contact Us
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