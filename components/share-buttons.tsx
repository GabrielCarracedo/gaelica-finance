import { Button } from "@/components/ui/button"
import { 
  Linkedin, 
  Twitter, 
  Facebook 
} from "lucide-react"

interface ShareButtonsProps {
  url: string
  title: string
  description: string
}

export function ShareButtons({ url, title, description }: ShareButtonsProps) {
  // Usar o domínio correto
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.gaelicafinance.com'
  
  // Remove any leading slashes from the URL path to prevent double slashes
  const cleanPath = url.startsWith('/') ? url.slice(1) : url
  
  // Construct the full URL properly
  const fullUrl = `${baseUrl}/${cleanPath}`
  
  const encodedUrl = encodeURIComponent(fullUrl)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}%0A%0A${encodedDescription}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}%0A%0A${encodedDescription}`
  }

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="icon"
        asChild
        className="hover:bg-blue-50 hover:text-blue-600"
      >
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>
      <Button
        variant="outline"
        size="icon"
        asChild
        className="hover:bg-blue-50 hover:text-blue-400"
      >
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
        </a>
      </Button>
      <Button
        variant="outline"
        size="icon"
        asChild
        className="hover:bg-blue-50 hover:text-blue-800"
      >
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-4 w-4" />
        </a>
      </Button>
    </div>
  )
} 