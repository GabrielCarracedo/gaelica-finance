import { BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "@/lib/blog"
import { formatDate } from "@/lib/utils"

export const dynamic = 'force-static'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-start gap-4">
              <div className="inline-flex items-center rounded-lg border bg-background/50 px-3 py-1 text-sm backdrop-blur-sm">
                <BookOpen className="mr-2 h-4 w-4" />
                <span>Blog</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Insights & Analysis
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore our latest thoughts on finance, investment strategies, and market trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="bg-card rounded-lg p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-2">{post.description}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <span>{post.author}</span>
                      <span>•</span>
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 