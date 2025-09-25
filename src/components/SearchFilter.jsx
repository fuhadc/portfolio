import React, { useState, useRef, useEffect } from 'react'
import { Search, X, Filter, ChevronDown, Check } from 'lucide-react'
import { generateAriaLabel, generateId, keyboardNavigation } from '../utils/accessibility'

/**
 * Search input component
 */
export const SearchInput = ({ 
  value, 
  onChange, 
  placeholder = 'Search...',
  className = '',
  disabled = false,
  onClear,
  showClearButton = true
}) => {
  const inputRef = useRef(null)
  const searchId = generateId('search')

  const handleClear = () => {
    onChange('')
    onClear?.()
    inputRef.current?.focus()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClear()
    }
  }

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        ref={inputRef}
        id={searchId}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        className="block w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 dark:focus:placeholder-gray-500 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 dark:text-white"
        aria-label={generateAriaLabel.formField('Search', false, false)}
      />
      {showClearButton && value && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <button
            type="button"
            onClick={handleClear}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:text-gray-600 dark:focus:text-gray-300"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}

/**
 * Filter dropdown component
 */
export const FilterDropdown = ({ 
  label, 
  options, 
  selectedValues = [], 
  onChange, 
  multiple = true,
  placeholder = 'Select options',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const dropdownRef = useRef(null)
  const triggerRef = useRef(null)
  const filterId = generateId('filter')

  const handleToggle = () => {
    setIsOpen(!isOpen)
    setFocusedIndex(-1)
  }

  const handleOptionClick = (option) => {
    if (multiple) {
      const newValues = selectedValues.includes(option.value)
        ? selectedValues.filter(v => v !== option.value)
        : [...selectedValues, option.value]
      onChange(newValues)
    } else {
      onChange([option.value])
      setIsOpen(false)
    }
  }

  const handleKeyDown = (e) => {
    keyboardNavigation.handleArrowKeys(
      e, 
      options, 
      focusedIndex, 
      setFocusedIndex
    )

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (focusedIndex >= 0 && focusedIndex < options.length) {
        handleOptionClick(options[focusedIndex])
      } else {
        handleToggle()
      }
    }

    if (e.key === 'Escape') {
      setIsOpen(false)
      triggerRef.current?.focus()
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const displayText = selectedValues.length === 0 
    ? placeholder
    : selectedValues.length === 1
    ? options.find(opt => opt.value === selectedValues[0])?.label || selectedValues[0]
    : `${selectedValues.length} selected`

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        ref={triggerRef}
        type="button"
        onClick={handleToggle}
        onKeyDown={(e) => keyboardNavigation.handleActivation(e, handleToggle)}
        className="relative w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={`${filterId}-label`}
      >
        <span className="block truncate text-gray-900 dark:text-white">
          {displayText}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ChevronDown 
            className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            aria-hidden="true" 
          />
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none">
          {options.map((option, index) => {
            const isSelected = selectedValues.includes(option.value)
            const isFocused = index === focusedIndex
            
            return (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option)}
                onKeyDown={handleKeyDown}
                className={`relative py-2 pl-3 pr-9 cursor-pointer select-none ${
                  isFocused ? 'bg-primary-50 dark:bg-primary-900' : ''
                } ${isSelected ? 'bg-primary-100 dark:bg-primary-800' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                role="option"
                aria-selected={isSelected}
                tabIndex={-1}
              >
                <span className={`block truncate ${isSelected ? 'font-medium' : 'font-normal'} text-gray-900 dark:text-white`}>
                  {option.label}
                </span>
                {isSelected && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary-600 dark:text-primary-400">
                    <Check className="h-5 w-5" aria-hidden="true" />
                  </span>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

/**
 * Combined search and filter component
 */
export const SearchFilter = ({ 
  searchValue,
  onSearchChange,
  searchPlaceholder = 'Search...',
  filters = [],
  onFilterChange,
  resultsCount,
  totalCount,
  className = '',
  showResultsCount = true
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Search Input */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <SearchInput
            value={searchValue}
            onChange={onSearchChange}
            placeholder={searchPlaceholder}
          />
        </div>
        
        {/* Filter Dropdowns */}
        {filters.map((filter, index) => (
          <div key={filter.key} className="w-full sm:w-48">
            <FilterDropdown
              label={filter.label}
              options={filter.options}
              selectedValues={filter.selectedValues || []}
              onChange={(values) => onFilterChange(filter.key, values)}
              placeholder={filter.placeholder}
            />
          </div>
        ))}
      </div>

      {/* Results Count */}
      {showResultsCount && (
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {resultsCount !== undefined && totalCount !== undefined ? (
            <>
              Showing {resultsCount} of {totalCount} results
              {resultsCount !== totalCount && (
                <span className="text-gray-500 ml-1">
                  ({totalCount - resultsCount} hidden by filters)
                </span>
              )}
            </>
          ) : (
            `${resultsCount || 0} results`
          )}
        </div>
      )}
    </div>
  )
}

/**
 * Quick filter chips component
 */
export const FilterChips = ({ 
  filters, 
  onRemoveFilter, 
  onClearAll,
  className = ''
}) => {
  const hasFilters = filters.some(filter => 
    filter.selectedValues && filter.selectedValues.length > 0
  )

  if (!hasFilters) return null

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {filters.map(filter => 
        filter.selectedValues?.map(value => {
          const option = filter.options.find(opt => opt.value === value)
          return (
            <span
              key={`${filter.key}-${value}`}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
            >
              <span className="mr-1">{filter.label}:</span>
              {option?.label || value}
              <button
                onClick={() => onRemoveFilter(filter.key, value)}
                className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-primary-200 dark:hover:bg-primary-800 focus:outline-none"
                aria-label={`Remove ${option?.label || value} filter`}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )
        })
      )}
      
      {onClearAll && (
        <button
          onClick={onClearAll}
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 focus:outline-none"
        >
          Clear all
        </button>
      )}
    </div>
  )
}

export default {
  SearchInput,
  FilterDropdown,
  SearchFilter,
  FilterChips
}
