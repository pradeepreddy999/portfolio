import {
  BorderStyle,
  Document,
  ExternalHyperlink,
  Packer,
  Paragraph,
  TabStopType,
  TextRun,
} from 'docx'
import { resume } from '#/lib/resume-data'

const FONT = 'Calibri'
const COLOR_TEXT = '1E1E1E'
const COLOR_MUTED = '5A5A5A'
const COLOR_ACCENT = '2563EB'

const SIZE_NAME = 44 // 22pt
const SIZE_TITLE = 24 // 12pt
const SIZE_HEADING = 24 // 12pt
const SIZE_BODY = 22 // 11pt
const SIZE_SMALL = 20 // 10pt
const SIZE_CONTACT = 19 // 9.5pt

function fileNameFromResume() {
  return `${resume.name.replace(/\s+/g, '_')}_Resume.docx`
}

function headingParagraph(label: string) {
  return new Paragraph({
    spacing: { before: 260, after: 120 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 6, color: COLOR_MUTED },
    },
    children: [
      new TextRun({
        text: label.toUpperCase(),
        bold: true,
        size: SIZE_HEADING,
        font: FONT,
        color: COLOR_TEXT,
      }),
    ],
  })
}

function bodyParagraph(text: string) {
  return new Paragraph({
    spacing: { after: 160 },
    children: [
      new TextRun({ text, size: SIZE_BODY, font: FONT, color: COLOR_TEXT }),
    ],
  })
}

function bulletParagraph(text: string) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 60 },
    children: [
      new TextRun({ text, size: SIZE_SMALL, font: FONT, color: COLOR_TEXT }),
    ],
  })
}

function entryHeaderParagraph(title: string, dates: string) {
  return new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: 10800 }],
    spacing: { after: 40 },
    children: [
      new TextRun({
        text: title,
        bold: true,
        size: SIZE_BODY,
        font: FONT,
        color: COLOR_TEXT,
      }),
      new TextRun({
        text: `\t${dates}`,
        size: SIZE_CONTACT,
        font: FONT,
        color: COLOR_MUTED,
        italics: true,
      }),
    ],
  })
}

export async function generateResumeDocx() {
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            size: { width: 12240, height: 15840 }, // US Letter, twips
            margin: { top: 720, bottom: 720, left: 720, right: 720 },
          },
        },
        children: [
          new Paragraph({
            spacing: { after: 40 },
            children: [
              new TextRun({
                text: resume.name,
                bold: true,
                size: SIZE_NAME,
                font: FONT,
                color: COLOR_TEXT,
              }),
            ],
          }),
          new Paragraph({
            spacing: { after: 100 },
            children: [
              new TextRun({
                text: resume.title,
                size: SIZE_TITLE,
                font: FONT,
                color: COLOR_MUTED,
              }),
            ],
          }),
          new Paragraph({
            border: {
              bottom: {
                style: BorderStyle.SINGLE,
                size: 6,
                color: COLOR_MUTED,
              },
            },
            spacing: { after: 200 },
            children: [
              new TextRun({
                text: resume.email,
                size: SIZE_CONTACT,
                font: FONT,
                color: COLOR_ACCENT,
              }),
              new TextRun({
                text: '   |   ',
                size: SIZE_CONTACT,
                font: FONT,
                color: COLOR_MUTED,
              }),
              new ExternalHyperlink({
                link: resume.linkedin,
                children: [
                  new TextRun({
                    text: 'LinkedIn',
                    size: SIZE_CONTACT,
                    font: FONT,
                    color: COLOR_ACCENT,
                    underline: {},
                  }),
                ],
              }),
              new TextRun({
                text: '   |   ',
                size: SIZE_CONTACT,
                font: FONT,
                color: COLOR_MUTED,
              }),
              new ExternalHyperlink({
                link: resume.github,
                children: [
                  new TextRun({
                    text: 'GitHub',
                    size: SIZE_CONTACT,
                    font: FONT,
                    color: COLOR_ACCENT,
                    underline: {},
                  }),
                ],
              }),
            ],
          }),

          headingParagraph('Summary'),
          bodyParagraph(resume.summary),

          headingParagraph('Skills'),
          ...resume.skills.map(
            (group) =>
              new Paragraph({
                spacing: { after: 80 },
                children: [
                  new TextRun({
                    text: `${group.label}: `,
                    bold: true,
                    size: SIZE_SMALL,
                    font: FONT,
                    color: COLOR_TEXT,
                  }),
                  new TextRun({
                    text: group.items.join(', '),
                    size: SIZE_SMALL,
                    font: FONT,
                    color: COLOR_TEXT,
                  }),
                ],
              }),
          ),

          headingParagraph('Experience'),
          ...resume.experience.flatMap((job) => [
            entryHeaderParagraph(`${job.title} · ${job.company}`, job.dates),
            ...job.bullets.map(bulletParagraph),
          ]),

          headingParagraph('Selected Projects'),
          ...resume.projects.flatMap((project) => [
            entryHeaderParagraph(project.title, project.dates),
            bodyParagraph(
              `${project.description} (${project.tech.join(', ')})`,
            ),
          ]),
        ],
      },
    ],
  })

  const blob = await Packer.toBlob(doc)
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileNameFromResume()
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
