"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"
import { useTheme } from "next-themes"
import { SiteFooter } from "@/components/site-footer"

export default function BusinessValuationPage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
                href="/#services"
                className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>

              <div className="inline-flex items-center rounded-full border border-border/30 bg-muted/10 px-3 py-1 text-sm text-muted-foreground mb-4">
                <span className="mr-1">•</span> Business Valuation
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                Business Valuation
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                In a world of increasingly complex decisions and competitive pressure, knowing the real value of your company is not optional — it's strategic.
              </p>

              <p className="text-xl text-muted-foreground mb-8">
                At <span className="font-bold">Gaelica Finance</span>, we deliver accurate, defensible, and context-aware valuations using advanced financial modeling, benchmark analysis, proprietary AI tools, and multidimensional frameworks that integrate legal, fiscal, ESG and governance insights.
              </p>

              <Button size="lg" className="gap-2 bg-[#9b9b9b] hover:bg-[#9b9b9b]/90 text-background" asChild>
                <Link href="#contact">
                  Contact Our Valuation Team <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Your Challenges</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Common questions our clients face when approaching business valuation
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">What is the real economic value of my company today?</p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    How do I support negotiations with reliable and objective valuation?
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    Which method is most appropriate for my business model and stage?
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    How do I use valuation to attract investment or prepare for a transaction?
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">Can I trust the numbers behind the value someone is proposing?</p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    How do externalities — such as regulation, ESG pressure or supply chain shifts — affect the value of my business?
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <blockquote className="text-xl text-muted-foreground italic max-w-3xl mx-auto">
                "Valuation is no longer just a financial requirement — it's a strategic lens.<br />
                And great questions lead to great decisions."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Why Gaelica Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Why Gaelica?</h2>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">2,000+ business valuations conducted across diverse industries</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      300+ Purchase Price Allocations (PPAs) in compliance with IFRS 3 / CPC 15
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Specialists with 20+ years in Corporate Finance and Valuation</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Sophisticated financial modeling with scenario and sensitivity analysis</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Integration of ESG, tax and governance dimensions in our assessments</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Sectors we serve:</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground">Tech, SaaS and Digital Media</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground">Healthcare, Biotech and Pharma</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground">Retail, Consumer Goods and Franchising</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground">Financial Services and Funds</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground">Industrial and Manufacturing</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground">Energy, Agribusiness and Natural Resources</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border col-span-2">
                    <p className="text-muted-foreground">Startups, Scale-ups and Family Businesses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valuation Services Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Valuation Services & Strategic Purposes</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/10 mb-4">
                  <span className="font-bold text-muted-foreground">1</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Equity & Enterprise Valuation</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>DCF modeling with scenario-based projections</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>WACC estimation and capital structure modeling</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Terminal value and sensitivity analysis</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/10 mb-4">
                  <span className="font-bold text-muted-foreground">2</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Market Benchmarking</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Public comparables and transaction multiples</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Peer group analysis with governance, risk, and liquidity adjustments</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Blended and cross-check approaches</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/10 mb-4">
                  <span className="font-bold text-muted-foreground">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Asset-Based Valuation</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Balance sheet revaluation and fair value adjustments</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Suitable for distressed, asset-intensive, or low-operating-cash companies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/10 mb-4">
                  <span className="font-bold text-muted-foreground">4</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Valuation of Intangibles & Startups</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Brand, technology, IP, goodwill</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Non-traditional models for high-growth or pre-revenue businesses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Purposes Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Strategic Purposes + Regulatory References</h2>
            
            <div className="max-w-3xl mx-auto text-center mb-12">
              <blockquote className="text-xl text-muted-foreground italic">
                "We don't just calculate value — we clarify it, defend it, and turn it into action.<br />
                Each valuation is crafted with purpose, aligning financial precision with legal, strategic, fiscal, or governance goals — because value only matters when it's connected to the right decision."
              </blockquote>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Transactional Contexts</h3>
                <ul className="space-y-4">
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">Mergers & Acquisitions</span>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/50">IFRS 3 / CPC 15</li>
                      <li className="text-muted-foreground/50">CVM 361</li>
                    </ul>
                  </li>
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">Fundraising & Investor Onboarding</span>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/50">Corporate Finance & PE/VC best practices</li>
                    </ul>
                  </li>
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">Shareholder Transactions</span>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/50">Código Civil / CPC</li>
                      <li className="text-muted-foreground/50">Shareholders' Agreements</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Accounting & Financial Reporting</h3>
                <ul className="space-y-4">
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">Purchase Price Allocation (PPA)</span>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/50">IFRS 3 / CPC 15, CPC 01, 04, 27, 46</li>
                      <li className="text-muted-foreground/50">NBC TA 540, ITG 1000</li>
                    </ul>
                  </li>
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">Financial Reporting Support</span>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/50">CPCs applicable to evaluated asset/liability</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Tax, Compliance & Legal</h3>
                <ul className="space-y-4">
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">Tax Optimization & Reorganization</span>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/50">Lei nº 12.973/2014, IN RFB 1.700/2017</li>
                      <li className="text-muted-foreground/50">CPCs: 23, 24, 25, 32</li>
                      <li className="text-muted-foreground/50">Lei nº 6.404/76</li>
                    </ul>
                  </li>
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">Legal & Dispute Resolution</span>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/50">CPC – Art. 464 to 480</li>
                      <li className="text-muted-foreground/50">Arbitration chambers (CAM-CCBC, etc.)</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">ESG & Integrated Reporting</h3>
                <ul className="space-y-4">
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">ESG-Linked Valuation</span>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/50">IFRS S2, CVM 193/2023</li>
                      <li className="text-muted-foreground/50">CPC 25, 32, 46</li>
                      <li className="text-muted-foreground/50">CMN 4.943/2021</li>
                    </ul>
                  </li>
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">Integrated Reporting Support</span>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/50">CVM 14/2020</li>
                      <li className="text-muted-foreground/50">&lt;IR&gt; Framework – IIRC/ISSB</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AI Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">AI-Powered Financial Intelligence</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We engineer AI into our methodology to unlock clarity, speed, and strategic depth.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-background p-4 rounded-lg border border-border">
                  <p className="text-muted-foreground">Benchmarking at scale</p>
                </div>
                <div className="bg-background p-4 rounded-lg border border-border">
                  <p className="text-muted-foreground">Extraction of strategic and financial signals</p>
                </div>
                <div className="bg-background p-4 rounded-lg border border-border">
                  <p className="text-muted-foreground">Scenario simulation and value-driver analysis</p>
                </div>
                <div className="bg-background p-4 rounded-lg border border-border">
                  <p className="text-muted-foreground">Automation in modeling, audit trails and documentation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Contact Our Valuation Team</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to get started? Our team is here to help you navigate the complexities of business valuation.
              </p>

              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">📞</span>
                  <a href="tel:+5511999168448" className="text-foreground hover:text-foreground/80">
                    +55 (11) 99916-8448
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">📧</span>
                  <a href="mailto:gcarracedo@gaelicafinance.com" className="text-foreground hover:text-foreground/80">
                    gcarracedo@gaelicafinance.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">🌐</span>
                  <a href="https://www.gaelicafinance.com" className="text-foreground hover:text-foreground/80">
                    www.gaelicafinance.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
} 