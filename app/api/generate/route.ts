import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { INDUSTRY_REGULATIONS } from '@/app/lib/constants';

export const runtime = 'nodejs';

// Define allowed industries from constant keys
type Industry = keyof typeof INDUSTRY_REGULATIONS;

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { industry } = body;

    // Validate industry key
    if (!industry || !(industry in INDUSTRY_REGULATIONS)) {
      return new NextResponse(
        JSON.stringify({ error: 'Invalid or missing industry key.' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store',
          },
        }
      );
    }

    const regulations = INDUSTRY_REGULATIONS[industry as Industry];
    const pdf = await PDFDocument.create();
    const page = pdf.addPage([600, 800]);
    const font = await pdf.embedFont(StandardFonts.Helvetica);
    const fontSize = 12;

    // Title
    const title = `Compliance Guide – ${industry.charAt(0).toUpperCase() + industry.slice(1)}`;
    page.drawText(title, {
      x: 50,
      y: 770,
      size: 16,
      font,
      color: rgb(0.2, 0.4, 0.8),
    });

    // Draw each regulation line-by-line
    let y = 740;
    for (let i = 0; i < regulations.length; i++) {
      const text = `${i + 1}. ${regulations[i]}`;
      if (y < 50) {
        // Add new page if needed
        const newPage = pdf.addPage([600, 800]);
        y = 770;
        page.drawText("Continued...", { x: 50, y: y, size: 12, font });
        y -= 30;
      }
      page.drawText(text, { x: 50, y, size: fontSize, font });
      y -= 24;
    }

    const pdfBytes = await pdf.save();

    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="Fairform-${industry}-compliance.pdf"`,
        'Cache-Control': 'no-store',
      },
    });
  } catch (error: any) {
    console.error('PDF generation error:', error);
    return new NextResponse(
      JSON.stringify({
        error: 'Internal server error',
        details: error.message || 'Unexpected failure',
      }),
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
