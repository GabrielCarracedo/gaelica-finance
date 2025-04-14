"use client"

import React, { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { 
  BarChart3, 
  AlertTriangle, 
  Search, 
  ChartBar, 
  Link2, 
  Layers, 
  Dice1, 
  BarChart, 
  LineChart, 
  ArrowRight, 
  CheckCircle, 
  Calculator,
  Building,
  GanttChart,
  Scale,
  Globe,
  PieChart,
  FileSpreadsheet,
  Eye
} from "lucide-react"

export default function RiskAssessmentPage() {
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
                <AlertTriangle className="mr-2 h-4 w-4" />
                Risk Assessment
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground mb-6">
                Clarity in the Face of Uncertainty
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                In a world that rewards decisiveness but punishes miscalculation, managing risk is not just about control — it's about clarity. At Gaelica, we understand risk not as a constraint, but as a strategic dimension.
              </p>
              <p className="text-xl text-muted-foreground mb-8">
                Our approach goes beyond compliance or checklists. We analyze risks as they actually emerge: interdependent, imperfectly measurable, and always consequential.
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
                Navigating uncertainty in a complex business environment
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Hidden Risks</h3>
                <p className="text-muted-foreground">
                  How do I anticipate risks that traditional models fail to capture?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <ChartBar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Expectation Gaps</h3>
                <p className="text-muted-foreground">
                  Am I misjudging the gap between expectations and real-world outcomes?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Dice1 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Modeling Uncertainty</h3>
                <p className="text-muted-foreground">
                  How can I model uncertainty without falling into false precision?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Downside Exposure</h3>
                <p className="text-muted-foreground">
                  What's the real downside exposure of my financial or strategic plan?
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Link2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Risk Drivers</h3>
                <p className="text-muted-foreground">
                  Which variables are truly driving risk in my business model — and how do they interact?
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
                Our philosophy on risk assessment
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-card p-10 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">We don't just measure risk —</h3>
              
              <p className="text-xl text-muted-foreground mb-8 text-center italic">
                we reveal it, question it, and simulate its consequences.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                Because the greatest threats often lie not in what is known, but in what is misassumed. And because good decisions are not built on the absence of risk, but on its accurate reflection.
              </p>
              
              <div className="flex justify-center">
                <div className="w-16 h-1 bg-primary/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Methodology Section */}
        <section id="our-methodology" className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Methodology</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We approach risk from first principles and advanced modeling, combining statistical methods with judgment, and theory with reality.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Empirical Error Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  We distinguish volatility from error — studying how expectations deviate from outcomes in historical data to calibrate realistic ranges of uncertainty.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <ChartBar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Distribution Construction</h3>
                <p className="text-muted-foreground mb-4">
                  Each variable in our model is represented by a probability distribution — Normal, PERT, Triangular, Lognormal — based on data, benchmarking or expert insight.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Link2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Interdependence and Correlation</h3>
                <p className="text-muted-foreground mb-4">
                  We model the interdependence between variables using correlation matrices. A rise in revenue often brings improved margins — and our simulations reflect that. We use multivariate techniques to preserve this coherence across inputs.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Dice1 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Monte Carlo Simulation</h3>
                <p className="text-muted-foreground mb-4">
                  Thousands of simulations are run to assess the impact of uncertainty on value, strategy, or resilience. Each run generates a full scenario, and the result is a distribution of outcomes, not a single number.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Composite Risk</h3>
                <p className="text-muted-foreground mb-4">
                  We assess both individual risks and composite effects, recognizing that exposure is not just about what might happen, but how multiple uncertainties might combine.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Outputs & Visualization</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Value distributions (probabilistic valuations)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Tornado charts (sensitivity by variable)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Downside risk scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Risk-weighted decisions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">How We Go Further</h3>
              <p className="text-muted-foreground mb-6">
                At Gaelica, we push beyond models. We interpret signals from the macro environment — interest rate cycles, inflation regimes, fiscal policy — and their potential cascading effects on operational, financial and strategic variables.
              </p>
              
              <h4 className="text-lg font-semibold text-foreground mb-3">We help leaders manage:</h4>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Selic, FX, and inflation risk within planning and valuation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Scenario stress-testing for governance and board decisions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Risk that isn't visible in spreadsheets, but affects people, culture and timing</span>
                </li>
              </ul>
              
              <p className="text-muted-foreground italic">
                We respect models — but we never outsource judgment to them.
              </p>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section id="applications" className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Applications</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                How our risk assessment solutions drive real-world value
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Financial Modeling & Valuation</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Scenario-based DCF with probabilistic ranges</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Risk-adjusted cash flows and capital cost</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Strategic simulations for IPOs, M&A, and capital allocation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4">
                    <GanttChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Strategic & Operational Decisions</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Risk quantification in strategic planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Project portfolio risk optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Risk-adjusted KPIs and dashboards</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Governance & Reporting</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Support for risk committees and boards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Risk mapping aligned with COSO, ISO 31000</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Risk reports with insight, not jargon</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">ESG & Externalities</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Quantification of ESG-related financial exposure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Scenario analysis for environmental or regulatory risks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Integration with sustainability and integrated reporting frameworks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section id="what-we-deliver" className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Deliverables</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tangible outputs that drive clear understanding and decisive action
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-card p-6 rounded-lg border border-border flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
                  <PieChart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Risk heatmaps and materiality reports</h3>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
                  <Dice1 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Correlated Monte Carlo simulations</h3>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
                  <FileSpreadsheet className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Tailored tornado and spider charts</h3>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Strategic insights with practical consequences</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Ready to Gain Clarity on Risk?</h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <p className="text-muted-foreground mb-4">
                    Let us help you transform uncertainty into strategic advantage. Contact us to discuss how our risk assessment approach can benefit your organization.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Gabriel C. Carracedo</h3>
                      <p className="text-sm text-muted-foreground">Partner, Gaelica Finance</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>📞</span>
                      <span>+55 (11) 99916-8448</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>📧</span>
                      <span>gcarracedo@gaelicafinance.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>🌐</span>
                      <span>www.gaelicafinance.com</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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