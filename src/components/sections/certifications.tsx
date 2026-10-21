import { CertificateCard } from '#/components/certificate-card'
import { SectionHeading } from '#/components/section-heading'
import { certifications } from '#/lib/certifications'

export function Certifications() {
  return (
    <section id="certifications" className="bg-muted/50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Certifications"
          description="Courses and credentials I've completed to keep learning."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CertificateCard key={`${cert.issuer}-${cert.title}`} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}
