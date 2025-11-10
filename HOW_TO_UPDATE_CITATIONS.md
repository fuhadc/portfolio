# How to Update Citations - Quick Guide

## ✅ Citations Now Update Automatically!

Your portfolio now fetches citation counts automatically from **Semantic Scholar** - no backend needed!

## Quick Start

### View Your Citations
1. Start the dev server: `npm run dev`
2. Visit: http://localhost:5173/publications
3. Citations update automatically when you load the page!

### Check Citation Status in Console
Open browser DevTools (F12) and check the Console tab to see:
- Which papers were found in Semantic Scholar
- Current citation counts
- Any API errors (if they occur)

## Current Citation Counts

Based on Semantic Scholar API (Nov 10, 2025):

| Paper | Citations | Status |
|-------|-----------|--------|
| **Temperature Monitoring (IEEE 2023)** | 1 | ✅ Auto-updated |
| **Drip Irrigation (Springer 2024)** | 2* | ⏳ Manual (not indexed yet) |
| **Generative AI & IoT** | 0 | 📝 Under Review |
| **Fog Computing Abstract** | 0 | 📊 Abstract |

*The Drip Irrigation paper isn't indexed in Semantic Scholar yet. It will use the manual count (2) until it gets indexed.

## How It Works

```
Publications Page Loads
    ↓
System checks Semantic Scholar API for each paper
    ↓
If paper found: Use real citation count
    ↓
If not found: Keep existing count from publications.json
    ↓
Display updated citations with timestamp
```

## Manual Citation Check

### Google Scholar (Most Accurate)
Check your profile for all citations:
**Profile**: https://scholar.google.com/citations?user=rC6hYXwAAAAJ&hl=en&oi=sra

### Semantic Scholar API
Test individual papers:

```bash
# IEEE Temperature Monitoring Paper
curl "https://api.semanticscholar.org/graph/v1/paper/DOI:10.1109/ICRTEC56977.2023.10111891?fields=citationCount,title"

# Springer Drip Irrigation Paper
curl "https://api.semanticscholar.org/graph/v1/paper/DOI:10.1007/978-981-97-1841-2_14?fields=citationCount,title"
```

## Manually Update a Citation Count

If you want to manually set a citation count (e.g., from Google Scholar):

1. Open: `src/data/publications.json`
2. Find the paper you want to update
3. Change the `citations` field:
   ```json
   {
     "title": "Your Paper Title",
     "citations": 5,  // ← Change this number
     "lastUpdated": "2025-11-10T00:00:00.000Z"
   }
   ```
4. Save the file
5. The portfolio will use this count until Semantic Scholar has newer data

## Adding New Publications

When adding a new publication:

```json
{
  "title": "Your New Paper Title",
  "authors": "Your Name, Co-Author",
  "venue": "Conference Name",
  "publisher": "Publisher",
  "year": "2025",
  "type": "Conference Paper",
  "doi": "10.xxxx/xxxxx",  // ← Include DOI for automatic citations
  "citations": 0,           // ← Will auto-update if paper is indexed
  "lastUpdated": "2025-11-10T00:00:00.000Z",
  "icon": "BookOpen",
  "color": "#10b981"
}
```

**Important**: Include the `doi` field - this allows automatic citation fetching!

## Troubleshooting

### Citations Not Updating?

**Check 1**: Is the DOI correct?
- Verify DOI in publications.json matches the actual DOI
- Test the DOI: https://doi.org/YOUR_DOI_HERE

**Check 2**: Is paper indexed in Semantic Scholar?
```bash
curl "https://api.semanticscholar.org/graph/v1/paper/DOI:YOUR_DOI?fields=citationCount,title"
```

**Check 3**: Browser console errors?
- Open DevTools (F12) → Console tab
- Look for red error messages
- Common issue: Network blocked (check firewall/VPN)

### Paper Not in Semantic Scholar?

No problem! Options:

1. **Use manual count** (current approach for Drip Irrigation paper)
   - Update `citations` field in publications.json
   - Check Google Scholar for accurate count

2. **Wait for indexing**
   - Semantic Scholar indexes papers over time
   - Check back in a few weeks/months
   - System will auto-switch when available

3. **Use CrossRef or OpenCitations**
   - Contact me if you want to add more citation sources
   - Can integrate additional APIs

## Citation Update Frequency

- **Cache Duration**: 24 hours
- **Update Trigger**: Every time someone visits the Publications page
- **API Limits**: Semantic Scholar is rate-limited (300ms delay between calls)

## Performance

✅ **Fast**: Results cached for 24 hours
✅ **Reliable**: Fallback to existing counts if API fails  
✅ **Free**: No API keys or costs
✅ **No Backend**: Works entirely from frontend

## Support

Need help updating citations?

1. Check `CITATION_FIX_SUMMARY.md` for detailed technical info
2. Check browser console for specific error messages
3. Verify paper DOIs are correct
4. Check if papers are indexed in Semantic Scholar

## Quick Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Test Semantic Scholar API
curl "https://api.semanticscholar.org/graph/v1/paper/DOI:YOUR_DOI?fields=citationCount,title"

# Check Google Scholar
open "https://scholar.google.com/citations?user=rC6hYXwAAAAJ&hl=en&oi=sra"
```

---

**Last Updated**: November 10, 2025
**Status**: ✅ Working
**Backend Required**: No
**API**: Semantic Scholar (Free)

