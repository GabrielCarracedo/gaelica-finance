"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-[#141414]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px]" />
      <div className="absolute inset-0 [mask-image:radial-gradient(black,transparent_70%)]" />

      {/* Background element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[70%] h-[70%] opacity-20 blur-3xl rounded-full bg-[#9b9b9b]/20" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] opacity-20 blur-3xl rounded-full bg-[#9b9b9b]/20" />
      </div>

      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Logo on the left, positioned higher */}
          <div className={`flex justify-center ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
            <div className="mt-[-3rem]">
              <Image src="/logo.png" alt="Gaelica Finance" width={240} height={80} className="h-auto w-auto" />
            </div>
          </div>

          {/* All text content on the right */}
          <div className={`space-y-6 ${isLoaded ? "animate-fade-in-delay-1" : "opacity-0"}`}>
            <div className="inline-flex items-center rounded-full border border-[#9b9b9b]/30 bg-[#9b9b9b]/10 px-3 py-1 text-sm text-[#9b9b9b]">
              <span className="mr-1">•</span> Premium Financial Services
            </div>

            <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-[#fafafa]">
              Corporate Finance & Deals, Simplified
            </h1>

            <p className="text-lg text-[#9b9b9b] max-w-[600px]">
              Gaelica Finance delivers premium financial consulting services with sophisticated data analysis and
              visualization to help your business make informed decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="gap-2 bg-[#9b9b9b] hover:bg-[#9b9b9b]/90 text-[#141414]">
                <Link href="#cta">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-[#737373] hover:bg-[#737373]/10 text-[#c3c3c3]"
              >
                <Link href="#services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

