import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import SinglePageLayout from './components/SinglePageLayout'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Publications from './pages/Publications'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
import Social from './pages/Social'
import Admin from './pages/Admin'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })

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

  return (
    <HelmetProvider>
      <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
        <SinglePageLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
          <ErrorBoundary>
            <AnimatePresence mode="wait">
              <Home />
              <About />
              <Experience />
              <Publications />
              <Projects />
              <Skills />
              <Achievements />
              <Contact />
              <Social />
            </AnimatePresence>
          </ErrorBoundary>
        </SinglePageLayout>
      </div>
    </HelmetProvider>
  )
}

export default App