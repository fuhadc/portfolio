// SEO Validation and Testing Utilities
// This utility helps validate and test SEO implementation

export const seoValidator = {
  // Validate meta tags
  validateMetaTags: () => {
    const errors = []
    const warnings = []
    
    // Check if title exists
    const title = document.querySelector('title')
    if (!title) {
      errors.push('Missing <title> tag')
    } else {
      const titleText = title.textContent
      if (titleText.length < 30) {
        warnings.push('Title is too short (less than 30 characters)')
      }
      if (titleText.length > 60) {
        warnings.push('Title is too long (more than 60 characters)')
      }
    }
    
    // Check meta description
    const description = document.querySelector('meta[name="description"]')
    if (!description) {
      errors.push('Missing meta description')
    } else {
      const descText = description.getAttribute('content')
      if (descText.length < 120) {
        warnings.push('Meta description is too short (less than 120 characters)')
      }
      if (descText.length > 160) {
        warnings.push('Meta description is too long (more than 160 characters)')
      }
    }
    
    // Check Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const ogImage = document.querySelector('meta[property="og:image"]')
    const ogUrl = document.querySelector('meta[property="og:url"]')
    
    if (!ogTitle) warnings.push('Missing Open Graph title')
    if (!ogDescription) warnings.push('Missing Open Graph description')
    if (!ogImage) warnings.push('Missing Open Graph image')
    if (!ogUrl) warnings.push('Missing Open Graph URL')
    
    // Check Twitter Card tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    const twitterImage = document.querySelector('meta[name="twitter:image"]')
    
    if (!twitterCard) warnings.push('Missing Twitter Card type')
    if (!twitterTitle) warnings.push('Missing Twitter title')
    if (!twitterDescription) warnings.push('Missing Twitter description')
    if (!twitterImage) warnings.push('Missing Twitter image')
    
    // Check canonical URL
    const canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      errors.push('Missing canonical URL')
    }
    
    // Check structured data
    const structuredData = document.querySelector('script[type="application/ld+json"]')
    if (!structuredData) {
      warnings.push('Missing structured data (JSON-LD)')
    }
    
    return { errors, warnings }
  },
  
  // Validate page performance
  validatePerformance: () => {
    const warnings = []
    
    // Check for large images without optimization
    const images = document.querySelectorAll('img')
    images.forEach(img => {
      if (img.naturalWidth > 1920 || img.naturalHeight > 1080) {
        warnings.push(`Large image detected: ${img.src} (${img.naturalWidth}x${img.naturalHeight})`)
      }
    })
    
    // Check for external resources without preconnect
    const externalLinks = document.querySelectorAll('link[href^="http"]')
    const preconnects = document.querySelectorAll('link[rel="preconnect"]')
    const preconnectHosts = Array.from(preconnects).map(link => 
      new URL(link.href).hostname
    )
    
    externalLinks.forEach(link => {
      const hostname = new URL(link.href).hostname
      if (!preconnectHosts.includes(hostname)) {
        warnings.push(`External resource without preconnect: ${hostname}`)
      }
    })
    
    return { warnings }
  },
  
  // Validate accessibility
  validateAccessibility: () => {
    const errors = []
    const warnings = []
    
    // Check for alt attributes on images
    const images = document.querySelectorAll('img')
    images.forEach(img => {
      if (!img.alt) {
        errors.push(`Image missing alt attribute: ${img.src}`)
      }
    })
    
    // Check for heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    let h1Count = 0
    let previousLevel = 0
    
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1))
      
      if (heading.tagName === 'H1') {
        h1Count++
      }
      
      if (level > previousLevel + 1) {
        warnings.push(`Heading hierarchy skip: ${heading.tagName} after H${previousLevel}`)
      }
      
      previousLevel = level
    })
    
    if (h1Count === 0) {
      errors.push('No H1 heading found')
    } else if (h1Count > 1) {
      warnings.push('Multiple H1 headings found')
    }
    
    // Check for form labels
    const inputs = document.querySelectorAll('input, textarea, select')
    inputs.forEach(input => {
      const id = input.id
      const label = document.querySelector(`label[for="${id}"]`)
      const ariaLabel = input.getAttribute('aria-label')
      const ariaLabelledBy = input.getAttribute('aria-labelledby')
      
      if (!label && !ariaLabel && !ariaLabelledBy) {
        warnings.push(`Form input missing label: ${input.type || input.tagName}`)
      }
    })
    
    return { errors, warnings }
  },
  
  // Generate SEO report
  generateReport: () => {
    const metaValidation = seoValidator.validateMetaTags()
    const performanceValidation = seoValidator.validatePerformance()
    const accessibilityValidation = seoValidator.validateAccessibility()
    
    const totalErrors = metaValidation.errors.length + accessibilityValidation.errors.length
    const totalWarnings = metaValidation.warnings.length + 
                         performanceValidation.warnings.length + 
                         accessibilityValidation.warnings.length
    
    const score = Math.max(0, 100 - (totalErrors * 20) - (totalWarnings * 5))
    
    return {
      score,
      grade: score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F',
      meta: metaValidation,
      performance: performanceValidation,
      accessibility: accessibilityValidation,
      summary: {
        totalErrors,
        totalWarnings,
        recommendations: [
          totalErrors > 0 ? 'Fix critical errors first' : null,
          totalWarnings > 5 ? 'Address warnings to improve SEO score' : null,
          score < 80 ? 'Consider implementing additional SEO optimizations' : null
        ].filter(Boolean)
      }
    }
  }
}

