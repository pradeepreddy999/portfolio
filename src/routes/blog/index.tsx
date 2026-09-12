import { Link, createFileRoute } from '@tanstack/react-router'
import { Badge } from '#/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { blogPosts } from '#/lib/blog'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'

export const Route = createFileRoute('/blog/')({
  component: BlogPage,
})

function BlogPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 md:px-6">
      <div className="mb-12 space-y-4 text-center md:text-left">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
        >
          <ArrowLeft className="mr-2 size-4" /> Back to Home
        </Link>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          The Blog
        </h1>
        <p className="text-xl text-muted-foreground">
          Thoughts on development, design, and everything in between.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }}>
            <Card className="h-full hover:bg-muted/50 transition-colors border-none shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Clock className="mr-1 size-3" /> {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary">
                  {post.title}
                </CardTitle>
                <div className="text-sm text-muted-foreground flex items-center mt-2">
                  <Calendar className="mr-2 size-4" />
                  {post.date}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
