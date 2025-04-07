import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section id="client-stories" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-muted/30 bg-muted/10 px-3 py-1 text-sm text-muted-foreground mb-4">
            <span className="mr-1">•</span> Client Success Stories
          </div>
          <h2 className="heading-lg text-foreground">What Our Clients Say</h2>
          <p className="mt-4 body-lg max-w-3xl mx-auto text-muted-foreground">
            Hear from businesses that have transformed their financial strategy with our services
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <Quote className="h-8 w-8 text-muted-foreground mb-4" />
              <p className="text-foreground mb-6">
                "Gaelica Finance transformed our approach to investment strategy. Their data-driven insights helped us
                increase portfolio performance by 28% in just one year."
              </p>
              <div>
                <p className="font-medium text-foreground">Carlos Mendes</p>
                <p className="text-sm text-muted-foreground">CFO, TechBrasil Inc.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <Quote className="h-8 w-8 text-muted-foreground mb-4" />
              <p className="text-foreground mb-6">
                "The financial analysis provided by Gaelica gave us clarity on our expansion strategy. Their team's
                expertise was invaluable during our recent acquisition."
              </p>
              <div>
                <p className="font-medium text-foreground">Mariana Silva</p>
                <p className="text-sm text-muted-foreground">CEO, Retail Solutions SA</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <Quote className="h-8 w-8 text-muted-foreground mb-4" />
              <p className="text-foreground mb-6">
                "Working with Gaelica Finance has been a game-changer for our risk management. Their detailed analysis
                helped us navigate market volatility with confidence."
              </p>
              <div>
                <p className="font-medium text-foreground">Rafael Costa</p>
                <p className="text-sm text-muted-foreground">Investment Director, Global Partners</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

