/**
 * Accessibility utility functions for WCAG compliance
 */

/**
 * Generate ARIA labels for different content types
 */
export const generateAriaLabel = {
  // Navigation items
  navItem: (name, current = false) => 
    `${name}${current ? ', current page' : ''}`,
  
  // Action buttons
  button: (action, target = '') => 
    `${action}${target ? ` ${target}` : ''}`,
  
  // Links
  link: (text, external = false) => 
    `${text}${external ? ', opens in new tab' : ''}`,
  
  // Images
  image: (alt, decorative = false) => 
    decorative ? '' : alt || 'Image',
  
  // Form elements
  formField: (label, required = false, error = false) => 
    `${label}${required ? ', required' : ''}${error ? ', has error' : ''}`,
  
  // Status messages
  status: (message, type = 'info') => 
    `${type}: ${message}`,
  
  // Data tables
  tableCell: (content, header = false) => 
    `${header ? 'header ' : ''}${content}`,
  
  // Progress indicators
  progress: (current, total, label = 'progress') => 
    `${label}: ${current} of ${total} complete`
}

/**
 * Generate unique IDs for ARIA relationships
 */
let idCounter = 0
export const generateId = (prefix = 'id') => `${prefix}-${++idCounter}`

/**
 * Keyboard navigation helpers
 */
export const keyboardNavigation = {
  // Handle arrow key navigation for lists
  handleArrowKeys: (event, items, currentIndex, setCurrentIndex) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        setCurrentIndex(Math.min(currentIndex + 1, items.length - 1))
        break
      case 'ArrowUp':
        event.preventDefault()
        setCurrentIndex(Math.max(currentIndex - 1, 0))
        break
      case 'Home':
        event.preventDefault()
        setCurrentIndex(0)
        break
      case 'End':
        event.preventDefault()
        setCurrentIndex(items.length - 1)
        break
    }
  },

  // Handle Enter/Space activation
  handleActivation: (event, callback) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      callback()
    }
  },

  // Trap focus within an element
  trapFocus: (element) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            e.preventDefault()
          }
        }
      }
    }

    element.addEventListener('keydown', handleTabKey)
    return () => element.removeEventListener('keydown', handleTabKey)
  }
}

/**
 * Screen reader announcements
 */
export const announceToScreenReader = (message, priority = 'polite') => {
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
  
  document.body.appendChild(announcement)
  
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

/**
 * Color contrast utilities
 */
export const colorContrast = {
  // Calculate relative luminance
  getLuminance: (rgb) => {
    const [r, g, b] = rgb.map(c => {
      c = c / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  },

  // Calculate contrast ratio
  getContrastRatio: (color1, color2) => {
    const lum1 = colorContrast.getLuminance(color1)
    const lum2 = colorContrast.getLuminance(color2)
    const brightest = Math.max(lum1, lum2)
    const darkest = Math.min(lum1, lum2)
    return (brightest + 0.05) / (darkest + 0.05)
  },

  // Check if contrast meets WCAG standards
  meetsWCAG: (color1, color2, level = 'AA') => {
    const ratio = colorContrast.getContrastRatio(color1, color2)
    const thresholds = {
      AA: 4.5,
      AAA: 7
    }
    return ratio >= thresholds[level]
  }
}

/**
 * Focus management utilities
 */
export const focusManagement = {
  // Save current focus
  saveFocus: () => {
    const activeElement = document.activeElement
    return activeElement instanceof HTMLElement ? activeElement : null
  },

  // Restore focus
  restoreFocus: (element) => {
    if (element && typeof element.focus === 'function') {
      element.focus()
    }
  },

  // Focus first focusable element
  focusFirst: (container) => {
    const focusable = container.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable) focusable.focus()
  },

  // Focus last focusable element
  focusLast: (container) => {
    const focusable = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length > 0) {
      focusable[focusable.length - 1].focus()
    }
  }
}

/**
 * High contrast mode detection
 */
export const detectHighContrast = () => {
  return window.matchMedia('(prefers-contrast: high)').matches
}

/**
 * Reduced motion detection
 */
export const detectReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Screen reader detection
 */
export const detectScreenReader = () => {
  // Basic detection - not 100% reliable
  return (
    navigator.userAgent.includes('NVDA') ||
    navigator.userAgent.includes('JAWS') ||
    navigator.userAgent.includes('VoiceOver') ||
    window.speechSynthesis?.speaking
  )
}

export default {
  generateAriaLabel,
  generateId,
  keyboardNavigation,
  announceToScreenReader,
  colorContrast,
  focusManagement,
  detectHighContrast,
  detectReducedMotion,
  detectScreenReader
}

