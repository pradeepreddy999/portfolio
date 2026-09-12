import { jsPDF } from 'jspdf'
import { resume } from '#/lib/resume-data'

const PAGE_WIDTH = 612 // US Letter, points
const PAGE_HEIGHT = 792
const MARGIN = 44
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2

const FONT = 'helvetica'
const COLOR_TEXT: [number, number, number] = [30, 30, 30]
const COLOR_MUTED: [number, number, number] = [90, 90, 90]
const COLOR_ACCENT: [number, number, number] = [37, 99, 235]

function fileNameFromResume() {
  return `${resume.name.replace(/\s+/g, '_')}_Resume.pdf`
}

export function generateResumePdf() {
  const doc = new jsPDF({ unit: 'pt', format: 'letter' })
  let y = MARGIN

  function ensureSpace(height: number) {
    if (y + height > PAGE_HEIGHT - MARGIN) {
      doc.addPage()
      y = MARGIN
    }
  }

  function sectionHeading(label: string) {
    ensureSpace(26)
    y += 14
    doc.setFont(FONT, 'bold')
    doc.setFontSize(12)
    doc.setTextColor(...COLOR_TEXT)
    doc.text(label.toUpperCase(), MARGIN, y)
    y += 4
    doc.setDrawColor(...COLOR_MUTED)
    doc.setLineWidth(0.75)
    doc.line(MARGIN, y, PAGE_WIDTH - MARGIN, y)
    y += 14
  }

  function bodyText(
    text: string,
    { size = 10.5, color = COLOR_TEXT, indent = 0, gap = 12 } = {},
  ) {
    doc.setFont(FONT, 'normal')
    doc.setFontSize(size)
    doc.setTextColor(...color)
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH - indent)
    for (const line of lines) {
      ensureSpace(gap)
      doc.text(line, MARGIN + indent, y)
      y += gap
    }
  }

  function bulletText(text: string) {
    const bulletIndent = 14
    doc.setFont(FONT, 'normal')
    doc.setFontSize(10)
    doc.setTextColor(...COLOR_TEXT)
    const lines = doc.splitTextToSize(text, CONTENT_WIDTH - bulletIndent)
    lines.forEach((line: string, i: number) => {
      ensureSpace(13)
      if (i === 0) {
        doc.text('•', MARGIN, y)
      }
      doc.text(line, MARGIN + bulletIndent, y)
      y += 13
    })
  }

  // Header: name, title, contact
  doc.setFont(FONT, 'bold')
  doc.setFontSize(22)
  doc.setTextColor(...COLOR_TEXT)
  doc.text(resume.name, MARGIN, y)
  y += 20

  doc.setFont(FONT, 'normal')
  doc.setFontSize(12)
  doc.setTextColor(...COLOR_MUTED)
  doc.text(resume.title, MARGIN, y)
  y += 18

  doc.setFontSize(9.5)
  doc.setTextColor(...COLOR_ACCENT)
  const contactLine = `${resume.email}   |   ${resume.linkedin}   |   ${resume.github}`
  const contactLines = doc.splitTextToSize(contactLine, CONTENT_WIDTH)
  for (const line of contactLines) {
    doc.text(line, MARGIN, y)
    y += 12
  }
  y += 4
  doc.setDrawColor(...COLOR_MUTED)
  doc.setLineWidth(1)
  doc.line(MARGIN, y, PAGE_WIDTH - MARGIN, y)

  // Summary
  sectionHeading('Summary')
  bodyText(resume.summary)

  // Skills
  sectionHeading('Skills')
  for (const group of resume.skills) {
    ensureSpace(13)
    doc.setFont(FONT, 'bold')
    doc.setFontSize(10)
    doc.setTextColor(...COLOR_TEXT)
    const label = `${group.label}: `
    const labelWidth = doc.getTextWidth(label)
    doc.text(label, MARGIN, y)
    doc.setFont(FONT, 'normal')
    const lines = doc.splitTextToSize(
      group.items.join(', '),
      CONTENT_WIDTH - labelWidth,
    )
    doc.text(lines[0] ?? '', MARGIN + labelWidth, y)
    y += 13
    for (const line of lines.slice(1)) {
      ensureSpace(13)
      doc.text(line, MARGIN, y)
      y += 13
    }
  }

  // Experience
  sectionHeading('Experience')
  resume.experience.forEach((job, index) => {
    ensureSpace(14)
    doc.setFont(FONT, 'bold')
    doc.setFontSize(11)
    doc.setTextColor(...COLOR_TEXT)
    doc.text(`${job.title} · ${job.company}`, MARGIN, y)
    doc.setFont(FONT, 'normal')
    doc.setFontSize(9.5)
    doc.setTextColor(...COLOR_MUTED)
    const dateWidth = doc.getTextWidth(job.dates)
    doc.text(job.dates, PAGE_WIDTH - MARGIN - dateWidth, y)
    y += 14
    for (const bullet of job.bullets) {
      bulletText(bullet)
    }
    if (index < resume.experience.length - 1) y += 6
  })

  // Projects
  sectionHeading('Selected Projects')
  resume.projects.forEach((project, index) => {
    ensureSpace(14)
    doc.setFont(FONT, 'bold')
    doc.setFontSize(10.5)
    doc.setTextColor(...COLOR_TEXT)
    doc.text(project.title, MARGIN, y)
    doc.setFont(FONT, 'normal')
    doc.setFontSize(9.5)
    doc.setTextColor(...COLOR_MUTED)
    const dateWidth = doc.getTextWidth(project.dates)
    doc.text(project.dates, PAGE_WIDTH - MARGIN - dateWidth, y)
    y += 13
    bodyText(`${project.description} (${project.tech.join(', ')})`, {
      size: 10,
      gap: 12,
    })
    if (index < resume.projects.length - 1) y += 4
  })

  doc.save(fileNameFromResume())
}
