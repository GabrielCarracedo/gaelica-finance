"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ComingSoonOverlay } from "@/components/ui/coming-soon-overlay"

export function DataVisualization() {
  const [activeTab, setActiveTab] = useState("performance")
  const [mounted, setMounted] = useState(false)

  const chartRef = useRef<HTMLCanvasElement>(null)
  const pieChartRef = useRef<HTMLCanvasElement>(null)

  const { theme, resolvedTheme } = useTheme()
  
  // Use resolvedTheme for more reliable theme detection
  const currentTheme = resolvedTheme || theme

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    // Mock data for charts
    const renderPerformanceChart = () => {
      if (!chartRef.current) return

      const ctx = chartRef.current.getContext("2d")
      if (!ctx) return

      // Clear previous chart
      ctx.clearRect(0, 0, chartRef.current.width, chartRef.current.height)

      const textColor = currentTheme === "light" ? "#141414" : "#ffffff"
      const gridColor = currentTheme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"

      // Chart dimensions
      const width = chartRef.current.width
      const height = chartRef.current.height
      const padding = 40

      // Draw axes
      ctx.beginPath()
      ctx.strokeStyle = gridColor
      ctx.moveTo(padding, padding)
      ctx.lineTo(padding, height - padding)
      ctx.lineTo(width - padding, height - padding)
      ctx.stroke()

      // Draw grid lines
      for (let i = 1; i < 5; i++) {
        const y = padding + (height - 2 * padding) * (1 - i / 5)
        ctx.beginPath()
        ctx.strokeStyle = gridColor
        ctx.moveTo(padding, y)
        ctx.lineTo(width - padding, y)
        ctx.stroke()

        // Y-axis labels
        ctx.fillStyle = textColor
        ctx.font = "12px Inter, sans-serif"
        ctx.textAlign = "right"
        ctx.fillText(`${i * 20}%`, padding - 10, y + 5)
      }

      // X-axis labels
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
      const xStep = (width - 2 * padding) / (months.length - 1)

      months.forEach((month, i) => {
        const x = padding + i * xStep
        ctx.fillStyle = textColor
        ctx.font = "12px Inter, sans-serif"
        ctx.textAlign = "center"
        ctx.fillText(month, x, height - padding + 20)
      })

      // Draw data line
      const data = [15, 30, 25, 60, 42, 80]
      ctx.beginPath()
      ctx.strokeStyle = "#9b9b9b"
      ctx.lineWidth = 3

      data.forEach((value, i) => {
        const x = padding + i * xStep
        const y = height - padding - (value / 100) * (height - 2 * padding)

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      ctx.stroke()

      // Add gradient fill
      const gradient = ctx.createLinearGradient(0, padding, 0, height - padding)
      gradient.addColorStop(0, "rgba(155, 155, 155, 0.3)")
      gradient.addColorStop(1, "rgba(155, 155, 155, 0)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.moveTo(padding, height - padding)

      data.forEach((value, i) => {
        const x = padding + i * xStep
        const y = height - padding - (value / 100) * (height - 2 * padding)

        if (i === 0) {
          ctx.lineTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      ctx.lineTo(width - padding, height - padding)
      ctx.closePath()
      ctx.fill()
    }

    const renderAllocationChart = () => {
      if (!pieChartRef.current) return

      const ctx = pieChartRef.current.getContext("2d")
      if (!ctx) return

      // Clear previous chart
      ctx.clearRect(0, 0, pieChartRef.current.width, pieChartRef.current.height)

      const textColor = currentTheme === "light" ? "#141414" : "#ffffff"

      // Chart dimensions
      const width = pieChartRef.current.width
      const height = pieChartRef.current.height
      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(width, height) / 2 - 40

      // Data
      const data = [
        { value: 40, color: "#9b9b9b", label: "Equities" },
        { value: 30, color: "#7a7a7a", label: "Fixed Income" },
        { value: 20, color: "#5a5a5a", label: "Real Estate" },
        { value: 10, color: "#3a3a3a", label: "Commodities" },
      ]

      // Draw pie chart
      let startAngle = 0
      data.forEach((item) => {
        const sliceAngle = (2 * Math.PI * item.value) / 100

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
        ctx.closePath()

        ctx.fillStyle = item.color
        ctx.fill()

        startAngle += sliceAngle
      })

      // Draw legend
      const legendX = width - 150
      const legendY = 50
      const legendItemHeight = 25

      data.forEach((item, i) => {
        // Color box
        ctx.fillStyle = item.color
        ctx.fillRect(legendX, legendY + i * legendItemHeight, 15, 15)

        // Label
        ctx.fillStyle = textColor
        ctx.font = "12px Inter, sans-serif"
        ctx.textAlign = "left"
        ctx.fillText(
          `${item.label} (${item.value}%)`,
          legendX + 25,
          legendY + i * legendItemHeight + 12
        )
      })
    }

    // Render charts based on active tab
    if (activeTab === "performance") {
      renderPerformanceChart()
    } else if (activeTab === "allocation") {
      renderAllocationChart()
    }
  }, [activeTab, mounted, currentTheme])

  if (!mounted) {
    return <div className="h-[600px]" /> // Placeholder to prevent layout shift
  }

  return (
    <section id="approach" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-muted/30 bg-muted/10 px-3 py-1 text-sm text-muted-foreground mb-4">
            <span className="mr-1">•</span> Our Approach
          </div>
          <h2 className="heading-lg text-foreground">Data-Driven & AI-Augmented Strategy</h2>
          <p className="mt-4 body-lg max-w-3xl mx-auto text-left text-muted-foreground">
            We combine advanced data analytics with artificial intelligence to support corporate decisions with precision, speed, and strategic clarity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">AI architecture for Strategic Finance and Governance</CardTitle>
              <CardDescription className="text-muted-foreground">
                A systematic approach to solving complex financial and strategic challenges:
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center">
                  <span className="font-bold text-muted-foreground">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Data & Information Capture</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    We collect structured and unstructured financial, operational, and strategic data, leveraging AI-based tools when needed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center">
                  <span className="font-bold text-muted-foreground">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">AI-Enhanced Analysis & Scenario Modeling</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Using platforms like Delphion, we run scenario simulations, generate custom insights, and stress-test assumptions with algorithmic depth.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center">
                  <span className="font-bold text-muted-foreground">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Strategic Recommendations</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    We transform analytical findings into actionable, high-impact strategies — tailored to your business model, goals, and risk profile.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center">
                  <span className="font-bold text-muted-foreground">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Implementation & Dynamic Monitoring</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    We support execution and offer real-time performance tracking and continuous refinement through data dashboards and smart workflows.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-muted-foreground">
                  We use platforms like Delphion — our proprietary AI architecture — to simulate scenarios, model strategic outcomes, and structure actionable decisions.
                </p>
                
                <p className="text-muted-foreground">
                  This method allows us to move beyond analysis and into decision intelligence:
                </p>
                
                <p className="text-muted-foreground">
                  From valuation to governance, we build logic that sustains execution.
                </p>

                <div className="mt-4">
                  <Link 
                    href="/delphion" 
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center"
                  >
                    Learn More About Delphion <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Data Visualization</CardTitle>
              <CardDescription className="text-muted-foreground">
                Interactive charts that help you understand complex financial data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <ComingSoonOverlay message="Chart Updates Coming Soon" />
                <Tabs defaultValue="performance" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="mb-6 bg-muted w-full justify-start">
                    <TabsTrigger
                      value="performance"
                      className="data-[state=active]:bg-muted/20 data-[state=active]:text-foreground"
                    >
                      Performance
                    </TabsTrigger>
                    <TabsTrigger
                      value="allocation"
                      className="data-[state=active]:bg-muted/20 data-[state=active]:text-foreground"
                    >
                      Asset Allocation
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="performance" className="h-[300px]">
                    <canvas ref={chartRef} width={600} height={300} className="w-full h-full" />
                  </TabsContent>
                  <TabsContent value="allocation" className="h-[300px]">
                    <canvas ref={pieChartRef} width={600} height={300} className="w-full h-full" />
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

