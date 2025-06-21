import { NextResponse } from 'next/server';
import { updateRegulations } from '@/scripts/scraper';
import { NextApiRequest, NextApiResponse } from 'next';

// Use Next.js API route signature
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Validate secret token (add to Vercel environment variables)
  const authToken = req.headers['x-cron-secret'];
  if (authToken !== process.env.CRON_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Run the scraping and update process
    await updateRegulations();
    
    return res.status(200).json({
      success: true,
      message: 'Regulations updated successfully'
    });
    
  } catch (error: any) {
    console.error('Scraping job failed:', error);
    return res.status(500).json({
      error: 'Scraping job failed',
      details: error.message
    });
  }
}

export const config = {
  // Ensure this route is only called via cron job
  runtime: 'edge',
  // Disable caching to get fresh data
  cache: 'no-cache'
};
