import { useEffect, useState } from 'react'

/**
 * Custom hook for monitoring performance metrics
 * @returns {Object} - Performance metrics
 */
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    memoryUsage: 0
  })

  useEffect(() => {
    // Monitor Core Web Vitals
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0]
        
        if (navigation) {
          setMetrics(prev => ({
            ...prev,
            loadTime: navigation.loadEventEnd - navigation.loadEventStart
          }))
        }

        // First Contentful Paint
        const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0]
        if (fcpEntry) {
          setMetrics(prev => ({
            ...prev,
            firstContentfulPaint: fcpEntry.startTime
          }))
        }

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          const lastEntry = entries[entries.length - 1]
          setMetrics(prev => ({
            ...prev,
            largestContentfulPaint: lastEntry.startTime
          }))
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // First Input Delay
        const fidObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          entries.forEach((entry) => {
            setMetrics(prev => ({
              ...prev,
              firstInputDelay: entry.processingStart - entry.startTime
            }))
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // Cumulative Layout Shift
        let clsValue = 0
        const clsObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          }
          setMetrics(prev => ({
            ...prev,
            cumulativeLayoutShift: clsValue
          }))
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

        // Memory usage (if available)
        if ('memory' in performance) {
          const updateMemoryUsage = () => {
            setMetrics(prev => ({
              ...prev,
              memoryUsage: performance.memory.usedJSHeapSize
            }))
          }
          
          updateMemoryUsage()
          const memoryInterval = setInterval(updateMemoryUsage, 5000)
          
          return () => {
            clearInterval(memoryInterval)
            lcpObserver.disconnect()
            fidObserver.disconnect()
            clsObserver.disconnect()
          }
        }

        return () => {
          lcpObserver.disconnect()
          fidObserver.disconnect()
          clsObserver.disconnect()
        }
      }
    }

    const cleanup = measurePerformance()
    return cleanup
  }, [])

  // Performance scoring based on Core Web Vitals thresholds
  const getPerformanceScore = () => {
    const scores = {
      fcp: metrics.firstContentfulPaint <= 1800 ? 'good' : 
           metrics.firstContentfulPaint <= 3000 ? 'needs-improvement' : 'poor',
      lcp: metrics.largestContentfulPaint <= 2500 ? 'good' : 
           metrics.largestContentfulPaint <= 4000 ? 'needs-improvement' : 'poor',
      fid: metrics.firstInputDelay <= 100 ? 'good' : 
           metrics.firstInputDelay <= 300 ? 'needs-improvement' : 'poor',
      cls: metrics.cumulativeLayoutShift <= 0.1 ? 'good' : 
           metrics.cumulativeLayoutShift <= 0.25 ? 'needs-improvement' : 'poor'
    }

    const goodCount = Object.values(scores).filter(score => score === 'good').length
    const totalCount = Object.keys(scores).length
    
    return {
      overall: goodCount / totalCount,
      scores,
      grade: goodCount === totalCount ? 'A' : 
             goodCount >= totalCount * 0.75 ? 'B' :
             goodCount >= totalCount * 0.5 ? 'C' : 'D'
    }
  }

  return {
    metrics,
    getPerformanceScore,
    isGoodPerformance: getPerformanceScore().overall >= 0.75
  }
}

export default usePerformanceMonitor

