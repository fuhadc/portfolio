# Citation Count Update Guide

## How to Get Accurate Citation Counts

Since automated citation retrieval from Google Scholar and ResearchGate is not possible due to API limitations, here's how to manually check and update your citation counts:

## Step 1: Check Google Scholar

### Paper 1: Drip Irrigation System
**Search Link:** https://scholar.google.com/scholar?q="Cost Effective and Energy Efficient Drip Irrigation System for IoT Enabled Smart Agriculture" Muhammed Fuhad C

**DOI:** 10.1007/978-981-97-1841-2_14

**Steps:**
1. Click the search link above
2. Find your paper in the results
3. Look for "Cited by [number]" below the paper title
4. Note the citation count

### Paper 2: Temperature Monitoring System
**Search Link:** https://scholar.google.com/scholar?q="Automated Contactless Continuous Temperature Monitoring System for Pandemic Disease Controlling Infrastructures" Muhammed Fuhad C

**DOI:** 10.1109/ICRTEC56977.2023.10111891

**Steps:**
1. Click the search link above
2. Find your paper in the results
3. Look for "Cited by [number]" below the paper title
4. Note the citation count

## Step 2: Check ResearchGate

1. Go to https://www.researchgate.net/
2. Search for your publications by title or DOI
3. Check the citation counts displayed on each paper's page

## Step 3: Update Your Portfolio

Once you have the accurate citation counts:

1. Open `/src/pages/Publications.jsx`
2. Find the `citations: 0` lines for each publication
3. Replace `0` with the actual citation count you found
4. Save the file

### Example:
```javascript
// Before
citations: 0, // Check: https://scholar.google.com/scholar?q="Cost Effective..."

// After (if you found 5 citations)
citations: 5, // Check: https://scholar.google.com/scholar?q="Cost Effective..."
```

## Alternative: Use Semantic Scholar API

For a more automated approach, you can use the Semantic Scholar API:

### Paper 1:
```
https://api.semanticscholar.org/graph/v1/paper/DOI:10.1007/978-981-97-1841-2_14?fields=citationCount
```

### Paper 2:
```
https://api.semanticscholar.org/graph/v1/paper/DOI:10.1109/ICRTEC56977.2023.10111891?fields=citationCount
```

These URLs will return JSON with the citation count if the papers are indexed in Semantic Scholar.

## Important Notes

- **Google Scholar** may show higher citation counts as it includes more sources
- **ResearchGate** shows citations within their network only
- **Semantic Scholar** provides more curated citation data
- Citation counts can vary between platforms due to different indexing methods

## Recommended Approach

1. Check Google Scholar first (most comprehensive)
2. Cross-reference with ResearchGate
3. Use the higher count for your portfolio
4. Update quarterly or when you notice significant changes

## Current Status

All citation counts are currently set to 0. Update them with the actual numbers you find from the sources above.
