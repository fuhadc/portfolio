import { useEffect } from 'react'

const ScrollToTop = () => {
  useEffect(() => {
    // Small delay to ensure DOM is updated
    const timer = setTimeout(() => {
      const mainElement = document.querySelector('main')
      if (mainElement) {
        // Get the position of the main element relative to the document
        const mainRect = mainElement.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const mainTop = mainRect.top + scrollTop
        
        // Scroll to the main element position
        window.scrollTo({
          top: mainTop,
          left: 0,
          behavior: 'smooth'
        })
      } else {
        // Fallback to window scroll if main element not found
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }
    }, 100) // Small delay to ensure DOM is ready

    return () => clearTimeout(timer)
  }, []) // Empty dependency array since this is a single-page app

  return null
}

export default ScrollToTop
