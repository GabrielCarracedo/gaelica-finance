declare module 'gray-matter' {
  interface GrayMatterFile<T = any> {
    data: T
    content: string
    excerpt?: string
    orig: string
  }

  interface Options {
    excerpt?: boolean | ((file: any, options: any) => string)
    excerpt_separator?: string
    engines?: Record<string, any>
    language?: string
    delimiters?: string | [string, string]
  }

  function matter(
    content: string,
    options?: Options
  ): GrayMatterFile

  export = matter
} 