"use client"

import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function SiteHeader() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-16" /> // Placeholder to prevent layout shift
  }

  // Use resolvedTheme for more reliable theme detection
  const currentTheme = resolvedTheme || theme

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative w-[120px]">
            <Link href="/">
              <Image 
                src={currentTheme === "dark" ? "/images/logo.png" : "/images/logolightmode.png"}
                alt="Gaelica Finance" 
                width={120}
                height={40}
                className="w-full h-auto"
                priority
              />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">Based in São Paulo, Brazil</p>
        </div>
        <nav className="flex items-center gap-8">
          <Link href="#services" className="text-base font-bold text-foreground hover:text-foreground/80">
            Our Services
          </Link>
          <Link href="#approach" className="text-base font-bold text-foreground hover:text-foreground/80">
            Our Approach
          </Link>
          <Link href="#testimonials" className="text-base font-bold text-foreground hover:text-foreground/80">
            Client Success Stories
          </Link>
          <Link href="#cta" className="text-base font-bold text-foreground hover:text-foreground/80">
            Get Started Today
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

