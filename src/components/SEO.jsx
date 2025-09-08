import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  author = 'Muhammed Fuhad C',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const baseUrl = 'https://muhammedfuhadc.dev'
  const defaultImage = `${baseUrl}/og-image.jpg`
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const fullImage = image ? `${baseUrl}${image}` : defaultImage

  useEffect(() => {
    // Update page title
    document.title = title || 'Muhammed Fuhad C - IoT & Embedded Systems Portfolio'

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Professional portfolio of Muhammed Fuhad C showcasing IoT, Embedded Systems, and Research work')
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', fullUrl)
  }, [title, description, fullUrl])

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title || 'Muhammed Fuhad C - IoT & Embedded Systems Portfolio'}</title>
      <meta name="title" content={title || 'Muhammed Fuhad C - IoT & Embedded Systems Portfolio'} />
      <meta name="description" content={description || 'Professional portfolio of Muhammed Fuhad C showcasing IoT, Embedded Systems, and Research work'} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title || 'Muhammed Fuhad C - IoT & Embedded Systems Portfolio'} />
      <meta property="og:description" content={description || 'Professional portfolio of Muhammed Fuhad C showcasing IoT, Embedded Systems, and Research work'} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Muhammed Fuhad C Portfolio" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title || 'Muhammed Fuhad C - IoT & Embedded Systems Portfolio'} />
      <meta property="twitter:description" content={description || 'Professional portfolio of Muhammed Fuhad C showcasing IoT, Embedded Systems, and Research work'} />
      <meta property="twitter:image" content={fullImage} />
      <meta property="twitter:creator" content="@_fuhad_c" />
      <meta property="twitter:site" content="@_fuhad_c" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  )
}

export default SEO
