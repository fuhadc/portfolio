// Data management utilities for admin panel
import projectsData from '../data/projects.json'
import publicationsData from '../data/publications.json'
import skillsData from '../data/skills.json'
import experienceData from '../data/experience.json'
import aboutData from '../data/about.json'
import homeData from '../data/home.json'
import achievementsData from '../data/achievements.json'
import certificationsData from '../data/certifications.json'
import contactData from '../data/contact.json'

// Data types mapping
export const DATA_TYPES = {
  PROJECTS: 'projects',
  PUBLICATIONS: 'publications',
  SKILLS: 'skills',
  EXPERIENCE: 'experience',
  ABOUT: 'about',
  HOME: 'home',
  ACHIEVEMENTS: 'achievements',
  CERTIFICATIONS: 'certifications',
  CONTACT: 'contact'
}

// Get all data
export const getAllData = () => ({
  projects: projectsData,
  publications: publicationsData,
  skills: skillsData,
  experience: experienceData,
  about: aboutData,
  home: homeData,
  achievements: achievementsData,
  certifications: certificationsData,
  contact: contactData
})

// Get specific data type - checks localStorage first, then falls back to static JSON
export const getDataByType = (type) => {
  // First check localStorage for admin panel updates
  const saved = localStorage.getItem(`portfolio_${type}`)
  if (saved) {
    try {
      return JSON.parse(saved)
    } catch (error) {
      console.error(`Error parsing ${type} data from localStorage:`, error)
    }
  }
  
  // Fall back to static JSON files
  const dataMap = {
    [DATA_TYPES.PROJECTS]: projectsData,
    [DATA_TYPES.PUBLICATIONS]: publicationsData,
    [DATA_TYPES.SKILLS]: skillsData,
    [DATA_TYPES.EXPERIENCE]: experienceData,
    [DATA_TYPES.ABOUT]: aboutData,
    [DATA_TYPES.HOME]: homeData,
    [DATA_TYPES.ACHIEVEMENTS]: achievementsData,
    [DATA_TYPES.CERTIFICATIONS]: certificationsData,
    [DATA_TYPES.CONTACT]: contactData
  }
  return dataMap[type] || null
}

// Update data (in memory - for demo purposes)
let dataCache = getAllData()

export const updateData = (type, newData) => {
  if (dataCache[type]) {
    dataCache[type] = newData
    return true
  }
  return false
}

export const getCachedData = (type) => {
  return dataCache[type] || null
}

// Validation schemas
export const validationSchemas = {
  project: {
    title: { required: true, type: 'string' },
    description: { required: true, type: 'string' },
    technologies: { required: true, type: 'array' },
    features: { required: true, type: 'array' },
    status: { required: true, type: 'string' },
    year: { required: true, type: 'string' },
    category: { required: true, type: 'string' },
    color: { required: true, type: 'string' }
  },
  publication: {
    title: { required: true, type: 'string' },
    authors: { required: true, type: 'string' },
    venue: { required: true, type: 'string' },
    year: { required: true, type: 'string' },
    type: { required: true, type: 'string' },
    status: { required: true, type: 'string' }
  },
  skill: {
    name: { required: true, type: 'string' },
    level: { required: true, type: 'number', min: 0, max: 100 },
    years: { required: true, type: 'string' }
  },
  certification: {
    title: { required: true, type: 'string' },
    issuer: { required: true, type: 'string' },
    date: { required: true, type: 'string' },
    status: { required: true, type: 'string' }
  },
  experience: {
    title: { required: true, type: 'string' },
    company: { required: true, type: 'string' },
    location: { required: true, type: 'string' },
    type: { required: true, type: 'string' },
    duration: { required: true, type: 'string' },
    description: { required: true, type: 'string' }
  }
}

// Validate data against schema
export const validateData = (data, schema) => {
  const errors = []
  
  for (const [field, rules] of Object.entries(schema)) {
    const value = data[field]
    
    if (rules.required && (!value || value === '')) {
      errors.push(`${field} is required`)
      continue
    }
    
    if (value && rules.type === 'string' && typeof value !== 'string') {
      errors.push(`${field} must be a string`)
    }
    
    if (value && rules.type === 'number' && typeof value !== 'number') {
      errors.push(`${field} must be a number`)
    }
    
    if (value && rules.type === 'array' && !Array.isArray(value)) {
      errors.push(`${field} must be an array`)
    }
    
    if (value && rules.min !== undefined && value < rules.min) {
      errors.push(`${field} must be at least ${rules.min}`)
    }
    
    if (value && rules.max !== undefined && value > rules.max) {
      errors.push(`${field} must be at most ${rules.max}`)
    }
  }
  
  return errors
}

// Icon options for forms
export const iconOptions = [
  'Code', 'ExternalLink', 'Github', 'Smartphone', 'Cpu', 'Globe', 'Database',
  'FileText', 'Calendar', 'Award', 'BookOpen', 'Zap', 'Cloud', 'User',
  'GraduationCap', 'MapPin', 'Phone', 'Mail', 'Download', 'Briefcase',
  'BarChart3', 'Trophy', 'Medal', 'Users', 'Star', 'MessageCircle',
  'Clock', 'CheckCircle', 'Linkedin', 'ArrowRight', 'Eye'
]

// Color options for forms
export const colorOptions = [
  '#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444', '#06b6d4',
  '#059669', '#7c3aed', '#dc2626', '#16a34a', '#9333ea', '#f97316',
  '#84cc16', '#ec4899', '#6366f1', '#14b8a6', '#f43f5e', '#8b5cf6'
]

export default {
  getAllData,
  getDataByType,
  updateData,
  getCachedData,
  validateData,
  validationSchemas,
  iconOptions,
  colorOptions,
  DATA_TYPES
}
