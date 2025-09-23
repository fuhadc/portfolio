// SEO Optimization Utilities for Maximum Discoverability
// This file contains utilities to optimize SEO performance and social media discoverability

export const generateSocialMediaMeta = (pageData) => {
  const baseUrl = 'https://mfuhad.xyz'
  const defaultImage = `${baseUrl}/og-image.jpg`
  
  return {
    // Enhanced Open Graph tags
    'og:title': pageData.title || 'Muhammed Fuhad C (Fuad) - IoT & Embedded Systems Developer',
    'og:description': pageData.description || 'Professional IoT & Embedded Systems Developer specializing in Smart Agriculture, Healthcare Monitoring, and Mobile Apps.',
    'og:image': pageData.image || defaultImage,
    'og:url': `${baseUrl}${pageData.url || '/'}`,
    'og:type': pageData.type || 'website',
    'og:site_name': 'Muhammed Fuhad C Portfolio',
    'og:locale': 'en_US',
    'og:locale:alternate': 'en_IN',
    'og:updated_time': new Date().toISOString(),
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': pageData.imageAlt || 'Muhammed Fuhad C (Fuad) - IoT & Embedded Systems Developer Portfolio',
    
    // Twitter Card tags
    'twitter:card': 'summary_large_image',
    'twitter:title': pageData.title || 'Muhammed Fuhad C (Fuad) - IoT & Embedded Systems Developer',
    'twitter:description': pageData.description || 'Professional IoT & Embedded Systems Developer specializing in Smart Agriculture, Healthcare Monitoring, and Mobile Apps.',
    'twitter:image': pageData.image || defaultImage,
    'twitter:image:alt': pageData.imageAlt || 'Muhammed Fuhad C (Fuad) - IoT & Embedded Systems Developer Portfolio',
    'twitter:creator': '@_fuhad_c',
    'twitter:site': '@_fuhad_c',
    'twitter:domain': 'mfuhad.xyz',
    
    // LinkedIn specific
    'linkedin:owner': 'fuhadc',
    
    // Facebook specific
    'fb:app_id': 'your-facebook-app-id',
    'fb:admins': 'fuhadcs3'
  }
}

export const generateStructuredData = (type, data) => {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  }
  
  return JSON.stringify(baseStructuredData, null, 2)
}

export const generatePersonStructuredData = () => {
  return generateStructuredData('Person', {
    name: 'Muhammed Fuhad C',
    alternateName: ['Fuhad C', 'Fuad', 'Fuhad', 'Muhammed Fuhad'],
    givenName: 'Muhammed Fuhad',
    familyName: 'C',
    jobTitle: 'IoT & Embedded Systems Developer | Researcher | Software Engineer',
    description: 'Passionate IoT and Embedded Systems enthusiast, researcher, and developer specializing in smart agriculture, healthcare monitoring, and mobile applications. Based in Kerala, India.',
    url: 'https://mfuhad.xyz',
    image: 'https://mfuhad.xyz/profile-image.jpg',
    email: 'fuhadcs@icloud.com',
    telephone: '+91-7306525489',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kerala',
      addressRegion: 'Kerala',
      addressCountry: 'India'
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Christ (Deemed to be) University',
      description: 'Bachelor of Technology in Computer Science Engineering (IoT)'
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Toyota Industries',
      description: 'Software Engineer'
    },
    knowsAbout: [
      'IoT Development',
      'Embedded Systems',
      'Smart Agriculture',
      'Healthcare Monitoring',
      'Mobile App Development',
      'Flutter',
      'Python',
      'Arduino',
      'Raspberry Pi',
      'Research',
      'IEEE Publications',
      'Springer Publications'
    ],
    sameAs: [
      'https://linkedin.com/in/fuhadc',
      'https://github.com/fuhadc',
      'https://www.researchgate.net/profile/Muhammed-Fuhad',
      'https://www.instagram.com/_fuhad_c',
      'https://x.com/_fuhad_c',
      'https://www.facebook.com/fuhadcs3'
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'IoT & Embedded Systems Developer',
      description: 'Developing IoT solutions, embedded systems, and mobile applications',
      occupationLocation: {
        '@type': 'Place',
        name: 'Kerala, India'
      }
    },
    memberOf: [
      {
        '@type': 'Organization',
        name: 'IEEE',
        description: 'Institute of Electrical and Electronics Engineers'
      }
    ]
  })
}

