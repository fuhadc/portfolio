// Citation Service for automatic citation count updates
class CitationService {
  constructor() {
    this.cache = new Map()
    this.cacheTimeout = 24 * 60 * 60 * 1000 // 24 hours
    this.apiBaseUrl = import.meta.env.VITE_CITATION_API_URL || 'http://localhost:3001/api'
  }

  // Generate Google Scholar search URL
  generateScholarSearchUrl(title, authors) {
    const searchQuery = encodeURIComponent(`"${title}" ${authors.split(',')[0]}`)
    return `https://scholar.google.com/scholar?q=${searchQuery}`
  }

  // Fetch citation count from backend API
  async fetchCitationCount(title, authors, doi = null) {
    try {
      // Check cache first
      const cacheKey = `${title}-${authors}-${doi || ''}`
      const cached = this.cache.get(cacheKey)
      
      if (cached && !this.needsUpdate(cached.timestamp)) {
        return cached.citations
      }

      // Check if API is available before making requests
      const isApiAvailable = await this.checkApiAvailability()
      if (!isApiAvailable) {
        console.warn('Citation API is not available, using mock data for:', title)
        return this.getMockCitationCount(title)
      }

      // Try to get from your specific Google Scholar profile first
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 8000) // 8 second timeout
        
        const profileResponse = await fetch(`${this.apiBaseUrl}/scholar/profile`, {
          signal: controller.signal
        })
        
        clearTimeout(timeoutId)
        
        if (profileResponse.ok) {
          const profileData = await profileResponse.json()
          if (profileData.success && profileData.data.publications) {
            const paper = profileData.data.publications.find(p => 
              p.title.toLowerCase().includes(title.toLowerCase()) ||
              title.toLowerCase().includes(p.title.toLowerCase())
            )
            if (paper) {
              const citations = paper.citations || 0
              this.cache.set(cacheKey, {
                citations,
                timestamp: new Date().toISOString()
              })
              return citations
            }
          }
        }
      } catch (profileError) {
        console.warn('Could not fetch from Google Scholar profile:', profileError)
      }

