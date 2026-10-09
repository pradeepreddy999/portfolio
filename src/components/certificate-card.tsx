import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '#/components/ui/dialog'
import type { Certification } from '#/lib/certifications'
import { getCertificateFileType } from '#/lib/certifications'
import { Award, Download, ExternalLink, Eye, FileText } from 'lucide-react'
import { useState } from 'react'

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

function CertificatePreview({ cert }: { cert: Certification }) {
  const previewSrc =
    cert.thumbnail ??
    (cert.file && getCertificateFileType(cert.file) === 'image'
      ? cert.file
      : undefined)

  return (
    <div className="relative aspect-4/3 w-full overflow-hidden rounded-t-lg border-b bg-muted">
      {previewSrc ? (
        <img
          src={assetUrl(previewSrc)}
          alt={`${cert.title} certificate preview`}
          loading="lazy"
          className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex size-full flex-col items-center justify-center gap-2 text-muted-foreground">
          {cert.file ? (
            <FileText className="size-10" />
          ) : (
            <Award className="size-10" />
          )}
          <span className="text-xs">{cert.issuer}</span>
        </div>
      )}
      {cert.file && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/40 group-hover:opacity-100 group-focus-visible:bg-black/40 group-focus-visible:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-sm font-medium shadow">
            <Eye className="size-4" /> View certificate
          </span>
        </div>
      )}
    </div>
  )
}

function CertificateViewer({
  cert,
  file,
}: {
  cert: Certification
  file: string
}) {
  const type = getCertificateFileType(file)
  const url = assetUrl(file)

  return (
    <DialogContent className="h-[90vh] max-w-5xl gap-0 sm:w-[calc(100%-4rem)]">
      <DialogHeader className="border-b p-4 pr-12">
        <DialogTitle>{cert.title}</DialogTitle>
        <DialogDescription>
          {cert.issuer} · {cert.issued}
        </DialogDescription>
        <div className="flex flex-wrap gap-2 pt-2">
          <Button asChild size="sm" variant="outline">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="size-4" /> Open in new tab
            </a>
          </Button>
          <Button asChild size="sm" variant="outline">
            <a href={url} download>
              <Download className="size-4" /> Download
            </a>
          </Button>
          {cert.credentialUrl && (
            <Button asChild size="sm" variant="secondary">
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Award className="size-4" /> Verify credential
              </a>
            </Button>
          )}
        </div>
      </DialogHeader>

      <div className="min-h-0 flex-1 overflow-auto bg-muted/50">
        {type === 'pdf' ? (
          <object
            data={`${url}#view=FitH`}
            type="application/pdf"
            aria-label={`${cert.title} certificate PDF`}
            className="size-full"
          >
            <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center text-muted-foreground">
              <FileText className="size-10" />
              <p>Your browser can&apos;t display this PDF inline.</p>
              <Button asChild size="sm">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Open PDF
                </a>
              </Button>
            </div>
          </object>
        ) : (
          <img
            src={url}
            alt={`${cert.title} certificate`}
            className="mx-auto h-full w-full object-contain p-2"
          />
        )}
      </div>
    </DialogContent>
  )
}

export function CertificateCard({ cert }: { cert: Certification }) {
  const { file } = cert
  const [open, setOpen] = useState(false)

  return (
    <Card className="flex h-full flex-col gap-0 overflow-hidden py-0 transition-colors hover:border-primary/50">
      {file ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`View ${cert.title} certificate`}
          className="group block w-full cursor-zoom-in text-left focus-visible:outline-2 focus-visible:outline-ring"
        >
          <CertificatePreview cert={cert} />
        </button>
      ) : (
        <CertificatePreview cert={cert} />
      )}

      <CardHeader className="pt-6">
        <CardTitle className="text-lg leading-snug">{cert.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {cert.issuer} · {cert.issued}
        </p>
      </CardHeader>

      <CardContent className="flex-1 space-y-3 pt-2">
        {cert.skills && (
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-xs font-normal"
              >
                {skill}
              </Badge>
            ))}
          </div>
        )}
        {cert.credentialId && (
          <p className="text-xs text-muted-foreground">
            Credential ID: {cert.credentialId}
          </p>
        )}
      </CardContent>

      <CardFooter className="gap-2 py-6">
        {file && (
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setOpen(true)}
          >
            <Eye className="size-4" /> View
          </Button>
        )}
        {cert.credentialUrl && (
          <Button
            asChild
            variant={file ? 'ghost' : 'outline'}
            className="flex-1"
          >
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Verify <ExternalLink className="size-4" />
            </a>
          </Button>
        )}
      </CardFooter>

      {file && (
        <Dialog open={open} onOpenChange={setOpen}>
          <CertificateViewer cert={cert} file={file} />
        </Dialog>
      )}
    </Card>
  )
}
