import { ContactForm } from '#/components/contact-form'
import { SocialLinks } from '#/components/social-links'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { resume } from '#/lib/resume-data'
import { Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-24 md:px-6">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Get in touch
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Have a project in mind or just want to say hi? I&apos;m always
              open to discussing new opportunities.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-muted p-3">
                <Mail className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">{resume.email}</p>
              </div>
            </div>

            <SocialLinks className="mt-6" />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
            <p className="text-sm text-muted-foreground">
              I&apos;ll get back to you within 24 hours.
            </p>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
