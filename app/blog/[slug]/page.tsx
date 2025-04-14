import React from 'react'
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { cn } from "@/lib/utils"
import { ShareButtons } from "@/components/share-buttons"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <article className="container py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-4 mb-8 text-muted-foreground">
        <time>{post.date}</time>
        <span>•</span>
        <span>{post.author}</span>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        {post.content}
      </div>
      <div className="mt-8">
        <ShareButtons 
          url={`/blog/${post.slug}`}
          title={post.title}
          description={post.description}
        />
      </div>
    </article>
  )
} 