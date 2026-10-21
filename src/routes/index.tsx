import { Reveal } from '#/components/reveal'
import { About } from '#/components/sections/about'
import { Certifications } from '#/components/sections/certifications'
import { Contact } from '#/components/sections/contact'
import { Experience } from '#/components/sections/experience'
import { FeaturedProjects } from '#/components/sections/featured-projects'
import { Hero } from '#/components/sections/hero'
import { certifications } from '#/lib/certifications'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <FeaturedProjects />
      </Reveal>
      {certifications.length > 0 && (
        <Reveal>
          <Certifications />
        </Reveal>
      )}
      <Reveal>
        <Contact />
      </Reveal>
    </div>
  )
}
