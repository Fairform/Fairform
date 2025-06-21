import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import { INDUSTRY_REGULATIONS } from '@/app/lib/constants';

export async function POST(req: NextRequest) {
  try {
    const { industry } = await req.json();
    const clauses =
      INDUSTRY_REGULATIONS[industry as keyof typeof INDUSTRY_REGULATIONS] || [];

    const pdf = await PDFDocument.create();
    const page = pdf.addPage([600, 800]);
    const font = await pdf.embedFont(StandardFonts.Helvetica);
    const { width, height } = page.getSize();

    let text = `Compliance Clauses for ${industry.toUpperCase()}:\n\n`;
    clauses.forEach((clause, i) => {
      text += `${i + 1}. ${clause}\n\n`;
    });

    page.drawText(text, {
      x: 50,
      y: height - 50,
      size: 10,
      font,
      lineHeight: 14,
      maxWidth: 500
    });

    const pdfBytes = await pdf.save();

    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${industry}_compliance.pdf"`,
        'Cache-Control': 'no-store'
      }
    });
  } catch (error: any) {
    console.error('❌ PDF generation failed:', error.message);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to generate PDF', details: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store'
        }
      }
    );
  }
}
