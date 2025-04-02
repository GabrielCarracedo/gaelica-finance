import { BarChart3, PieChart, TrendingUp, LineChart, Layers, Shield, Scale, Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Features() {
  return (
    <section id="services" className="py-20 bg-[#141414]">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-[#9b9b9b]/30 bg-[#9b9b9b]/10 px-3 py-1 text-sm text-[#9b9b9b] mb-4">
            <span className="mr-1">•</span> Our Services
          </div>
          <h2 className="heading-lg text-[#fafafa]">Comprehensive Financial Solutions</h2>
          <p className="mt-4 body-lg max-w-3xl mx-auto text-[#9b9b9b]">
            We provide data-driven financial consulting services tailored to your business needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* New Valuation Box (First) */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#737373] group hover:border-[#9b9b9b]/50 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#9b9b9b]/10 mb-6 group-hover:bg-[#9b9b9b]/20 transition-all duration-300">
              <Scale className="h-6 w-6 text-[#9b9b9b]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#fafafa]">Valuation</h3>
            <p className="text-[#9b9b9b]">
              Comprehensive business valuation services using advanced financial models to determine accurate and
              defensible company valuations.
            </p>
          </div>

          {/* New M&A Box (Second) with Link */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#737373] group hover:border-[#9b9b9b]/50 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#9b9b9b]/10 mb-6 group-hover:bg-[#9b9b9b]/20 transition-all duration-300">
              <Briefcase className="h-6 w-6 text-[#9b9b9b]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#fafafa]">M&A</h3>
            <p className="text-[#9b9b9b] mb-4">
              Strategic merger and acquisition advisory services to guide you through complex transactions and maximize
              value creation.
            </p>
            <Link
              href="/strategic-transactions"
              className="text-sm font-medium text-[#9b9b9b] hover:text-[#c3c3c3] transition-colors flex items-center"
              scroll={false}
            >
              Learn more <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#737373] group hover:border-[#9b9b9b]/50 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#9b9b9b]/10 mb-6 group-hover:bg-[#9b9b9b]/20 transition-all duration-300">
              <BarChart3 className="h-6 w-6 text-[#9b9b9b]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#fafafa]">Financial Analysis</h3>
            <p className="text-[#9b9b9b]">
              In-depth analysis of financial data to identify trends, opportunities, and risks for your business.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#737373] group hover:border-[#9b9b9b]/50 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#9b9b9b]/10 mb-6 group-hover:bg-[#9b9b9b]/20 transition-all duration-300">
              <TrendingUp className="h-6 w-6 text-[#9b9b9b]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#fafafa]">Investment Strategy</h3>
            <p className="text-[#9b9b9b]">
              Data-backed investment strategies tailored to your business goals and risk tolerance.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#737373] group hover:border-[#9b9b9b]/50 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#9b9b9b]/10 mb-6 group-hover:bg-[#9b9b9b]/20 transition-all duration-300">
              <PieChart className="h-6 w-6 text-[#9b9b9b]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#fafafa]">Portfolio Optimization</h3>
            <p className="text-[#9b9b9b]">
              Optimize your investment portfolio using advanced statistical models and market analysis.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#737373] group hover:border-[#9b9b9b]/50 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#9b9b9b]/10 mb-6 group-hover:bg-[#9b9b9b]/20 transition-all duration-300">
              <LineChart className="h-6 w-6 text-[#9b9b9b]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#fafafa]">Risk Assessment</h3>
            <p className="text-[#9b9b9b]">
              Comprehensive risk analysis and mitigation strategies to protect your financial assets.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#737373] group hover:border-[#9b9b9b]/50 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#9b9b9b]/10 mb-6 group-hover:bg-[#9b9b9b]/20 transition-all duration-300">
              <Layers className="h-6 w-6 text-[#9b9b9b]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#fafafa]">Financial Planning</h3>
            <p className="text-[#9b9b9b]">
              Strategic financial planning with clear roadmaps and actionable recommendations.
            </p>
          </div>

          {/* Updated from Compliance Advisory to Corporate Governance Advisory */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#737373] group hover:border-[#9b9b9b]/50 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#9b9b9b]/10 mb-6 group-hover:bg-[#9b9b9b]/20 transition-all duration-300">
              <Shield className="h-6 w-6 text-[#9b9b9b]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#fafafa]">Corporate Governance Advisory</h3>
            <p className="text-[#9b9b9b]">
              Enhance your organization's leadership structure, board effectiveness, and strategic decision-making
              processes with our expert governance guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

