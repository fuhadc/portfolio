/**
 * Advanced SEO utilities and structured data generators
 */

/**
 * Generate comprehensive structured data for different content types
 */
export const generateStructuredData = {
  /**
   * Person schema for author information
   */
  person: (personData) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personData.name,
    "alternateName": personData.alternateNames || [],
    "jobTitle": personData.jobTitle,
    "description": personData.description,
    "url": personData.url,
    "image": personData.image,
    "sameAs": personData.socialProfiles || [],
    "address": personData.address ? {
      "@type": "PostalAddress",
      "addressLocality": personData.address.city,
      "addressRegion": personData.address.region,
      "addressCountry": personData.address.country
    } : undefined,
    "alumniOf": personData.education?.map(edu => ({
      "@type": "EducationalOrganization",
      "name": edu.institution,
      "degree": edu.degree,
      "startDate": edu.startDate,
      "endDate": edu.endDate
    })),
    "worksFor": personData.currentEmployer ? {
      "@type": "Organization",
      "name": personData.currentEmployer.name,
      "url": personData.currentEmployer.url
    } : undefined,
    "knowsAbout": personData.expertise || [],
    "hasCredential": personData.certifications?.map(cert => ({
      "@type": "EducationalOccupationalCredential",
      "name": cert.name,
      "credentialCategory": cert.category,
      "recognizedBy": {
        "@type": "Organization",
        "name": cert.issuer
      },
      "dateCreated": cert.date
    }))
  }),

  /**
   * Organization schema for company/employer
   */
  organization: (orgData) => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": orgData.name,
    "url": orgData.url,
    "logo": orgData.logo,
    "description": orgData.description,
    "address": orgData.address ? {
      "@type": "PostalAddress",
      "addressLocality": orgData.address.city,
      "addressRegion": orgData.address.region,
      "addressCountry": orgData.address.country
    } : undefined,
    "contactPoint": orgData.contact ? {
      "@type": "ContactPoint",
      "telephone": orgData.contact.phone,
      "contactType": "customer service",
      "email": orgData.contact.email
    } : undefined
  }),

  /**
   * CreativeWork schema for projects and publications
   */
  creativeWork: (workData) => ({
    "@context": "https://schema.org",
    "@type": workData.type || "CreativeWork",
    "name": workData.title,
    "description": workData.description,
    "author": {
      "@type": "Person",
      "name": workData.author
    },
    "dateCreated": workData.dateCreated,
    "dateModified": workData.dateModified,
    "url": workData.url,
    "image": workData.image,
    "keywords": workData.keywords || [],
    "about": workData.topics || [],
    "inLanguage": workData.language || "en",
    ...(workData.type === 'SoftwareApplication' && {
      "applicationCategory": workData.category,
      "operatingSystem": workData.platforms,
      "softwareVersion": workData.version,
      "downloadUrl": workData.downloadUrl,
      "screenshot": workData.screenshots
    }),
    ...(workData.type === 'ScholarlyArticle' && {
      "publisher": {
        "@type": "Organization",
        "name": workData.publisher
      },
      "datePublished": workData.datePublished,
      "citation": workData.citations,
      "doi": workData.doi,
      "isPartOf": workData.journal ? {
        "@type": "PublicationIssue",
        "issueNumber": workData.issueNumber,
        "datePublished": workData.datePublished,
        "isPartOf": {
          "@type": "PublicationVolume",
          "volumeNumber": workData.volumeNumber,
          "isPartOf": {
            "@type": "Periodical",
            "name": workData.journal
          }
        }
      } : undefined
    })
  }),

  /**
   * BreadcrumbList schema for navigation
   */
  breadcrumbList: (breadcrumbs) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  }),

  /**
   * FAQPage schema for frequently asked questions
   */
  faqPage: (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }),

  /**
   * HowTo schema for tutorials and guides
   */
  howTo: (howToData) => ({
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howToData.title,
    "description": howToData.description,
    "image": howToData.image,
    "estimatedCost": howToData.cost ? {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": howToData.cost
    } : undefined,
    "supply": howToData.supplies?.map(supply => ({
      "@type": "HowToSupply",
      "name": supply.name
    })),
    "tool": howToData.tools?.map(tool => ({
      "@type": "HowToTool",
      "name": tool.name
    })),
    "step": howToData.steps?.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.description,
      "image": step.image,
      "url": step.url
    })),
    "totalTime": howToData.totalTime
  }),

  /**
   * Event schema for conferences, workshops, etc.
   */
  event: (eventData) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": eventData.name,
    "description": eventData.description,
    "startDate": eventData.startDate,
    "endDate": eventData.endDate,
    "location": {
      "@type": "Place",
      "name": eventData.location.name,
      "address": eventData.location.address
    },
    "organizer": {
      "@type": "Organization",
      "name": eventData.organizer.name,
      "url": eventData.organizer.url
    },
    "offers": eventData.ticketUrl ? {
      "@type": "Offer",
      "url": eventData.ticketUrl,
      "price": eventData.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    } : undefined,
    "eventStatus": eventData.status || "https://schema.org/EventScheduled",
    "eventAttendanceMode": eventData.attendanceMode || "https://schema.org/OfflineEventAttendanceMode"
  })
}

