"use client"

import React, { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { BarChart3, PieChart, TrendingUp, LineChart, Layers, Shield, Scale, Briefcase, Compass, Brain, Building, ArrowRight, ChevronRight, CheckCircle, Settings, DollarSign, Wallet, Calculator, AlertTriangle, ChartBar } from "lucide-react"

export default function FinancialAnalysisPage() {
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
                Financial Analysis
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground mb-6">
                Sound Decisions Built on Sharp Financial Understanding
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                At Gaelica Finance, we turn complex data into actionable insight. Our financial analysis goes beyond reporting — it reveals signals, stress points, and opportunities that shape smarter strategies, stronger governance, and better outcomes.
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
                Navigating the complexities of financial performance
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Performance Assessment</h3>
                <p className="text-muted-foreground">
                  How do I know if my business is truly performing well?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Cost Alignment</h3>
                <p className="text-muted-foreground">
                  Are my costs aligned with value creation?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <ChartBar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Margin Analysis</h3>
                <p className="text-muted-foreground">
                  What's driving or eroding my margins?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Wallet className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Cash Flow Resilience</h3>
                <p className="text-muted-foreground">
                  How resilient is my cash flow under different scenarios?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Financial Red Flags</h3>
                <p className="text-muted-foreground">
                  What are the financial red flags I may be missing?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Liquidity Stress</h3>
                <p className="text-muted-foreground">
                  How do I anticipate liquidity stress before it hits?
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
                Our approach to financial analysis
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-6">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Strategic Foresight</h3>
                <p className="text-muted-foreground mb-4">
                  We believe that financial analysis is not just about understanding the past, but about illuminating the path forward. By analyzing financial data with a strategic lens, we help businesses anticipate challenges, identify opportunities, and make decisions with confidence.
                </p>
                <p className="text-muted-foreground">
                  Our approach combines quantitative rigor with qualitative insights, ensuring that financial analysis serves as a foundation for strategic planning and execution.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-6">
                  <Compass className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Business Understanding</h3>
                <p className="text-muted-foreground mb-4">
                  Financial analysis is more than numbers on a page—it's a window into the health, performance, and potential of your business. We analyze financial data to understand the underlying drivers of value, the sources of risk, and the opportunities for growth.
                </p>
                <p className="text-muted-foreground">
                  This deep understanding enables us to provide actionable insights that drive better business outcomes, from optimizing operations to informing strategic investments.
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-muted/30 p-8 rounded-lg border border-border">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Our Commitment</h3>
                  <p className="text-muted-foreground">
                    At Gaelica Finance, we are committed to delivering financial analysis that goes beyond the surface. We dig deep into your financial data, ask the right questions, and provide insights that drive better business decisions. Our goal is to help you understand not just what happened, but why it happened—and what you should do about it.
                  </p>
                </div>
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
                Comprehensive financial analysis solutions
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Performance Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive analysis of your business performance, including profitability, efficiency, and growth metrics.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Profitability analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Efficiency metrics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Growth trend analysis</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Cost Structure Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed examination of your cost structure to identify optimization opportunities and value creation potential.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cost breakdown by category</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Value chain analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cost optimization recommendations</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <ChartBar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Margin Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  In-depth analysis of margins across products, services, and business units to identify drivers and improvement opportunities.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Product/service profitability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Margin trend analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Margin improvement strategies</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Wallet className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Cash Flow Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive analysis of cash flow patterns, working capital efficiency, and liquidity management.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cash flow forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Working capital optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Liquidity stress testing</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Financial Health Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  Holistic evaluation of your financial health, including key ratios, risk indicators, and early warning signals.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Financial ratio analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Risk indicator monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Early warning system development</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Scenario Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic scenario planning to help you prepare for various business conditions and make informed decisions.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Multiple scenario modeling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sensitivity analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Strategic response planning</span>
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
                How we approach financial analysis
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-6">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Tailored Approach</h3>
                <p className="text-muted-foreground mb-4">
                  We don't believe in one-size-fits-all solutions. Our financial analysis methodology is tailored to your specific business context, challenges, and objectives.
                </p>
                <p className="text-muted-foreground">
                  We begin by understanding your business model, industry dynamics, and strategic priorities, then design an analysis framework that addresses your unique needs.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-6">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Data-Driven Insights</h3>
                <p className="text-muted-foreground mb-4">
                  Our methodology combines quantitative analysis with qualitative insights to provide a comprehensive view of your financial situation.
                </p>
                <p className="text-muted-foreground">
                  We leverage advanced analytical techniques, industry benchmarks, and our deep expertise to transform raw data into actionable insights that drive better decision-making.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Our Process</h3>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">Discovery & Assessment</h4>
                    <p className="text-muted-foreground">
                      We begin by understanding your business context, challenges, and objectives. This includes reviewing your financial statements, business model, and strategic priorities to identify key areas for analysis.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">Data Collection & Analysis</h4>
                    <p className="text-muted-foreground">
                      We gather and analyze relevant financial data, including historical performance, industry benchmarks, and market trends. This analysis forms the foundation for our insights and recommendations.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">Insight Generation</h4>
                    <p className="text-muted-foreground">
                      We transform raw data into actionable insights, identifying key trends, opportunities, and risks. Our analysis goes beyond the numbers to understand the underlying drivers of performance and value.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xl font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">Recommendations & Implementation</h4>
                    <p className="text-muted-foreground">
                      We develop tailored recommendations based on our analysis, providing clear, actionable steps to address challenges and capitalize on opportunities. We also support implementation to ensure sustainable results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-muted/30 p-8 rounded-lg border border-border">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
                  <LineChart className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Continuous Improvement</h3>
                  <p className="text-muted-foreground">
                    Our methodology is not static—it evolves with your business and the changing market landscape. We continuously refine our approach based on feedback, results, and emerging best practices to ensure that our financial analysis delivers maximum value.
                  </p>
                </div>
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
                Real-world applications of our financial analysis
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-6">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Manufacturing</h3>
                <p className="text-muted-foreground mb-4">
                  In the manufacturing sector, financial analysis helps optimize production costs, improve inventory management, and enhance operational efficiency.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cost structure optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Inventory turnover analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Production efficiency metrics</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-6">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Retail</h3>
                <p className="text-muted-foreground mb-4">
                  For retail businesses, financial analysis provides insights into sales trends, margin management, and customer behavior to drive growth and profitability.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Sales performance analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Product margin optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Customer profitability analysis</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-6">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Technology</h3>
                <p className="text-muted-foreground mb-4">
                  In the technology sector, financial analysis helps evaluate R&D investments, assess subscription models, and optimize pricing strategies.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>R&D ROI analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Subscription metrics evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Pricing strategy optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-6">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Financial Services</h3>
                <p className="text-muted-foreground mb-4">
                  For financial services firms, financial analysis is crucial for risk assessment, portfolio management, and regulatory compliance.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Risk assessment and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Portfolio performance analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Regulatory compliance reporting</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Strategic Applications</h3>
              
              <div className="grid gap-8 md:grid-cols-3">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">M&A Due Diligence</h4>
                  <p className="text-muted-foreground">
                    Comprehensive financial analysis to evaluate potential acquisition targets, assess synergies, and determine appropriate valuation.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <PieChart className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Capital Allocation</h4>
                  <p className="text-muted-foreground">
                    Data-driven analysis to optimize capital allocation across business units, projects, and investment opportunities.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Strategic Planning</h4>
                  <p className="text-muted-foreground">
                    Financial insights to inform strategic planning, including market entry, product development, and business model evolution.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-muted/30 p-8 rounded-lg border border-border">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Tailored Solutions</h3>
                  <p className="text-muted-foreground">
                    At Gaelica Finance, we understand that each business has unique financial analysis needs. Our team works closely with you to develop tailored solutions that address your specific challenges and opportunities, delivering actionable insights that drive better business outcomes.
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Gain Deeper Financial Insights?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's work together to analyze your financial data and uncover actionable insights for your business.
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