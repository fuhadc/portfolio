import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LogOut, 
  Menu, 
  X as CloseIcon 
} from 'lucide-react'
import { useAdmin } from '../../contexts/AdminContext'
import AdminSidebar from './AdminSidebar'

const AdminLayout = ({ children }) => {
  const { 
    sidebarOpen, 
    setSidebarOpen, 
    logout 
  } = useAdmin()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-30 bg-white shadow-sm border-b">
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
              onClick={logout}
              className="flex items-center px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <main className="flex-1 min-h-screen bg-gray-50">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default AdminLayout
