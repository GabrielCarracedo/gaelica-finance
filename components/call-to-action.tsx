import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function CallToAction() {
  return (
    <section id="cta" className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px]" />
      <div className="absolute inset-0 [mask-image:radial-gradient(black,transparent_70%)]" />

      {/* Background element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] opacity-20 blur-3xl rounded-full bg-muted" />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border border-muted/30 bg-muted/10 px-3 py-1 text-sm text-muted-foreground mb-4">
            <span className="mr-1">•</span> Get Started Today
          </div>
          <h2 className="heading-lg text-foreground mb-4">Ready to Transform Your Financial Strategy?</h2>
          <p className="body-lg text-muted-foreground mb-8">
            Join hundreds of businesses that have elevated their financial performance with our data-driven consulting
            services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
            <Button className="gap-2 bg-[#9b9b9b] hover:bg-[#9b9b9b]/90 text-background">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  )
}

