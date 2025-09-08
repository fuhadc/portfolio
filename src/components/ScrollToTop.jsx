import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Small delay to ensure DOM is updated after route change
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
  }, [pathname])

  return null
}

export default ScrollToTop
