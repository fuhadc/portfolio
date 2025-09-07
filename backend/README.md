# Citation API Backend Service

A backend service for automatically fetching and updating citation counts from Google Scholar, Semantic Scholar, and CrossRef APIs.

## Features

- **Google Scholar Scraping**: Uses Puppeteer to scrape citation counts from Google Scholar
- **Semantic Scholar API**: Official API integration for reliable citation data
- **CrossRef API**: Metadata retrieval by DOI
- **Rate Limiting**: Built-in rate limiting to respect API limits
- **Batch Processing**: Update multiple publications at once
- **Error Handling**: Robust error handling and fallback mechanisms

## Setup

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Configure environment variables in `.env`:
```
PORT=3001
NODE_ENV=production
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Running the Service

#### Development
```bash
npm run dev
```

#### Production
```bash
npm start
```

The API will be available at `http://localhost:3001`

## API Endpoints

### POST /api/citations/search
Search for citation count of a specific paper.

**Request Body:**
```json
{
  "title": "Paper Title",
  "authors": "Author1, Author2",
  "doi": "10.1000/182" // optional
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "citations": 15,
    "found": true,
    "year": 2024,
    "venue": "Conference Name",
    "url": "https://..."
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### GET /api/paper/:doi
Get paper metadata by DOI.

**Response:**
```json
{
  "success": true,
  "data": {
    "title": "Paper Title",
    "authors": "Author1, Author2",
    "year": 2024,
    "venue": "Conference Name",
    "publisher": "Publisher Name",
    "doi": "10.1000/182",
    "found": true
  },
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### POST /api/citations/batch
Update citation counts for multiple publications.

**Request Body:**
```json
{
  "publications": [
    {
      "title": "Paper 1",
      "authors": "Author1, Author2",
      "doi": "10.1000/182"
    },
    {
      "title": "Paper 2", 
      "authors": "Author3, Author4"
    }
  ]
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "services": {
    "googleScholar": true,
    "semanticScholar": true,
    "crossRef": true
  }
}
```

## Frontend Integration

Update your frontend citation service to use the backend API:

```javascript
// In your frontend citation service
const API_BASE_URL = 'http://localhost:3001/api'

export const fetchCitationCount = async (title, authors, doi) => {
  const response = await fetch(`${API_BASE_URL}/citations/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, authors, doi })
  })
  
  const data = await response.json()
  return data.success ? data.data.citations : 0
}
```

## Deployment

### Docker Deployment

1. Create Dockerfile:
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3001
CMD ["npm", "start"]
```

2. Build and run:
```bash
docker build -t citation-api .
docker run -p 3001:3001 citation-api
```

### Environment Variables

- `PORT`: Server port (default: 3001)
- `NODE_ENV`: Environment (development/production)
- `RATE_LIMIT_WINDOW_MS`: Rate limit window in milliseconds
- `RATE_LIMIT_MAX_REQUESTS`: Maximum requests per window

## Rate Limiting

The service implements rate limiting to respect API limits:
- 100 requests per 15 minutes per IP
- 1 second delay between batch requests
- Automatic retry with exponential backoff

## Error Handling

The service includes comprehensive error handling:
- Network timeouts
- API rate limits
- Invalid responses
- Graceful degradation when services are unavailable

## Monitoring

Monitor the service health using the `/api/health` endpoint and check logs for:
- Failed scraping attempts
- API rate limit hits
- Service availability

## Security Considerations

- Rate limiting to prevent abuse
- CORS configuration for frontend access
- Input validation and sanitization
- Error message sanitization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
