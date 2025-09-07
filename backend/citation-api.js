// Backend Citation API Service
// This should be deployed as a separate backend service for production use

const express = require('express')
const cors = require('cors')
const puppeteer = require('puppeteer')
const axios = require('axios')
const rateLimit = require('express-rate-limit')

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})
app.use('/api/', limiter)

// Google Scholar Scraper using Puppeteer
class GoogleScholarScraper {
  constructor() {
    this.browser = null
    this.page = null
  }

  async init() {
    this.browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    })
    this.page = await this.browser.newPage()
    await this.page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
  }

  async searchPaper(title, authors) {
    try {
      if (!this.browser) await this.init()

      const searchQuery = `"${title}" ${authors.split(',')[0]}`
      const searchUrl = `https://scholar.google.com/scholar?q=${encodeURIComponent(searchQuery)}`

      await this.page.goto(searchUrl, { waitUntil: 'networkidle2' })
      
      // Wait for results to load
      await this.page.waitForSelector('.gs_rt', { timeout: 10000 })

      // Extract citation count
      const citationCount = await this.page.evaluate(() => {
        const citationElement = document.querySelector('.gs_fl a[href*="cites"]')
        if (citationElement) {
          const text = citationElement.textContent
          const match = text.match(/(\d+)/)
          return match ? parseInt(match[1]) : 0
        }
        return 0
      })

      return {
        citations: citationCount,
        searchUrl: searchUrl,
        found: citationCount > 0
      }

    } catch (error) {
      console.error('Error scraping Google Scholar:', error)
      return { citations: 0, found: false, error: error.message }
    }
  }

  async close() {
    if (this.browser) {
      await this.browser.close()
      this.browser = null
    }
  }
}

// Semantic Scholar API
class SemanticScholarService {
  constructor() {
    this.baseUrl = 'https://api.semanticscholar.org/graph/v1'
  }

  async searchPaper(title, authors) {
    try {
      const searchQuery = `"${title}" ${authors.split(',')[0]}`
      const response = await axios.get(`${this.baseUrl}/paper/search`, {
        params: {
          query: searchQuery,
          limit: 1,
          fields: 'citationCount,year,venue,authors,externalIds,url,title'
        }
      })

      if (response.data.data && response.data.data.length > 0) {
        const paper = response.data.data[0]
        return {
          citations: paper.citationCount || 0,
          year: paper.year,
          venue: paper.venue,
          authors: paper.authors?.map(a => a.name).join(', '),
          doi: paper.externalIds?.DOI,
          url: paper.url,
          title: paper.title,
          found: true
        }
      }

      return { citations: 0, found: false }

    } catch (error) {
      console.error('Error with Semantic Scholar API:', error)
      return { citations: 0, found: false, error: error.message }
    }
  }

  async getPaperByDOI(doi) {
    try {
      const response = await axios.get(`${this.baseUrl}/paper/DOI:${doi}`, {
        params: {
          fields: 'citationCount,year,venue,authors,externalIds,url,title'
        }
      })

      if (response.data.citationCount !== undefined) {
        return {
          citations: response.data.citationCount,
          year: response.data.year,
          venue: response.data.venue,
          authors: response.data.authors?.map(a => a.name).join(', '),
          doi: response.data.externalIds?.DOI,
          url: response.data.url,
          title: response.data.title,
          found: true
        }
      }

      return { citations: 0, found: false }

    } catch (error) {
      console.error('Error getting paper by DOI:', error)
      return { citations: 0, found: false, error: error.message }
    }
  }
}

// CrossRef API
class CrossRefService {
  constructor() {
    this.baseUrl = 'https://api.crossref.org/works'
  }

  async getPaperByDOI(doi) {
    try {
      const response = await axios.get(`${this.baseUrl}/${doi}`)

      if (response.data.message) {
        const data = response.data.message
        return {
          title: data.title?.[0],
          authors: data.author?.map(a => `${a.given} ${a.family}`).join(', '),
          year: data['published-print']?.['date-parts']?.[0]?.[0] || 
                data['published-online']?.['date-parts']?.[0]?.[0],
          venue: data['container-title']?.[0],
          publisher: data.publisher,
          doi: data.DOI,
          url: data.URL,
          found: true
        }
      }

      return { found: false }

    } catch (error) {
      console.error('Error with CrossRef API:', error)
      return { found: false, error: error.message }
    }
  }
}

// Initialize services
const scholarScraper = new GoogleScholarScraper()
const semanticScholar = new SemanticScholarService()
const crossRef = new CrossRefService()

// API Routes

// Get citation count for a paper
app.post('/api/citations/search', async (req, res) => {
  try {
    const { title, authors, doi } = req.body

    if (!title || !authors) {
      return res.status(400).json({ error: 'Title and authors are required' })
    }

    let result = { citations: 0, found: false }

    // Try Semantic Scholar first (more reliable)
    if (doi) {
      result = await semanticScholar.getPaperByDOI(doi)
    } else {
      result = await semanticScholar.searchPaper(title, authors)
    }

    // If not found, try Google Scholar (fallback)
    if (!result.found) {
      const scholarResult = await scholarScraper.searchPaper(title, authors)
      result = { ...result, ...scholarResult }
    }

    res.json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error in citations/search:', error)
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error',
      message: error.message 
    })
  }
})

// Get paper metadata by DOI
app.get('/api/paper/:doi', async (req, res) => {
  try {
    const { doi } = req.params

    if (!doi) {
      return res.status(400).json({ error: 'DOI is required' })
    }

    // Try CrossRef first
    let result = await crossRef.getPaperByDOI(doi)

    // If not found, try Semantic Scholar
    if (!result.found) {
      result = await semanticScholar.getPaperByDOI(doi)
    }

    res.json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error in paper/:doi:', error)
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error',
      message: error.message 
    })
  }
})

// Batch update citations for multiple papers
app.post('/api/citations/batch', async (req, res) => {
  try {
    const { publications } = req.body

    if (!Array.isArray(publications)) {
      return res.status(400).json({ error: 'Publications array is required' })
    }

    const results = []

    for (const pub of publications) {
      try {
        let citationData = { citations: 0, found: false }

        if (pub.doi) {
          citationData = await semanticScholar.getPaperByDOI(pub.doi)
        } else {
          citationData = await semanticScholar.searchPaper(pub.title, pub.authors)
        }

        results.push({
          ...pub,
          citations: citationData.citations,
          lastUpdated: new Date().toISOString(),
          found: citationData.found
        })

        // Rate limiting between requests
        await new Promise(resolve => setTimeout(resolve, 1000))

      } catch (error) {
        console.error(`Error processing publication: ${pub.title}`, error)
        results.push({
          ...pub,
          citations: 0,
          lastUpdated: new Date().toISOString(),
          found: false,
          error: error.message
        })
      }
    }

    res.json({
      success: true,
      data: results,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error in citations/batch:', error)
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error',
      message: error.message 
    })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    services: {
      googleScholar: !!scholarScraper.browser,
      semanticScholar: true,
      crossRef: true
    }
  })
})

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down gracefully...')
  await scholarScraper.close()
  process.exit(0)
})

process.on('SIGTERM', async () => {
  console.log('Shutting down gracefully...')
  await scholarScraper.close()
  process.exit(0)
})

app.listen(PORT, () => {
  console.log(`Citation API server running on port ${PORT}`)
})

module.exports = app
