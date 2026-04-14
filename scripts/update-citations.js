import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.resolve(__dirname, '../src/data/publications.json');

async function fetchFromSemanticScholar(title, doi = null) {
  try {
    const baseUrl = 'https://api.semanticscholar.org/graph/v1';
    let response;

    if (doi) {
      console.log(`  🔍 Fetching by DOI: ${doi}`);
      response = await fetch(`${baseUrl}/paper/DOI:${doi}?fields=citationCount,title`);
      
      if (response.ok) {
        const data = await response.json();
        return data.citationCount || 0;
      }
    }

    console.log(`  🔍 Searching by title for papers without DOI or if DOI failed...`);
    response = await fetch(`${baseUrl}/paper/search?query=${encodeURIComponent(title)}&fields=citationCount,title&limit=1`);

    if (response.ok) {
      const data = await response.json();
      if (data.data && data.data.length > 0) {
        return data.data[0].citationCount || 0;
      }
    }

    return 0;
  } catch (error) {
    console.warn(`  ⚠️ Semantic Scholar API error for "${title}":`, error.message);
    return null;
  }
}

async function updateCitations() {
  console.log('🚀 Starting Automatic Citation Update...');
  
  if (!fs.existsSync(DATA_PATH)) {
    console.error('❌ publications.json not found at:', DATA_PATH);
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  const publications = data.publications;
  let updatedCount = 0;

  for (let i = 0; i < publications.length; i++) {
    const pub = publications[i];
    console.log(`\n📄 Processing: "${pub.title}"`);
    
    // Only fetch for published works
    if (pub.status === 'Published') {
      const newCitations = await fetchFromSemanticScholar(pub.title, pub.doi);
      
      if (newCitations !== null) {
        const oldCitations = pub.citations || 0;
        // Only update if the new count is greater, or if it was 0 before
        // This preserves "manual" counts until API has better data
        if (newCitations > oldCitations || (oldCitations === 0 && newCitations > 0)) {
          console.log(`  ✅ Updated: ${oldCitations} -> ${newCitations}`);
          pub.citations = newCitations;
          pub.lastUpdated = new Date().toISOString();
        } else {
          console.log(`  ℹ️ Keeping existing count: ${oldCitations} (API returned ${newCitations})`);
        }
        updatedCount++;
      } else {
        console.log(`  ⏭️ Keeping existing citation count due to error.`);
      }
    } else {
      console.log(`  ⏭️ Skipping: status is "${pub.status}"`);
    }

    // Rate limiting delay
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
  console.log(`\n✨ Successfully processed ${updatedCount} publications!`);
  console.log('📝 publications.json has been updated.');
}

updateCitations();
