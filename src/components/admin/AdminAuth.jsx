import React, { useState } from 'react'
import { Settings } from 'lucide-react'
import { useAdmin } from '../../contexts/AdminContext'
import SEO from '../SEO'

const AdminAuth = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAdmin()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    
    try {
      // Simple authentication (in production, use proper auth)
      if (password === 'admin123') {
        login({ 
          id: 'admin', 
          name: 'Administrator', 
          email: 'admin@portfolio.com',
          role: 'admin'
        })
      } else {
        setError('Invalid password')
      }
    } catch (err) {
      setError('Login failed. Please try again.')
    }
  }

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
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
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

export default AdminAuth

