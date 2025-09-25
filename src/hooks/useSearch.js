import { useState, useMemo, useCallback } from 'react'

/**
 * Custom hook for search functionality
 */
export const useSearch = (data, searchFields = ['title', 'description'], options = {}) => {
  const {
    caseSensitive = false,
    exactMatch = false,
    debounceMs = 300,
    minLength = 1
  } = options

  const [searchTerm, setSearchTerm] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  // Debounced search term
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  // Debounce search term
  const debounceTimer = useMemo(() => {
    return setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
      setIsSearching(false)
    }, debounceMs)
  }, [searchTerm, debounceMs])

  // Update search term with debouncing
  const updateSearchTerm = useCallback((term) => {
    setIsSearching(true)
    setSearchTerm(term)
  }, [])

  // Search function
  const searchFunction = useCallback((item, term) => {
    if (!term || term.length < minLength) return true

    const searchValue = caseSensitive ? term : term.toLowerCase()
    
    return searchFields.some(field => {
      const fieldValue = item[field]
      if (!fieldValue) return false

      const itemValue = caseSensitive ? fieldValue : fieldValue.toLowerCase()
      
      if (exactMatch) {
        return itemValue === searchValue
      }
      
      return itemValue.includes(searchValue)
    })
  }, [searchFields, caseSensitive, exactMatch, minLength])

  // Filtered results
  const filteredData = useMemo(() => {
    if (!debouncedSearchTerm || debouncedSearchTerm.length < minLength) {
      return data
    }

    return data.filter(item => searchFunction(item, debouncedSearchTerm))
  }, [data, debouncedSearchTerm, searchFunction, minLength])

  // Search statistics
  const searchStats = useMemo(() => {
    return {
      totalItems: data.length,
      filteredItems: filteredData.length,
      searchTerm: debouncedSearchTerm,
      isSearching,
      hasResults: filteredData.length > 0,
      hasSearchTerm: debouncedSearchTerm.length >= minLength
    }
  }, [data.length, filteredData.length, debouncedSearchTerm, isSearching, minLength])

  // Clear search
  const clearSearch = useCallback(() => {
    setSearchTerm('')
    setDebouncedSearchTerm('')
    setIsSearching(false)
  }, [])

  return {
    searchTerm,
    debouncedSearchTerm,
    updateSearchTerm,
    clearSearch,
    filteredData,
    isSearching,
    searchStats
  }
}

/**
 * Custom hook for filtering functionality
 */
export const useFilters = (data, filterConfig = {}) => {
  const [activeFilters, setActiveFilters] = useState({})

  // Get unique values for each filter field
  const filterOptions = useMemo(() => {
    const options = {}
    
    Object.keys(filterConfig).forEach(field => {
      const config = filterConfig[field]
      const values = new Set()
      
      data.forEach(item => {
        const value = item[field]
        if (value !== undefined && value !== null) {
          if (Array.isArray(value)) {
            value.forEach(v => values.add(v))
          } else {
            values.add(value)
          }
        }
      })
      
      options[field] = {
        ...config,
        values: Array.from(values).sort()
      }
    })
    
    return options
  }, [data, filterConfig])

  // Apply filters
  const filteredData = useMemo(() => {
    return data.filter(item => {
      return Object.keys(activeFilters).every(field => {
        const filterValues = activeFilters[field]
        if (!filterValues || filterValues.length === 0) return true
        
        const itemValue = item[field]
        
        if (Array.isArray(itemValue)) {
          return filterValues.some(filterValue => itemValue.includes(filterValue))
        }
        
        return filterValues.includes(itemValue)
      })
    })
  }, [data, activeFilters])

  // Update filter
  const updateFilter = useCallback((field, values) => {
    setActiveFilters(prev => ({
      ...prev,
      [field]: values
    }))
  }, [])

  // Clear specific filter
  const clearFilter = useCallback((field) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev }
      delete newFilters[field]
      return newFilters
    })
  }, [])

  // Clear all filters
  const clearAllFilters = useCallback(() => {
    setActiveFilters({})
  }, [])

  // Get active filter count
  const activeFilterCount = useMemo(() => {
    return Object.values(activeFilters).reduce((count, values) => {
      return count + (values ? values.length : 0)
    }, 0)
  }, [activeFilters])

  return {
    activeFilters,
    filterOptions,
    filteredData,
    updateFilter,
    clearFilter,
    clearAllFilters,
    activeFilterCount
  }
}

/**
 * Combined search and filter hook
 */
export const useSearchAndFilter = (data, searchFields, filterConfig, options = {}) => {
  const search = useSearch(data, searchFields, options)
  const filters = useFilters(search.filteredData, filterConfig)

  return {
    ...search,
    ...filters,
    // Final filtered data (after both search and filters)
    finalData: filters.filteredData
  }
}

export default { useSearch, useFilters, useSearchAndFilter }
