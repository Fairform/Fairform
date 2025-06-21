import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import { INDUSTRY_REGULATIONS } from '@/app/lib/constants';

export const runtime = 'nodejs';

// Define industry types from INDUSTRY_REGULATIONS keys
type Industry = keyof typeof INDUSTRY_REGULATIONS;

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { industry } = await req.json();

    if (!industry || !(industry in INDUSTRY_REGULATIONS)) {
      return new NextResponse(
        JSON.stringify({ error: 'Invalid or missing industry' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store',
          },
        }
      );
    }

    const clauses = INDUSTRY_REGULATIONS[industry as Industry];

    const pdf = await PDFDocument.create();
    const page = pdf.addPage([600, 800]);
    const font = await pdf.embedFont(StandardFonts.Helvetica);
    const fontSize = 12;

    const lines = clauses.map((clause: string, i: number) => `${i + 1}. ${clause}`);
    const content = lines.join('\n\n');

    page.drawText(content, {
      x: 50,
      y: 750,
      size: fontSize,
      font,
      lineHeight: 18,
      maxWidth: 500,
    });

    const pdfBytes = await pdf.save();

    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Fairform-Compliance-Guide.pdf"',
        'Cache-Control': 'no-store',
      },
    });
  } catch (error: any) {
    console.error('PDF generation failed:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
        },
      }
    );
  }
}
