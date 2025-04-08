"use client"

import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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
            <Link href="/#">
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
          <p className="text-sm text-muted-foreground hidden md:block">Based in São Paulo, Brazil</p>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#services" className="text-base font-bold text-foreground hover:text-foreground/80">
            Our Services
          </Link>
          <Link href="/#approach" className="text-base font-bold text-foreground hover:text-foreground/80">
            Our Approach
          </Link>
          <Link href="/#client-stories" className="text-base font-bold text-foreground hover:text-foreground/80">
            Client Success Stories
          </Link>
          <Link href="/#cta" className="text-base font-bold text-foreground hover:text-foreground/80">
            Get Started Today
          </Link>
          <ThemeToggle />
        </nav>
        
        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 py-4">
                <Link 
                  href="/#services" 
                  className="text-base font-bold text-foreground hover:text-foreground/80"
                  onClick={() => setIsOpen(false)}
                >
                  Our Services
                </Link>
                <Link 
                  href="/#approach" 
                  className="text-base font-bold text-foreground hover:text-foreground/80"
                  onClick={() => setIsOpen(false)}
                >
                  Our Approach
                </Link>
                <Link 
                  href="/#client-stories" 
                  className="text-base font-bold text-foreground hover:text-foreground/80"
                  onClick={() => setIsOpen(false)}
                >
                  Client Success Stories
                </Link>
                <Link 
                  href="/#cta" 
                  className="text-base font-bold text-foreground hover:text-foreground/80"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started Today
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

