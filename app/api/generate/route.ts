export const runtime = 'nodejs';
import { NextResponse } from 'next/server'
import { PDFDocument, StandardFonts } from 'pdf-lib'
import { nationalRegulations } from '@/lib/constants'

export async function POST(req: Request) {
  const { industry } = await req.json()
  const clauses = nationalRegulations[industry] || []

  const pdf = await PDFDocument.create()
  const page = pdf.addPage([600, 800])
  const font = await pdf.embedFont(StandardFonts.Helvetica)
  const text = `
FAIRFORM NATIONAL COMPLIANCE POLICY
Industry: ${industry.toUpperCase()}
Generated: ${new Date().toLocaleDateString('en-AU')}

${clauses.join('\n')}
`
  page.drawText(text, { x: 40, y: 740, size: 12, font, lineHeight: 14 })
  const bytes = await pdf.save()
  return new Response(bytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=policy.pdf'
    }
  })
}
