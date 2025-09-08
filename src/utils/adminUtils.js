// Admin utility functions

/**
 * Validate form data based on configuration
 */
export const validateFormData = (data, type, config) => {
  const errors = {}
  const tableConfig = config.tableConfigs[type]
  
  if (!tableConfig) return errors

  tableConfig.columns.forEach(column => {
    if (column.required && !data[column.key]) {
      errors[column.key] = `${column.title} is required`
    }
  })

  return errors
}

/**
 * Get default form data for a content type
 */
export const getDefaultFormData = (type, config) => {
  const tableConfig = config.tableConfigs[type]
  return tableConfig ? { ...tableConfig.defaultItem } : {}
}

/**
 * Export data to JSON file
 */
export const exportToJSON = (data, filename) => {
  const dataStr = JSON.stringify(data, null, 2)
  const dataBlob = new Blob([dataStr], { type: 'application/json' })
  const url = URL.createObjectURL(dataBlob)
  
  const link = document.createElement('a')
  link.href = url
  link.download = `${filename}.json`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

/**
 * Import data from JSON file
 */
export const importFromJSON = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result)
        resolve(data)
      } catch (error) {
        reject(new Error('Invalid JSON file'))
      }
    }
    reader.onerror = () => reject(new Error('Error reading file'))
    reader.readAsText(file)
  })
}

/**
 * Generate table columns from configuration
 */
export const generateTableColumns = (type, config) => {
  const tableConfig = config.tableConfigs[type]
  return tableConfig ? tableConfig.columns : []
}

/**
 * Get table data from content data
 */
export const getTableData = (data, type) => {
  if (!data[type]) return []
  const tabData = data[type]
  const firstKey = Object.keys(tabData)[0]
  return Array.isArray(tabData[firstKey]) ? tabData[firstKey] : []
}

/**
 * Format cell content based on column type
 */
export const formatCellContent = (value, column) => {
  if (column.type === 'array' && Array.isArray(value)) {
    return value.slice(0, 3).map((item, index) => 
      typeof item === 'object' ? item.name || item.description : item
    ).join(', ') + (value.length > 3 ? ` +${value.length - 3} more` : '')
  }

  if (column.type === 'status') {
    const statusColors = {
      'Completed': 'bg-green-100 text-green-800',
      'Published': 'bg-green-100 text-green-800',
      'In Development': 'bg-yellow-100 text-yellow-800',
      'Submitted': 'bg-yellow-100 text-yellow-800',
      'Planned': 'bg-gray-100 text-gray-800',
      'Presented': 'bg-blue-100 text-blue-800'
    }
    return {
      value,
      className: statusColors[value] || 'bg-gray-100 text-gray-800'
    }
  }

  if (column.type === 'date') {
    return new Date(value).toLocaleDateString()
  }

  if (column.type === 'number') {
    return value?.toLocaleString()
  }

  if (column.type === 'text' && value && value.length > 50) {
    return value.substring(0, 50) + '...'
  }

  return value || '-'
}

/**
 * Calculate statistics for dashboard
 */
export const calculateStats = (data) => {
  return {
    projects: data.projects?.projects?.length || 0,
    publications: data.publications?.publications?.length || 0,
    skills: data.skills?.skills?.length || 0,
    experience: data.experience?.experience?.length || 0,
    achievements: data.achievements?.achievements?.length || 0,
    totalViews: Math.floor(Math.random() * 10000) + 5000, // Mock data
    monthlyGrowth: Math.floor(Math.random() * 20) + 5 // Mock data
  }
}

/**
 * Generate recent activity (mock data)
 */
export const generateRecentActivity = () => {
  return [
    { type: 'edit', item: 'Home Automation IoT System', time: '2 hours ago', icon: 'Edit' },
    { type: 'add', item: 'New Publication Added', time: '1 day ago', icon: 'Plus' },
    { type: 'view', item: 'Portfolio Viewed', time: '3 hours ago', icon: 'Eye' },
    { type: 'edit', item: 'Skills Updated', time: '2 days ago', icon: 'Edit' },
    { type: 'add', item: 'New Project Added', time: '1 week ago', icon: 'Plus' }
  ]
}

/**
 * Check system health (mock implementation)
 */
export const checkSystemHealth = () => {
  const healthStatuses = ['good', 'warning', 'error']
  return healthStatuses[Math.floor(Math.random() * healthStatuses.length)]
}

/**
 * Get health status styling
 */
export const getHealthStatusStyle = (status) => {
  const styles = {
    good: 'text-green-600 bg-green-100',
    warning: 'text-yellow-600 bg-yellow-100',
    error: 'text-red-600 bg-red-100'
  }
  return styles[status] || 'text-gray-600 bg-gray-100'
}

/**
 * Get health status icon
 */
export const getHealthStatusIcon = (status) => {
  // This function should return the icon component, but since we can't import here,
  // we'll return the string and handle it in the component
  const icons = {
    good: 'CheckCircle',
    warning: 'AlertCircle',
    error: 'AlertCircle'
  }
  return icons[status] || 'Activity'
}

export default {
  validateFormData,
  getDefaultFormData,
  exportToJSON,
  importFromJSON,
  generateTableColumns,
  getTableData,
  formatCellContent,
  calculateStats,
  generateRecentActivity,
  checkSystemHealth,
  getHealthStatusStyle,
  getHealthStatusIcon
}
