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
import { ContactButtons } from "@/components/ContactButtons"

export default function BusinessValuationPage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Scroll to top of page when component mounts
    window.scrollTo(0, 0)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main id="business-valuation" className="flex-1">
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
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-foreground">Your Challenges</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                As a business owner or manager, you might be facing these key questions:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <Card className="bg-background border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                    </div>
                    <p className="text-muted-foreground">What is my business really worth in today's market?</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                    </div>
                    <p className="text-muted-foreground">How do I justify my valuation to potential investors or buyers?</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                    </div>
                    <p className="text-muted-foreground">What is the trade-off of this strategic decision in the long-term value of the company?</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 20V10"/><path d="m18 20-6-6-6 6"/></svg>
                    </div>
                    <p className="text-muted-foreground">Is this reorganization, partnership or divestment actually creating value — or just shifting it?</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <p className="text-muted-foreground">How do I translate risks, reputation, or potential disruptions into financial terms that boards and investors can understand?</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                    </div>
                    <p className="text-muted-foreground">How do I support negotiations with reliable and objective valuation?</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </div>
                    <p className="text-muted-foreground">How do externalities — such as regulation, ESG pressure or supply chain shifts — affect the value of my business?</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7 12 12l8.7-5"/><path d="M12 22V12"/></svg>
                    </div>
                    <p className="text-muted-foreground">How do I prepare for a future sale or investment round?</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 20V10"/><path d="m18 20-6-6-6 6"/></svg>
                    </div>
                    <p className="text-muted-foreground">How do I balance short-term performance with long-term enterprise value creation?</p>
                  </div>
                </CardContent>
              </Card>
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
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Use of proprietary AI tools to accelerate, expand and deepen insights</p>
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
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Strategic Purposes + Regulatory References</h2>
            <blockquote className="text-xl text-muted-foreground italic mb-12 text-center max-w-3xl mx-auto">
              "Clarify, defend and act on value in relation to financial, legal, strategic, fiscal or governance goals"
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Transactional Contexts</h3>
                <ul className="space-y-4">
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">Mergers & Acquisitions</span>
                    <p className="text-muted-foreground/70 mb-2">→ Valuation to support pricing, negotiation, deal structure and PPA.</p>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/40">• IFRS 3 / CPC 15</li>
                      <li className="text-muted-foreground/40">• CVM 361</li>
                      <li className="text-muted-foreground/40">• Law No. 6,404/76 – Articles 227–264</li>
                    </ul>
                  </li>
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">Fundraising & Investor Onboarding</span>
                    <p className="text-muted-foreground/70 mb-2">→ Establish credible valuation ranges for equity rounds and private placements.</p>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/40">• Corporate Finance best practices and PE/VC due diligence standards</li>
                    </ul>
                  </li>
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">Shareholder Transactions</span>
                    <p className="text-muted-foreground/70 mb-2">→ Entry/exit of shareholders, buybacks, dispute resolution, or price adjustments.</p>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/40">• Brazilian Civil Code / Civil Procedure Code</li>
                      <li className="text-muted-foreground/40">• Shareholders' Agreements</li>
                      <li className="text-muted-foreground/40">• Law No. 6,404/76 – Articles 118, 45, 105</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Accounting & Financial Reporting</h3>
                <p className="text-muted-foreground/70 mb-4">Law No. 6,404/76 – Articles 183–186: Legal framework for accounting valuation of assets and liabilities (fair value, impairment, revaluation)</p>
                <ul className="space-y-4">
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">Purchase Price Allocation (PPA)</span>
                    <p className="text-muted-foreground/70 mb-2">→ Allocation of the purchase price among tangible and intangible assets and goodwill.</p>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/40">• IFRS 3 / CPC 15</li>
                      <li className="text-muted-foreground/40">• CPC 04 – Intangible Assets</li>
                      <li className="text-muted-foreground/40">• CPC 27 – Property, Plant & Equipment</li>
                      <li className="text-muted-foreground/40">• CPC 46 – Fair Value</li>
                      <li className="text-muted-foreground/40">• NBC TA 540 – Accounting Estimates (Audit)</li>
                      <li className="text-muted-foreground/40">• ITG 1000 – SMEs</li>
                    </ul>
                  </li>
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">Financial Reporting Support</span>
                    <p className="text-muted-foreground/70 mb-2">→ Valuation for financial disclosures, impairment testing, and regulatory filings.</p>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/40">• CPC 01 – Impairment</li>
                      <li className="text-muted-foreground/40">• CPC 23 – Accounting Policies</li>
                      <li className="text-muted-foreground/40">• CPC 25 – Provisions and Contingent Liabilities</li>
                      <li className="text-muted-foreground/40">• CPC 32 – Income Taxes</li>
                      <li className="text-muted-foreground/40">• CPC 46 – Fair Value</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Tax, Compliance & Legal</h3>
                <ul className="space-y-4">
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">Tax Optimization & Corporate Reorganization</span>
                    <p className="text-muted-foreground/70 mb-2">→ Valuation for restructuring, mergers, goodwill recognition, and tax compliance.</p>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/40">• Law No. 12,973/2014 – Tax amortization of goodwill</li>
                      <li className="text-muted-foreground/40">• IN RFB 1,700/2017 – Transfer pricing</li>
                      <li className="text-muted-foreground/40">• CPCs 23, 24, 25, 32</li>
                      <li className="text-muted-foreground/40">• Law No. 6,404/76 – Articles 226 and 264</li>
                    </ul>
                  </li>
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">Legal & Dispute Resolution</span>
                    <p className="text-muted-foreground/70 mb-2">→ Expert valuation for litigation, arbitration, or administrative proceedings.</p>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/40">• Brazilian Civil Procedure Code – Articles 464 to 480</li>
                      <li className="text-muted-foreground/40">• Arbitration Chambers (e.g. CAM-CCBC, CIESP/FIESP)</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Capital Markets & Governance</h3>
                <ul className="space-y-4">
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">Capital Market Events & Minority Protection</span>
                    <p className="text-muted-foreground/70 mb-2">→ Fairness opinions, public offerings, shareholder resolutions, and buyouts.</p>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/40">• CVM 361 – Tender offers (OPA)</li>
                      <li className="text-muted-foreground/40">• CVM 480 – Public company registration</li>
                      <li className="text-muted-foreground/40">• CVM 481 – Shareholders' meetings and voting procedures</li>
                      <li className="text-muted-foreground/40">• CVM 565 – Related-party transactions</li>
                      <li className="text-muted-foreground/40">• Law No. 6,404/76 – Articles 4, 20, 137, 256, 264</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">ESG & Integrated Reporting</h3>
                <ul className="space-y-4">
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">ESG-Linked Valuation</span>
                    <p className="text-muted-foreground/70 mb-2">→ Modeling of ESG impacts on risk, cash flow, and value drivers.</p>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/40">• IFRS S2 – Climate-related Disclosures</li>
                      <li className="text-muted-foreground/40">• CVM Resolution 193/2023 – ISSB adoption from 2026</li>
                      <li className="text-muted-foreground/40">• CPC 25, 32, 46</li>
                      <li className="text-muted-foreground/40">• CMN 4,943/2021 – ESG risk in the financial system</li>
                    </ul>
                  </li>
                  <li className="text-foreground">
                    <span className="text-muted-foreground font-semibold block mb-2">Integrated Reporting Support</span>
                    <p className="text-muted-foreground/70 mb-2">→ Valuation as a core input in Integrated Reporting frameworks.</p>
                    <ul className="mt-2 space-y-1 pl-4 border-l-2 border-border">
                      <li className="text-muted-foreground/40">• CVM Resolution 14/2020 – Recommendation for &lt;IR&gt; use</li>
                      <li className="text-muted-foreground/40">• &lt;IR&gt; Framework – IIRC / ISSB</li>
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
              <ContactButtons />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
} 