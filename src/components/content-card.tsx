import { Badge } from '#/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { Calendar, Clock } from 'lucide-react'
import type { ReactNode } from 'react'

/** Summary card shared by the blog and tutorial listings; wrap it in a `<Link>`. */
export function ContentCard({
  badge,
  readTime,
  extra,
  title,
  date,
  excerpt,
}: {
  badge: string
  readTime: string
  extra?: ReactNode
  title: string
  date: string
  excerpt: string
}) {
  return (
    <Card className="h-full border-none shadow-md transition-colors hover:bg-muted/50">
      <CardHeader>
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {badge}
          </Badge>
          <span className="flex items-center gap-3">
            {extra}
            <span className="flex items-center text-xs text-muted-foreground">
              <Clock className="mr-1 size-3" /> {readTime}
            </span>
          </span>
        </div>
        <CardTitle className="text-2xl group-hover:text-primary">
          {title}
        </CardTitle>
        <div className="mt-2 flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-2 size-4" />
          {date}
        </div>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed text-muted-foreground">{excerpt}</p>
      </CardContent>
    </Card>
  )
}
