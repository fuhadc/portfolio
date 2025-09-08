import React from 'react'
import { Plus, Download, RefreshCw } from 'lucide-react'
import { useAdmin } from '../../contexts/AdminContext'
import { adminConfig } from '../../config/admin'
import { generateTableColumns, getTableData, exportToJSON } from '../../utils/adminUtils'
import DataTable from './DataTable'
import ContentForm from './ContentForm'

const ContentManagement = () => {
  const { 
    activeTab, 
    data, 
    editingItem, 
    showAddForm, 
    setShowAddForm, 
    setEditingItem, 
    setEditingType,
    addItem,
    editItem,
    deleteItem
  } = useAdmin()

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'home', label: 'Home Content' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleEdit = (item, index) => {
    setEditingItem(item)
    setEditingType(activeTab)
  }

  const handleDelete = (item, index) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteItem(activeTab, index)
    }
  }

  const handleSave = (formData) => {
    if (editingItem) {
      const index = data[activeTab][Object.keys(data[activeTab])[0]].findIndex(item => item === editingItem)
      editItem(activeTab, index, formData)
    } else {
      addItem(activeTab, formData)
    }
  }

  const handleCancel = () => {
    setShowAddForm(false)
    setEditingItem(null)
  }

  const exportData = (tab) => {
    const tabData = data[tab]
    const dataToExport = tabData[Object.keys(tabData)[0]]
    exportToJSON(dataToExport, `${tab}_data`)
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Manage {sidebarItems.find(item => item.id === activeTab)?.label}
            </h2>
            <p className="text-gray-600 mt-1">
              Add, edit, or delete {sidebarItems.find(item => item.id === activeTab)?.label.toLowerCase()} items
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => window.location.reload()}
              className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              title="Refresh Data"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </button>
            <button
              onClick={() => exportData(activeTab)}
              className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              title="Export Data"
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add New
            </button>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <DataTable
          data={getTableData(data, activeTab)}
          columns={generateTableColumns(activeTab, adminConfig)}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={(item, index) => {
            console.log('View item:', item)
          }}
          searchable={true}
          filterable={true}
          sortable={true}
          pagination={true}
          itemsPerPage={adminConfig.ui.itemsPerPage}
        />
      </div>

      {/* Content Form Modal */}
      <ContentForm
        type={activeTab}
        data={data[activeTab]}
        onSave={handleSave}
        onCancel={handleCancel}
        editingItem={editingItem}
        isOpen={showAddForm || !!editingItem}
      />
    </div>
  )
}

export default ContentManagement
