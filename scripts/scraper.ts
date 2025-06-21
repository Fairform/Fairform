import { INDUSTRY_REGULATIONS } from '@/app/lib/constants';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Get scraper configuration from environment
const SCRAPER_TIMEOUT = parseInt(process.env.SCRAPER_TIMEOUT || '10000', 10);
const SCRAPER_RATE_LIMIT = parseInt(process.env.SCRAPER_RATE_LIMIT || '2000', 10);

// Define regulation sources
const REGULATION_SOURCES = {
  nsw: {
    construction: 'https://legislation.nsw.gov.au/view/html/inforce/current/act-2011-010',
    healthcare: 'https://legislation.nsw.gov.au/view/html/inforce/current/act-2002-71'
  },
  vic: {
    construction: 'https://www.legislation.vic.gov.au/in-force/acts/occupational-health-and-safety-act-2004/001',
    retail: 'https://www.legislation.vic.gov.au/in-force/acts/australian-consumer-law-and-fair-trading-act-2012/003'
  },
  federal: {
    privacy: 'https://www.legislation.gov.au/Series/C2004A03712'
  }
};

// Main scraper
export async function updateRegulations(): Promise<void> {
  try {
    console.log('🚀 Starting regulation update...');
    console.log(`⚙️ Timeout: ${SCRAPER_TIMEOUT}ms | Rate Limit: ${SCRAPER_RATE_LIMIT}ms`);

    const updatedRegulations = { ...INDUSTRY_REGULATIONS };

    await scrapeJurisdiction('nsw', updatedRegulations);
    await scrapeJurisdiction('vic', updatedRegulations);
    await scrapeJurisdiction('federal', updatedRegulations);

    const constantsPath = path.resolve(process.cwd(), 'app/lib/constants/index.ts');
    const content = `// Auto-generated regulations

export const INDUSTRY_REGULATIONS = ${JSON.stringify(updatedRegulations, null, 2)};

// Other constants
export * from './features';
export * from './pricing';
export * from './navigation';
export * from './testimonials';
export * from './industries';
`;

    fs.writeFileSync(constantsPath, content);
    console.log('✅ Regulations updated and written to constants.');
  } catch (error) {
    console.error('❌ Scraping failed:', error);
    throw new Error('Regulation update failed');
  }
}

async function scrapeJurisdiction(
  jurisdiction: keyof typeof REGULATION_SOURCES,
  regulations: Record<string, string[]>
): Promise<void> {
  console.log(`🔍 Scraping ${jurisdiction.toUpperCase()}...`);
  const sources = REGULATION_SOURCES[jurisdiction];

  for (const [industry, url] of Object.entries(sources)) {
    try {
      const res = await axios.get(url, {
        timeout: SCRAPER_TIMEOUT,
        headers: {
          'User-Agent': 'FairformComplianceBot/1.0 (+https://fairform.com)'
        }
      });

      const $ = cheerio.load(res.data);
      const clauses: string[] = [];

      $('.provision, .section').each((_, el) => {
        const text = $(el).text().trim().replace(/\s+/g, ' ');
        if (text.length > 30) clauses.push(text);
      });

      if (clauses.length > 0) {
        regulations[industry] = [...(regulations[industry] || []), ...clauses.slice(0, 5)];
        console.log(`   ✓ ${industry}: ${clauses.length} clauses found`);
      }

      await new Promise(resolve => setTimeout(resolve, SCRAPER_RATE_LIMIT));
    } catch (err: any) {
      console.warn(`   ✗ ${industry}: Failed (${err.message})`);
    }
  }
}

if (require.main === module) {
  (async () => {
    try {
      await updateRegulations();
      process.exit(0);
    } catch {
      process.exit(1);
    }
  })();
}
