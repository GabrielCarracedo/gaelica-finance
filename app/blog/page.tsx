import { getAllPosts } from "@/lib/blog"
import Link from "next/link"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">
              <Link 
                href={`/blog/${post.slug}`}
                className="hover:text-primary transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">{post.description}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
} 