export const generateWebsiteStructuredData = () => {
  return generateStructuredData('WebSite', {
    name: 'Muhammed Fuhad C Portfolio',
    url: 'https://mfuhad.xyz',
    description: 'Professional portfolio of Muhammed Fuhad C (Fuad) - IoT & Embedded Systems Developer',
    author: {
      '@type': 'Person',
      name: 'Muhammed Fuhad C'
    },
    publisher: {
      '@type': 'Person',
      name: 'Muhammed Fuhad C'
    },
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://mfuhad.xyz/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  })
}

export const generateOrganizationStructuredData = () => {
  return generateStructuredData('Organization', {
    name: 'Muhammed Fuhad C Portfolio',
    url: 'https://mfuhad.xyz',
    logo: 'https://mfuhad.xyz/logo.png',
    description: 'Professional portfolio showcasing IoT, Embedded Systems, and Research work by Muhammed Fuhad C',
    founder: {
      '@type': 'Person',
      name: 'Muhammed Fuhad C'
    },
    sameAs: [
      'https://linkedin.com/in/fuhadc',
      'https://github.com/fuhadc',
      'https://www.researchgate.net/profile/Muhammed-Fuhad',
      'https://www.instagram.com/_fuhad_c',
      'https://x.com/_fuhad_c',
      'https://www.facebook.com/fuhadcs3'
    ]
  })
}

export const generateBreadcrumbStructuredData = (breadcrumbs) => {
  return generateStructuredData('BreadcrumbList', {
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  })
}

export const generateArticleStructuredData = (articleData) => {
  return generateStructuredData('Article', {
    headline: articleData.title,
    description: articleData.description,
    author: {
      '@type': 'Person',
      name: 'Muhammed Fuhad C',
      url: 'https://www.mfuhad.xyz'
    },
    publisher: {
      '@type': 'Person',
      name: 'Muhammed Fuhad C'
    },
    datePublished: articleData.publishedTime || new Date().toISOString(),
    dateModified: articleData.modifiedTime || new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.mfuhad.xyz${articleData.url}`
    },
    image: articleData.image || 'https://www.mfuhad.xyz/og-image.jpg',
    keywords: articleData.keywords || 'IoT, Embedded Systems, Mobile Development, Smart Agriculture, Healthcare Monitoring'
  })
}

export const generateProjectStructuredData = (projectData) => {
  return generateStructuredData('CreativeWork', {
    name: projectData.title,
    description: projectData.description,
    creator: {
      '@type': 'Person',
      name: 'Muhammed Fuhad C'
    },
    dateCreated: projectData.dateCreated,
    dateModified: projectData.dateModified,
    url: projectData.url,
    image: projectData.image,
    keywords: projectData.technologies?.join(', ') || 'IoT, Mobile Development, Web Development',
    about: projectData.category || 'Technology',
    inLanguage: 'en-US'
  })
}

export const generateFAQStructuredData = (faqs) => {
  return generateStructuredData('FAQPage', {
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  })
}

export const generateLocalBusinessStructuredData = () => {
  return generateStructuredData('LocalBusiness', {
    name: 'Muhammed Fuhad C - IoT & Embedded Systems Developer',
    description: 'Professional IoT and Embedded Systems development services',
    url: 'https://mfuhad.xyz',
    telephone: '+91-7306525489',
    email: 'fuhadcs@icloud.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kerala',
      addressRegion: 'Kerala',
      addressCountry: 'India'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '10.8505',
      longitude: '76.2711'
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$',
    serviceArea: {
      '@type': 'Country',
      name: 'India'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IoT Development',
            description: 'Custom IoT solutions and embedded systems development'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            description: 'Cross-platform mobile applications using Flutter'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Development',
            description: 'Modern web applications using React and modern frameworks'
          }
        }
      ]
    }
  })
}

export const generateSocialMediaKeywords = () => {
  return [
    'fuad', 'fuhad', 'muhammed fuhad', 'fuhad c', 'muhammed fuhad c',
    'iot developer', 'embedded systems developer', 'smart agriculture',
    'healthcare monitoring', 'mobile app developer', 'flutter developer',
    'python developer', 'arduino', 'raspberry pi', 'research', 'ieee',
    'springer', 'kerala', 'india', 'portfolio', 'developer', 'software engineer',
    'researcher', 'toyota industries', 'christ university', 'btech',
    'computer science', 'engineering', 'instagram', 'facebook', 'linkedin',
    'github', 'twitter', 'researchgate', 'social media', 'contact', 'hire',
    'collaboration', 'professional networking', 'connect', 'follow'
  ].join(', ')
}

export const generatePageKeywords = (pageType, additionalKeywords = []) => {
  const baseKeywords = generateSocialMediaKeywords()
  const pageSpecificKeywords = {
    home: ['portfolio', 'homepage', 'main page', 'welcome'],
    about: ['about me', 'biography', 'background', 'story', 'personal'],
    projects: ['projects', 'work', 'portfolio', 'case studies', 'examples'],
    publications: ['research', 'papers', 'publications', 'academic', 'ieee', 'springer'],
    skills: ['skills', 'technologies', 'expertise', 'competencies', 'abilities'],
    experience: ['experience', 'career', 'work history', 'employment', 'professional'],
    achievements: ['achievements', 'awards', 'certifications', 'recognition', 'accomplishments'],
    contact: ['contact', 'get in touch', 'reach out', 'connect', 'social media'],
    social: ['social media', 'social links', 'connect', 'follow', 'networking']
  }
  
  const keywords = [
    baseKeywords,
    ...(pageSpecificKeywords[pageType] || []),
    ...additionalKeywords
  ].join(', ')
  
  return keywords
}

export const optimizeImageForSEO = (imageUrl, altText, title) => {
  return {
    src: imageUrl,
    alt: altText || 'Muhammed Fuhad C (Fuad) - IoT & Embedded Systems Developer',
    title: title || 'Muhammed Fuhad C Portfolio',
    loading: 'lazy',
    decoding: 'async'
  }
}

export const generateCanonicalUrl = (path) => {
  const baseUrl = 'https://mfuhad.xyz'
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export const generateMetaRobots = (index = true, follow = true) => {
  const directives = []
  if (index) directives.push('index')
  else directives.push('noindex')
  if (follow) directives.push('follow')
  else directives.push('nofollow')
  
  return directives.join(', ')
}

export const generateHreflangTags = (languages = ['en-US', 'en-IN']) => {
  const baseUrl = 'https://mfuhad.xyz'
  return languages.map(lang => ({
    rel: 'alternate',
    hreflang: lang,
    href: `${baseUrl}?lang=${lang}`
  }))
}

export const generatePreconnectLinks = () => {
  return [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com',
    'https://www.linkedin.com',
    'https://github.com',
    'https://www.instagram.com',
    'https://x.com',
    'https://www.facebook.com',
    'https://www.researchgate.net'
  ]
}

export const generateDNSPrefetchLinks = () => {
  return [
    '//fonts.googleapis.com',
    '//fonts.gstatic.com',
    '//www.google-analytics.com',
    '//www.googletagmanager.com',
    '//www.linkedin.com',
    '//github.com',
    '//www.instagram.com',
    '//x.com',
    '//www.facebook.com',
    '//www.researchgate.net'
  ]
}

// Performance optimization utilities
export const optimizeForCoreWebVitals = {
  // Lazy load images
  lazyLoadImages: () => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target
            img.src = img.dataset.src
            img.classList.remove('lazy')
            observer.unobserve(img)
          }
        })
      })
      
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img)
      })
    }
  },
  
  // Preload critical resources
  preloadCriticalResources: () => {
    const criticalResources = [
      '/assets/index.css',
      '/assets/index.js',
      '/fonts/inter.woff2'
    ]
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource
      link.as = resource.endsWith('.css') ? 'style' : 'script'
      document.head.appendChild(link)
    })
  },
  
  // Optimize font loading
  optimizeFontLoading: () => {
    const fontLink = document.createElement('link')
    fontLink.rel = 'preconnect'
    fontLink.href = 'https://fonts.googleapis.com'
    document.head.appendChild(fontLink)
    
    const fontLink2 = document.createElement('link')
    fontLink2.rel = 'preconnect'
    fontLink2.href = 'https://fonts.gstatic.com'
    fontLink2.crossOrigin = 'anonymous'
    document.head.appendChild(fontLink2)
  }
}

export default {
  generateSocialMediaMeta,
  generateStructuredData,
  generatePersonStructuredData,
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
  generateBreadcrumbStructuredData,
  generateArticleStructuredData,
  generateProjectStructuredData,
  generateFAQStructuredData,
  generateLocalBusinessStructuredData,
  generateSocialMediaKeywords,
  generatePageKeywords,
  optimizeImageForSEO,
  generateCanonicalUrl,
  generateMetaRobots,
  generateHreflangTags,
  generatePreconnectLinks,
  generateDNSPrefetchLinks,
  optimizeForCoreWebVitals
}




