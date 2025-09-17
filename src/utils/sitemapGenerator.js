// Sitemap Generator Utility
// This utility can be used to generate dynamic sitemaps

export const generateSitemap = () => {
  const baseUrl = 'https://www.mfuhad.xyz'
  const currentDate = new Date().toISOString().split('T')[0]
  
  const pages = [
    {
      url: '/',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0',
      images: [
        {
          loc: `${baseUrl}/og-image.jpg`,
          title: 'Muhammed Fuhad C - IoT & Embedded Systems Portfolio',
          caption: 'Professional portfolio showcasing IoT, Embedded Systems, and Research work'
        }
      ]
    },
    {
      url: '/about',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/experience',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/publications',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      url: '/projects',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      url: '/skills',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: '/achievements',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: '/contact',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6'
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${pages.map(page => {
  let urlEntry = `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>`
  
  if (page.images) {
    page.images.forEach(image => {
      urlEntry += `
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>`
    })
  }
  
  urlEntry += `
  </url>`
  return urlEntry
}).join('\n')}
</urlset>`

  return sitemap
}

// Generate robots.txt content
export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /*.json$
Disallow: /node_modules/

# Allow important files
Allow: /assets/
Allow: /images/
Allow: /css/
Allow: /js/

# Sitemap
Sitemap: https://muhammedfuhadc.dev/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Host
Host: https://muhammedfuhadc.dev`
}

// Generate structured data for different page types
export const generatePageStructuredData = (pageType, pageData) => {
  const baseUrl = 'https://www.mfuhad.xyz'
  
  const structuredDataTemplates = {
    person: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Muhammed Fuhad C",
      "alternateName": "Fuhad C",
      "jobTitle": "IoT & Embedded Systems Enthusiast | Researcher | Developer",
      "description": "Passionate IoT and Embedded Systems enthusiast, researcher, and developer specializing in smart agriculture, healthcare monitoring, and mobile applications.",
      "url": baseUrl,
      "image": `${baseUrl}/profile-image.jpg`,
      "sameAs": [
        "https://linkedin.com/in/fuhadc",
        "https://github.com/fuhadc",
        "https://www.researchgate.net/profile/Muhammed-Fuhad",
        "https://www.instagram.com/_fuhad_c",
        "https://x.com/_fuhad_c",
        "https://www.facebook.com/fuhadcs3"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kerala",
        "addressRegion": "Kerala",
        "addressCountry": "India"
      },
      "email": "fuhadcs@icloud.com",
      "telephone": "+91-7306525489"
    },
    
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Muhammed Fuhad C Portfolio",
      "alternateName": "Fuhad C Portfolio",
      "url": baseUrl,
      "description": "Professional portfolio showcasing IoT, Embedded Systems, and Research work",
      "author": {
        "@type": "Person",
        "name": "Muhammed Fuhad C"
      },
      "publisher": {
        "@type": "Person",
        "name": "Muhammed Fuhad C"
      },
      "inLanguage": "en-US",
      "copyrightYear": "2024",
      "dateCreated": "2024-01-01",
      "dateModified": new Date().toISOString().split('T')[0]
    },
    
    article: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": pageData.title || "Article Title",
      "description": pageData.description || "Article Description",
      "author": {
        "@type": "Person",
        "name": "Muhammed Fuhad C"
      },
      "publisher": {
        "@type": "Person",
        "name": "Muhammed Fuhad C"
      },
      "datePublished": pageData.publishedTime || new Date().toISOString(),
      "dateModified": pageData.modifiedTime || new Date().toISOString(),
      "url": `${baseUrl}${pageData.url || ''}`,
      "image": pageData.image || `${baseUrl}/og-image.jpg`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${baseUrl}${pageData.url || ''}`
      }
    }
  }
  
  return structuredDataTemplates[pageType] || structuredDataTemplates.website
}

// SEO utility functions
export const seoUtils = {
  // Generate meta tags for a page
  generateMetaTags: (pageData) => {
    const baseUrl = 'https://www.mfuhad.xyz'
    const defaultImage = `${baseUrl}/og-image.jpg`
    
    return {
      title: pageData.title || 'Muhammed Fuhad C - IoT & Embedded Systems Portfolio',
      description: pageData.description || 'Professional portfolio of Muhammed Fuhad C showcasing IoT, Embedded Systems, and Research work',
      keywords: pageData.keywords || 'Muhammed Fuhad C, IoT, Embedded Systems, Smart Agriculture, Healthcare Monitoring, Mobile Apps, Research',
      image: pageData.image || defaultImage,
      url: `${baseUrl}${pageData.url || ''}`,
      type: pageData.type || 'website',
      author: 'Muhammed Fuhad C',
      publishedTime: pageData.publishedTime,
      modifiedTime: pageData.modifiedTime,
      section: pageData.section,
      tags: pageData.tags || []
    }
  },
  
  // Validate SEO data
  validateSEOData: (seoData) => {
    const errors = []
    
    if (!seoData.title || seoData.title.length < 30) {
      errors.push('Title should be at least 30 characters long')
    }
    
    if (!seoData.description || seoData.description.length < 120) {
      errors.push('Description should be at least 120 characters long')
    }
    
    if (seoData.title && seoData.title.length > 60) {
      errors.push('Title should be less than 60 characters for optimal display')
    }
    
    if (seoData.description && seoData.description.length > 160) {
      errors.push('Description should be less than 160 characters for optimal display')
    }
    
    return {
      isValid: errors.length === 0,
      errors
    }
  }
}
