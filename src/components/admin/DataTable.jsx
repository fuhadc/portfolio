import React, { useState, useMemo } from 'react'
import { 
  Edit, 
  Trash2, 
  Eye, 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronUp,
  MoreVertical,
  ExternalLink
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const DataTable = ({ 
  data, 
  columns, 
  onEdit, 
  onDelete, 
  onView,
  searchable = true,
  filterable = true,
  sortable = true,
  pagination = true,
  itemsPerPage = 10
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortField, setSortField] = useState('')
  const [sortDirection, setSortDirection] = useState('asc')
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState({})
  const [showFilters, setShowFilters] = useState(false)

  // Filter and search data
  const filteredData = useMemo(() => {
    let filtered = data || []

    // Apply search
    if (searchTerm && searchable) {
      filtered = filtered.filter(item =>
        Object.values(item).some(value =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }

    // Apply filters
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        filtered = filtered.filter(item => {
          const itemValue = item[key]
          if (Array.isArray(itemValue)) {
            return itemValue.some(v => 
              String(v).toLowerCase().includes(value.toLowerCase())
            )
          }
          return String(itemValue).toLowerCase().includes(value.toLowerCase())
        })
      }
    })

    return filtered
  }, [data, searchTerm, filters, searchable])

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortField || !sortable) return filteredData

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortField]
      const bValue = b[sortField]

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
      return 0
    })
  }, [filteredData, sortField, sortDirection, sortable])

  // Paginate data
  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return sortedData.slice(startIndex, endIndex)
  }, [sortedData, currentPage, itemsPerPage, pagination])

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const handleSort = (field) => {
    if (!sortable) return

    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }))
    setCurrentPage(1)
  }

  const clearFilters = () => {
    setFilters({})
    setSearchTerm('')
    setCurrentPage(1)
  }

  const getFilterOptions = (field) => {
    const values = [...new Set(data?.map(item => item[field]).filter(Boolean))]
    return values.sort()
  }

  const renderCellContent = (item, column) => {
    const value = item[column.key]

    if (column.render) {
      return column.render(value, item)
    }

    if (column.type === 'array' && Array.isArray(value)) {
      return (
        <div className="flex flex-wrap gap-1">
          {value.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800"
            >
              {typeof item === 'object' ? item.name || item.description : item}
            </span>
          ))}
          {value.length > 3 && (
            <span className="text-xs text-gray-500">+{value.length - 3} more</span>
          )}
        </div>
      )
    }

    if (column.type === 'status') {
      const statusColors = {
        'Completed': 'bg-green-100 text-green-800',
        'Published': 'bg-green-100 text-green-800',
        'In Development': 'bg-yellow-100 text-yellow-800',
        'Submitted': 'bg-yellow-100 text-yellow-800',
        'Planned': 'bg-gray-100 text-gray-800',
        'Presented': 'bg-blue-100 text-blue-800'
      }
      
      return (
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
          statusColors[value] || 'bg-gray-100 text-gray-800'
        }`}>
          {value || 'Active'}
        </span>
      )
    }

    if (column.type === 'links' && typeof value === 'object') {
      return (
        <div className="flex space-x-2">
          {Object.entries(value).map(([key, url]) => (
            url && (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
                title={key}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )
          ))}
        </div>
      )
    }

    if (column.type === 'date') {
      return new Date(value).toLocaleDateString()
    }

    if (column.type === 'number') {
      return value?.toLocaleString()
    }

    if (column.type === 'text' && value && value.length > 50) {
      return (
        <span title={value}>
          {value.substring(0, 50)}...
        </span>
      )
    }

    return value || '-'
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Header with search and filters */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex-1 max-w-lg">
            {searchable && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            {filterable && (
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-3 py-2 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                {Object.values(filters).some(Boolean) && (
                  <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                    {Object.values(filters).filter(Boolean).length}
                  </span>
                )}
              </button>
            )}
            
            {(searchTerm || Object.values(filters).some(Boolean)) && (
              <button
                onClick={clearFilters}
                className="px-3 py-2 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <AnimatePresence>
          {showFilters && filterable && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4 pt-4 border-t border-gray-200"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {columns
                  .filter(col => col.filterable !== false)
                  .map(column => (
                    <div key={column.key}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {column.title}
                      </label>
                      <select
                        value={filters[column.key] || ''}
                        onChange={(e) => handleFilterChange(column.key, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">All {column.title}</option>
                        {getFilterOptions(column.key).map(option => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                    sortable && column.sortable !== false ? 'cursor-pointer hover:bg-gray-100' : ''
                  }`}
                  onClick={() => column.sortable !== false && handleSort(column.key)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.title}</span>
                    {sortable && column.sortable !== false && sortField === column.key && (
                      sortDirection === 'asc' ? 
                        <ChevronUp className="h-4 w-4" /> : 
                        <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </th>
              ))}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <AnimatePresence>
              {paginatedData.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="hover:bg-gray-50"
                >
                  {columns.map((column) => (
                    <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {renderCellContent(item, column)}
                    </td>
                  ))}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      {onView && (
                        <button
                          onClick={() => onView(item, index)}
                          className="text-blue-600 hover:text-blue-900"
                          title="View"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                      )}
                      {onEdit && (
                        <button
                          onClick={() => onEdit(item, index)}
                          className="text-indigo-600 hover:text-indigo-900"
                          title="Edit"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(item, index)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && totalPages > 1 && (
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} results
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 text-sm rounded-md ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Empty state */}
      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500">
            {searchTerm || Object.values(filters).some(Boolean) 
              ? 'No results found for your search criteria'
              : 'No data available'
            }
          </div>
        </div>
      )}
    </div>
  )
}

export default DataTable
