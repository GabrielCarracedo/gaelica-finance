"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
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
          <LanguageToggle />
          <ModeToggle />
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

