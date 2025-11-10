/**
 * Comprehensive error handling utilities
 */

/**
 * Error types for categorization
 */
export const ERROR_TYPES = {
  NETWORK: 'NETWORK_ERROR',
  VALIDATION: 'VALIDATION_ERROR',
  PERMISSION: 'PERMISSION_ERROR',
  NOT_FOUND: 'NOT_FOUND_ERROR',
  SERVER: 'SERVER_ERROR',
  CLIENT: 'CLIENT_ERROR',
  UNKNOWN: 'UNKNOWN_ERROR'
}

/**
 * Error severity levels
 */
export const ERROR_SEVERITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  CRITICAL: 'critical'
}

/**
 * Error handler class
 */
export class ErrorHandler {
  constructor() {
    this.errors = []
    this.listeners = []
  }

  /**
   * Add error listener
   */
  addListener(listener) {
    this.listeners.push(listener)
  }

  /**
   * Remove error listener
   */
  removeListener(listener) {
    const index = this.listeners.indexOf(listener)
    if (index > -1) {
      this.listeners.splice(index, 1)
    }
  }

  /**
   * Notify all listeners
   */
  notifyListeners(error) {
    this.listeners.forEach(listener => {
      try {
        listener(error)
      } catch (e) {
        console.error('Error in error listener:', e)
      }
    })
  }

  /**
   * Handle and categorize error
   */
  handleError(error, context = {}) {
    const errorInfo = this.categorizeError(error, context)
    
    // Add to errors array
    this.errors.push(errorInfo)
    
    // Notify listeners
    this.notifyListeners(errorInfo)
    
    // Log error
    this.logError(errorInfo)
    
    return errorInfo
  }

  /**
   * Categorize error based on type and context
   */
  categorizeError(error, context) {
    const timestamp = new Date().toISOString()
    const id = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    let type = ERROR_TYPES.UNKNOWN
    let severity = ERROR_SEVERITY.MEDIUM
    let userMessage = 'An unexpected error occurred'
    let technicalMessage = error.message || 'Unknown error'

    // Network errors
    if (error.name === 'NetworkError' || error.message?.includes('fetch')) {
      type = ERROR_TYPES.NETWORK
      severity = ERROR_SEVERITY.HIGH
      userMessage = 'Network connection error. Please check your internet connection.'
    }
    
    // HTTP errors
    else if (error.status) {
      switch (Math.floor(error.status / 100)) {
        case 4:
          type = error.status === 404 ? ERROR_TYPES.NOT_FOUND : ERROR_TYPES.CLIENT
          severity = error.status === 404 ? ERROR_SEVERITY.MEDIUM : ERROR_SEVERITY.HIGH
          userMessage = error.status === 404 ? 
            'The requested resource was not found.' :
            'There was a problem with your request.'
          break
        case 5:
          type = ERROR_TYPES.SERVER
          severity = ERROR_SEVERITY.HIGH
          userMessage = 'Server error. Please try again later.'
          break
      }
    }
    
    // Validation errors
    else if (error.name === 'ValidationError' || error.message?.includes('validation')) {
      type = ERROR_TYPES.VALIDATION
      severity = ERROR_SEVERITY.MEDIUM
      userMessage = 'Please check your input and try again.'
    }
    
    // Permission errors
    else if (error.name === 'PermissionError' || error.message?.includes('permission')) {
      type = ERROR_TYPES.PERMISSION
      severity = ERROR_SEVERITY.HIGH
      userMessage = 'You do not have permission to perform this action.'
    }

    return {
      id,
      type,
      severity,
      timestamp,
      userMessage,
      technicalMessage,
      stack: error.stack,
      context: {
        url: window.location.href,
        userAgent: navigator.userAgent,
        ...context
      },
      originalError: error
    }
  }

