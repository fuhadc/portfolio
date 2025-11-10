import { useState, useEffect, Suspense, lazy } from 'react'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import { SpeedInsights } from '@vercel/speed-insights/react'
import SinglePageLayout from './components/SinglePageLayout'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import { useAnalytics } from './hooks/useAnalytics'

// Lazy load page components for better performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Experience = lazy(() => import('./pages/Experience'))
const Publications = lazy(() => import('./pages/Publications'))
const Projects = lazy(() => import('./pages/Projects'))
const Skills = lazy(() => import('./pages/Skills'))
const Achievements = lazy(() => import('./pages/Achievements'))
const Contact = lazy(() => import('./pages/Contact'))
const Social = lazy(() => import('./pages/Social'))
const Admin = lazy(() => import('./pages/Admin'))
const EnvTest = lazy(() => import('./pages/EnvTest'))

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
  </div>
)

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })

  // Initialize Google Analytics
  useAnalytics()
  
  // Check if we should show the env test page
  const showEnvTest = window.location.pathname === '/env-test' || window.location.hash === '#env-test'

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // If env test is requested, show only that page
  if (showEnvTest) {
    return (
      <HelmetProvider>
        <div className="min-h-screen bg-white dark:bg-dark-900">
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <EnvTest />
            </Suspense>
          </ErrorBoundary>
        </div>
      </HelmetProvider>
    )
  }

  return (
    <HelmetProvider>
      <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
        <SinglePageLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <Home />
              <About />
              <Experience />
              <Publications />
              <Projects />
              <Skills />
              <Achievements />
              <Contact />
              <Social />
            </Suspense>
          </ErrorBoundary>
        </SinglePageLayout>
      </div>
      <SpeedInsights />
    </HelmetProvider>
  )
}

export default App