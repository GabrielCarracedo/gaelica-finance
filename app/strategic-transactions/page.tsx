"use client"

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
} from "lucide-react"
import { useTheme } from "next-themes"
import { SiteFooter } from "@/components/site-footer"
import { ContactButtons } from "@/components/ContactButtons"

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

// Moon Cycle Visualization Component
function MoonCycleVisualization() {
  const [activeBox, setActiveBox] = useState<number | null>(null)
  
  const cyclePhases = [
    {
      id: 0,
      name: "Growth",
      description: "Expansion phase with elevated valuations and high market activity",
      position: { top: "25%", left: "70%" },
    },
    {
      id: 1,
      name: "Maturity",
      description: "Plateau phase with stabilizing valuations and selective transactions",
      position: { top: "25%", left: "30%" },
    },
    {
      id: 2,
      name: "Decline",
      description: "Declining phase with pressure on multiples and increased selectivity",
      position: { top: "75%", left: "30%" },
    },
    {
      id: 3,
      name: "Recession",
      description: "Correction phase with acquisition opportunities for prepared buyers",
      position: { top: "75%", left: "70%" },
    },
  ]

  return (
    <div className="relative w-full max-w-full mx-auto mt-2 mb-2">
      <div className="relative w-full">
        <div className="flex justify-center items-center py-8">
          <Image
            src="/images/Ciclo da lua.png"
            alt="Market Cycle"
            width={600}
            height={600}
            className="w-auto h-auto max-w-full"
            priority
          />
        </div>

        {cyclePhases.map((phase) => (
          <div
            key={phase.id}
            className={`absolute w-24 sm:w-32 p-2 sm:p-3 rounded-lg border transition-all duration-300 cursor-pointer
              ${
                activeBox === phase.id
                  ? "bg-background/90 border-border scale-105 sm:scale-110 z-10"
                  : "bg-background/70 border-border hover:border-border/50"
              }`}
            style={{
              top: phase.position.top,
              left: phase.position.left,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => setActiveBox(phase.id)}
            onMouseLeave={() => setActiveBox(null)}
          >
            <h4 className="font-bold text-foreground text-center text-xs sm:text-sm">{phase.name}</h4>
            <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 text-center">{phase.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// Main Page Component
export default function StrategicTransactionsPage() {
  // Scroll to top on page load
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
              <Link
                href="/#services"
                className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>

              <div className="inline-flex items-center rounded-full border border-border/30 bg-muted/10 px-3 py-1 text-sm text-muted-foreground mb-4">
                <span className="mr-1">•</span> M&A Advisory
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                Strategic Transactions (M&A)
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                In an increasingly competitive and fast-changing environment, small and mid-sized companies need more
                than isolated solutions — they need an integrated vision that connects strategy, finance, and execution.
              </p>

              <p className="text-xl text-muted-foreground mb-8">
                Gaelica Finance was created with this purpose: to stand by the entrepreneur with a practical,
                personalized, and results-oriented approach from planning through value realization.
              </p>

              <Button size="lg" className="gap-2 bg-[#9b9b9b] hover:bg-[#9b9b9b]/90 text-background" asChild>
                <Link href="#contact">
                  Contact Our M&A Team <ArrowRight className="h-4 w-4" />
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
                Common questions our clients face when approaching strategic transactions
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">How do I build an effective Day 1 action plan?</p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    How can I negotiate at the right time and close the best deal possible?
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    How do I ensure that the value created over the years is fully captured?
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    What are the smartest paths to sell, grow, or attract investment and maximize value for
                    shareholders?
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">Is my company ready for a transaction? What is missing?</p>
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
                    <p className="text-muted-foreground">Over 20 years of experience in M&A and Valuation</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      Advisory track record with major banks, funds, and global investors
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Use of AI-driven tools in corporate finance</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">2,000+ company valuations completed</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">A blend of deep expertise, strategic vision, and agility</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Sectors we serve:</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground">Family businesses, startups, entrepreneurs</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground">Healthcare, pharmaceuticals, biotech</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground">Banks, asset managers, funds</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground">Consumer & retail</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground">Industry & services</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <p className="text-muted-foreground">Agribusiness and energy</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border col-span-2">
                    <p className="text-muted-foreground">Technology, software, digital media</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transaction Services Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Transaction Services</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/10 mb-4">
                  <span className="font-bold text-muted-foreground">1</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Pre-Transaction Strategy</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Market and competitive landscape analysis</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Growth and monetization strategy design</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Risk assessment and investment alternatives</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Structuring transaction feasibility</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/10 mb-4">
                  <span className="font-bold text-muted-foreground">2</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Deal Execution</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Technical valuation and value defense</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Investor engagement and qualification</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>End-to-end process management</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Support on due diligence and legal/tax structuring</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>SPA and closing strategy</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/10 mb-4">
                  <span className="font-bold text-muted-foreground">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Deal Closing</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Negotiation of due diligence findings</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Drafting of LOIs and binding offers</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Final SPA structuring with strategic oversight</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/10 mb-4">
                  <span className="font-bold text-muted-foreground">4</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Post-Transaction</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Integration and transition plan execution</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>100-day post-closing plan with active management</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                    <span>Value creation initiatives and strategic transformation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* M&A Approach Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our M&A Approach</h2>

            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">Sell-Side Flow</h3>
                <ul className="space-y-4">
                  <li className="text-muted-foreground flex items-start">
                    <div className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-muted-foreground text-sm">1</span>
                    </div>
                    <span>Strategic understanding</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <div className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-muted-foreground text-sm">2</span>
                    </div>
                    <span>Value diagnosis and benchmarking</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <div className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-muted-foreground text-sm">3</span>
                    </div>
                    <span>Investor mapping and selection</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <div className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-muted-foreground text-sm">4</span>
                    </div>
                    <span>Teaser + NDA → Info Memo and Process Letter</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <div className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-muted-foreground text-sm">5</span>
                    </div>
                    <span>Q&A and Non-Binding Offers (NBO)</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <div className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-muted-foreground text-sm">6</span>
                    </div>
                    <span>Due diligence and exclusivity</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <div className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-muted-foreground text-sm">7</span>
                    </div>
                    <span>Final negotiation and SPA</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">Buy-Side Flow</h3>
                <ul className="space-y-4">
                  <li className="text-muted-foreground flex items-start">
                    <div className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-muted-foreground text-sm">1</span>
                    </div>
                    <span>Strategic alignment</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <div className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-muted-foreground text-sm">2</span>
                    </div>
                    <span>Target mapping</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <div className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-muted-foreground text-sm">3</span>
                    </div>
                    <span>Value analysis and benchmarking</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <div className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-muted-foreground text-sm">4</span>
                    </div>
                    <span>Document request and NDA</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <div className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-muted-foreground text-sm">5</span>
                    </div>
                    <span>Negotiation and exclusivity</span>
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <div className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-muted-foreground text-sm">6</span>
                    </div>
                    <span>Final SPA negotiation and closing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <div className="w-full">
                <h3 className="text-2xl font-bold text-foreground mb-0 text-center">
                  Regression Cyclical Strategic Business Decision Flow
                </h3>
                <BusinessCycleCurve />
                <p className="text-center text-muted-foreground mt-0">
                  Our approach adapts to your position in the business cycle, providing tailored strategies for each
                  phase
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Cycle Section */}
        <section className="py-0 bg-background">
          <div className="container">
            <div className="w-full">
              <h2 className="text-3xl font-bold text-foreground mb-0 text-center">Market Cycle & Strategic Timing</h2>
              <MoonCycleVisualization />
            </div>
          </div>
        </section>

        {/* Valuation Methods Section */}
        <section className="pt-0 pb-16 bg-background">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Valuation Methods We Apply</h2>

                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-bold text-foreground mb-2">Discounted Cash Flow (DCF)</h3>
                    <p className="text-muted-foreground">Based on projected free cash flows</p>
                  </div>

                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-bold text-foreground mb-2">Net Asset Value</h3>
                    <p className="text-muted-foreground">Adjusted book value of assets and liabilities</p>
                  </div>
                </div>

                <p className="mt-6 text-muted-foreground">
                  We use the combination of methods that best fits the company's profile and the objective of the
                  valuation — whether for a sale, fundraising, shareholder entry, or strategic decision.
                </p>
              </div>

              <div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">ZOPA & BATNA: Maximizing Deal Value</h2>

                  <div className="relative w-full mb-6 max-w-[440px] mx-auto">
                    <Image
                      src="/images/ZOPA - ingles fundo escuro final.png"
                      alt="ZOPA & BATNA Graph"
                      width={440}
                      height={176}
                      className="w-full h-auto hidden dark:block"
                      priority
                    />
                    <Image
                      src="/images/ZOPA - ingles fundo claro final.png"
                      alt="ZOPA & BATNA Graph"
                      width={440}
                      height={176}
                      className="w-full h-auto dark:hidden"
                      priority
                    />
                  </div>

                  <p className="text-muted-foreground mb-4">
                    <strong className="text-foreground">ZOPA</strong> (Zone of Potential Agreement): the real space for
                    negotiation
                  </p>

                  <p className="text-muted-foreground mb-4">
                    <strong className="text-foreground">BATNA</strong> (Best Alternative to a Negotiated Agreement): the
                    fallback strategy to strengthen your position
                  </p>

                  <h3 className="text-lg font-bold text-foreground mb-3">Deal mechanisms to unlock or expand ZOPA:</h3>

                  <ul className="space-y-2">
                    <li className="text-muted-foreground flex items-start">
                      <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                      <span>
                        <strong className="text-foreground">Earn-out:</strong> aligns future performance with price
                      </span>
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                      <span>
                        <strong className="text-foreground">Vendor Due Diligence:</strong> builds confidence and reduces
                        discounts
                      </span>
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                      <span>
                        <strong className="text-foreground">Reps & Warranties:</strong> risk allocation mechanisms
                      </span>
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <ChevronRight className="h-5 w-5 text-muted-foreground mr-1 flex-shrink-0" />
                      <span>
                        <strong className="text-foreground">Holdback, Escrow, MAC Clauses:</strong> mitigate uncertainty
                        and improve terms
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-card">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact Our M&A Team</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to get started? Our team is here to help you navigate the complexities of strategic transactions.
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

