import React, { useState, useEffect } from 'react'
import { X, Save, Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ContentForm = ({ 
  type, 
  data, 
  onSave, 
  onCancel, 
  editingItem = null,
  isOpen = false 
}) => {
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})

  // Initialize form data based on type and editing item
  useEffect(() => {
    if (editingItem) {
      setFormData(editingItem)
    } else {
      setFormData(getDefaultFormData(type))
    }
    setErrors({})
  }, [type, editingItem, isOpen])

  const getDefaultFormData = (contentType) => {
    const defaults = {
      home: {
        hero: {
          name: '',
          title: '',
          subtitle: '',
          description: ''
        },
        socialLinks: [],
        quickStats: [],
        coreExpertise: []
      },
      projects: {
        title: '',
        description: '',
        image: '',
        technologies: [],
        features: [],
        links: {
          code: '',
          demo: '',
          paper: '',
          app: ''
        },
        status: 'Completed',
        year: new Date().getFullYear().toString(),
        category: 'Web App',
        icon: 'Code',
        color: '#3b82f6'
      },
      publications: {
        title: '',
        authors: '',
        venue: '',
        publisher: '',
        year: new Date().getFullYear().toString(),
        type: 'Conference Paper',
        doi: '',
        pages: '',
        isbn: '',
        abstract: '',
        keywords: [],
        status: 'Published',
        impact: 'High',
        citations: 0,
        lastUpdated: new Date().toISOString(),
        icon: 'BookOpen',
        color: '#10b981',
        googleScholarId: ''
      },
      skills: {
        name: '',
        level: 'Intermediate',
        category: 'Technical',
        description: '',
        icon: 'Code',
        color: '#3b82f6'
      },
      experience: {
        company: '',
        position: '',
        duration: '',
        description: '',
        technologies: [],
        achievements: [],
        icon: 'Building',
        color: '#3b82f6'
      },
      achievements: {
        title: '',
        description: '',
        year: new Date().getFullYear().toString(),
        category: 'Academic',
        icon: 'Award',
        color: '#10b981'
      },
      about: {
        title: '',
        content: '',
        image: '',
        icon: 'User',
        color: '#3b82f6'
      },
      contact: {
        type: 'Email',
        value: '',
        icon: 'Mail',
        color: '#3b82f6'
      }
    }
    return defaults[contentType] || {}
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const handleNestedInputChange = (parentField, childField, value) => {
    setFormData(prev => ({
      ...prev,
      [parentField]: {
        ...prev[parentField],
        [childField]: value
      }
    }))
  }

  const handleArrayAdd = (field, defaultItem = {}) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field] || []), defaultItem]
    }))
  }

  const handleArrayRemove = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }))
  }

  const handleArrayItemChange = (field, index, itemField, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => 
        i === index ? { ...item, [itemField]: value } : item
      )
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    
    // Basic validation for required fields
    if (type === 'projects') {
      if (!formData.title) newErrors.title = 'Title is required'
      if (!formData.description) newErrors.description = 'Description is required'
    } else if (type === 'publications') {
      if (!formData.title) newErrors.title = 'Title is required'
      if (!formData.authors) newErrors.authors = 'Authors are required'
      if (!formData.venue) newErrors.venue = 'Venue is required'
    } else if (type === 'skills') {
      if (!formData.name) newErrors.name = 'Skill name is required'
    } else if (type === 'experience') {
      if (!formData.company) newErrors.company = 'Company is required'
      if (!formData.position) newErrors.position = 'Position is required'
    } else if (type === 'achievements') {
      if (!formData.title) newErrors.title = 'Title is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onSave(formData)
    }
  }

  const renderField = (field, label, type = 'text', required = false) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          value={formData[field] || ''}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors[field] ? 'border-red-500' : 'border-gray-300'
          }`}
          rows={4}
        />
      ) : type === 'select' ? (
        <select
          value={formData[field] || ''}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors[field] ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          {getSelectOptions(field).map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={formData[field] || ''}
          onChange={(e) => handleInputChange(field, e.target.value)}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors[field] ? 'border-red-500' : 'border-gray-300'
          }`}
        />
      )}
      {errors[field] && (
        <p className="mt-1 text-sm text-red-600">{errors[field]}</p>
      )}
    </div>
  )

  const getSelectOptions = (field) => {
    const options = {
      status: [
        { value: 'Completed', label: 'Completed' },
        { value: 'In Development', label: 'In Development' },
        { value: 'Planned', label: 'Planned' }
      ],
      category: [
        { value: 'Web App', label: 'Web App' },
        { value: 'Mobile App', label: 'Mobile App' },
        { value: 'IoT', label: 'IoT' },
        { value: 'AI/ML', label: 'AI/ML' },
        { value: 'CRM', label: 'CRM' }
      ],
      type: [
        { value: 'Conference Paper', label: 'Conference Paper' },
        { value: 'Journal Article', label: 'Journal Article' },
        { value: 'Abstract', label: 'Abstract' },
        { value: 'Research Paper', label: 'Research Paper' }
      ],
      impact: [
        { value: 'High', label: 'High' },
        { value: 'Medium', label: 'Medium' },
        { value: 'Low', label: 'Low' }
      ],
      level: [
        { value: 'Beginner', label: 'Beginner' },
        { value: 'Intermediate', label: 'Intermediate' },
        { value: 'Advanced', label: 'Advanced' },
        { value: 'Expert', label: 'Expert' }
      ]
    }
    return options[field] || []
  }

  const renderArrayField = (field, label, itemFields) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="space-y-2">
        {formData[field]?.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-md">
            {itemFields.map(itemField => (
              <input
                key={itemField}
                type="text"
                value={item[itemField] || ''}
                onChange={(e) => handleArrayItemChange(field, index, itemField, e.target.value)}
                placeholder={itemField.charAt(0).toUpperCase() + itemField.slice(1)}
                className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
              />
            ))}
            <button
              type="button"
              onClick={() => handleArrayRemove(field, index)}
              className="p-1 text-red-600 hover:text-red-800"
            >
              <Minus className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleArrayAdd(field, itemFields.reduce((acc, field) => ({ ...acc, [field]: '' }), {}))}
          className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add {label.slice(0, -1)}
        </button>
      </div>
    </div>
  )

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {editingItem ? 'Edit' : 'Add New'} {type.charAt(0).toUpperCase() + type.slice(1)}
              </h3>
              <button
                onClick={onCancel}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {type === 'projects' && (
                <>
                  {renderField('title', 'Project Title', 'text', true)}
                  {renderField('description', 'Description', 'textarea', true)}
                  {renderField('image', 'Image URL', 'url')}
                  {renderArrayField('technologies', 'Technologies', ['name'])}
                  {renderArrayField('features', 'Features', ['description'])}
                  <div className="grid grid-cols-2 gap-4">
                    {renderField('status', 'Status', 'select')}
                    {renderField('category', 'Category', 'select')}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {renderField('year', 'Year', 'text')}
                    {renderField('color', 'Color', 'color')}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Links</label>
                    <div className="grid grid-cols-2 gap-4">
                      {renderField('links.code', 'Code URL', 'url')}
                      {renderField('links.demo', 'Demo URL', 'url')}
                      {renderField('links.paper', 'Paper URL', 'url')}
                      {renderField('links.app', 'App URL', 'url')}
                    </div>
                  </div>
                </>
              )}

              {type === 'publications' && (
                <>
                  {renderField('title', 'Title', 'text', true)}
                  {renderField('authors', 'Authors', 'text', true)}
                  {renderField('venue', 'Venue', 'text', true)}
                  {renderField('publisher', 'Publisher', 'text')}
                  <div className="grid grid-cols-2 gap-4">
                    {renderField('year', 'Year', 'text')}
                    {renderField('type', 'Type', 'select')}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {renderField('doi', 'DOI', 'text')}
                    {renderField('pages', 'Pages', 'text')}
                  </div>
                  {renderField('abstract', 'Abstract', 'textarea')}
                  {renderArrayField('keywords', 'Keywords', ['keyword'])}
                  <div className="grid grid-cols-2 gap-4">
                    {renderField('status', 'Status', 'select')}
                    {renderField('impact', 'Impact', 'select')}
                  </div>
                  {renderField('citations', 'Citations', 'number')}
                </>
              )}

              {type === 'skills' && (
                <>
                  {renderField('name', 'Skill Name', 'text', true)}
                  {renderField('level', 'Level', 'select')}
                  {renderField('category', 'Category', 'text')}
                  {renderField('description', 'Description', 'textarea')}
                  {renderField('color', 'Color', 'color')}
                </>
              )}

              {type === 'experience' && (
                <>
                  {renderField('company', 'Company', 'text', true)}
                  {renderField('position', 'Position', 'text', true)}
                  {renderField('duration', 'Duration', 'text')}
                  {renderField('description', 'Description', 'textarea')}
                  {renderArrayField('technologies', 'Technologies', ['name'])}
                  {renderArrayField('achievements', 'Achievements', ['description'])}
                </>
              )}

              {type === 'achievements' && (
                <>
                  {renderField('title', 'Title', 'text', true)}
                  {renderField('description', 'Description', 'textarea')}
                  {renderField('year', 'Year', 'text')}
                  {renderField('category', 'Category', 'text')}
                  {renderField('color', 'Color', 'color')}
                </>
              )}

              <div className="flex justify-end space-x-4 pt-4 border-t">
                <button
                  type="button"
                  onClick={onCancel}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {editingItem ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ContentForm