/**
 * Generate meta tags for social media sharing
 */
export const generateSocialMetaTags = (pageData) => {
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://www.mfuhad.xyz'
  const imageUrl = pageData.image ? 
    (pageData.image.startsWith('http') ? pageData.image : `${baseUrl}${pageData.image}`) :
    `${baseUrl}/og-image.jpg`

  return {
    // Open Graph tags
    'og:title': pageData.title,
    'og:description': pageData.description,
    'og:image': imageUrl,
    'og:url': `${baseUrl}${pageData.url}`,
    'og:type': pageData.type || 'website',
    'og:site_name': 'Muhammed Fuhad C Portfolio',
    'og:locale': 'en_US',

    // Twitter Card tags
    'twitter:card': 'summary_large_image',
    'twitter:site': '@fuhadc',
    'twitter:creator': '@fuhadc',
    'twitter:title': pageData.title,
    'twitter:description': pageData.description,
    'twitter:image': imageUrl,

    // Additional meta tags
    'robots': pageData.robots || 'index, follow',
    'author': pageData.author || 'Muhammed Fuhad C',
    'keywords': Array.isArray(pageData.keywords) ? pageData.keywords.join(', ') : pageData.keywords,
    'canonical': `${baseUrl}${pageData.url}`
  }
}

/**
 * Generate sitemap data
 */
export const generateSitemapData = (pages) => {
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://www.mfuhad.xyz'
  const currentDate = new Date().toISOString()

  return pages.map(page => ({
    url: `${baseUrl}${page.url}`,
    lastmod: page.lastModified || currentDate,
    changefreq: page.changeFrequency || 'monthly',
    priority: page.priority || 0.5
  }))
}

/**
 * SEO optimization utilities
 */
export const seoOptimizer = {
  /**
   * Optimize title for SEO
   */
  optimizeTitle: (title, siteName = 'Muhammed Fuhad C') => {
    const maxLength = 60
    const separator = ' | '
    
    if (title.length <= maxLength) {
      return `${title}${separator}${siteName}`
    }
    
    const availableLength = maxLength - separator.length - siteName.length
    return `${title.substring(0, availableLength - 3)}...${separator}${siteName}`
  },

  /**
   * Optimize description for SEO
   */
  optimizeDescription: (description, maxLength = 160) => {
    if (description.length <= maxLength) {
      return description
    }
    
    return description.substring(0, maxLength - 3) + '...'
  },

  /**
   * Generate keywords from content
   */
  extractKeywords: (content, maxKeywords = 10) => {
    const words = content.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 3)
    
    const wordCount = {}
    words.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1
    })
    
    return Object.entries(wordCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, maxKeywords)
      .map(([word]) => word)
  },

  /**
   * Generate reading time estimate
   */
  calculateReadingTime: (content) => {
    const wordsPerMinute = 200
    const wordCount = content.split(/\s+/).length
    return Math.ceil(wordCount / wordsPerMinute)
  },

  /**
   * Check if URL is SEO-friendly
   */
  isSeoFriendlyUrl: (url) => {
    const seoFriendlyPattern = /^[a-z0-9-]+$/
    return seoFriendlyPattern.test(url.replace(/\//g, ''))
  },

  /**
   * Generate alt text for images
   */
  generateAltText: (context, imageDescription) => {
    if (imageDescription) {
      return imageDescription
    }
    
    // Generate contextual alt text
    const contextMap = {
      'profile': 'Professional headshot of Muhammed Fuhad C',
      'project': 'Screenshot or demo of the project',
      'certificate': 'Certificate or award document',
      'achievement': 'Award or recognition certificate'
    }
    
    return contextMap[context] || 'Relevant image'
  }
}

/**
 * Performance monitoring for SEO
 */
export const seoPerformance = {
  /**
   * Monitor Core Web Vitals
   */
  monitorCoreWebVitals: () => {
    if (typeof window === 'undefined') return

    // First Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          console.log('FCP:', entry.startTime)
          // Send to analytics
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              name: 'FCP',
              value: Math.round(entry.startTime),
              event_category: 'Web Vitals'
            })
          }
        }
      })
    }).observe({ entryTypes: ['paint'] })

    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const lastEntry = entries[entries.length - 1]
      console.log('LCP:', lastEntry.startTime)
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'LCP',
          value: Math.round(lastEntry.startTime),
          event_category: 'Web Vitals'
        })
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] })

    // Cumulative Layout Shift
    let clsValue = 0
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
        }
      }
      console.log('CLS:', clsValue)
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'CLS',
          value: Math.round(clsValue * 1000),
          event_category: 'Web Vitals'
        })
      }
    }).observe({ entryTypes: ['layout-shift'] })
  }
}

export default {
  generateStructuredData,
  generateSocialMetaTags,
  generateSitemapData,
  seoOptimizer,
  seoPerformance
}

