import '@testing-library/jest-dom'

// Mock Framer Motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    section: 'section',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p: 'p',
    span: 'span',
    button: 'button',
    a: 'a',
    img: 'img',
    ul: 'ul',
    li: 'li',
    nav: 'nav',
    main: 'main',
    header: 'header',
    footer: 'footer',
    article: 'article',
    aside: 'aside'
  },
  AnimatePresence: ({ children }) => children,
  useAnimation: () => ({
    start: jest.fn(),
    stop: jest.fn(),
    set: jest.fn()
  }),
  useInView: () => true
}))

// Mock EmailJS
jest.mock('@emailjs/browser', () => ({
  send: jest.fn().mockResolvedValue({ status: 200 }),
  init: jest.fn()
}))

// Mock Vercel Speed Insights
jest.mock('@vercel/speed-insights/react', () => ({
  SpeedInsights: () => null
}))

// Mock Google Analytics
global.gtag = jest.fn()

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
global.localStorage = localStorageMock

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {
    return null
  }
  disconnect() {
    return null
  }
  unobserve() {
    return null
  }
}

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  observe() {
    return null
  }
  disconnect() {
    return null
  }
  unobserve() {
    return null
  }
}




