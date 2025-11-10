import { describe, it, expect, vi, beforeEach } from 'vitest'
import { CitationService } from './citationService'

describe('CitationService', () => {
  let citationService

  beforeEach(() => {
    citationService = new CitationService()
    vi.clearAllMocks()
  })

  describe('generateScholarSearchUrl', () => {
    it('should generate correct Google Scholar search URL', () => {
      const title = 'Test Paper Title'
      const authors = 'John Doe, Jane Smith'
      
      const url = citationService.generateScholarSearchUrl(title, authors)
      
      expect(url).toContain('scholar.google.com')
      expect(url).toContain(encodeURIComponent(title))
      expect(url).toContain(encodeURIComponent(authors))
    })
  })

  describe('generateCitation', () => {
    const mockPublication = {
      title: 'IoT-Based Smart Agriculture System',
      authors: 'Muhammed Fuhad C, John Doe',
      year: '2024',
      venue: 'IEEE International Conference',
      publisher: 'IEEE',
      pages: '123-130',
      doi: '10.1109/TEST.2024.123456'
    }

    it('should generate APA citation format', () => {
      const citation = citationService.generateCitation(mockPublication, 'APA')
      
      expect(citation).toContain('Muhammed Fuhad C')
      expect(citation).toContain('(2024)')
      expect(citation).toContain('IoT-Based Smart Agriculture System')
      expect(citation).toContain('IEEE International Conference')
    })

    it('should generate IEEE citation format', () => {
      const citation = citationService.generateCitation(mockPublication, 'IEEE')
      
      expect(citation).toContain('M. F. C')
      expect(citation).toContain('2024')
      expect(citation).toContain('IoT-Based Smart Agriculture System')
    })

    it('should generate BibTeX citation format', () => {
      const citation = citationService.generateCitation(mockPublication, 'BibTeX')
      
      expect(citation).toContain('@inproceedings')
      expect(citation).toContain('title={IoT-Based Smart Agriculture System}')
      expect(citation).toContain('author={Muhammed Fuhad C and John Doe}')
      expect(citation).toContain('year={2024}')
    })

    it('should generate Chicago citation format', () => {
      const citation = citationService.generateCitation(mockPublication, 'Chicago')
      
      expect(citation).toContain('Muhammed Fuhad C')
      expect(citation).toContain('"IoT-Based Smart Agriculture System"')
      expect(citation).toContain('2024')
    })

    it('should handle missing optional fields gracefully', () => {
      const minimalPublication = {
        title: 'Test Paper',
        authors: 'Test Author',
        year: '2024'
      }
      
      const citation = citationService.generateCitation(minimalPublication, 'APA')
      
      expect(citation).toBeTruthy()
      expect(citation).toContain('Test Paper')
      expect(citation).toContain('Test Author')
      expect(citation).toContain('2024')
    })
  })

  describe('downloadCitations', () => {
    it('should create and trigger download', () => {
      const publications = [
        {
          title: 'Paper 1',
          authors: 'Author 1',
          year: '2024'
        }
      ]
      
      // Mock URL.createObjectURL and URL.revokeObjectURL
      global.URL.createObjectURL = vi.fn(() => 'mock-url')
      global.URL.revokeObjectURL = vi.fn()
      
      // Mock anchor element
      const mockAnchor = {
        href: '',
        download: '',
        click: vi.fn()
      }
      vi.spyOn(document, 'createElement').mockReturnValue(mockAnchor)
      vi.spyOn(document.body, 'appendChild').mockImplementation(() => {})
      vi.spyOn(document.body, 'removeChild').mockImplementation(() => {})
      
      citationService.downloadCitations(publications, 'APA', 'test-citations')
      
      expect(mockAnchor.download).toBe('test-citations.txt')
      expect(mockAnchor.click).toHaveBeenCalled()
      expect(URL.revokeObjectURL).toHaveBeenCalledWith('mock-url')
    })
  })

  describe('copyToClipboard', () => {
    it('should copy text to clipboard', async () => {
      const mockWriteText = vi.fn().mockResolvedValue()
      Object.assign(navigator, {
        clipboard: {
          writeText: mockWriteText
        }
      })
      
      const result = await citationService.copyToClipboard('Test citation text')
      
      expect(mockWriteText).toHaveBeenCalledWith('Test citation text')
      expect(result).toBe(true)
    })

    it('should handle clipboard errors', async () => {
      const mockWriteText = vi.fn().mockRejectedValue(new Error('Clipboard error'))
      Object.assign(navigator, {
        clipboard: {
          writeText: mockWriteText
        }
      })
      
      const result = await citationService.copyToClipboard('Test citation text')
      
      expect(result).toBe(false)
    })
  })

  describe('updateAllCitations', () => {
    it('should update citation counts for all publications', async () => {
      const publications = [
        {
          title: 'Paper 1',
          authors: 'Author 1',
          citations: 0
        },
        {
          title: 'Paper 2',
          authors: 'Author 2',
          citations: 0
        }
      ]
      
      // Mock fetchCitationCount to return mock data
      citationService.fetchCitationCount = vi.fn().mockResolvedValue(5)
      
      const updatedPublications = await citationService.updateAllCitations(publications)
      
      expect(updatedPublications).toHaveLength(2)
      expect(updatedPublications[0].citations).toBe(5)
      expect(updatedPublications[1].citations).toBe(5)
      expect(citationService.fetchCitationCount).toHaveBeenCalledTimes(2)
    })

    it('should handle errors gracefully', async () => {
      const publications = [
        {
          title: 'Paper 1',
          authors: 'Author 1',
          citations: 0
        }
      ]
      
      citationService.fetchCitationCount = vi.fn().mockRejectedValue(new Error('API Error'))
      
      const updatedPublications = await citationService.updateAllCitations(publications)
      
      expect(updatedPublications[0].citations).toBe(0) // Should remain unchanged
    })
  })
})




