import { Link, createFileRoute } from '@tanstack/react-router'
import { ContentCard } from '#/components/content-card'
import { PageHeader } from '#/components/page-header'
import { blogPosts } from '#/lib/blog'

export const Route = createFileRoute('/blog/')({
  component: BlogPage,
})

function BlogPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 md:px-6">
      <PageHeader
        title="The Blog"
        description="Thoughts on development, design, and everything in between."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }}>
            <ContentCard
              badge={post.category}
              readTime={post.readTime}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
