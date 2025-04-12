import { Card, CardContent } from "@/components/ui/card"
import { Handshake } from "lucide-react"
import Image from "next/image"

export function Partnerships() {
  return (
    <section id="partnerships" className="py-20 bg-background">
      <div className="container">
        <div className="mb-16">
          <div className="flex flex-col items-start max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-muted/30 bg-muted/10 px-3 py-1 text-sm text-muted-foreground mb-4">
              <Handshake className="mr-2 h-4 w-4" />
              Our Partners
            </div>
            <h2 className="heading-lg text-foreground mb-6">Strategic Partnerships</h2>
            <div className="mt-4">
              <p className="text-lg text-muted-foreground mb-4">
                At Gaelica Finance, we operate with the conviction that excellence in execution begins with clarity of thought — and is amplified through the right alliances.
              </p>
              <p className="text-muted-foreground mb-4">
                Our model combines senior-led delivery, cutting-edge technology, and access to a highly qualified network of experts in risk & compliance, AI, governance, restructuring, ESG, innovation, and cross-sector strategy. These partnerships are not peripheral — they are integral. They reflect our commitment to deliver multidimensional, tailor-made solutions with both depth and agility.
              </p>
              <p className="text-muted-foreground">
                By design, we've built a structure capable of navigating complex challenges with the precision of a specialized firm and the reach of an interconnected ecosystem — always guided by quality, integrity, and strategic alignment.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-6">
          {/* Partner cards */}
          {[
            {
              imageSrc: "/images/Partners/James.png",
              name: "James Spalding",
              title: "AI Technologist | Partner at Delphion",
              description: "Technology leader with deep expertise in applied AI and product development. Partners with Gaelica on financial automation and generative AI solutions.",
              paddingTop: "pt-12"
            },
            {
              imageSrc: "/images/Partners/Luciana.png",
              name: "Luciana Medeiros",
              title: "ESG & Impact Evaluation",
              description: "Expert in sustainability strategy with 20+ years of experience. Partners with Gaelica on ESG impact assessment and stakeholder engagement frameworks.",
              paddingTop: "pt-12"
            },
            {
              imageSrc: "/images/Partners/Estevão.png",
              name: "Estevão Seccatto",
              title: "Turnaround Expert | Strategic Restructuring",
              description: "Advisor with 20+ years in complex corporate restructurings and R$20B+ in transactions. Partners with Gaelica on business model transformation and high-speed execution.",
              paddingTop: "pt-8"
            },
            {
              imageSrc: "/images/Partners/Thammy.png",
              name: "Thammy I. Marcato",
              title: "Innovation Advisor | Ecosystem Builder",
              description: "Global startup mentor and innovation leader in strategic planning and digital transformation. Partners with Gaelica on high-growth strategy and innovation architecture.",
              paddingTop: "pt-8"
            },
            {
              imageSrc: "/images/Partners/Oliver.png",
              name: "Oliver Ruprecht Scaravaglioni",
              title: "Business Development | Strategic Connector",
              description: "Brings strong commercial intelligence across sports, entertainment, and biotech sectors. Partners with Gaelica on business origination and market access.",
              paddingTop: "pt-4"
            },
            {
              imageSrc: "/images/Partners/Ana Paula.png",
              name: "Ana Paula Carracedo",
              title: "Governance & Compliance Leader | Board Advisor",
              description: "Executive with over a decade leading GRC at top corporations. Former President of the Compliance & Risk Committee at Amcham-Brasil. Partners with Gaelica on governance and risk strategies.",
              paddingTop: "pt-4"
            },
            {
              imageSrc: "",
              name: "Partner 7",
              title: "Coming Soon",
              description: "Additional strategic partner information will be available soon.",
              paddingTop: "pt-4",
              isPlaceholder: true
            }
          ].map((partner, index) => (
            <Card key={index} className="bg-card border-border hover:border-muted/50 transition-all duration-300">
              <CardContent className="p-5 flex flex-col items-center h-full">
                <div className="w-14 h-14 rounded-full bg-muted/10 mb-3 overflow-hidden relative flex items-center justify-center">
                  {partner.isPlaceholder ? (
                    <Handshake className="h-7 w-7 text-muted-foreground" />
                  ) : (
                    <Image 
                      src={partner.imageSrc} 
                      alt={partner.name} 
                      fill
                      sizes="56px"
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  )}
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <h3 className="text-base font-semibold text-center text-foreground">{partner.name}</h3>
                  <p className="text-sm text-center font-medium text-muted-foreground/80 mt-0.5 mb-3">
                    {partner.title}
                  </p>
                  <div className={partner.paddingTop}></div>
                  <p className="text-xs text-center text-muted-foreground/70 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 