  /**
   * Log error to console and external service
   */
  logError(errorInfo) {
    // Console logging based on severity
    const logMethod = errorInfo.severity === ERROR_SEVERITY.CRITICAL ? 'error' :
                     errorInfo.severity === ERROR_SEVERITY.HIGH ? 'error' :
                     errorInfo.severity === ERROR_SEVERITY.MEDIUM ? 'warn' : 'log'
    
    console[logMethod]('Error occurred:', errorInfo)

    // Send to external error tracking service (e.g., Sentry)
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: errorInfo.technicalMessage,
        fatal: errorInfo.severity === ERROR_SEVERITY.CRITICAL
      })
    }
  }

  /**
   * Get errors by type
   */
  getErrorsByType(type) {
    return this.errors.filter(error => error.type === type)
  }

  /**
   * Get errors by severity
   */
  getErrorsBySeverity(severity) {
    return this.errors.filter(error => error.severity === severity)
  }

  /**
   * Clear errors
   */
  clearErrors() {
    this.errors = []
  }

  /**
   * Get error statistics
   */
  getErrorStats() {
    const stats = {
      total: this.errors.length,
      byType: {},
      bySeverity: {},
      recent: this.errors.filter(error => 
        new Date() - new Date(error.timestamp) < 24 * 60 * 60 * 1000 // Last 24 hours
      ).length
    }

    this.errors.forEach(error => {
      stats.byType[error.type] = (stats.byType[error.type] || 0) + 1
      stats.bySeverity[error.severity] = (stats.bySeverity[error.severity] || 0) + 1
    })

    return stats
  }
}

/**
 * Global error handler instance
 */
export const globalErrorHandler = new ErrorHandler()

/**
 * React Error Boundary component
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    const errorDetails = globalErrorHandler.handleError(error, {
      component: this.props.componentName || 'Unknown',
      errorInfo: errorInfo.componentStack
    })

    this.setState({ errorInfo, errorDetails })
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>We apologize for the inconvenience. Please refresh the page or try again later.</p>
          {import.meta.env.DEV && (
            <details>
              <summary>Error Details</summary>
              <pre>{this.state.error?.toString()}</pre>
              <pre>{this.state.errorInfo?.componentStack}</pre>
            </details>
          )}
        </div>
      )
    }

    return this.props.children
  }
}

/**
 * Error notification component
 */
export const ErrorNotification = ({ error, onDismiss }) => {
  const getSeverityStyles = (severity) => {
    switch (severity) {
      case ERROR_SEVERITY.CRITICAL:
        return 'bg-red-100 border-red-500 text-red-700'
      case ERROR_SEVERITY.HIGH:
        return 'bg-red-50 border-red-300 text-red-600'
      case ERROR_SEVERITY.MEDIUM:
        return 'bg-yellow-50 border-yellow-300 text-yellow-700'
      case ERROR_SEVERITY.LOW:
        return 'bg-blue-50 border-blue-300 text-blue-700'
      default:
        return 'bg-gray-50 border-gray-300 text-gray-700'
    }
  }

  const getIcon = (severity) => {
    switch (severity) {
      case ERROR_SEVERITY.CRITICAL:
        return '🚨'
      case ERROR_SEVERITY.HIGH:
        return '⚠️'
      case ERROR_SEVERITY.MEDIUM:
        return '⚠️'
      case ERROR_SEVERITY.LOW:
        return 'ℹ️'
      default:
        return '❓'
    }
  }

  return (
    <div className={`fixed top-4 right-4 p-4 rounded-lg border-l-4 shadow-lg max-w-md z-50 ${getSeverityStyles(error.severity)}`}>
      <div className="flex items-start">
        <span className="text-lg mr-2" role="img" aria-label="Error severity">
          {getIcon(error.severity)}
        </span>
        <div className="flex-1">
          <h4 className="font-semibold text-sm">
            {error.type.replace('_ERROR', '').replace('_', ' ')}
          </h4>
          <p className="text-sm mt-1">{error.userMessage}</p>
          {import.meta.env.DEV && (
            <details className="mt-2">
              <summary className="text-xs cursor-pointer">Technical Details</summary>
              <pre className="text-xs mt-1 whitespace-pre-wrap">{error.technicalMessage}</pre>
            </details>
          )}
        </div>
        <button
          onClick={onDismiss}
          className="ml-2 text-gray-500 hover:text-gray-700"
          aria-label="Dismiss error"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

/**
 * Retry mechanism for failed operations
 */
export const withRetry = async (operation, maxRetries = 3, delay = 1000) => {
  let lastError
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation()
    } catch (error) {
      lastError = error
      
      if (attempt === maxRetries) {
        throw error
      }
      
      // Exponential backoff
      const waitTime = delay * Math.pow(2, attempt - 1)
      await new Promise(resolve => setTimeout(resolve, waitTime))
    }
  }
  
  throw lastError
}

/**
 * Safe async wrapper
 */
export const safeAsync = async (asyncFn, fallbackValue = null) => {
  try {
    return await asyncFn()
  } catch (error) {
    globalErrorHandler.handleError(error)
    return fallbackValue
  }
}

export default globalErrorHandler

