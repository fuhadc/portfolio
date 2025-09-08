// Admin configuration
export const adminConfig = {
  // Authentication
  auth: {
    password: 'admin123', // In production, this should be environment variable
    sessionTimeout: 30 * 60 * 1000, // 30 minutes
  },

  // Table configurations
  tableConfigs: {
    projects: {
      columns: [
        { key: 'title', title: 'Title', type: 'text', required: true },
        { key: 'description', title: 'Description', type: 'text', required: true },
        { key: 'category', title: 'Category', type: 'text' },
        { key: 'status', title: 'Status', type: 'status' },
        { key: 'year', title: 'Year', type: 'text' },
        { key: 'technologies', title: 'Technologies', type: 'array' },
        { key: 'links', title: 'Links', type: 'links' }
      ],
      defaultItem: {
        title: '',
        description: '',
        image: '',
        technologies: [],
        features: [],
        links: {
          code: '',
          demo: '',
          paper: '',
          app: ''
        },
        status: 'Completed',
        year: new Date().getFullYear().toString(),
        category: 'Web App',
        icon: 'Code',
        color: '#3b82f6'
      }
    },
    publications: {
      columns: [
        { key: 'title', title: 'Title', type: 'text', required: true },
        { key: 'authors', title: 'Authors', type: 'text', required: true },
        { key: 'venue', title: 'Venue', type: 'text', required: true },
        { key: 'year', title: 'Year', type: 'text' },
        { key: 'type', title: 'Type', type: 'text' },
        { key: 'status', title: 'Status', type: 'status' },
        { key: 'citations', title: 'Citations', type: 'number' }
      ],
      defaultItem: {
        title: '',
        authors: '',
        venue: '',
        publisher: '',
        year: new Date().getFullYear().toString(),
        type: 'Conference Paper',
        doi: '',
        pages: '',
        isbn: '',
        abstract: '',
        keywords: [],
        status: 'Published',
        impact: 'High',
        citations: 0,
        lastUpdated: new Date().toISOString(),
        icon: 'BookOpen',
        color: '#10b981',
        googleScholarId: ''
      }
    },
    skills: {
      columns: [
        { key: 'name', title: 'Skill Name', type: 'text', required: true },
        { key: 'level', title: 'Level', type: 'text' },
        { key: 'category', title: 'Category', type: 'text' },
        { key: 'description', title: 'Description', type: 'text' }
      ],
      defaultItem: {
        name: '',
        level: 'Intermediate',
        category: 'Technical',
        description: '',
        icon: 'Code',
        color: '#3b82f6'
      }
    },
    experience: {
      columns: [
        { key: 'company', title: 'Company', type: 'text', required: true },
        { key: 'position', title: 'Position', type: 'text', required: true },
        { key: 'duration', title: 'Duration', type: 'text' },
        { key: 'description', title: 'Description', type: 'text' },
        { key: 'technologies', title: 'Technologies', type: 'array' }
      ],
      defaultItem: {
        company: '',
        position: '',
        duration: '',
        description: '',
        technologies: [],
        achievements: [],
        icon: 'Building',
        color: '#3b82f6'
      }
    },
    achievements: {
      columns: [
        { key: 'title', title: 'Title', type: 'text', required: true },
        { key: 'description', title: 'Description', type: 'text' },
        { key: 'year', title: 'Year', type: 'text' },
        { key: 'category', title: 'Category', type: 'text' },
        { key: 'image', title: 'Image', type: 'image' }
      ],
      defaultItem: {
        title: '',
        description: '',
        year: new Date().getFullYear().toString(),
        category: 'Academic',
        icon: 'Award',
        color: '#10b981',
        image: ''
      }
    },
    about: {
      columns: [
        { key: 'title', title: 'Title', type: 'text' },
        { key: 'content', title: 'Content', type: 'text' }
      ],
      defaultItem: {
        title: '',
        content: '',
        image: '',
        icon: 'User',
        color: '#3b82f6'
      }
    },
    contact: {
      columns: [
        { key: 'type', title: 'Type', type: 'text' },
        { key: 'value', title: 'Value', type: 'text' }
      ],
      defaultItem: {
        type: 'Email',
        value: '',
        icon: 'Mail',
        color: '#3b82f6'
      }
    },
    certifications: {
      columns: [
        { key: 'name', title: 'Name', type: 'text', required: true },
        { key: 'authority', title: 'Authority', type: 'text', required: true },
        { key: 'url', title: 'URL', type: 'url' },
        { key: 'licenseNumber', title: 'License Number', type: 'text' },
        { key: 'startedOn', title: 'Started On', type: 'text' },
        { key: 'finishedOn', title: 'Finished On', type: 'text' },
        { key: 'image', title: 'Certificate Image', type: 'image' }
      ],
      defaultItem: {
        name: '',
        authority: '',
        url: '',
        licenseNumber: '',
        startedOn: '',
        finishedOn: '',
        image: '',
        icon: 'Award',
        color: '#10b981'
      }
    }
  },

  // Form field options
  formOptions: {
    status: [
      { value: 'Completed', label: 'Completed' },
      { value: 'In Development', label: 'In Development' },
      { value: 'Planned', label: 'Planned' }
    ],
    category: [
      { value: 'Web App', label: 'Web App' },
      { value: 'Mobile App', label: 'Mobile App' },
      { value: 'IoT', label: 'IoT' },
      { value: 'AI/ML', label: 'AI/ML' },
      { value: 'CRM', label: 'CRM' }
    ],
    type: [
      { value: 'Conference Paper', label: 'Conference Paper' },
      { value: 'Journal Article', label: 'Journal Article' },
      { value: 'Abstract', label: 'Abstract' },
      { value: 'Research Paper', label: 'Research Paper' }
    ],
    impact: [
      { value: 'High', label: 'High' },
      { value: 'Medium', label: 'Medium' },
      { value: 'Low', label: 'Low' }
    ],
    level: [
      { value: 'Beginner', label: 'Beginner' },
      { value: 'Intermediate', label: 'Intermediate' },
      { value: 'Advanced', label: 'Advanced' },
      { value: 'Expert', label: 'Expert' }
    ]
  },

  // UI settings
  ui: {
    itemsPerPage: 10,
    sidebarWidth: 256,
    animationDuration: 200,
    theme: {
      primary: '#3b82f6',
      secondary: '#6b7280',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444'
    }
  }
}

export default adminConfig
