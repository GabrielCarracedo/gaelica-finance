"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"

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
          <h2 className="heading-lg text-foreground">Data-Driven Financial Solutions</h2>
          <p className="mt-4 body-lg max-w-3xl mx-auto text-muted-foreground">
            We combine advanced data analysis with financial expertise to deliver actionable insights
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Our Process</CardTitle>
              <CardDescription className="text-muted-foreground">
                A systematic approach to solving complex financial challenges
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center">
                  <span className="font-bold text-muted-foreground">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Data Collection & Analysis</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    We gather comprehensive financial data and analyze it using advanced statistical methods.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center">
                  <span className="font-bold text-muted-foreground">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Insight Generation</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Our team identifies key patterns and insights from the analyzed data.
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
                    We develop actionable strategies based on data insights and financial expertise.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center">
                  <span className="font-bold text-muted-foreground">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Implementation & Monitoring</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    We help implement strategies and continuously monitor performance with real-time dashboards.
                  </p>
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

