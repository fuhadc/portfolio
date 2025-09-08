import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BarChart3, 
  Home, 
  Code, 
  BookOpen, 
  Award, 
  FileText, 
  Users, 
  GraduationCap,
  X as CloseIcon
} from 'lucide-react'
import { useAdmin } from '../../contexts/AdminContext'

const AdminSidebar = () => {
  const { 
    activeTab, 
    setActiveTab, 
    sidebarOpen, 
    setSidebarOpen 
  } = useAdmin()

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'home', label: 'Home Content', icon: Home },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'publications', label: 'Publications', icon: BookOpen },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'experience', label: 'Experience', icon: FileText },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'certifications', label: 'Certifications', icon: GraduationCap },
    { id: 'about', label: 'About', icon: Users },
    { id: 'contact', label: 'Contact', icon: Users }
  ]

  return (
    <AnimatePresence>
      {(sidebarOpen || window.innerWidth >= 1024) && (
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          className="fixed lg:static top-16 bottom-0 left-0 z-50 w-64 bg-white shadow-lg lg:shadow-none border-r border-gray-200"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 lg:hidden border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id)
                      setSidebarOpen(false)
                    }}
                    className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
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
  )
}

export default AdminSidebar
