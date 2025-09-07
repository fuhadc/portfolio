# Google Scholar Integration Guide

This document explains how the Google Scholar integration works in your portfolio and how to use it effectively.

## Overview

Your portfolio now includes automatic citation tracking from your Google Scholar profile: `https://scholar.google.com/citations?user=rC6hYXwAAAAJ&hl=en&oi=sra`

## Features

### 1. Real-time Citation Updates
- Automatically fetches citation counts from your Google Scholar profile
- Updates publication data in real-time
- Caches results to improve performance

### 2. Manual Refresh
- Click the "Refresh Citations" button to update citation counts manually
- Shows loading state during updates
- Displays last update timestamp

### 3. Direct Profile Access
- Direct link to your Google Scholar profile
- Opens in a new tab for easy access

## Backend API Endpoints

### Health Check
```
GET /api/health
```
Returns the status of all services.

### Get Complete Profile
```
GET /api/scholar/profile
```
Fetches all publications and citation data from your Google Scholar profile.

### Search Individual Paper
```
POST /api/citations/search
Content-Type: application/json

{
  "title": "Paper Title",
  "authors": "Author Names",
  "doi": "optional-doi"
}
```

### Batch Update Citations
```
POST /api/citations/batch
Content-Type: application/json

{
  "publications": [
    {
      "title": "Paper 1",
      "authors": "Authors 1",
      "doi": "doi1"
    },
    {
      "title": "Paper 2", 
      "authors": "Authors 2",
      "doi": "doi2"
    }
  ]
}
```

## Setup Instructions

### 1. Install Backend Dependencies
```bash
cd backend
npm install express cors puppeteer axios express-rate-limit
```

### 2. Start the Backend Server
```bash
cd backend
node citation-api.js
```
The server will start on port 3001 by default.

### 3. Update Frontend Environment
Make sure your frontend is configured to use the backend API:
```javascript
// In citationService.js
this.apiBaseUrl = process.env.REACT_APP_CITATION_API_URL || 'http://localhost:3001/api'
```

### 4. Test the Integration
```bash
node test-scholar-integration.js
```

## How It Works

### 1. Profile Scraping
The backend uses Puppeteer to scrape your Google Scholar profile:
- Navigates to your profile URL
- Extracts publication titles, authors, venues, and citation counts
- Returns structured data for the frontend

### 2. Citation Matching
The system matches your portfolio publications with Google Scholar data:
- Compares titles (case-insensitive, partial matching)
- Updates citation counts automatically
- Falls back to mock data if scraping fails

### 3. Caching
- Results are cached for 24 hours to reduce API calls
- Manual refresh bypasses cache
- Improves performance and reduces rate limiting

## Configuration

### Google Scholar Profile ID
Your profile ID is configured in the backend:
```javascript
// In citation-api.js
this.profileId = 'rC6hYXwAAAAJ'
```

### Rate Limiting
The API includes rate limiting to respect Google Scholar's terms:
- 100 requests per 15 minutes per IP
- 1-2 second delays between requests
- Graceful error handling

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Make sure the backend server is running
   - Check that the API URL is correct in the frontend

2. **Scraping Failures**
   - Google Scholar may block requests if too frequent
   - Check browser console for error messages
   - Verify your profile URL is accessible

3. **Citation Count Mismatches**
   - Google Scholar updates may be delayed
   - Try manual refresh
   - Check if paper titles match exactly

### Debug Mode
Enable debug logging by setting:
```javascript
console.log('Debug mode enabled');
```

## Production Deployment

### Backend Deployment
1. Deploy the backend API to a cloud service (Heroku, Vercel, etc.)
2. Set environment variables for production
3. Update the frontend API URL

### Environment Variables
```bash
PORT=3001
NODE_ENV=production
```

### Security Considerations
- Use environment variables for sensitive data
- Implement proper authentication if needed
- Monitor API usage and rate limits

## Future Enhancements

1. **Automatic Updates**
   - Scheduled citation updates
   - Email notifications for new citations

2. **Analytics**
   - Citation trend analysis
   - Publication impact metrics

3. **Export Features**
   - Export citations in various formats (APA, IEEE, BibTeX)
   - Generate citation reports

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify the backend server is running
3. Test the API endpoints directly
4. Check your Google Scholar profile accessibility

## License

This integration is for personal use. Please respect Google Scholar's terms of service and rate limits.
