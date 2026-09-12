import { getPost } from '#/lib/blog'
import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Markdown from 'react-markdown'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = getPost(params.slug)
    if (!post) throw notFound()
    return post
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} | Blog` : 'Blog' },
      { name: 'description', content: loaderData?.excerpt ?? '' },
    ],
  }),
  component: BlogPostPage,
})

function BlogPostPage() {
  const post = Route.useLoaderData()

  return (
    <article className="container mx-auto max-w-3xl py-12 px-4 md:px-6">
      <Link
        to="/blog"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
      >
        <ArrowLeft className="mr-2 size-4" /> Back to Blog
      </Link>

      <div className="space-y-4 border-b pb-8 mb-8">
        <div className="flex gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-secondary px-2 py-1 rounded-md text-secondary-foreground">
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-2 size-4" />
            {post.date}
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 size-4" />
            {post.readTime}
          </div>
        </div>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Markdown>{post.content}</Markdown>
      </div>
    </article>
  )
}
