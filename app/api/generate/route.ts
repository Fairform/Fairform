import { NextResponse } from 'next/server';
import { PDFDocument, rgb } from 'pdf-lib';
import { nationalRegulations } from '@/app/lib/constants';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const { industry } = await req.json();

    if (!industry || typeof industry !== 'string') {
      return NextResponse.json({ error: 'Invalid industry provided' }, { status: 400 });
    }

    const clauses = nationalRegulations[industry] ?? [];

    const pdf = await PDFDocument.create();
    const page = pdf.addPage([600, 800]);
    const { width, height } = page.getSize();

    const fontSize = 12;
    const margin = 50;
    const maxWidth = width - 2 * margin;
    let y = height - margin;

    const textLines = clauses.flatMap(clause => {
      const words = clause.split(' ');
      const lines: string[] = [];
      let line = '';

      for (const word of words) {
        const testLine = line + word + ' ';
        if (testLine.length * (fontSize / 2) > maxWidth) {
          lines.push(line.trim());
          line = word + ' ';
        } else {
          line = testLine;
        }
      }
      if (line.trim()) lines.push(line.trim());
      return lines;
    });

    textLines.forEach(line => {
      if (y < margin) return;
      page.drawText(line, { x: margin, y, size: fontSize, color: rgb(0, 0, 0) });
      y -= fontSize + 5;
    });

    const pdfBytes = await pdf.save();

    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${industry}-regulations.pdf"`,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate PDF', details: (error as Error).message }, { status: 500 });
  }
}
