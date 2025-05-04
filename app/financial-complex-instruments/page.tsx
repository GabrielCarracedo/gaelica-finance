"use client"

import { useEffect } from "react"
import { BarChart3, Calculator, FileText, Layers, LineChart, PieChart, Scale, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import { ContactButtons } from "@/components/ContactButtons"

export default function FinancialComplexInstruments() {
  useEffect(() => {
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
                <Scale className="mr-2 h-4 w-4" />
                Financial & Complex Instruments
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground mb-6">
                Financial & Complex Instruments
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Not all assets can be measured with simple metrics. Some require sophisticated judgment, structured valuation, and technical fluency.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                At Gaelica Finance, we support companies, funds, and auditors in the analysis, modeling, and fair value measurement of complex financial instruments — providing transparency, compliance, and credibility to financial statements and strategic decisions.
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
        <section id="challenges" className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-lg text-foreground">Your Challenges</h2>
              <p className="mt-4 body-lg max-w-3xl mx-auto text-muted-foreground">
                Complex financial instruments present unique valuation and analysis challenges
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <Calculator className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Proper Valuation</h3>
                <p className="text-muted-foreground">
                  How do I value structured, hybrid or derivative instruments properly?
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <FileText className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Audit Defense</h3>
                <p className="text-muted-foreground">
                  Are my fair value reports defensible for audit or investor scrutiny?
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <Scale className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Methodology Selection</h3>
                <p className="text-muted-foreground">
                  What methodology applies to this specific instrument or structure?
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <LineChart className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Impact Simulation</h3>
                <p className="text-muted-foreground">
                  Can I simulate the economic impact or accounting sensitivity?
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <PieChart className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Market Consistency</h3>
                <p className="text-muted-foreground">
                  What is the market-consistent value of a contract without liquidity?
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <Shield className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
                <p className="text-muted-foreground">
                  How do I ensure compliance with IFRS, CVM, or internal policies?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Do It Section */}
        <section id="why-we-do-it" className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-lg text-foreground">Why We Do It</h2>
              <p className="mt-4 body-lg max-w-3xl mx-auto text-muted-foreground">
                Instruments with optionality, embedded risks, or bespoke structures demand more than spreadsheets.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <Scale className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
                <p className="text-muted-foreground mb-4">
                  They require expertise, rigor, and contextual judgment.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Deep understanding of financial instrument mechanics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Advanced modeling capabilities for complex structures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Contextual judgment based on market experience</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <Shield className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Regulatory Alignment</h3>
                <p className="text-muted-foreground mb-4">
                  We provide technically grounded, regulation-aligned, and business-aware analysis.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Compliance with IFRS, CVM, and other regulatory frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Audit-ready documentation and methodology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Bridging valuation with governance and decision-making</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-muted/30 p-8 rounded-lg border border-border">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
                <p className="text-muted-foreground">
                  We don't just analyze complex instruments — we provide a bridge between technical valuation and business decision-making, ensuring your financial statements and strategic choices are grounded in rigorous analysis and regulatory compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section id="what-we-deliver" className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-lg text-foreground">What We Deliver</h2>
              <p className="mt-4 body-lg max-w-3xl mx-auto text-muted-foreground">
                Comprehensive solutions for complex financial instruments
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <Calculator className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Fair Value Measurement</h3>
                <p className="text-muted-foreground mb-4">
                  Independent valuation reports for complex financial instruments
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>IFRS-compliant valuation logic and methodology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Benchmarking, market data integration, and calibration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <LineChart className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Financial Modeling & Simulation</h3>
                <p className="text-muted-foreground mb-4">
                  Cash flow modeling under multiple paths or triggers
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Monte Carlo simulation, binomial trees, and Black-Scholes adaptations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Scenario impact on income statement, balance sheet, and covenants</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <Scale className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Instrument-Specific Structuring Support</h3>
                <p className="text-muted-foreground mb-4">
                  Hybrid instruments and embedded derivatives analysis
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Hybrid instruments (convertibles, preference shares, mezzanine debt)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Embedded derivatives (e.g., callable debt, indexed contracts)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Structured notes, derivatives, swaps, options and custom contracts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <PieChart className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Mark-to-Market & Reporting Support</h3>
                <p className="text-muted-foreground mb-4">
                  Ongoing valuation for recurring financial statements
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Level 2 and 3 hierarchy classification under IFRS 13</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Reconciliation support for audit, board, and regulatory review</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <FileText className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Technical Memos & Stakeholder Communication</h3>
                <p className="text-muted-foreground mb-4">
                  Documentation of assumptions, methodology, and sensitivity
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Support in audit and board discussions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Educational bridge between financial teams and technical advisors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Methodology Section */}
        <section id="our-methodology" className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-lg text-foreground">Our Methodology</h2>
              <p className="mt-4 body-lg max-w-3xl mx-auto text-muted-foreground">
                Our integrated approach to complex instrument analysis
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <Scale className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Integrated Process</h3>
                <p className="text-muted-foreground mb-4">
                  Our process integrates deep understanding of instrument mechanics with robust financial modeling.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Deep understanding of instrument mechanics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Robust financial modeling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Valuation standards (IFRS 9, IFRS 13, CVM guidelines)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Alignment with audit expectations and fair disclosure principles</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <LineChart className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Technology Integration</h3>
                <p className="text-muted-foreground mb-4">
                  We leverage advanced technology to enhance our analysis and documentation.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>AI tools for valuation cross-checks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Parameter monitoring and validation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Automated documentation and reporting</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 text-center">Our Four-Step Process</h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    1
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Discovery</h4>
                  <p className="text-muted-foreground">
                    Understanding the instrument structure, terms, and valuation requirements
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    2
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Analysis</h4>
                  <p className="text-muted-foreground">
                    Selecting appropriate valuation methodology and modeling approach
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    3
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Implementation</h4>
                  <p className="text-muted-foreground">
                    Building models, calibrating parameters, and performing valuations
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    4
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Documentation</h4>
                  <p className="text-muted-foreground">
                    Creating comprehensive reports with methodology, assumptions, and results
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-muted/30 p-8 rounded-lg border border-border">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-xl font-semibold mb-4">Continuous Improvement</h3>
                <p className="text-muted-foreground">
                  Our methodology evolves with market developments, regulatory changes, and technological advancements, ensuring our clients receive the most current and effective solutions for their complex financial instruments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases & Applications Section */}
        <section id="use-cases" className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-lg text-foreground">Use Cases & Applications</h2>
              <p className="mt-4 body-lg max-w-3xl mx-auto text-muted-foreground">
                Real-world applications of our complex instrument solutions
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <FileText className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Quarterly and Annual Fair Value Reporting</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive valuation services for financial reporting cycles
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>IFRS-compliant fair value measurements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Audit-ready documentation and methodology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Reconciliation support for financial statements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <Calculator className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Investment Valuation</h3>
                <p className="text-muted-foreground mb-4">
                  Valuation of hybrid or illiquid instruments for investment decisions
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Pre-investment due diligence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Portfolio valuation and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Exit strategy analysis</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <Shield className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Audit Support</h3>
                <p className="text-muted-foreground mb-4">
                  Technical support for audit preparation or review
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Methodology review and validation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Assumption testing and sensitivity analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Auditor communication and support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <Scale className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Financial Engineering</h3>
                <p className="text-muted-foreground mb-4">
                  Structuring analysis for financial engineering
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Custom instrument design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Embedded option analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Risk-return optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <LineChart className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Dispute Resolution</h3>
                <p className="text-muted-foreground mb-4">
                  Independent valuation for shareholder disputes or compliance
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Expert witness support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Litigation support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Regulatory compliance defense</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6">
                  <PieChart className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Risk Management</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive risk analysis for complex instruments
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Counterparty risk assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Market risk modeling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Stress testing and scenario analysis</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-muted/30 p-8 rounded-lg border border-border">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-xl font-semibold mb-4">Tailored Solutions</h3>
                <p className="text-muted-foreground">
                  We develop customized complex instrument solutions that address your specific requirements, whether you're a financial institution, investment fund, corporate treasury, or regulatory body. Our expertise spans the full spectrum of financial instruments, from standard derivatives to highly structured products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="contact" className="py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg text-foreground mb-6">Ready to Get Started?</h2>
              <p className="body-lg text-muted-foreground mb-8">
                Contact us to discuss how we can help with your complex financial instruments
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