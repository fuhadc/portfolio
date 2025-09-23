import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { GA_CONFIG, GA_EVENTS, GA_EVENT_PARAMS, getPageTitle, getContentGroup } from '../config/analytics'

// Initialize Google Analytics
export const initializeGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    return // Already initialized
  }

  // Load Google Analytics script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_CONFIG.measurementId}`
  document.head.appendChild(script)

  // Initialize gtag
  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag

  gtag('js', new Date())
  gtag('config', GA_CONFIG.measurementId, {
    page_title: document.title,
    page_location: window.location.href,
    debug_mode: GA_CONFIG.debug
  })

  if (GA_CONFIG.debug) {
    console.log('Google Analytics initialized with ID:', GA_CONFIG.measurementId)
  }
}

// Track page view
export const trackPageView = (pathname, search = '') => {
  if (typeof window !== 'undefined' && window.gtag) {
    const pageTitle = getPageTitle(pathname)
    const pageLocation = window.location.origin + pathname + search
    const contentGroup = getContentGroup(pathname)

    window.gtag('event', GA_EVENTS.PAGE_VIEW, {
      page_title: pageTitle,
      page_location: pageLocation,
      page_path: pathname + search,
      content_group: contentGroup
    })

    if (GA_CONFIG.debug) {
      console.log('Page view tracked:', {
        page_title: pageTitle,
        page_location: pageLocation,
        page_path: pathname + search,
        content_group: contentGroup
      })
    }
  }
}

// Track custom event
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
      event_category: parameters.event_category || 'Portfolio',
      event_label: parameters.event_label || 'User Interaction'
    })

    if (GA_CONFIG.debug) {
      console.log('Event tracked:', eventName, parameters)
    }
  }
}

// Track project interaction
export const trackProjectInteraction = (projectName, action, category = '') => {
  trackEvent(GA_EVENTS.PROJECT_CLICK, {
    [GA_EVENT_PARAMS.project_name]: projectName,
    [GA_EVENT_PARAMS.project_category]: category,
    event_action: action,
    event_category: 'Projects'
  })
}

// Track publication interaction
export const trackPublicationInteraction = (publicationTitle, action, type = '') => {
  trackEvent(GA_EVENTS.PUBLICATION_CLICK, {
    [GA_EVENT_PARAMS.publication_title]: publicationTitle,
    [GA_EVENT_PARAMS.publication_type]: type,
    event_action: action,
    event_category: 'Publications'
  })
}

// Track social media click
export const trackSocialClick = (platform, action = 'click') => {
  trackEvent(GA_EVENTS.SOCIAL_CLICK, {
    [GA_EVENT_PARAMS.social_platform]: platform,
    [GA_EVENT_PARAMS.social_action]: action,
    event_category: 'Social Media'
  })
}

// Track contact interaction
export const trackContactInteraction = (method, source = '') => {
  trackEvent(GA_EVENTS.CONTACT_CLICK, {
    [GA_EVENT_PARAMS.contact_method]: method,
    [GA_EVENT_PARAMS.contact_source]: source,
    event_category: 'Contact'
  })
}

// Track download
export const trackDownload = (fileName, fileType = '') => {
  trackEvent(GA_EVENTS.RESUME_DOWNLOAD, {
    file_name: fileName,
    file_type: fileType,
    event_category: 'Downloads'
  })
}

// Track external link click
export const trackExternalLink = (url, linkText = '') => {
  trackEvent(GA_EVENTS.EXTERNAL_LINK_CLICK, {
    link_url: url,
    link_text: linkText,
    event_category: 'External Links'
  })
}

// Custom hook for automatic page tracking
export const useAnalytics = () => {
  const location = useLocation()

  useEffect(() => {
    // Initialize GA on first load
    initializeGA()
  }, [])

  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname, location.search)
  }, [location])

  return {
    trackEvent,
    trackProjectInteraction,
    trackPublicationInteraction,
    trackSocialClick,
    trackContactInteraction,
    trackDownload,
    trackExternalLink
  }
}

// Higher-order component for analytics (removed JSX to fix build error)
// Use the useAnalytics hook directly in components instead
