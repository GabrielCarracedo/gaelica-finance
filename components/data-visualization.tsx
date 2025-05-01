"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { DelphionChart } from "../components/ui/DelphionChart"

export function DataVisualization() {
  const [activeTab, setActiveTab] = useState("performance")
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()
  
  // Use resolvedTheme for more reliable theme detection
  const currentTheme = resolvedTheme || theme

  useEffect(() => {
    setMounted(true)
  }, [])

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
                    <DelphionChart />
                  </TabsContent>
                  <TabsContent value="allocation" className="h-[300px]">
                    <DelphionChart showROI={false} />
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

