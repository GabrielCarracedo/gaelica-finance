"use client"

import React, { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { PieChart, TrendingUp, LineChart, Layers, Shield, Scale, Briefcase, Compass, Brain, Building, ArrowRight, ChevronRight, CheckCircle, Settings, DollarSign, Wallet, Calculator, AlertTriangle, ChartBar, Target, Zap, BarChart3, Leaf } from "lucide-react"
import { ContactButtons } from "@/components/ContactButtons"

export default function PortfolioOptimizationPage() {
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
                <PieChart className="mr-2 h-4 w-4" />
                Portfolio Optimization
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground mb-6">
                Maximize Returns Through Strategic Portfolio Management
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                At Gaelica Finance, we help you optimize your investment portfolio using advanced statistical models, market analysis, and risk management techniques. Our data-driven approach ensures your portfolio is strategically aligned with your financial goals.
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
                Navigating the complexities of portfolio management
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Asset Allocation</h3>
                <p className="text-muted-foreground">
                  How do I determine the optimal mix of assets for my investment goals?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Risk Management</h3>
                <p className="text-muted-foreground">
                  How can I balance risk and return in my portfolio?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Performance Tracking</h3>
                <p className="text-muted-foreground">
                  How do I measure and improve my portfolio's performance?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Market Timing</h3>
                <p className="text-muted-foreground">
                  When should I adjust my portfolio in response to market changes?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Cost Efficiency</h3>
                <p className="text-muted-foreground">
                  How can I minimize fees and taxes while maximizing returns?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Rebalancing Strategy</h3>
                <p className="text-muted-foreground">
                  How often should I rebalance my portfolio to maintain optimal allocation?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Do It Section */}
        <section id="why-we-do-it" className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why We Do It</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every portfolio tells a story — of past bets, current performance, and future direction.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Compass className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Strategic Clarity</h3>
                <p className="text-muted-foreground mb-4">
                  We bring clarity to your portfolio's story by identifying what creates value, what destroys it, and what must evolve. Our analysis goes beyond numbers to reveal the strategic implications of your investment decisions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Value creation identification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Performance pattern analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Strategic evolution mapping</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Purpose-Driven Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  Our goal is not just optimization on spreadsheets — it's alignment with purpose and performance. We help you create portfolios that reflect your strategic vision while maximizing returns.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Strategic vision alignment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Performance optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Purpose-driven allocation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-muted/50 p-8 rounded-lg border border-border">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Our Commitment</h3>
                <p className="text-muted-foreground">
                  We are committed to helping you transform your portfolio from a collection of assets into a strategic asset that drives your organization's success. Through our data-driven approach and strategic expertise, we ensure your portfolio optimization aligns with your long-term vision while delivering measurable results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section id="what-we-deliver" className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What We Deliver</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive portfolio optimization solutions tailored to your needs
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <ChartBar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Portfolio Performance Diagnostics</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive evaluation of your portfolio's contribution to enterprise value and performance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Evaluation of portfolio contribution to enterprise value</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Risk-return mapping of assets, units or business lines</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Identification of underperformers and capital misallocation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Compass className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Strategic Prioritization Frameworks</h3>
                <p className="text-muted-foreground mb-4">
                  Data-driven frameworks to help you make informed decisions about resource allocation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Scorecards that balance strategic fit, scalability, and ROI</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Capital reallocation recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Support for grow / fix / exit decisions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Financial Modeling of Portfolio Scenarios</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced modeling to evaluate different portfolio scenarios and their potential outcomes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">What-if analysis for divestments, scaling, M&A or reinvestment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Integrated cash flow and valuation impact simulations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Sensitivity analysis and capital efficiency comparisons</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Optimization under Constraints</h3>
                <p className="text-muted-foreground mb-4">
                  Sophisticated optimization techniques that consider your specific constraints and objectives.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Portfolio design considering liquidity, capital cost, governance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Budget allocation modeling under multiple objectives</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">AI-driven optimization with customizable constraints</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">ESG & Impact-Based Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  Portfolio optimization that aligns with your sustainability and impact goals.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Alignment of portfolio to sustainability and impact goals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Risk exposure analysis to ESG-related disruptions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Frameworks for blended value and mission-aligned capital</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Methodology Section */}
        <section id="our-methodology" className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Methodology</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We apply a hybrid methodology combining strategic logic, financial rigor, and computational power.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Strategic Logic</h3>
                <p className="text-muted-foreground mb-4">
                  We begin with a deep understanding of your business context, strategic objectives, and market dynamics. This foundation informs all our analytical work.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Business context analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Strategic objective alignment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Market dynamics assessment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Financial Rigor</h3>
                <p className="text-muted-foreground mb-4">
                  Our financial analysis combines traditional metrics with advanced modeling techniques to provide a comprehensive view of your portfolio's performance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Advanced financial modeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Risk-return analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Valuation frameworks</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <div className="bg-muted/50 p-8 rounded-lg border border-border">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-xl font-bold text-foreground mb-4 text-center">Computational Power</h3>
                  <p className="text-muted-foreground mb-6 text-center">
                    From intuitive dashboards to complex simulations, our process reveals how capital is working — and how it could work better.
                  </p>
                  
                  <div className="grid gap-6 md:grid-cols-3 mt-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                        <LineChart className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-foreground mb-2">Data Analytics</h4>
                      <p className="text-sm text-muted-foreground">
                        Advanced analytics to identify patterns and opportunities
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Brain className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-foreground mb-2">AI Integration</h4>
                      <p className="text-sm text-muted-foreground">
                        Machine learning algorithms for predictive insights
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Settings className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-foreground mb-2">Optimization Tools</h4>
                      <p className="text-sm text-muted-foreground">
                        Sophisticated tools to maximize portfolio efficiency
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-card p-8 rounded-lg border border-border">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Tailored to Your Needs</h3>
                <p className="text-muted-foreground">
                  Whether you manage a corporate portfolio of units and projects or an investment portfolio of assets and ventures, we help you decide with precision. Our methodology adapts to your specific context, constraints, and objectives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases & Applications Section */}
        <section id="use-cases" className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Use Cases & Applications</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real-world applications of our portfolio optimization solutions
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Institutional Investors</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive portfolio optimization for institutional investors, helping them achieve their investment objectives while managing risk.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Asset allocation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Risk management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Performance attribution</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Private Equity</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic portfolio optimization for private equity firms, helping them maximize returns and manage risk across their investment portfolio.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Portfolio construction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Risk assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Exit planning</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Hedge Funds</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced portfolio optimization for hedge funds, helping them maximize alpha generation while managing risk.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Strategy optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Risk management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Performance attribution</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Family Offices</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive portfolio optimization for family offices, helping them preserve and grow wealth across generations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Wealth preservation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Tax optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Legacy planning</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Strategic Applications</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Asset Allocation</h4>
                  <p className="text-muted-foreground">
                    Optimizing asset allocation to maximize returns while managing risk across different market conditions.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Risk Management</h4>
                  <p className="text-muted-foreground">
                    Comprehensive risk management strategies to protect portfolio value in volatile markets.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Performance Attribution</h4>
                  <p className="text-muted-foreground">
                    Detailed analysis of portfolio performance to identify sources of returns and areas for improvement.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-muted/50 p-8 rounded-lg border border-border">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Tailored Solutions</h3>
                <p className="text-muted-foreground">
                  We understand that each organization has unique needs and challenges. That's why we develop customized portfolio optimization solutions that address your specific requirements and drive your business forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Analytical Backbone Section */}
        <section id="technology" className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Technology & Analytical Backbone</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our portfolio optimization approach blends financial acumen with computational power
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border mb-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Quantitative & AI-enhanced Techniques</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 mr-3 mt-0.5">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">Modern Portfolio Theory (Markowitz)</h4>
                        <p className="text-muted-foreground">For efficient frontier analysis</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 mr-3 mt-0.5">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">Monte Carlo Simulations</h4>
                        <p className="text-muted-foreground">To test portfolio resilience across stochastic environments</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 mr-3 mt-0.5">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">Linear and Nonlinear Optimization</h4>
                        <p className="text-muted-foreground">To allocate capital under constraints</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 mr-3 mt-0.5">
                        <span className="text-primary font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">AI-assisted Modeling</h4>
                        <p className="text-muted-foreground">To identify patterns in asset behavior, simulate strategic moves, and calibrate reallocation rules</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 mr-3 mt-0.5">
                        <span className="text-primary font-bold">5</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">Scenario Engines</h4>
                        <p className="text-muted-foreground">Integrating macroeconomic, regulatory, and sector-specific drivers</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg border border-border">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg text-muted-foreground mb-4">
                  We don't just analyze — we simulate, iterate, and optimize dynamically.
                </p>
                <p className="text-muted-foreground">
                  This enables decision-makers to explore future paths with clarity, and act with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Optimize Your Portfolio?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's work together to develop a strategic portfolio that aligns with your financial goals and risk tolerance.
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