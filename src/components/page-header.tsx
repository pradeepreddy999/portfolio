import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export function PageHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="mb-12 space-y-4 text-center md:text-left">
      <Link
        to="/"
        className="mb-4 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="mr-2 size-4" /> Back to Home
      </Link>
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        {title}
      </h1>
      <p className="text-xl text-muted-foreground">{description}</p>
    </div>
  )
}
