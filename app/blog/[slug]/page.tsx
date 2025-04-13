import { BookOpen, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { formatDate } from "@/lib/utils"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { ShareButtons } from "@/components/share-buttons"
import { Metadata } from 'next'

export const dynamic = 'force-static'

type Props = {
  params: { slug: string }
}

// Função para gerar os metadados dinamicamente
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post não encontrado',
      description: 'O post que você está procurando não existe'
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gaelica.finance'

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${baseUrl}/blog/${post.slug}`,
      siteName: 'Gaelica Finance Blog',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      locale: 'pt_BR',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({
  params,
}: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="flex-1">
      <article className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="aspect-video relative bg-muted rounded-lg overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <h1>{post.title}</h1>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>{post.author}</span>
                <span>•</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>

              <div className="mb-8">
                <ShareButtons 
                  url={`/blog/${post.slug}`}
                  title={post.title}
                  description={post.description}
                />
              </div>

              <MDXRemote source={post.content} />
            </div>
          </div>
        </div>
      </article>
    </main>
  )
} 