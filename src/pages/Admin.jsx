import React, { useState, useEffect } from 'react'
import { 
  Settings, 
  Users, 
  FileText, 
  Code, 
  Award, 
  BookOpen, 
  BarChart3, 
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Eye,
  EyeOff,
  LogOut,
  Home,
  Menu,
  X as CloseIcon,
  Download,
  Upload,
  RefreshCw
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO'
import DataTable from '../components/admin/DataTable'
import ContentForm from '../components/admin/ContentForm'
import AdminDashboard from '../components/admin/AdminDashboard'

// Import data files
import homeData from '../data/home.json'
import projectsData from '../data/projects.json'
import publicationsData from '../data/publications.json'
import skillsData from '../data/skills.json'
import experienceData from '../data/experience.json'
import achievementsData from '../data/achievements.json'
import aboutData from '../data/about.json'
import contactData from '../data/contact.json'

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [data, setData] = useState({
    home: homeData,
    projects: projectsData,
    publications: publicationsData,
    skills: skillsData,
    experience: experienceData,
    achievements: achievementsData,
    about: aboutData,
    contact: contactData
  })
  const [editingItem, setEditingItem] = useState(null)
  const [editingType, setEditingType] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)

  // Simple authentication (in production, use proper auth)
  const handleLogin = (e) => {
    e.preventDefault()
    if (password === 'admin123') {
      setIsAuthenticated(true)
      setPassword('')
    } else {
      alert('Invalid password')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setPassword('')
  }

  // Save data to localStorage (in production, save to backend)
  const saveData = (type, newData) => {
    const updatedData = { ...data, [type]: newData }
    setData(updatedData)
    localStorage.setItem(`portfolio_${type}`, JSON.stringify(newData))
  }

  // Add new item
  const handleAddItem = (type, newItem) => {
    const currentData = data[type]
    const updatedData = {
      ...currentData,
      [Object.keys(currentData)[0]]: [...currentData[Object.keys(currentData)[0]], newItem]
    }
    saveData(type, updatedData)
    setShowAddForm(false)
  }

  // Edit item
  const handleEditItem = (type, index, updatedItem) => {
    const currentData = data[type]
    const updatedArray = [...currentData[Object.keys(currentData)[0]]]
    updatedArray[index] = updatedItem
    const updatedData = {
      ...currentData,
      [Object.keys(currentData)[0]]: updatedArray
    }
    saveData(type, updatedData)
    setEditingItem(null)
  }

  // Delete item
  const handleDeleteItem = (type, index) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      const currentData = data[type]
      const updatedArray = [...currentData[Object.keys(currentData)[0]]]
      updatedArray.splice(index, 1)
      const updatedData = {
        ...currentData,
        [Object.keys(currentData)[0]]: updatedArray
      }
      saveData(type, updatedData)
    }
  }

  // Load data from localStorage on mount
  useEffect(() => {
    const loadData = () => {
      const loadedData = {}
      Object.keys(data).forEach(key => {
        const saved = localStorage.getItem(`portfolio_${key}`)
        if (saved) {
          loadedData[key] = JSON.parse(saved)
        }
      })
      if (Object.keys(loadedData).length > 0) {
        setData(prev => ({ ...prev, ...loadedData }))
      }
    }
    loadData()
  }, [])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <SEO 
          title="Admin Panel - Portfolio Management"
          description="Secure admin panel for managing portfolio content"
          keywords="admin, portfolio, management, content"
          url="/admin"
        />
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <Settings className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-gray-600">Enter password to access portfolio management</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter admin password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-500">
            Demo password: admin123
          </div>
        </div>
      </div>
    )
  }

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'home', label: 'Home Content', icon: Home },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'publications', label: 'Publications', icon: BookOpen },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'experience', label: 'Experience', icon: FileText },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'about', label: 'About', icon: Users },
    { id: 'contact', label: 'Contact', icon: Users }
  ]

  const getStats = () => {
    return {
      projects: data.projects.projects?.length || 0,
      publications: data.publications.publications?.length || 0,
      skills: data.skills.skills?.length || 0,
      experience: data.experience.experience?.length || 0
    }
  }

  const stats = getStats()

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Admin Panel - Portfolio Management"
        description="Secure admin panel for managing portfolio content"
        keywords="admin, portfolio, management, content"
        url="/admin"
      />
      
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-xl font-semibold text-gray-900 ml-2">Portfolio Admin</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-500 hover:text-gray-700"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence>
          {(sidebarOpen || window.innerWidth >= 1024) && (
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg lg:shadow-none"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 lg:hidden">
                  <h2 className="text-lg font-semibold">Menu</h2>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-2 rounded-md text-gray-400 hover:text-gray-500"
                  >
                    <CloseIcon className="h-5 w-5" />
                  </button>
                </div>
                <nav className="flex-1 px-4 py-4 space-y-2">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id)
                          setSidebarOpen(false)
                        }}
                        className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          activeTab === item.id
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }`}
                      >
                        <Icon className="h-5 w-5 mr-3" />
                        {item.label}
                      </button>
                    )
                  })}
                </nav>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'dashboard' && (
            <AdminDashboard 
              data={data} 
              onNavigate={(tab) => setActiveTab(tab)}
            />
          )}

          {/* Content Management Sections */}
          {activeTab !== 'dashboard' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  Manage {sidebarItems.find(item => item.id === activeTab)?.label}
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => window.location.reload()}
                    className="flex items-center px-3 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    title="Refresh Data"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh
                  </button>
                  <button
                    onClick={() => exportData(activeTab)}
                    className="flex items-center px-3 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    title="Export Data"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </button>
                  <button
                    onClick={() => setShowAddForm(true)}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    Add New
                  </button>
                </div>
              </div>

              {/* Data Table */}
              <DataTable
                data={getTableData(activeTab)}
                columns={getTableColumns(activeTab)}
                onEdit={(item, index) => {
                  setEditingItem(item)
                  setEditingType(activeTab)
                }}
                onDelete={(item, index) => handleDeleteItem(activeTab, index)}
                onView={(item, index) => {
                  // View functionality can be implemented here
                  console.log('View item:', item)
                }}
                searchable={true}
                filterable={true}
                sortable={true}
                pagination={true}
                itemsPerPage={10}
              />
            </div>
          )}
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Content Form Modal */}
      <ContentForm
        type={activeTab}
        data={data[activeTab]}
        onSave={(formData) => {
          if (editingItem) {
            const index = data[activeTab][Object.keys(data[activeTab])[0]].findIndex(item => item === editingItem)
            handleEditItem(activeTab, index, formData)
          } else {
            handleAddItem(activeTab, formData)
          }
        }}
        onCancel={() => {
          setShowAddForm(false)
          setEditingItem(null)
        }}
        editingItem={editingItem}
        isOpen={showAddForm || editingItem}
      />
    </div>
  )

  // Helper functions
  function getTableData(tab) {
    if (!data[tab]) return []
    const tabData = data[tab]
    const firstKey = Object.keys(tabData)[0]
    return Array.isArray(tabData[firstKey]) ? tabData[firstKey] : []
  }

  function getTableColumns(tab) {
    const columnConfigs = {
      projects: [
        { key: 'title', title: 'Title', type: 'text' },
        { key: 'description', title: 'Description', type: 'text' },
        { key: 'category', title: 'Category', type: 'text' },
        { key: 'status', title: 'Status', type: 'status' },
        { key: 'year', title: 'Year', type: 'text' },
        { key: 'technologies', title: 'Technologies', type: 'array' },
        { key: 'links', title: 'Links', type: 'links' }
      ],
      publications: [
        { key: 'title', title: 'Title', type: 'text' },
        { key: 'authors', title: 'Authors', type: 'text' },
        { key: 'venue', title: 'Venue', type: 'text' },
        { key: 'year', title: 'Year', type: 'text' },
        { key: 'type', title: 'Type', type: 'text' },
        { key: 'status', title: 'Status', type: 'status' },
        { key: 'citations', title: 'Citations', type: 'number' }
      ],
      skills: [
        { key: 'name', title: 'Skill Name', type: 'text' },
        { key: 'level', title: 'Level', type: 'text' },
        { key: 'category', title: 'Category', type: 'text' },
        { key: 'description', title: 'Description', type: 'text' }
      ],
      experience: [
        { key: 'company', title: 'Company', type: 'text' },
        { key: 'position', title: 'Position', type: 'text' },
        { key: 'duration', title: 'Duration', type: 'text' },
        { key: 'description', title: 'Description', type: 'text' },
        { key: 'technologies', title: 'Technologies', type: 'array' }
      ],
      achievements: [
        { key: 'title', title: 'Title', type: 'text' },
        { key: 'description', title: 'Description', type: 'text' },
        { key: 'year', title: 'Year', type: 'text' },
        { key: 'category', title: 'Category', type: 'text' }
      ],
      about: [
        { key: 'title', title: 'Title', type: 'text' },
        { key: 'content', title: 'Content', type: 'text' }
      ],
      contact: [
        { key: 'type', title: 'Type', type: 'text' },
        { key: 'value', title: 'Value', type: 'text' }
      ]
    }
    return columnConfigs[tab] || []
  }

  function exportData(tab) {
    const tabData = data[tab]
    const dataToExport = tabData[Object.keys(tabData)[0]]
    
    const dataStr = JSON.stringify(dataToExport, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = `${tab}_data.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }
}

export default Admin
