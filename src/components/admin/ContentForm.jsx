import React, { useState, useEffect } from 'react'
import { X, Save, Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { adminConfig } from '../../config/admin'
import { getDefaultFormData, validateFormData } from '../../utils/adminUtils'

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
      setFormData(getDefaultFormData(type, adminConfig))
    }
    setErrors({})
  }, [type, editingItem, isOpen])


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
    const newErrors = validateFormData(formData, type, adminConfig)
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onSave(formData)
    }
  }

  const handleImageUpload = (field, file) => {
    if (file) {
      console.log('Uploading image for field:', field, 'File:', file.name, 'Size:', file.size)
      const reader = new FileReader()
      reader.onload = (e) => {
        console.log('Image uploaded successfully, data URL length:', e.target.result.length)
        handleInputChange(field, e.target.result)
      }
      reader.onerror = (error) => {
        console.error('Error reading file:', error)
      }
      reader.readAsDataURL(file)
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
      ) : type === 'image' ? (
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(field, e.target.files[0])}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors[field] ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {formData[field] && formData[field].trim() !== '' && (
            <div className="mt-3">
              <div className="relative inline-block">
                <img 
                  src={formData[field]} 
                  alt="Preview" 
                  className="w-32 h-32 object-cover rounded-md border shadow-sm"
                />
                <div className="absolute top-1 right-1">
                  <button
                    type="button"
                    onClick={() => handleInputChange(field, '')}
                    className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                    title="Remove image"
                  >
                    ×
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1">Image preview - Click × to remove</p>
            </div>
          )}
        </div>
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
    return adminConfig.formOptions[field] || []
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
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4"
        style={{ top: '64px' }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[calc(100vh-120px)] flex flex-col"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50 rounded-t-xl">
            <h3 className="text-xl font-semibold text-gray-900">
              {editingItem ? 'Edit' : 'Add New'} {type.charAt(0).toUpperCase() + type.slice(1)}
            </h3>
            <button
              onClick={onCancel}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Modal Body - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <form id="content-form" onSubmit={handleSubmit} className="p-6 space-y-6">
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
                  {renderField('image', 'Achievement Image', 'image')}
                </>
              )}

              {type === 'certifications' && (
                <>
                  {renderField('name', 'Certification Name', 'text', true)}
                  {renderField('authority', 'Authority/Issuer', 'text', true)}
                  {renderField('url', 'Certificate URL', 'url')}
                  {renderField('licenseNumber', 'License Number', 'text')}
                  <div className="grid grid-cols-2 gap-4">
                    {renderField('startedOn', 'Started On', 'text')}
                    {renderField('finishedOn', 'Finished On', 'text')}
                  </div>
                  {renderField('image', 'Certificate Image', 'image')}
                </>
              )}

            </form>
          </div>

          {/* Modal Footer */}
          <div className="flex justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="content-form"
              className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Save className="h-4 w-4 mr-2" />
              {editingItem ? 'Update' : 'Create'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ContentForm
