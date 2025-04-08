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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src={resolvedTheme === "light" ? "/images/logolightmode.png" : "/images/logo.png"}
                alt="Gaelica Finance"
                width={resolvedTheme === "light" ? 140 : 240}
                height={resolvedTheme === "light" ? 45 : 80}
                className="mb-4"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Premium financial consulting with data-driven insights to help businesses make informed decisions.
            </p>
            <div className="flex gap-3">
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
          <div>
            <h3 className="font-medium text-lg mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/strategic-transactions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Strategic Transactions
                </Link>
              </li>
              <li>
                <Link href="/financial-analysis" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Financial Analysis
                </Link>
              </li>
              <li>
                <Link href="/risk-management" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Risk Management
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4 text-foreground">Company</h3>
            <ul className="space-y-2">
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
          <div>
            <h3 className="font-medium text-lg mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2">
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

