import { NextResponse } from 'next/server';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { INDUSTRY_REGULATIONS, COMPLIANCE_DISCLAIMER } from '@/lib/constants';

export async function POST(request: Request) {
  try {
    const { industry } = await request.json();
    const industryKey = industry.toLowerCase() as keyof typeof INDUSTRY_REGULATIONS;
    const clauses = INDUSTRY_REGULATIONS[industryKey] || [];
    
    if (clauses.length === 0) {
      return NextResponse.json(
        { error: 'Invalid industry specified' },
        { status: 400 }
      );
    }

    // Create PDF with proper formatting
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595, 842]); // A4 dimensions
    
    // Load fonts
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
    
    // Set initial position
    let yPosition = 780;
    const leftMargin = 50;
    const rightMargin = 50;
    const lineHeight = 18;
    
    // Add header
    page.drawText('FAIRFORM COMPLIANCE POLICY', {
      x: leftMargin,
      y: yPosition,
      size: 18,
      font: fontBold,
      color: rgb(0, 0.4, 0.8) // Blue accent
    });
    yPosition -= 30;
    
    // Horizontal line
    page.drawLine({
      start: { x: leftMargin, y: yPosition },
      end: { x: 545, y: yPosition },
      thickness: 1,
      color: rgb(0.8, 0.8, 0.8)
    });
    yPosition -= 30;
    
    // Policy details
    page.drawText(`Industry: ${industry.toUpperCase()}`, {
      x: leftMargin,
      y: yPosition,
      size: 12,
      font: fontBold
    });
    yPosition -= lineHeight;
    
    page.drawText(`Generated: ${new Date().toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}`, {
      x: leftMargin,
      y: yPosition,
      size: 12,
      font: fontRegular
    });
    yPosition -= lineHeight * 1.5;
    
    // Regulations section
    page.drawText('APPLICABLE REGULATIONS:', {
      x: leftMargin,
      y: yPosition,
      size: 14,
      font: fontBold
    });
    yPosition -= lineHeight;
    
    // Add regulations with bullet points
    clauses.forEach(regulation => {
      // Draw bullet point
      page.drawText('•', {
        x: leftMargin,
        y: yPosition,
        size: 12,
        font: fontRegular
      });
      
      // Draw regulation text
      page.drawText(regulation, {
        x: leftMargin + 15,
        y: yPosition,
        size: 12,
        font: fontRegular,
        maxWidth: 495,
        lineHeight: lineHeight
      });
      
      yPosition -= lineHeight * 1.2;
    });
    
    yPosition -= lineHeight * 1.5;
    
    // Add disclaimer
    page.drawText('DISCLAIMER:', {
      x: leftMargin,
      y: yPosition,
      size: 12,
      font: fontBold,
      color: rgb(0.8, 0, 0) // Red for emphasis
    });
    yPosition -= lineHeight;
    
    const disclaimerLines = wrapText(COMPLIANCE_DISCLAIMER, 90);
    disclaimerLines.forEach(line => {
      page.drawText(line, {
        x: leftMargin,
        y: yPosition,
        size: 10,
        font: fontRegular,
        color: rgb(0.5, 0.5, 0.5),
        maxWidth: 495
      });
      yPosition -= lineHeight * 0.9;
    });
    
    yPosition -= lineHeight;
    
    // Add policy ID
    const policyId = `FF-${industry.substring(0, 3).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;
    page.drawText(`Policy ID: ${policyId}`, {
      x: leftMargin,
      y: yPosition,
      size: 10,
      font: fontRegular,
      color: rgb(0.3, 0.3, 0.3)
    });
    
    // Add watermark
    page.drawText('FAIRFORM GENERATED', {
      x: 200,
      y: 100,
      size: 48,
      font: fontBold,
      color: rgb(0.95, 0.95, 0.95), // Light gray
      rotate: radians(45),
      opacity: 0.3
    });
    
    // Finalize PDF
    const pdfBytes = await pdfDoc.save();
    
    return new Response(pdfBytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="Fairform_${industry}_Policy.pdf"`
      }
    });
    
  } catch (error) {
    console.error('Policy generation error:', error);
    return NextResponse.json(
      { error: 'Internal server error during policy generation' },
      { status: 500 }
    );
  }
}

// Helper function to wrap text
function wrapText(text: string, maxWidth: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const testLine = currentLine + ' ' + word;
    
    if (testLine.length > maxWidth) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  lines.push(currentLine);
  
  return lines;
}

// Helper function for radians conversion
function radians(degrees: number): number {
  return degrees * Math.PI / 180;
}
