// Admin panel constants
export const COLLECTIONS = {
  PROJECTS: 'projects',
  PUBLICATIONS: 'publications',
  SKILLS: 'skills',
  EXPERIENCE: 'experience',
  ACHIEVEMENTS: 'achievements',
  CONTACT: 'contact'
}

export const FIELD_TYPES = {
  TEXT: 'text',
  TEXTAREA: 'textarea',
  SELECT: 'select',
  PASSWORD: 'password',
  COLOR: 'color',
  ARRAY: 'array',
  NUMBER: 'number',
  DATE: 'date',
  EMAIL: 'email',
  URL: 'url'
}

export const STATUS_OPTIONS = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
  DRAFT: 'Draft',
  PUBLISHED: 'Published',
  CURRENT: 'Current',
  PAST: 'Past'
}

export const SKILL_CATEGORIES = {
  TECHNICAL: 'Technical',
  SOFT: 'Soft Skills',
  LANGUAGE: 'Languages',
  FRAMEWORK: 'Frameworks',
  TOOL: 'Tools'
}

export const EXPERIENCE_TYPES = {
  FULL_TIME: 'Full-time',
  PART_TIME: 'Part-time',
  CONTRACT: 'Contract',
  FREELANCE: 'Freelance',
  INTERNSHIP: 'Internship'
}

export const ACHIEVEMENT_TYPES = {
  AWARD: 'Award',
  CERTIFICATION: 'Certification',
  RECOGNITION: 'Recognition',
  MILESTONE: 'Milestone'
}

export const CONTACT_TYPES = {
  EMAIL: 'Email',
  PHONE: 'Phone',
  LINKEDIN: 'LinkedIn',
  GITHUB: 'GitHub',
  TWITTER: 'Twitter',
  WEBSITE: 'Website'
}

// Field configurations for different collections
export const FIELD_CONFIGS = {
  [COLLECTIONS.PROJECTS]: [
    { name: 'title', label: 'Title', type: FIELD_TYPES.TEXT, required: true },
    { name: 'description', label: 'Description', type: FIELD_TYPES.TEXTAREA, required: true },
    { name: 'technologies', label: 'Technologies', type: FIELD_TYPES.ARRAY, required: true },
    { name: 'status', label: 'Status', type: FIELD_TYPES.SELECT, required: true, options: Object.values(STATUS_OPTIONS) },
    { name: 'year', label: 'Year', type: FIELD_TYPES.NUMBER, required: true },
    { name: 'url', label: 'URL', type: FIELD_TYPES.URL, required: false },
    { name: 'github', label: 'GitHub', type: FIELD_TYPES.URL, required: false }
  ],
  [COLLECTIONS.PUBLICATIONS]: [
    { name: 'title', label: 'Title', type: FIELD_TYPES.TEXT, required: true },
    { name: 'description', label: 'Description', type: FIELD_TYPES.TEXTAREA, required: true },
    { name: 'authors', label: 'Authors', type: FIELD_TYPES.ARRAY, required: true },
    { name: 'journal', label: 'Journal', type: FIELD_TYPES.TEXT, required: true },
    { name: 'year', label: 'Year', type: FIELD_TYPES.NUMBER, required: true },
    { name: 'status', label: 'Status', type: FIELD_TYPES.SELECT, required: true, options: Object.values(STATUS_OPTIONS) },
    { name: 'url', label: 'URL', type: FIELD_TYPES.URL, required: false }
  ],
  [COLLECTIONS.SKILLS]: [
    { name: 'name', label: 'Skill Name', type: FIELD_TYPES.TEXT, required: true },
    { name: 'category', label: 'Category', type: FIELD_TYPES.SELECT, required: true, options: Object.values(SKILL_CATEGORIES) },
    { name: 'level', label: 'Level', type: FIELD_TYPES.SELECT, required: true, options: ['Beginner', 'Intermediate', 'Advanced', 'Expert'] },
    { name: 'years', label: 'Years of Experience', type: FIELD_TYPES.NUMBER, required: false },
    { name: 'status', label: 'Status', type: FIELD_TYPES.SELECT, required: true, options: Object.values(STATUS_OPTIONS) }
  ],
  [COLLECTIONS.EXPERIENCE]: [
    { name: 'title', label: 'Job Title', type: FIELD_TYPES.TEXT, required: true },
    { name: 'company', label: 'Company', type: FIELD_TYPES.TEXT, required: true },
    { name: 'location', label: 'Location', type: FIELD_TYPES.TEXT, required: true },
    { name: 'startDate', label: 'Start Date', type: FIELD_TYPES.DATE, required: true },
    { name: 'endDate', label: 'End Date', type: FIELD_TYPES.DATE, required: false },
    { name: 'description', label: 'Description', type: FIELD_TYPES.TEXTAREA, required: true },
    { name: 'type', label: 'Type', type: FIELD_TYPES.SELECT, required: true, options: Object.values(EXPERIENCE_TYPES) },
    { name: 'status', label: 'Status', type: FIELD_TYPES.SELECT, required: true, options: Object.values(STATUS_OPTIONS) }
  ],
  [COLLECTIONS.ACHIEVEMENTS]: [
    { name: 'title', label: 'Title', type: FIELD_TYPES.TEXT, required: true },
    { name: 'organization', label: 'Organization', type: FIELD_TYPES.TEXT, required: true },
    { name: 'year', label: 'Year', type: FIELD_TYPES.NUMBER, required: true },
    { name: 'description', label: 'Description', type: FIELD_TYPES.TEXTAREA, required: true },
    { name: 'type', label: 'Type', type: FIELD_TYPES.SELECT, required: true, options: Object.values(ACHIEVEMENT_TYPES) },
    { name: 'status', label: 'Status', type: FIELD_TYPES.SELECT, required: true, options: Object.values(STATUS_OPTIONS) }
  ],
  [COLLECTIONS.CONTACT]: [
    { name: 'type', label: 'Type', type: FIELD_TYPES.SELECT, required: true, options: Object.values(CONTACT_TYPES) },
    { name: 'value', label: 'Value', type: FIELD_TYPES.TEXT, required: true },
    { name: 'status', label: 'Status', type: FIELD_TYPES.SELECT, required: true, options: Object.values(STATUS_OPTIONS) }
  ]
}

// Menu items configuration
export const MENU_ITEMS = [
  { name: 'Dashboard', path: '/admin', icon: 'Home' },
  { name: 'Projects', path: '/admin/projects', icon: 'Code' },
  { name: 'Publications', path: '/admin/publications', icon: 'BookOpen' },
  { name: 'Skills', path: '/admin/skills', icon: 'Award' },
  { name: 'Experience', path: '/admin/experience', icon: 'Briefcase' },
  { name: 'About', path: '/admin/about', icon: 'User' },
  { name: 'Home', path: '/admin/home', icon: 'Home' },
  { name: 'Achievements', path: '/admin/achievements', icon: 'Trophy' },
  { name: 'Contact', path: '/admin/contact', icon: 'Mail' }
]

export default {
  COLLECTIONS,
  FIELD_TYPES,
  STATUS_OPTIONS,
  SKILL_CATEGORIES,
  EXPERIENCE_TYPES,
  ACHIEVEMENT_TYPES,
  CONTACT_TYPES,
  FIELD_CONFIGS,
  MENU_ITEMS
}
