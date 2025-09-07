import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Home, 
  User, 
  Briefcase, 
  FileText, 
  Code, 
  Award, 
  Trophy, 
  Mail 
} from 'lucide-react'

const Layout = ({ children, darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Experience', href: '/experience', icon: Briefcase },
    { name: 'Publications', href: '/publications', icon: FileText },
    { name: 'Projects', href: '/projects', icon: Code },
    { name: 'Skills', href: '/skills', icon: Award },
    { name: 'Achievements', href: '/achievements', icon: Trophy },
    { name: 'Contact', href: '/contact', icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ 
                width: '2rem', 
                height: '2rem', 
                backgroundColor: '#3b82f6', 
                borderRadius: '0.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <span style={{ color: 'white', fontWeight: 'bold' }}>M</span>
              </div>
              <span className="desktop-logo">Muhammed Fuhad C</span>
              <span className="mobile-logo">MFC</span>
            </div>
          </Link>

          {/* Desktop & Tablet Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem'
          }} className="desktop-nav">
            <ul className="navbar-nav">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '0.5rem',
                        textDecoration: 'none',
                        color: isActive ? '#3b82f6' : '#64748b',
                        backgroundColor: isActive ? '#eff6ff' : 'transparent',
                        fontWeight: '500',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Icon size={16} />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }} className="mobile-nav">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="theme-toggle"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mobile-menu bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="container py-4">
                <ul className="space-y-2">
                  {navigation.map((item) => {
                    const Icon = item.icon
                    const isActive = location.pathname === item.href
                    return (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            borderRadius: '0.5rem',
                            textDecoration: 'none',
                            color: isActive ? '#3b82f6' : '#64748b',
                            backgroundColor: isActive ? '#eff6ff' : 'transparent',
                            fontWeight: '500',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <Icon size={20} />
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: darkMode ? '#1e293b' : '#f8fafc', 
        borderTop: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
        padding: '2rem 0'
      }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ 
                width: '1.5rem', 
                height: '1.5rem', 
                backgroundColor: '#3b82f6', 
                borderRadius: '0.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '0.875rem' }}>M</span>
              </div>
              <span style={{ 
                color: darkMode ? '#94a3b8' : '#64748b', 
                fontWeight: '500' 
              }}>
                Muhammed Fuhad C
              </span>
            </div>
            <div style={{ 
              fontSize: '0.875rem', 
              color: darkMode ? '#94a3b8' : '#64748b' 
            }}>
              © 2024 Muhammed Fuhad C. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