      // Fallback to general search
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 8000) // 8 second timeout
      
      const response = await fetch(`${this.apiBaseUrl}/citations/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, authors, doi }),
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.success) {
        const citations = data.data.citations || 0
        
        // Cache the result
        this.cache.set(cacheKey, {
          citations,
          timestamp: new Date().toISOString()
        })
        
        return citations
      } else {
        // Fallback to mock data if API fails
        return this.getMockCitationCount(title)
      }
      
    } catch (error) {
      console.error('Error fetching citation count:', error)
      // Fallback to mock data
      return this.getMockCitationCount(title)
    }
  }

  // Mock citation data (replace with real API calls)
  getMockCitationCount(title) {
    const mockData = {
      'cost-effective-energy-efficient-drip-irrigation-2024': 2,
      'automated-contactless-temperature-monitoring-2023': 2,
      'generative-ai-iot-voice-assistance-2024': 0,
      'iot-visualization-fog-computing-2024': 0
    }
    
    // Try to match by key first
    const key = title.toLowerCase().replace(/[^a-z0-9]/g, '-')
    if (mockData[key]) {
      return mockData[key]
    }
    
    // Fallback: try to match by title keywords
    const titleLower = title.toLowerCase()
    if (titleLower.includes('drip irrigation') || titleLower.includes('smart agriculture')) {
      return 2
    }
    if (titleLower.includes('temperature monitoring') || titleLower.includes('contactless')) {
      return 2
    }
    if (titleLower.includes('generative ai') || titleLower.includes('voice assistance')) {
      return 0
    }
    if (titleLower.includes('fog computing') || titleLower.includes('visualization')) {
      return 0
    }
    
    return 0
  }

  // Fetch complete Google Scholar profile data
  async fetchScholarProfile() {
    try {
      // Check if API is available first
      const isApiAvailable = await this.checkApiAvailability()
      if (!isApiAvailable) {
        console.warn('Citation API is not available, cannot fetch Google Scholar profile')
        return null
      }

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout
      
      const response = await fetch(`${this.apiBaseUrl}/scholar/profile`, {
        signal: controller.signal
      })
      
      clearTimeout(timeoutId)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.success) {
        return data.data
      } else {
        throw new Error('Failed to fetch profile data')
      }
      
    } catch (error) {
      console.error('Error fetching Google Scholar profile:', error)
      return null
    }
  }

  // Update all publications with fresh citation counts
  async updateAllCitations(publications) {
    try {
      // Check if API is available first
      const isApiAvailable = await this.checkApiAvailability()
      if (!isApiAvailable) {
        console.warn('Citation API is not available, using mock citation data')
        return this.getPublicationsWithMockCitations(publications)
      }

      // Use batch API for better performance
      const response = await fetch(`${this.apiBaseUrl}/citations/batch`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ publications }),
        timeout: 10000 // 10 second timeout
      })

      if (response.ok) {
        const data = await response.json()
        if (data.success) {
          return data.data
        }
      }

      // Fallback to individual updates if batch fails
      console.warn('Batch update failed, falling back to individual updates')
      return this.updateCitationsIndividually(publications)
      
    } catch (error) {
      console.error('Error in batch update:', error)
      // If API is completely unavailable, return original publications with mock data
      console.warn('API unavailable, using mock citation data')
      return this.getPublicationsWithMockCitations(publications)
    }
  }

  // Fallback method for individual citation updates
  async updateCitationsIndividually(publications) {
    const updatedPublications = []
    
    for (const pub of publications) {
      if (pub.googleScholarId || pub.doi) {
        try {
          const citationCount = await this.fetchCitationCount(pub.title, pub.authors, pub.doi)
          updatedPublications.push({
            ...pub,
            citations: citationCount,
            lastUpdated: new Date().toISOString()
          })
        } catch (error) {
          console.warn(`Failed to fetch citations for "${pub.title}", using mock data`)
          updatedPublications.push({
            ...pub,
            citations: this.getMockCitationCount(pub.title),
            lastUpdated: new Date().toISOString()
          })
        }
      } else {
        updatedPublications.push(pub)
      }
    }
    
    return updatedPublications
  }

  // Get publications with mock citation data when API is unavailable
  getPublicationsWithMockCitations(publications) {
    return publications.map(pub => ({
      ...pub,
      citations: this.getMockCitationCount(pub.title),
      lastUpdated: new Date().toISOString()
    }))
  }

  // Check if API is available
  async checkApiAvailability() {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout
      
      const response = await fetch(`${this.apiBaseUrl}/health`, {
        method: 'GET',
        signal: controller.signal
      })
      
      clearTimeout(timeoutId)
      return response.ok
    } catch (error) {
      return false
    }
  }

  // Check if citation data needs updating
  needsUpdate(lastUpdated) {
    if (!lastUpdated) return true
    const lastUpdateTime = new Date(lastUpdated).getTime()
    const now = new Date().getTime()
    return (now - lastUpdateTime) > this.cacheTimeout
  }

  // Export citations in various formats
  exportCitations(publications, format = 'APA') {
    const citations = publications.map(pub => this.generateCitation(pub, format))
    return citations.join('\n\n')
  }

  // Generate citation in specified format
  generateCitation(pub, format = 'APA') {
    switch (format) {
      case 'APA':
        return this.generateAPACitation(pub)
      case 'IEEE':
        return this.generateIEEECitation(pub)
      case 'BibTeX':
        return this.generateBibTeXCitation(pub)
      case 'Chicago':
        return this.generateChicagoCitation(pub)
      default:
        return this.generateAPACitation(pub)
    }
  }

  generateAPACitation(pub) {
    const authors = this.formatAuthorsAPA(pub.authors)
    let citation = `${authors} (${pub.year}). ${pub.title}. `
    
    if (pub.type === 'Conference Paper') {
      citation += `In ${pub.venue}. ${pub.publisher}.`
    } else if (pub.type === 'Abstract') {
      citation += `${pub.venue}.`
    } else {
      citation += `${pub.venue}.`
    }
    
    if (pub.doi) {
      citation += ` https://doi.org/${pub.doi}`
    }
    
    return citation
  }

  generateIEEECitation(pub) {
    const authors = this.formatAuthorsIEEE(pub.authors)
    return `${authors}, "${pub.title}," ${pub.venue}, ${pub.year}.`
  }

  generateBibTeXCitation(pub) {
    const key = pub.googleScholarId || pub.title.toLowerCase().replace(/[^a-z0-9]/g, '-')
    const authors = pub.authors.split(', ').join(' and ')
    
    let bibtex = `@inproceedings{${key},\n`
    bibtex += `  title={${pub.title}},\n`
    bibtex += `  author={${authors}},\n`
    bibtex += `  booktitle={${pub.venue}},\n`
    bibtex += `  year={${pub.year}},\n`
    
    if (pub.publisher) {
      bibtex += `  publisher={${pub.publisher}},\n`
    }
    
    if (pub.doi) {
      bibtex += `  doi={${pub.doi}},\n`
    }
    
    if (pub.pages) {
      bibtex += `  pages={${pub.pages}},\n`
    }
    
    bibtex += `}`
    
    return bibtex
  }

  generateChicagoCitation(pub) {
    const authors = this.formatAuthorsChicago(pub.authors)
    let citation = `${authors}. "${pub.title}." `
    
    if (pub.type === 'Conference Paper') {
      citation += `Presented at ${pub.venue}, ${pub.year}.`
    } else {
      citation += `${pub.venue}, ${pub.year}.`
    }
    
    if (pub.doi) {
      citation += ` https://doi.org/${pub.doi}`
    }
    
    return citation
  }

  formatAuthorsAPA(authors) {
    return authors.split(', ').map(author => {
      const parts = author.trim().split(' ')
      if (parts.length === 1) return parts[0]
      const last = parts[parts.length - 1]
      const first = parts.slice(0, -1).map(name => name[0] + '.').join(' ')
      return `${last}, ${first}`
    }).join(', ')
  }

  formatAuthorsIEEE(authors) {
    return authors.split(', ').map(author => {
      const parts = author.trim().split(' ')
      if (parts.length === 1) return parts[0]
      const last = parts[parts.length - 1]
      const first = parts.slice(0, -1).map(name => name[0] + '.').join(' ')
      return `${first} ${last}`
    }).join(', ')
  }

  formatAuthorsChicago(authors) {
    return authors.split(', ').map(author => {
      const parts = author.trim().split(' ')
      if (parts.length === 1) return parts[0]
      const last = parts[parts.length - 1]
      const first = parts.slice(0, -1).join(' ')
      return `${first} ${last}`
    }).join(', ')
  }

  // Download citations as file
  downloadCitations(publications, format = 'APA', filename = 'citations') {
    const content = this.exportCitations(publications, format)
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${filename}.${format.toLowerCase()}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
}

export default new CitationService()
