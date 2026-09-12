import { useState } from 'react'
import { Button } from '#/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '#/components/ui/dropdown-menu'
import { Download, FileText, Loader2 } from 'lucide-react'

export function ResumeDownloadButton() {
  const [pending, setPending] = useState<'pdf' | 'docx' | null>(null)

  async function handleDownload(format: 'pdf' | 'docx') {
    setPending(format)
    try {
      if (format === 'pdf') {
        const { generateResumePdf } = await import('#/lib/resume/generate-pdf')
        generateResumePdf()
      } else {
        const { generateResumeDocx } =
          await import('#/lib/resume/generate-docx')
        await generateResumeDocx()
      }
    } finally {
      setPending(null)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" disabled={pending !== null}>
          {pending !== null ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Download className="size-4" />
          )}
          Resume
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleDownload('pdf')}
          disabled={pending !== null}
        >
          <FileText className="size-4" />
          Download as PDF
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleDownload('docx')}
          disabled={pending !== null}
        >
          <FileText className="size-4" />
          Download as Word (.docx)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
