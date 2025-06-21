import { NextRequest, NextResponse } from 'next/server';
import { updateRegulations } from '@/scripts/scraper';

// Fix: Replace config object with runtime export
export const runtime = 'edge';  // Correct way to specify edge runtime

export async function POST(req: NextRequest) {
  // Validate cron secret
  const cronSecret = req.headers.get('x-cron-secret');
  if (cronSecret !== process.env.CRON_SECRET) {
    return new NextResponse(JSON.stringify({ 
      error: 'Unauthorized',
      message: 'Invalid or missing cron secret' 
    }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  }

  try {
    // Execute scraping
    await updateRegulations();
    
    return new NextResponse(JSON.stringify({ 
      success: true, 
      message: 'Regulations updated successfully'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
    
  } catch (error: any) {
    console.error('Scraping job failed:', error);
    return new NextResponse(JSON.stringify({ 
      error: 'Scraping job failed',
      details: error.message 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  }
}
