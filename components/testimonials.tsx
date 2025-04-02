import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section id="client-stories" className="py-20 bg-[#141414]">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-[#9b9b9b]/30 bg-[#9b9b9b]/10 px-3 py-1 text-sm text-[#9b9b9b] mb-4">
            <span className="mr-1">•</span> Client Success Stories
          </div>
          <h2 className="heading-lg text-[#fafafa]">What Our Clients Say</h2>
          <p className="mt-4 body-lg max-w-3xl mx-auto text-[#9b9b9b]">
            Hear from businesses that have transformed their financial strategy with our services
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-[#1a1a1a] border-[#737373]">
            <CardContent className="p-8">
              <Quote className="h-8 w-8 text-[#9b9b9b] mb-4" />
              <p className="text-[#fafafa] mb-6">
                "Gaelica Finance transformed our approach to investment strategy. Their data-driven insights helped us
                increase portfolio performance by 28% in just one year."
              </p>
              <div>
                <p className="font-medium text-[#fafafa]">Carlos Mendes</p>
                <p className="text-sm text-[#9b9b9b]">CFO, TechBrasil Inc.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1a1a] border-[#737373]">
            <CardContent className="p-8">
              <Quote className="h-8 w-8 text-[#9b9b9b] mb-4" />
              <p className="text-[#fafafa] mb-6">
                "The financial analysis provided by Gaelica gave us clarity on our expansion strategy. Their team's
                expertise was invaluable during our recent acquisition."
              </p>
              <div>
                <p className="font-medium text-[#fafafa]">Mariana Silva</p>
                <p className="text-sm text-[#9b9b9b]">CEO, Retail Solutions SA</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1a1a] border-[#737373]">
            <CardContent className="p-8">
              <Quote className="h-8 w-8 text-[#9b9b9b] mb-4" />
              <p className="text-[#fafafa] mb-6">
                "Working with Gaelica Finance has been a game-changer for our risk management. Their detailed analysis
                helped us navigate market volatility with confidence."
              </p>
              <div>
                <p className="font-medium text-[#fafafa]">Rafael Costa</p>
                <p className="text-sm text-[#9b9b9b]">Investment Director, Global Partners</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

