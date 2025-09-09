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
  tags = [],
  structuredData
}) => {
  const baseUrl = 'https://muhammedfuhadc.dev'
  const defaultImage = `${baseUrl}/og-image.jpg`
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const fullImage = image ? `${baseUrl}${image}` : defaultImage

  // Enhanced keywords for maximum discoverability
  const enhancedKeywords = keywords ? 
    `${keywords}, fuad, fuhad, muhammed fuhad, fuhad c, muhammed fuhad c, iot developer, embedded systems developer, smart agriculture, healthcare monitoring, mobile app developer, flutter developer, python developer, arduino, raspberry pi, research, ieee, springer, kerala, india, portfolio, developer, software engineer, researcher, toyota industries, christ university, btech, computer science, engineering` : 
    'fuad, fuhad, muhammed fuhad, fuhad c, muhammed fuhad c, iot developer, embedded systems developer, smart agriculture, healthcare monitoring, mobile app developer, flutter developer, python developer, arduino, raspberry pi, research, ieee, springer, kerala, india, portfolio, developer, software engineer, researcher, toyota industries, christ university, btech, computer science, engineering'

  useEffect(() => {
    // Update page title
    document.title = title || 'Muhammed Fuhad C (Fuad) - IoT & Embedded Systems Developer | Portfolio'

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Muhammed Fuhad C (Fuad) - Professional IoT & Embedded Systems Developer. Specializing in Smart Agriculture, Healthcare Monitoring, Mobile Apps. View portfolio, projects, and connect on social media.')
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', fullUrl)

    // Add structured data
    if (structuredData) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }
  }, [title, description, fullUrl, structuredData])

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title || 'Muhammed Fuhad C (Fuad) - IoT & Embedded Systems Developer | Portfolio'}</title>
      <meta name="title" content={title || 'Muhammed Fuhad C (Fuad) - IoT & Embedded Systems Developer | Portfolio'} />
      <meta name="description" content={description || 'Muhammed Fuhad C (Fuad) - Professional IoT & Embedded Systems Developer. Specializing in Smart Agriculture, Healthcare Monitoring, Mobile Apps. View portfolio, projects, and connect on social media.'} />
      <meta name="keywords" content={enhancedKeywords} />
      <meta name="author" content={author} />
      <meta name="subject" content="IoT & Embedded Systems Development" />
      <meta name="copyright" content="Muhammed Fuhad C" />
      <meta name="reply-to" content="fuhadcs@icloud.com" />
      <meta name="owner" content="Muhammed Fuhad C" />
      <meta name="url" content={fullUrl} />
      <meta name="identifier-URL" content={fullUrl} />
      <meta name="category" content="Technology, IoT, Embedded Systems, Mobile Development" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Fuad Portfolio" />
      <meta name="application-name" content="Muhammed Fuhad C Portfolio" />
      <meta name="msapplication-TileColor" content="#1f2937" />
      <meta name="theme-color" content="#1f2937" />
      
      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Kerala, India" />
      <meta name="geo.position" content="10.8505;76.2711" />
      <meta name="ICBM" content="10.8505, 76.2711" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title || 'Muhammed Fuhad C (Fuad) - IoT & Embedded Systems Developer | Portfolio'} />
      <meta property="og:description" content={description || 'Muhammed Fuhad C (Fuad) - Professional IoT & Embedded Systems Developer. Specializing in Smart Agriculture, Healthcare Monitoring, Mobile Apps. View portfolio, projects, and connect on social media.'} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Muhammed Fuhad C (Fuad) - IoT & Embedded Systems Developer Portfolio" />
      <meta property="og:site_name" content="Muhammed Fuhad C Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_IN" />
      <meta property="og:updated_time" content={new Date().toISOString()} />
      <meta property="article:author" content="https://www.facebook.com/fuhadcs3" />
      <meta property="article:publisher" content="https://www.facebook.com/fuhadcs3" />
      <meta property="article:section" content={section || "Technology"} />
      <meta property="article:tag" content="IoT" />
      <meta property="article:tag" content="Embedded Systems" />
      <meta property="article:tag" content="Mobile Development" />
      <meta property="article:tag" content="Smart Agriculture" />
      <meta property="article:tag" content="Healthcare Monitoring" />
      <meta property="article:tag" content="Research" />
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
      <meta property="twitter:title" content={title || 'Muhammed Fuhad C (Fuad) - IoT & Embedded Systems Developer | Portfolio'} />
      <meta property="twitter:description" content={description || 'Muhammed Fuhad C (Fuad) - Professional IoT & Embedded Systems Developer. Specializing in Smart Agriculture, Healthcare Monitoring, Mobile Apps. View portfolio, projects, and connect on social media.'} />
      <meta property="twitter:image" content={fullImage} />
      <meta property="twitter:image:alt" content="Muhammed Fuhad C (Fuad) - IoT & Embedded Systems Developer Portfolio" />
      <meta property="twitter:creator" content="@_fuhad_c" />
      <meta property="twitter:site" content="@_fuhad_c" />
      <meta property="twitter:domain" content="muhammedfuhadc.dev" />
      
      {/* LinkedIn */}
      <meta property="linkedin:owner" content="fuhadc" />
      
      {/* Additional Social Media */}
      <meta property="fb:app_id" content="your-facebook-app-id" />
      <meta property="fb:admins" content="fuhadcs3" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="expires" content="never" />
      <meta name="classification" content="Portfolio, Technology, IoT, Embedded Systems" />
      <meta name="designer" content="Muhammed Fuhad C" />
      <meta name="publisher" content="Muhammed Fuhad C" />
      <meta name="contact" content="fuhadcs@icloud.com" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="target" content="all" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO
