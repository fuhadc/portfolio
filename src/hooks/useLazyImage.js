import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook for lazy loading images with intersection observer
 * @param {string} src - Image source URL
 * @param {Object} options - Intersection observer options
 * @returns {Object} - { ref, src, loaded, error }
 */
export const useLazyImage = (src, options = {}) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const [imageSrc, setImageSrc] = useState(null)
  const imgRef = useRef(null)

  const {
    root = null,
    rootMargin = '50px',
    threshold = 0.1,
    ...observerOptions
  } = options

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root,
        rootMargin,
        threshold,
        ...observerOptions
      }
    )

    const currentRef = imgRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [src, root, rootMargin, threshold, observerOptions])

  const handleLoad = () => {
    setLoaded(true)
    setError(false)
  }

  const handleError = () => {
    setError(true)
    setLoaded(false)
  }

  return {
    ref: imgRef,
    src: imageSrc,
    loaded,
    error,
    onLoad: handleLoad,
    onError: handleError
  }
}

/**
 * LazyImage component for optimized image loading
 */
export const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = null,
  errorFallback = null,
  ...props 
}) => {
  const { ref, src: imageSrc, loaded, error, onLoad, onError } = useLazyImage(src)

  return (
    <div ref={ref} className={`relative ${className}`}>
      {!imageSrc && placeholder && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded">
          {placeholder}
        </div>
      )}
      
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          onLoad={onLoad}
          onError={onError}
          className={`transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${error ? 'hidden' : ''}`}
          {...props}
        />
      )}
      
      {error && errorFallback && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded">
          {errorFallback}
        </div>
      )}
      
      {error && !errorFallback && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded text-gray-500">
          <span className="text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  )
}

export default useLazyImage
