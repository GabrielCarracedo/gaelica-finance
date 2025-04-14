import Link from "next/link"
import { getAllPosts } from "@/lib/blog"
import { formatDate } from "@/lib/utils"

export const metadata = {
  title: 'Blog - Gaelica Finance',
  description: 'Insights e análises sobre o mercado financeiro',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="flex-1">
      <section className="py-20">
        <div className="container">
          <h1 className="text-4xl font-bold mb-12">Blog</h1>
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-video relative bg-muted rounded-lg overflow-hidden mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-muted-foreground mb-4">{post.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>•</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}