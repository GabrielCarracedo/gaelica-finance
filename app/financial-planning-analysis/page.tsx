"use client"

import React, { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { BarChart3, TrendingUp, LineChart, Layers, Shield, Scale, Briefcase, Compass, Brain, Building, ArrowRight, ChevronRight, CheckCircle, Settings, DollarSign, Wallet, Calculator, AlertTriangle, ChartBar, Target, Zap, Leaf, LineChart as LineChartIcon, Search, Database, Lightbulb, Mail, MessageSquare } from "lucide-react"
import { ContactButtons } from "@/components/ContactButtons"

export default function FinancialPlanningAnalysisPage() {
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
                <BarChart3 className="mr-2 h-4 w-4" />
                Financial Planning & Analysis
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground mb-6">
                Shape Your Future with Financial Insights
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                In a volatile and capital-sensitive environment, understanding your numbers is not enough — you must shape the future with them. At Gaelica Finance, we deliver integrated Financial Planning & Analysis (FP&A) solutions that combine deep financial diagnostics with forward-looking strategy.
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
                Navigating the complexities of financial planning and analysis
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <ChartBar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Financial Performance</h3>
                <p className="text-muted-foreground">
                  Do I have a clear picture of my financial performance and risks?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Margin Analysis</h3>
                <p className="text-muted-foreground">
                  What's driving or eroding my margins, cash flow, and capital efficiency?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <LineChartIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Forecasting</h3>
                <p className="text-muted-foreground">
                  How do I forecast with confidence in uncertain scenarios?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Strategic Alignment</h3>
                <p className="text-muted-foreground">
                  Are my plans resilient and aligned with strategic goals?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Decision Making</h3>
                <p className="text-muted-foreground">
                  How can I use financial insight to make better decisions — faster?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">FP&A Tools</h3>
                <p className="text-muted-foreground">
                  What tools or routines do I need for best-in-class FP&A?
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
                Financial planning and analysis should not be disconnected.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Compass className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Integrated View</h3>
                <p className="text-muted-foreground mb-4">
                  We build an integrated view that connects today's operational data with tomorrow's strategic direction — empowering leadership with insight, foresight, and governance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Operational data integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Strategic direction alignment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Leadership empowerment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Value Creation Focus</h3>
                <p className="text-muted-foreground mb-4">
                  Our job is to help you understand where value is being created, where it's leaking, and how to optimize it. We focus on actionable insights that drive business growth.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Value creation identification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Leakage detection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Optimization strategies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-muted/50 p-8 rounded-lg border border-border">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Our Commitment</h3>
                <p className="text-muted-foreground">
                  We are committed to helping you transform your financial planning and analysis from a reporting function into a strategic asset that drives your organization's success. Through our integrated approach and deep expertise, we ensure your FP&A processes deliver actionable insights that inform decision-making and drive business growth.
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
                Comprehensive FP&A solutions that drive business growth
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <ChartBar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Financial Performance Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive analysis of your financial performance, including profitability, efficiency, and growth metrics.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Profitability analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Efficiency metrics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Growth indicators</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Margin & Cost Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed examination of margins and cost structure with optimization opportunities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Margin breakdown</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Cost optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Pricing strategies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Forecasting & Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Robust forecasting models and strategic planning frameworks for informed decision-making.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Scenario modeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Strategic planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Budget optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Wallet className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Cash Flow Management</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive cash flow analysis and optimization strategies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Cash flow forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Working capital optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Liquidity management</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Capital Allocation</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic guidance on capital allocation and investment decisions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Investment analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">ROI optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Resource allocation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Risk Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive risk analysis and mitigation strategies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Risk identification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Mitigation strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Contingency planning</span>
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
                Our integrated approach to financial planning and analysis
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Integrated Approach</h3>
                <p className="text-muted-foreground mb-4">
                  We combine financial planning with analysis to create a comprehensive view of your business. Our methodology ensures that insights from analysis inform planning, and planning guides analysis.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Holistic business view</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Data-driven insights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Strategic alignment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Process Excellence</h3>
                <p className="text-muted-foreground mb-4">
                  We follow a structured process that ensures consistency, accuracy, and actionable insights. Our methodology is designed to deliver results that drive business growth.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Structured approach</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Quality assurance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Continuous improvement</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Our FP&A Process</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">1. Discovery</h4>
                  <p className="text-muted-foreground">
                    Understanding your business context, challenges, and objectives to tailor our approach.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">2. Data Collection</h4>
                  <p className="text-muted-foreground">
                    Gathering and analyzing relevant financial data to build a comprehensive picture.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">3. Analysis</h4>
                  <p className="text-muted-foreground">
                    Transforming data into actionable insights through rigorous analysis.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">4. Implementation</h4>
                  <p className="text-muted-foreground">
                    Developing and executing plans based on insights to drive business growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-muted/50 p-8 rounded-lg border border-border">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Continuous Improvement</h3>
                <p className="text-muted-foreground">
                  Our methodology is not static — it evolves with your business and the changing market landscape. We continuously refine our approach based on feedback and results, ensuring that our FP&A solutions remain relevant and effective.
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
                Real-world applications of our FP&A solutions
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Corporate Finance</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive FP&A solutions for corporate finance teams, helping them make informed decisions and drive business growth.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Budgeting and forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Performance analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Capital allocation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Private Equity</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic FP&A support for private equity firms, helping them evaluate investment opportunities and optimize portfolio performance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Due diligence</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Portfolio optimization</span>
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
                <h3 className="text-xl font-bold text-foreground mb-4">Startups & Scale-ups</h3>
                <p className="text-muted-foreground mb-4">
                  Tailored FP&A solutions for startups and scale-ups, helping them navigate growth challenges and attract investment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Growth planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Investor relations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Resource allocation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Family Offices</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive FP&A solutions for family offices, helping them manage wealth and plan for future generations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Wealth management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Succession planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className="text-muted-foreground">Legacy preservation</span>
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
                  <h4 className="text-lg font-bold text-foreground mb-2">M&A Due Diligence</h4>
                  <p className="text-muted-foreground">
                    Comprehensive financial analysis for evaluating acquisition targets and assessing synergies.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Capital Allocation</h4>
                  <p className="text-muted-foreground">
                    Data-driven analysis for optimizing resource allocation and maximizing returns on investment.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Strategic Planning</h4>
                  <p className="text-muted-foreground">
                    Financial insights to inform business strategy and drive sustainable growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-muted/50 p-8 rounded-lg border border-border">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Tailored Solutions</h3>
                <p className="text-muted-foreground">
                  We understand that each organization has unique needs and challenges. That's why we develop customized FP&A solutions that address your specific requirements and drive your business forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your FP&A?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's work together to develop a comprehensive financial planning and analysis strategy that drives your business forward.
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