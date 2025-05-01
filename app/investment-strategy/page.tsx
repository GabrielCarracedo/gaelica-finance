"use client"
/** @jsxImportSource react */
import React from 'react';
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  Compass,
  Building,
  Brain,
  BarChart,
  Settings,
} from "lucide-react"
import { useTheme } from "next-themes"
import { SiteFooter } from "@/components/site-footer"

// Add type declarations for JSX elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Business Cycle Curve Component
function BusinessCycleCurve() {
  return (
    <div className="relative w-full max-w-full mx-auto">
      <Image
        src="/images/Grafico de curva ingles.png"
        alt="Business Cycle Curve"
        width={1200}
        height={600}
        className="w-full h-auto scale-125 transform-gpu hidden dark:block"
        priority
      />
      <Image
        src="/images/Grafico de curva ingles light.png"
        alt="Business Cycle Curve"
        width={1200}
        height={600}
        className="w-full h-auto scale-125 transform-gpu dark:hidden"
        priority
      />
    </div>
  )
}

export default function InvestmentStrategyPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Adicionar scroll para o topo quando a página carregar
    window.scrollTo(0, 0)
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground mb-6">
                Investment Strategy
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                In complex and volatile environments, a sound investment strategy is not just a financial tool — it's a compass.
              </p>
              <p className="text-xl text-muted-foreground mb-8">
                At Gaelica Finance, we design investment strategies grounded in deep business insight, macroeconomic intelligence, and advanced modeling, integrating risk, return, liquidity, and purpose. Our approach goes beyond allocation — we align capital with vision.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="#challenges">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Your Challenges Section */}
        <section id="challenges" className="py-16 bg-card">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Your Challenges</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                How do I define the right investment path for my business?
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Capital Structure</h3>
                  <p className="text-muted-foreground">
                    What is the optimal capital structure to support my goals?
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Balance</h3>
                  <p className="text-muted-foreground">
                    How should I balance liquidity, profitability, and long-term value?
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Macroeconomic Impact</h3>
                  <p className="text-muted-foreground">
                    How do macroeconomic shifts impact my capital strategy?
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Trade-offs</h3>
                  <p className="text-muted-foreground">
                    What is the trade-off of this investment vs. other strategic options?
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Data-Driven Decisions</h3>
                  <p className="text-muted-foreground">
                    How can I make my investment decisions more data-driven and defendable?
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why We Do It Section */}
        <section id="why-we-do-it" className="py-16 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why We Do It</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We don't just model scenarios — we clarify strategic pathways, assess trade-offs, and translate uncertainty into structured decision-making.
              </p>
              <p className="text-muted-foreground text-lg">
                Each investment strategy is designed to reflect the company's maturity, cash flow profile, and ambition — from capital preservation to bold transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Business Cycle Curve Section */}
        <section className="py-0 bg-card mt-16">
          <div className="container">
            <div className="text-center mb-0">
              <h2 className="text-3xl font-bold text-foreground mb-0">Business Cycle Analysis</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-0">
                Understanding market cycles is crucial for developing effective investment strategies
              </p>
            </div>
            <div className="mt-0 pt-0 -mt-8">
              <BusinessCycleCurve />
            </div>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section id="what-we-deliver" className="pt-1 pb-16 bg-card">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What We Deliver</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/10 mb-4">
                  <Compass className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Strategic Capital Planning</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Evaluation of capital needs by growth stage and market context</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Alignment between strategic objectives and capital deployment</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Modeling of funding gaps and optimal use of equity, debt, reinvestment</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/10 mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Capital Structure Optimization</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Debt vs. equity analysis with cost of capital benchmarking</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Leverage modeling and covenant impact</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Restructuring plans and simulations</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/10 mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Intelligent Capital Allocation</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Investment prioritization based on ROI, ROIC, IRR and strategic fit</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Scenario-based simulation for competing investment cases</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Decision frameworks and investment governance</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/10 mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Data-Driven Investment Dashboards</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Performance monitoring with integrated KPIs</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Visualization of trade-offs and capital cycles</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real-time financial and strategic signals</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/10 mb-4">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Infrastructure for Decision-Making</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Design of capital committee processes</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Criteria-based assessment tools</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Strategic policy for investment cycles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Methodology Section */}
        <section id="methodology" className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Methodology</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A systematic approach to developing effective investment strategies
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Diagnostic & Assessment</h3>
                      <p className="text-muted-foreground">
                        We begin with a comprehensive analysis of your current capital structure, investment portfolio, and strategic objectives. This includes benchmarking against industry standards and identifying optimization opportunities.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Strategy Development</h3>
                      <p className="text-muted-foreground">
                        Based on our diagnostic findings, we develop a tailored investment strategy that aligns with your business goals, risk tolerance, and market conditions. This includes defining optimal capital allocation, funding strategies, and investment criteria.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Implementation Planning</h3>
                      <p className="text-muted-foreground">
                        We create a detailed roadmap for executing your investment strategy, including timeline, resource requirements, and key milestones. This phase also involves developing governance frameworks and decision-making processes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Monitoring & Optimization</h3>
                      <p className="text-muted-foreground">
                        We establish performance metrics and monitoring systems to track the effectiveness of your investment strategy. Regular reviews and adjustments ensure your strategy remains aligned with changing business conditions and market dynamics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-enhanced Strategy Section */}
        <section id="ai-enhanced" className="py-16 bg-card">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">AI-enhanced Strategy</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Leveraging artificial intelligence to enhance investment decision-making
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Predictive Analytics</h3>
                  <p className="text-muted-foreground mb-4">
                    Our AI models analyze historical data, market trends, and macroeconomic indicators to forecast potential investment outcomes and identify emerging opportunities.
                  </p>
                  <ul className="space-y-2">
                    <li className="text-muted-foreground flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Market trend prediction and pattern recognition</span>
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Scenario modeling with probabilistic outcomes</span>
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Early warning systems for market shifts</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Portfolio Optimization</h3>
                  <p className="text-muted-foreground mb-4">
                    AI algorithms optimize investment portfolios by balancing risk, return, and liquidity constraints while adapting to changing market conditions.
                  </p>
                  <ul className="space-y-2">
                    <li className="text-muted-foreground flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dynamic asset allocation based on real-time data</span>
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Risk factor decomposition and management</span>
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Tax-efficient investment strategies</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Compass className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Due Diligence Automation</h3>
                  <p className="text-muted-foreground mb-4">
                    AI-powered tools streamline the due diligence process by analyzing vast amounts of data to identify risks, opportunities, and potential red flags.
                  </p>
                  <ul className="space-y-2">
                    <li className="text-muted-foreground flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automated financial statement analysis</span>
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Competitive landscape mapping</span>
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Regulatory compliance verification</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Decision Support Systems</h3>
                  <p className="text-muted-foreground mb-4">
                    Interactive dashboards and decision support tools provide real-time insights and recommendations to guide investment decisions.
                  </p>
                  <ul className="space-y-2">
                    <li className="text-muted-foreground flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Interactive visualization of investment scenarios</span>
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Natural language querying of investment data</span>
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Automated reporting and performance tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Track Record & Applications Section */}
        <section id="track-record" className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Track Record & Applications</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Examples of investment strategy applications across different business contexts
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Growth Stage Companies</h3>
                      <p className="text-sm text-muted-foreground">Capital Allocation Strategy</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Supporting companies in their growth journey through balanced capital allocation between development, expansion, and operational needs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Capital Structure</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Growth Strategy</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Valuation</span>
                  </div>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4">
                      <BarChart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Investment Portfolios</h3>
                      <p className="text-sm text-muted-foreground">Portfolio Management</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Developing frameworks for managing diverse investment portfolios, establishing evaluation criteria and resource allocation models.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Portfolio Management</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Resource Allocation</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Performance Metrics</span>
                  </div>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4">
                      <Compass className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Long-term Investment Planning</h3>
                      <p className="text-sm text-muted-foreground">Strategic Wealth Management</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Creating comprehensive investment strategies that balance preservation, growth, and legacy planning objectives.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Wealth Preservation</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tax Efficiency</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Legacy Planning</span>
                  </div>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Business Transformation</h3>
                      <p className="text-sm text-muted-foreground">Strategic Evolution</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Supporting organizations through strategic transitions with investment roadmaps that prioritize key initiatives and operational improvements.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Strategic Planning</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Change Management</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">ROI Analysis</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Develop Your Investment Strategy?</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Let's work together to create a tailored investment strategy that aligns with your business goals and market opportunities.
                </p>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
} 