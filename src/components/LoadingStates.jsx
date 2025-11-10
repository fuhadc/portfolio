import React from 'react'
import { Loader2, AlertCircle, Wifi, WifiOff, RefreshCw } from 'lucide-react'

/**
 * Loading spinner component
 */
export const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Loader2 className={`animate-spin ${sizeClasses[size]} text-primary-500`} />
    </div>
  )
}

/**
 * Skeleton loading component
 */
export const SkeletonLoader = ({ 
  lines = 3, 
  className = '',
  showAvatar = false,
  showButton = false 
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {showAvatar && (
        <div className="flex items-center space-x-4 mb-4">
          <div className="rounded-full bg-gray-300 h-12 w-12"></div>
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      )}
      
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, index) => (
          <div 
            key={index}
            className={`h-4 bg-gray-300 rounded ${
              index === lines - 1 ? 'w-3/4' : 'w-full'
            }`}
          ></div>
        ))}
      </div>
      
      {showButton && (
        <div className="mt-4">
          <div className="h-10 bg-gray-300 rounded w-24"></div>
        </div>
      )}
    </div>
  )
}

/**
 * Card skeleton loader
 */
export const CardSkeleton = ({ className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 ${className}`}>
      <div className="animate-pulse">
        <div className="flex items-center space-x-4 mb-4">
          <div className="rounded-full bg-gray-300 dark:bg-gray-600 h-12 w-12"></div>
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/6"></div>
        </div>
        
        <div className="flex justify-between items-center mt-6">
          <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-20"></div>
          <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
        </div>
      </div>
    </div>
  )
}

/**
 * Error state component
 */
export const ErrorState = ({ 
  error, 
  onRetry, 
  title = 'Something went wrong',
  description = 'An error occurred while loading the content.',
  showRetry = true,
  className = ''
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center ${className}`}>
      <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
        {description}
      </p>
      {import.meta.env.DEV && error && (
        <details className="mb-4 text-left">
          <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
            Error Details
          </summary>
          <pre className="text-xs mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded overflow-auto">
            {error.message || error}
          </pre>
        </details>
      )}
      {showRetry && onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Try Again
        </button>
      )}
    </div>
  )
}

/**
 * Empty state component
 */
export const EmptyState = ({ 
  icon: Icon = AlertCircle,
  title = 'No data available',
  description = 'There is no content to display at the moment.',
  action = null,
  className = ''
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center ${className}`}>
      <Icon className="h-12 w-12 text-gray-400 mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
        {description}
      </p>
      {action}
    </div>
  )
}

/**
 * Network status indicator
 */
export const NetworkStatus = ({ isOnline, className = '' }) => {
  if (isOnline) {
    return (
      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 ${className}`}>
        <Wifi className="h-3 w-3 mr-1" />
        Online
      </div>
    )
  }

  return (
    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 ${className}`}>
      <WifiOff className="h-3 w-3 mr-1" />
      Offline
    </div>
  )
}

/**
 * Progress bar component
 */
export const ProgressBar = ({ 
  progress, 
  label = '', 
  showPercentage = true,
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  }

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </span>
          {showPercentage && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {Math.round(progress)}%
            </span>
          )}
        </div>
      )}
      <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className="h-full bg-primary-600 transition-all duration-300 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </div>
  )
}

/**
 * Loading overlay component
 */
export const LoadingOverlay = ({ 
  isLoading, 
  children, 
  message = 'Loading...',
  className = ''
}) => {
  return (
    <div className={`relative ${className}`}>
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-10">
          <div className="flex flex-col items-center">
            <LoadingSpinner size="lg" />
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {message}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default {
  LoadingSpinner,
  SkeletonLoader,
  CardSkeleton,
  ErrorState,
  EmptyState,
  NetworkStatus,
  ProgressBar,
  LoadingOverlay
}

