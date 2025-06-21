import { NextResponse } from 'next/server';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import { nationalRegulations } from '@/app/lib/regulations';

export async function POST(request: Request) {
  const { industry } = await request.json();
  const clauses = nationalRegulations[industry] || [];

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const text = `
    FAIRFORM NATIONAL COMPLIANCE POLICY
    ================================
    Industry: ${industry.toUpperCase()}
    Generated: ${new Date().toLocaleDateString('en-AU')}
    APPLICABLE REGULATIONS:
    ${clauses.join('\n')}

    DISCLAIMER:
    This AI-generated document requires professional verification.
    Policy ID: FF-${Math.random().toString(36).substring(2, 10).toUpperCase()}
  `;

  page.drawText(text, {
    x: 50,
    y: 700,
    size: 12,
    font,
    lineHeight: 15
  });

  const pdfBytes = await pdfDoc.save();

  return new Response(pdfBytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=fairform-policy.pdf'
    }
  });
}
