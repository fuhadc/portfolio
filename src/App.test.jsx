import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import App from './App'

// Mock the hooks and components
vi.mock('./hooks/useAnalytics', () => ({
  useAnalytics: vi.fn()
}))

vi.mock('./components/SinglePageLayout', () => ({
  default: ({ children }) => <div data-testid="single-page-layout">{children}</div>
}))

vi.mock('./components/ScrollToTop', () => ({
  default: () => <div data-testid="scroll-to-top" />
}))

vi.mock('./components/ErrorBoundary', () => ({
  default: ({ children }) => <div data-testid="error-boundary">{children}</div>
}))

// Mock all page components
vi.mock('./pages/Home', () => ({
  default: () => <div data-testid="home-page">Home Page</div>
}))

vi.mock('./pages/About', () => ({
  default: () => <div data-testid="about-page">About Page</div>
}))

vi.mock('./pages/Experience', () => ({
  default: () => <div data-testid="experience-page">Experience Page</div>
}))

vi.mock('./pages/Publications', () => ({
  default: () => <div data-testid="publications-page">Publications Page</div>
}))

vi.mock('./pages/Projects', () => ({
  default: () => <div data-testid="projects-page">Projects Page</div>
}))

vi.mock('./pages/Skills', () => ({
  default: () => <div data-testid="skills-page">Skills Page</div>
}))

vi.mock('./pages/Achievements', () => ({
  default: () => <div data-testid="achievements-page">Achievements Page</div>
}))

vi.mock('./pages/Contact', () => ({
  default: () => <div data-testid="contact-page">Contact Page</div>
}))

vi.mock('./pages/Social', () => ({
  default: () => <div data-testid="social-page">Social Page</div>
}))

describe('App Component', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
  })

  it('renders without crashing', () => {
    render(<App />)
    
    expect(screen.getByTestId('single-page-layout')).toBeInTheDocument()
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument()
    expect(screen.getByTestId('scroll-to-top')).toBeInTheDocument()
  })

  it('renders all page components', () => {
    render(<App />)
    
    expect(screen.getByTestId('home-page')).toBeInTheDocument()
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
    expect(screen.getByTestId('experience-page')).toBeInTheDocument()
    expect(screen.getByTestId('publications-page')).toBeInTheDocument()
    expect(screen.getByTestId('projects-page')).toBeInTheDocument()
    expect(screen.getByTestId('skills-page')).toBeInTheDocument()
    expect(screen.getByTestId('achievements-page')).toBeInTheDocument()
    expect(screen.getByTestId('contact-page')).toBeInTheDocument()
    expect(screen.getByTestId('social-page')).toBeInTheDocument()
  })

  it('initializes with light mode by default', () => {
    render(<App />)
    
    // Check that dark class is not applied initially
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('saves dark mode preference to localStorage', () => {
    render(<App />)
    
    // Should call setItem with dark mode preference
    expect(localStorage.setItem).toHaveBeenCalledWith('darkMode', 'false')
  })

  it('applies dark mode from localStorage', () => {
    localStorage.getItem.mockReturnValue('true')
    
    render(<App />)
    
    expect(localStorage.getItem).toHaveBeenCalledWith('darkMode')
    expect(localStorage.setItem).toHaveBeenCalledWith('darkMode', 'true')
  })
})