// SEO testing utilities
export const seoTesting = {
  // Test page load speed
  testPageSpeed: () => {
    return new Promise((resolve) => {
      const startTime = performance.now()
      
      window.addEventListener('load', () => {
        const loadTime = performance.now() - startTime
        const score = loadTime < 3000 ? 'Good' : loadTime < 5000 ? 'Needs Improvement' : 'Poor'
        
        resolve({
          loadTime: Math.round(loadTime),
          score,
          recommendations: loadTime > 3000 ? [
            'Optimize images',
            'Minify CSS and JavaScript',
            'Enable compression',
            'Use a CDN'
          ] : []
        })
      })
    })
  },
  
  // Test mobile responsiveness
  testMobileResponsiveness: () => {
    const viewport = document.querySelector('meta[name="viewport"]')
    const isResponsive = viewport && viewport.content.includes('width=device-width')
    
    return {
      isResponsive,
      recommendations: !isResponsive ? [
        'Add viewport meta tag',
        'Test on mobile devices',
        'Use responsive design principles'
      ] : []
    }
  },
  
  // Test social media sharing
  testSocialSharing: () => {
    const tests = {
      facebook: {
        hasOgTitle: !!document.querySelector('meta[property="og:title"]'),
        hasOgDescription: !!document.querySelector('meta[property="og:description"]'),
        hasOgImage: !!document.querySelector('meta[property="og:image"]'),
        hasOgUrl: !!document.querySelector('meta[property="og:url"]')
      },
      twitter: {
        hasCard: !!document.querySelector('meta[name="twitter:card"]'),
        hasTitle: !!document.querySelector('meta[name="twitter:title"]'),
        hasDescription: !!document.querySelector('meta[name="twitter:description"]'),
        hasImage: !!document.querySelector('meta[name="twitter:image"]')
      }
    }
    
    const facebookScore = Object.values(tests.facebook).filter(Boolean).length / 4 * 100
    const twitterScore = Object.values(tests.twitter).filter(Boolean).length / 4 * 100
    
    return {
      facebook: { ...tests.facebook, score: facebookScore },
      twitter: { ...tests.twitter, score: twitterScore },
      overallScore: (facebookScore + twitterScore) / 2
    }
  }
}

// Export all utilities
export default {
  seoValidator,
  seoTesting
}
