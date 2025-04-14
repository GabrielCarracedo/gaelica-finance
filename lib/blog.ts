import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  author: string
  image: string
  content: string
}

const POSTS_DIRECTORY = path.join(process.cwd(), 'content/blog')

// Ensure the posts directory exists
if (!fs.existsSync(POSTS_DIRECTORY)) {
  fs.mkdirSync(POSTS_DIRECTORY, { recursive: true })
}

/**
 * Gets all blog posts sorted by date
 */
export function getAllPosts(): Post[] {
  // If directory doesn't exist or is empty, return empty array
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return []
  }

  const fileNames = fs.readdirSync(POSTS_DIRECTORY)
  const allPosts = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(POSTS_DIRECTORY, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        image: data.image,
        content
      } as Post
    })

  // Sort posts by date in descending order
  return allPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

/**
 * Gets a single post by its slug
 */
export function getPostBySlug(slug: string): Post | undefined {
  try {
    const fullPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      return undefined
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      image: data.image,
      content
    } as Post
  } catch (error) {
    return undefined
  }
} 