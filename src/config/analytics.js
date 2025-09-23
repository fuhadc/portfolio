// Google Analytics Configuration
export const GA_CONFIG = {
  // Replace with your actual Google Analytics Measurement ID
  // Format: G-XXXXXXXXXX (GA4) or UA-XXXXXXXXX-X (Universal Analytics)
  measurementId: process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-02F5YF0N07',
  
  // Debug mode for development
  debug: process.env.NODE_ENV === 'development',
  
  // Custom dimensions (optional)
  customDimensions: {
    // Define custom dimensions here if needed
    // Example: userType: 1, projectCategory: 2
  }
}

// Google Analytics Events
export const GA_EVENTS = {
  // Page navigation events
  PAGE_VIEW: 'page_view',
  
  // Portfolio interaction events
  PROJECT_VIEW: 'project_view',
  PROJECT_CLICK: 'project_click',
  PUBLICATION_VIEW: 'publication_view',
  PUBLICATION_CLICK: 'publication_click',
  
  // Contact and social events
  CONTACT_CLICK: 'contact_click',
  SOCIAL_CLICK: 'social_click',
  EMAIL_CLICK: 'email_click',
  PHONE_CLICK: 'phone_click',
  
  // Download events
  RESUME_DOWNLOAD: 'resume_download',
  CV_DOWNLOAD: 'cv_download',
  
  // External link events
  EXTERNAL_LINK_CLICK: 'external_link_click',
  GITHUB_CLICK: 'github_click',
  LINKEDIN_CLICK: 'linkedin_click',
  RESEARCHGATE_CLICK: 'researchgate_click',
  
  // Form events
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  CONTACT_FORM_ERROR: 'contact_form_error',
  
  // Search events
  SEARCH_PERFORMED: 'search_performed',
  
  // Video/Media events
  VIDEO_PLAY: 'video_play',
  VIDEO_PAUSE: 'video_pause',
  IMAGE_VIEW: 'image_view'
}

// Event parameters
export const GA_EVENT_PARAMS = {
  // Project-related parameters
  project_name: 'project_name',
  project_category: 'project_category',
  project_technology: 'project_technology',
  
  // Publication-related parameters
  publication_title: 'publication_title',
  publication_type: 'publication_type',
  publication_venue: 'publication_venue',
  
  // Social media parameters
  social_platform: 'social_platform',
  social_action: 'social_action',
  
  // Contact parameters
  contact_method: 'contact_method',
  contact_source: 'contact_source',
  
  // General parameters
  page_title: 'page_title',
  page_location: 'page_location',
  page_path: 'page_path',
  content_group: 'content_group'
}

// Content groups for better organization
export const CONTENT_GROUPS = {
  HOME: 'Home',
  ABOUT: 'About',
  PROJECTS: 'Projects',
  PUBLICATIONS: 'Publications',
  SKILLS: 'Skills',
  EXPERIENCE: 'Experience',
  ACHIEVEMENTS: 'Achievements',
  CONTACT: 'Contact',
  SOCIAL: 'Social'
}

// Helper function to get page title
export const getPageTitle = (pathname) => {
  const pathMap = {
    '/': 'Home - Muhammed Fuhad C Portfolio',
    '/about': 'About - Muhammed Fuhad C',
    '/projects': 'Projects - Portfolio',
    '/publications': 'Publications - Research',
    '/skills': 'Skills - Technical Profile',
    '/experience': 'Experience - Career',
    '/achievements': 'Achievements - Recognition',
    '/contact': 'Contact - Get In Touch',
    '/social': 'Social Media - Connect'
  }
  
  return pathMap[pathname] || 'Muhammed Fuhad C Portfolio'
}

// Helper function to get content group
export const getContentGroup = (pathname) => {
  const groupMap = {
    '/': CONTENT_GROUPS.HOME,
    '/about': CONTENT_GROUPS.ABOUT,
    '/projects': CONTENT_GROUPS.PROJECTS,
    '/publications': CONTENT_GROUPS.PUBLICATIONS,
    '/skills': CONTENT_GROUPS.SKILLS,
    '/experience': CONTENT_GROUPS.EXPERIENCE,
    '/achievements': CONTENT_GROUPS.ACHIEVEMENTS,
    '/contact': CONTENT_GROUPS.CONTACT,
    '/social': CONTENT_GROUPS.SOCIAL
  }
  
  return groupMap[pathname] || CONTENT_GROUPS.HOME
}
