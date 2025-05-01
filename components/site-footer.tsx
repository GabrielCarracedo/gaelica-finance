"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10">
          <div className="lg:col-span-1 lg:pr-12">
            <div className="flex items-center gap-2">
              <Image
                src={resolvedTheme === "light" ? "/images/logolightmode.png" : "/images/logo.png"}
                alt="Gaelica Finance"
                width={resolvedTheme === "light" ? 140 : 240}
                height={resolvedTheme === "light" ? 45 : 80}
                className="mb-2"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Premium financial consulting with data-driven insights to help businesses make informed decisions.
            </p>
            <div className="flex gap-3 mt-6">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-9 w-9 hover:bg-muted/10 hover:text-muted"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-9 w-9 hover:bg-muted/10 hover:text-muted"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-9 w-9 hover:bg-muted/10 hover:text-muted"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-9 w-9 hover:bg-muted/10 hover:text-muted"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-1">
            <h3 className="font-medium text-lg mb-6 text-foreground">Advisory Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/business-valuation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Business Valuation
                </Link>
              </li>
              <li>
                <Link href="/strategic-transactions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Strategic Transactions
                </Link>
              </li>
              <li>
                <Link href="/financial-planning-analysis" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Financial Planning & Analysis
                </Link>
              </li>
              <li>
                <Link 
                  href="/investment-strategy" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Investment Strategy
                </Link>
              </li>
              <li>
                <Link href="/portfolio-optimization" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio Optimization
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1 lg:pr-12">
            <h3 className="font-medium text-lg mb-6 text-foreground">Specialized Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/risk-assessment" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Risk Assessment
                </Link>
              </li>
              <li>
                <Link href="/esg-investment-strategy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  ESG Strategic Investment
                </Link>
              </li>
              <li>
                <Link href="/financial-complex-instruments" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Financial & Complex Instruments
                </Link>
              </li>
              <li>
                <Link href="/corporate-governance-advisory" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Corporate Governance Advisory
                </Link>
              </li>
              <li>
                <Link href="/ai-strategy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  AI Strategy & Business Transformation
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h3 className="font-medium text-lg mb-6 text-foreground">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="mailto:contact@gaelicafinance.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  contact@gaelicafinance.com
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h3 className="font-medium text-lg mb-6 text-foreground">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

