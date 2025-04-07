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

// Business Cycle Curve Component
function BusinessCycleCurve() {
  return (
    <div className="relative w-full max-w-full mx-auto">
      <Image
        src="/images/Grafico de curva ingles.png"
        alt="Business Cycle Curve"
        width={1200}
        height={600}
        className="w-full h-auto scale-125 transform-gpu"
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
            className={`absolute w-32 p-3 rounded-lg border transition-all duration-300 cursor-pointer
              ${
                activeBox === phase.id
                  ? "bg-[#141414]/90 border-[#9b9b9b] scale-110 z-10"
                  : "bg-[#141414]/70 border-[#737373] hover:border-[#9b9b9b]/50"
              }`}
            style={{
              top: phase.position.top,
              left: phase.position.left,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => setActiveBox(phase.id)}
            onMouseLeave={() => setActiveBox(null)}
          >
            <h4 className="font-bold text-[#fafafa] text-center">{phase.name}</h4>
            <p className="text-xs text-[#9b9b9b] mt-1 text-center">{phase.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// Site Header Component
function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-sm text-[#9b9b9b]">Based in São Paulo, Brazil</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#services" className="text-sm font-medium transition-colors hover:text-[#9b9b9b]">
            Our Services
          </Link>
          <Link href="#approach" className="text-sm font-medium transition-colors hover:text-[#9b9b9b]">
            Our Approach
          </Link>
          <Link href="#client-stories" className="text-sm font-medium transition-colors hover:text-[#9b9b9b]">
            Client Success Stories
          </Link>
          <Link href="#cta" className="text-sm font-medium transition-colors hover:text-[#9b9b9b]">
            Get Started Today
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild className="hover:text-[#9b9b9b]">
              <Link href="#cta">Sign In</Link>
            </Button>
            <Button asChild className="bg-[#9b9b9b] hover:bg-[#9b9b9b]/90 text-[#141414]">
              <Link href="#cta">Sign Up</Link>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
          <nav className="flex flex-col gap-4">
            <Link
              href="#services"
              className="text-sm font-medium transition-colors hover:text-[#9b9b9b]"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Services
            </Link>
            <Link
              href="#approach"
              className="text-sm font-medium transition-colors hover:text-[#9b9b9b]"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Approach
            </Link>
            <Link
              href="#client-stories"
              className="text-sm font-medium transition-colors hover:text-[#9b9b9b]"
              onClick={() => setIsMenuOpen(false)}
            >
              Client Success Stories
            </Link>
            <Link
              href="#cta"
              className="text-sm font-medium transition-colors hover:text-[#9b9b9b]"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started Today
            </Link>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" asChild className="w-full">
                <Link href="#cta">Sign In</Link>
              </Button>
              <Button asChild className="w-full bg-[#9b9b9b] hover:bg-[#9b9b9b]/90 text-[#141414]">
                <Link href="#cta">Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

// Site Footer Component
function SiteFooter() {
  return (
    <footer id="about" className="bg-[#1a1a1a] border-t border-[#737373]">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Gaelica Finance"
                width={240}
                height={80}
                className="mb-4"
              />
            </div>
            <p className="text-sm text-[#9b9b9b]">
              Premium financial consulting with data-driven insights to help businesses make informed decisions.
            </p>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-9 w-9 hover:bg-[#9b9b9b]/10 hover:text-[#9b9b9b]"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-9 w-9 hover:bg-[#9b9b9b]/10 hover:text-[#9b9b9b]"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-9 w-9 hover:bg-[#9b9b9b]/10 hover:text-[#9b9b9b]"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-9 w-9 hover:bg-[#9b9b9b]/10 hover:text-[#9b9b9b]"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4 text-[#fafafa]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-sm text-[#9b9b9b] hover:text-[#c3c3c3] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#approach" className="text-sm text-[#9b9b9b] hover:text-[#c3c3c3] transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="#client-stories" className="text-sm text-[#9b9b9b] hover:text-[#c3c3c3] transition-colors">
                  Client Success Stories
                </Link>
              </li>
              <li>
                <Link href="#cta" className="text-sm text-[#9b9b9b] hover:text-[#c3c3c3] transition-colors">
                  Get Started Today
                </Link>
              </li>
              <li>
                <Link href="#cta" className="text-sm text-[#9b9b9b] hover:text-[#c3c3c3] transition-colors">
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4 text-[#fafafa]">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-[#9b9b9b]">123 Financial District</li>
              <li className="text-sm text-[#9b9b9b]">São Paulo, Brazil</li>
              <li className="text-sm text-[#9b9b9b]">contact@gaelicafinance.com</li>
              <li className="text-sm text-[#9b9b9b]">+55 (11) 1234-5678</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4 text-[#fafafa]">Subscribe</h3>
            <p className="text-sm text-[#9b9b9b] mb-4">Stay updated with our latest insights and news.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="max-w-[220px] bg-[#242424] border-[#737373] focus:border-[#9b9b9b]"
              />
              <Button size="icon" type="submit" className="bg-[#9b9b9b] hover:bg-[#9b9b9b]/90 text-[#141414]">
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#737373] text-center text-sm text-[#9b9b9b]">
          <p>© {new Date().getFullYear()} Gaelica Finance. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="#" className="hover:text-[#c3c3c3] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#c3c3c3] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#c3c3c3] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function StrategicTransactionsPage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#141414]">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-[#141414] overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px]" />
          <div className="absolute inset-0 [mask-image:radial-gradient(black,transparent_70%)]" />

          <div className="container relative">
            <div className="flex flex-col items-start max-w-3xl mx-auto">
              <Link
                href="/#services"
                className="inline-flex items-center text-[#9b9b9b] hover:text-[#c3c3c3] mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>

              <div className="inline-flex items-center rounded-full border border-[#9b9b9b]/30 bg-[#9b9b9b]/10 px-3 py-1 text-sm text-[#9b9b9b] mb-4">
                <span className="mr-1">•</span> M&A Advisory
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#fafafa] mb-6">
                Strategic Transactions (M&A)
              </h1>

              <p className="text-xl text-[#9b9b9b] mb-8">
                In an increasingly competitive and fast-changing environment, small and mid-sized companies need more
                than isolated solutions — they need an integrated vision that connects strategy, finance, and execution.
              </p>

              <p className="text-xl text-[#9b9b9b] mb-8">
                Gaelica Finance was created with this purpose: to stand by the entrepreneur with a practical,
                personalized, and results-oriented approach from planning through value realization.
              </p>

              <Button size="lg" className="gap-2 bg-[#9b9b9b] hover:bg-[#9b9b9b]/90 text-[#141414]" asChild>
                <Link href="#contact">
                  Contact Our M&A Team <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-16 bg-[#1a1a1a]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#fafafa] mb-4">Your Challenges</h2>
              <p className="text-lg text-[#9b9b9b] max-w-2xl mx-auto">
                Common questions our clients face when approaching strategic transactions
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <Card className="bg-[#141414] border-[#737373]">
                <CardContent className="p-6">
                  <p className="text-[#9b9b9b]">How do I build an effective Day 1 action plan?</p>
                </CardContent>
              </Card>

              <Card className="bg-[#141414] border-[#737373]">
                <CardContent className="p-6">
                  <p className="text-[#9b9b9b]">
                    How can I negotiate at the right time and close the best deal possible?
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#141414] border-[#737373]">
                <CardContent className="p-6">
                  <p className="text-[#9b9b9b]">
                    How do I ensure that the value created over the years is fully captured?
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#141414] border-[#737373]">
                <CardContent className="p-6">
                  <p className="text-[#9b9b9b]">
                    What are the smartest paths to sell, grow, or attract investment and maximize value for
                    shareholders?
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#141414] border-[#737373]">
                <CardContent className="p-6">
                  <p className="text-[#9b9b9b]">Is my company ready for a transaction? What is missing?</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Gaelica Section */}
        <section className="py-16 bg-[#141414]">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#fafafa] mb-6">Why Gaelica?</h2>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#9b9b9b] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-[#9b9b9b]">Over 20 years of experience in M&A and Valuation</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#9b9b9b] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-[#9b9b9b]">
                      Advisory track record with major banks, funds, and global investors
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#9b9b9b] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-[#9b9b9b]">Use of AI-driven tools in corporate finance</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#9b9b9b] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-[#9b9b9b]">2,000+ company valuations completed</p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#9b9b9b] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-[#9b9b9b]">A blend of deep expertise, strategic vision, and agility</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#fafafa] mb-4">Sectors we serve:</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#737373]">
                    <p className="text-[#9b9b9b]">Family businesses, startups, entrepreneurs</p>
                  </div>
                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#737373]">
                    <p className="text-[#9b9b9b]">Healthcare, pharmaceuticals, biotech</p>
                  </div>
                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#737373]">
                    <p className="text-[#9b9b9b]">Banks, asset managers, funds</p>
                  </div>
                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#737373]">
                    <p className="text-[#9b9b9b]">Consumer & retail</p>
                  </div>
                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#737373]">
                    <p className="text-[#9b9b9b]">Industry & services</p>
                  </div>
                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#737373]">
                    <p className="text-[#9b9b9b]">Agribusiness and energy</p>
                  </div>
                  <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#737373] col-span-2">
                    <p className="text-[#9b9b9b]">Technology, software, digital media</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transaction Services Section */}
        <section className="py-16 bg-[#1a1a1a]">
          <div className="container">
            <h2 className="text-3xl font-bold text-[#fafafa] mb-12 text-center">Our Transaction Services</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-[#141414] p-6 rounded-lg border border-[#737373]">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#9b9b9b]/10 mb-4">
                  <span className="font-bold text-[#9b9b9b]">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#fafafa] mb-4">Pre-Transaction Strategy</h3>
                <ul className="space-y-2">
                  <li className="text-[#9b9b9b] flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                    <span>Market and competitive landscape analysis</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                    <span>Growth and monetization strategy design</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                    <span>Risk assessment and investment alternatives</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                    <span>Structuring transaction feasibility</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#141414] p-6 rounded-lg border border-[#737373]">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#9b9b9b]/10 mb-4">
                  <span className="font-bold text-[#9b9b9b]">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#fafafa] mb-4">Deal Execution</h3>
                <ul className="space-y-2">
                  <li className="text-[#9b9b9b] flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                    <span>Technical valuation and value defense</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                    <span>Investor engagement and qualification</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                    <span>End-to-end process management</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                    <span>Support on due diligence and legal/tax structuring</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                    <span>SPA and closing strategy</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#141414] p-6 rounded-lg border border-[#737373]">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#9b9b9b]/10 mb-4">
                  <span className="font-bold text-[#9b9b9b]">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#fafafa] mb-4">Deal Closing</h3>
                <ul className="space-y-2">
                  <li className="text-[#9b9b9b] flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                    <span>Negotiation of due diligence findings</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                    <span>Drafting of LOIs and binding offers</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                    <span>Final SPA structuring with strategic oversight</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#141414] p-6 rounded-lg border border-[#737373]">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#9b9b9b]/10 mb-4">
                  <span className="font-bold text-[#9b9b9b]">4</span>
                </div>
                <h3 className="text-xl font-bold text-[#fafafa] mb-4">Post-Transaction</h3>
                <ul className="space-y-2">
                  <li className="text-[#9b9b9b] flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                    <span>Integration and transition plan execution</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                    <span>100-day post-closing plan with active management</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                    <span>Value creation initiatives and strategic transformation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* M&A Approach Section */}
        <section className="py-16 bg-[#141414]">
          <div className="container">
            <h2 className="text-3xl font-bold text-[#fafafa] mb-12 text-center">Our M&A Approach</h2>

            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold text-[#fafafa] mb-6">Sell-Side Flow</h3>
                <ul className="space-y-4">
                  <li className="text-[#9b9b9b] flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#9b9b9b]/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-[#9b9b9b] text-sm">1</span>
                    </div>
                    <span>Strategic understanding</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#9b9b9b]/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-[#9b9b9b] text-sm">2</span>
                    </div>
                    <span>Value diagnosis and benchmarking</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#9b9b9b]/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-[#9b9b9b] text-sm">3</span>
                    </div>
                    <span>Investor mapping and selection</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#9b9b9b]/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-[#9b9b9b] text-sm">4</span>
                    </div>
                    <span>Teaser + NDA → Info Memo and Process Letter</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#9b9b9b]/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-[#9b9b9b] text-sm">5</span>
                    </div>
                    <span>Q&A and Non-Binding Offers (NBO)</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#9b9b9b]/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-[#9b9b9b] text-sm">6</span>
                    </div>
                    <span>Due diligence and exclusivity</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#9b9b9b]/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-[#9b9b9b] text-sm">7</span>
                    </div>
                    <span>Final negotiation and SPA</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#fafafa] mb-6">Buy-Side Flow</h3>
                <ul className="space-y-4">
                  <li className="text-[#9b9b9b] flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#9b9b9b]/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-[#9b9b9b] text-sm">1</span>
                    </div>
                    <span>Strategic alignment</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#9b9b9b]/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-[#9b9b9b] text-sm">2</span>
                    </div>
                    <span>Target mapping</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#9b9b9b]/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-[#9b9b9b] text-sm">3</span>
                    </div>
                    <span>Value analysis and benchmarking</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#9b9b9b]/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-[#9b9b9b] text-sm">4</span>
                    </div>
                    <span>Document request and NDA</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#9b9b9b]/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-[#9b9b9b] text-sm">5</span>
                    </div>
                    <span>Negotiation and exclusivity</span>
                  </li>
                  <li className="text-[#9b9b9b] flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#9b9b9b]/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-[#9b9b9b] text-sm">6</span>
                    </div>
                    <span>Final SPA negotiation and closing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <div className="w-full">
                <h3 className="text-2xl font-bold text-[#fafafa] mb-0 text-center">
                  Regression Cyclical Strategic Business Decision Flow
                </h3>
                <BusinessCycleCurve />
                <p className="text-center text-[#9b9b9b] mt-0">
                  Our approach adapts to your position in the business cycle, providing tailored strategies for each
                  phase
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Cycle Section */}
        <section className="py-0 bg-[#000000]">
          <div className="container">
            <div className="w-full">
              <h2 className="text-3xl font-bold text-[#fafafa] mb-0 text-center">Market Cycle & Strategic Timing</h2>
              <MoonCycleVisualization />
            </div>
          </div>
        </section>

        {/* Valuation Methods Section */}
        <section className="pt-0 pb-16 bg-[#141414]">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#fafafa] mb-6">Valuation Methods We Apply</h2>

                <div className="space-y-6">
                  <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#737373]">
                    <h3 className="text-lg font-bold text-[#fafafa] mb-2">Discounted Cash Flow (DCF)</h3>
                    <p className="text-[#9b9b9b]">Based on projected free cash flows</p>
                  </div>

                  <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#737373]">
                    <h3 className="text-lg font-bold text-[#fafafa] mb-2">Net Asset Value</h3>
                    <p className="text-[#9b9b9b]">Adjusted book value of assets and liabilities</p>
                  </div>
                </div>

                <p className="mt-6 text-[#9b9b9b]">
                  We use the combination of methods that best fits the company's profile and the objective of the
                  valuation — whether for a sale, fundraising, shareholder entry, or strategic decision.
                </p>
              </div>

              <div>
                <div>
                  <h2 className="text-3xl font-bold text-[#fafafa] mb-6">ZOPA & BATNA: Maximizing Deal Value</h2>

                  <div className="relative w-full mb-6 max-w-[440px] mx-auto">
                    <Image
                      src="/images/ZOPA - ingles fundo escuro final.png"
                      alt="ZOPA & BATNA Graph"
                      width={440}
                      height={176}
                      className="w-full h-auto"
                      priority
                    />
                  </div>

                  <p className="text-[#9b9b9b] mb-4">
                    <strong className="text-[#fafafa]">ZOPA</strong> (Zone of Potential Agreement): the real space for
                    negotiation
                  </p>

                  <p className="text-[#9b9b9b] mb-4">
                    <strong className="text-[#fafafa]">BATNA</strong> (Best Alternative to a Negotiated Agreement): the
                    fallback strategy to strengthen your position
                  </p>

                  <h3 className="text-lg font-bold text-[#fafafa] mb-3">Deal mechanisms to unlock or expand ZOPA:</h3>

                  <ul className="space-y-2">
                    <li className="text-[#9b9b9b] flex items-start">
                      <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                      <span>
                        <strong className="text-[#fafafa]">Earn-out:</strong> aligns future performance with price
                      </span>
                    </li>
                    <li className="text-[#9b9b9b] flex items-start">
                      <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                      <span>
                        <strong className="text-[#fafafa]">Vendor Due Diligence:</strong> builds confidence and reduces
                        discounts
                      </span>
                    </li>
                    <li className="text-[#9b9b9b] flex items-start">
                      <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                      <span>
                        <strong className="text-[#fafafa]">Reps & Warranties:</strong> risk allocation mechanisms
                      </span>
                    </li>
                    <li className="text-[#9b9b9b] flex items-start">
                      <ChevronRight className="h-5 w-5 text-[#9b9b9b] mr-1 flex-shrink-0" />
                      <span>
                        <strong className="text-[#fafafa]">Holdback, Escrow, MAC Clauses:</strong> mitigate uncertainty
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
        <section id="contact" className="py-16 bg-[#1a1a1a]">
          <div className="container">
            <div className="max-w-3xl mx-auto bg-[#141414] p-8 rounded-lg border border-[#737373]">
              <h2 className="text-3xl font-bold text-[#fafafa] mb-6 text-center">Contact Our M&A Team</h2>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#fafafa] mb-2">Gabriel C Carracedo</h3>
                  <p className="text-[#9b9b9b] mb-4">Partner, Gaelica Finance</p>

                  <div className="space-y-2">
                    <p className="text-[#9b9b9b] flex items-center justify-center">
                      <span className="mr-2">📞</span> +55 (11) 99916-8448
                    </p>
                    <p className="text-[#9b9b9b] flex items-center justify-center">
                      <span className="mr-2">📧</span> gcarracedo@gaelicafinance.com
                    </p>
                    <p className="text-[#9b9b9b] flex items-center justify-center">
                      <span className="mr-2">🌐</span> www.gaelicafinance.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button size="lg" className="gap-2 bg-[#9b9b9b] hover:bg-[#9b9b9b]/90 text-[#141414]" asChild>
                  <Link href="#cta">
                    Schedule a Consultation <ArrowRight className="h-4 w-4" />
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

