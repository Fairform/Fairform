import { INDUSTRY_REGULATIONS } from '@/app/lib/constants';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import cheerio from 'cheerio';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Config
const SCRAPER_TIMEOUT = parseInt(process.env.SCRAPER_TIMEOUT || '10000', 10);
const SCRAPER_RATE_LIMIT = parseInt(process.env.SCRAPER_RATE_LIMIT || '2000', 10);

// Sources by jurisdiction
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

// Main updater
export async function updateRegulations(): Promise<void> {
  try {
    console.log('🚀 Starting regulation update...');
    console.log(`   ⚙️ Timeout: ${SCRAPER_TIMEOUT}ms, Rate Limit: ${SCRAPER_RATE_LIMIT}ms`);

    const updatedRegulations = { ...INDUSTRY_REGULATIONS };
    const timestamp = new Date().toISOString();

    for (const jurisdiction of Object.keys(REGULATION_SOURCES) as (keyof typeof REGULATION_SOURCES)[]) {
      await scrapeJurisdiction(jurisdiction, updatedRegulations);
    }

    // Write constants file
    const constantsPath = path.resolve(process.cwd(), 'app/lib/constants.ts');
    const content = `// ⚠️ Auto-generated on ${timestamp}
export const INDUSTRY_REGULATIONS = ${JSON.stringify(updatedRegulations, null, 2)} as const;
`;

    fs.writeFileSync(constantsPath, content);
    console.log('✅ Regulations updated successfully and written to constants.ts');
  } catch (error) {
    console.error('❌ Scraping failed:', error);
    throw new Error('Regulation update failed');
  }
}

// Scrape by jurisdiction
async function scrapeJurisdiction(
  jurisdiction: keyof typeof REGULATION_SOURCES,
  regulations: Record<string, string[]>
): Promise<void> {
  console.log(`🔍 Scraping ${jurisdiction.toUpperCase()}...`);
  const sources = REGULATION_SOURCES[jurisdiction];

  for (const [industry, url] of Object.entries(sources)) {
    try {
      const response = await axios.get(url, {
        timeout: SCRAPER_TIMEOUT,
        headers: {
          'User-Agent': 'FairformComplianceBot/1.0'
        }
      });

      const $ = cheerio.load(response.data);
      const clauses: string[] = [];

      $('.provision, .section').each((_i, el) => {
        const text = $(el).text().trim().replace(/\s+/g, ' ');
        if (text.length > 30) clauses.push(text);
      });

      if (clauses.length) {
        regulations[industry] = [...(regulations[industry] || []), ...clauses.slice(0, 5)];
        console.log(`   ✓ ${industry}: ${clauses.length} clauses scraped`);
      }

      await new Promise((r) => setTimeout(r, SCRAPER_RATE_LIMIT));
    } catch (err) {
      console.warn(`   ✗ ${industry}: ${(err as Error).message}`);
    }
  }
}

// If run directly via CLI
if (require.main === module) {
  (async () => {
    try {
      await updateRegulations();
      process.exit(0);
    } catch (error) {
      process.exit(1);
    }
  })();
}
