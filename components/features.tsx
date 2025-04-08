import { BarChart3, PieChart, TrendingUp, LineChart, Layers, Shield, Scale, Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Features() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-muted/30 bg-muted/10 px-3 py-1 text-sm text-muted-foreground mb-4">
            <span className="mr-1">•</span> Our Services
          </div>
          <h2 className="heading-lg text-foreground">Comprehensive Financial Solutions</h2>
          <p className="mt-4 body-lg max-w-3xl mx-auto text-muted-foreground">
            We provide data-driven financial consulting services tailored to your business needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* New Valuation Box (First) */}
          <div className="bg-card p-8 rounded-lg border border-border group hover:border-muted/50 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6 group-hover:bg-muted/20 transition-all duration-300">
              <Scale className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-xl font-semibold">Valuation</h3>
              <p className="text-muted-foreground">
                Comprehensive business valuation services for mergers, acquisitions, financial reporting, and strategic planning.
              </p>
              <Link 
                href="/business-valuation" 
                className="text-primary hover:underline"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* New M&A Box (Second) with Link */}
          <div className="bg-card p-8 rounded-lg border border-border group hover:border-muted/50 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6 group-hover:bg-muted/20 transition-all duration-300">
              <Briefcase className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">M&A</h3>
            <p className="text-muted-foreground mb-4">
              Strategic merger and acquisition advisory services to guide you through complex transactions and maximize
              value creation.
            </p>
            <Link
              href="/strategic-transactions"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center"
              scroll={false}
            >
              Learn more <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border group hover:border-muted/50 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6 group-hover:bg-muted/20 transition-all duration-300">
              <BarChart3 className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Financial Analysis</h3>
            <p className="text-muted-foreground">
              In-depth analysis of financial data to identify trends, opportunities, and risks for your business.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border group hover:border-muted/50 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6 group-hover:bg-muted/20 transition-all duration-300">
              <TrendingUp className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Investment Strategy</h3>
            <p className="text-muted-foreground">
              Data-backed investment strategies tailored to your business goals and risk tolerance.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border group hover:border-muted/50 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6 group-hover:bg-muted/20 transition-all duration-300">
              <PieChart className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Portfolio Optimization</h3>
            <p className="text-muted-foreground">
              Optimize your investment portfolio using advanced statistical models and market analysis.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border group hover:border-muted/50 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6 group-hover:bg-muted/20 transition-all duration-300">
              <LineChart className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Risk Assessment</h3>
            <p className="text-muted-foreground">
              Comprehensive risk analysis and mitigation strategies to protect your financial assets.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border group hover:border-muted/50 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6 group-hover:bg-muted/20 transition-all duration-300">
              <Layers className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Financial Planning</h3>
            <p className="text-muted-foreground">
              Strategic financial planning with clear roadmaps and actionable recommendations.
            </p>
          </div>

          {/* Updated from Compliance Advisory to Corporate Governance Advisory */}
          <div className="bg-card p-8 rounded-lg border border-border group hover:border-muted/50 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted/10 mb-6 group-hover:bg-muted/20 transition-all duration-300">
              <Shield className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Corporate Governance Advisory</h3>
            <p className="text-muted-foreground">
              Enhance your organization's leadership structure, board effectiveness, and strategic decision-making
              processes with our expert governance guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

