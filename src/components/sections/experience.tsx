import { SectionHeading } from '#/components/section-heading'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { resume } from '#/lib/resume-data'

export function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 py-24 md:px-6">
      <SectionHeading
        title="Experience"
        description="Where I've worked and what I've built."
      />

      <div className="mx-auto max-w-3xl space-y-6">
        {resume.experience.map((job) => (
          <Card key={`${job.title}-${job.dates}`}>
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <CardTitle className="text-xl">
                  {job.title} · {job.company}
                </CardTitle>
                <span className="text-sm text-muted-foreground">
                  {job.dates}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-gray-500 dark:text-gray-400">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
