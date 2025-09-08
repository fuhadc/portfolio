import React, { useState, useEffect } from 'react'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  FileText, 
  Code, 
  Award, 
  BookOpen,
  Activity,
  Calendar,
  Eye,
  Edit,
  Plus,
  Download,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react'
import { motion } from 'framer-motion'

const AdminDashboard = ({ data, onNavigate }) => {
  const [stats, setStats] = useState({})
  const [recentActivity, setRecentActivity] = useState([])
  const [systemHealth, setSystemHealth] = useState('good')

  useEffect(() => {
    calculateStats()
    generateRecentActivity()
    checkSystemHealth()
  }, [data])

  const calculateStats = () => {
    const newStats = {
      projects: data.projects?.projects?.length || 0,
      publications: data.publications?.publications?.length || 0,
      skills: data.skills?.skills?.length || 0,
      experience: data.experience?.experience?.length || 0,
      achievements: data.achievements?.achievements?.length || 0,
      totalViews: Math.floor(Math.random() * 10000) + 5000, // Mock data
      monthlyGrowth: Math.floor(Math.random() * 20) + 5 // Mock data
    }
    setStats(newStats)
  }

  const generateRecentActivity = () => {
    const activities = [
      { type: 'edit', item: 'Home Automation IoT System', time: '2 hours ago', icon: Edit },
      { type: 'add', item: 'New Publication Added', time: '1 day ago', icon: Plus },
      { type: 'view', item: 'Portfolio Viewed', time: '3 hours ago', icon: Eye },
      { type: 'edit', item: 'Skills Updated', time: '2 days ago', icon: Edit },
      { type: 'add', item: 'New Project Added', time: '1 week ago', icon: Plus }
    ]
    setRecentActivity(activities)
  }

  const checkSystemHealth = () => {
    // Mock system health check
    const healthStatuses = ['good', 'warning', 'error']
    setSystemHealth(healthStatuses[Math.floor(Math.random() * healthStatuses.length)])
  }

  const getHealthColor = (status) => {
    switch (status) {
      case 'good': return 'text-green-600 bg-green-100'
      case 'warning': return 'text-yellow-600 bg-yellow-100'
      case 'error': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getHealthIcon = (status) => {
    switch (status) {
      case 'good': return CheckCircle
      case 'warning': return AlertCircle
      case 'error': return AlertCircle
      default: return Activity
    }
  }

  const StatCard = ({ title, value, icon: Icon, color, change, changeType }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          {change && (
            <div className={`flex items-center mt-1 text-sm ${
              changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              <TrendingUp className={`h-4 w-4 mr-1 ${
                changeType === 'negative' ? 'rotate-180' : ''
              }`} />
              {change}% from last month
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </motion.div>
  )

  const QuickActionCard = ({ title, description, icon: Icon, color, onClick }) => (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full p-4 text-left bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all"
    >
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg ${color}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </motion.button>
  )

  const ActivityItem = ({ activity, index }) => {
    const Icon = activity.icon
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg"
      >
        <div className="flex-shrink-0">
          <div className={`p-2 rounded-full ${
            activity.type === 'add' ? 'bg-green-100 text-green-600' :
            activity.type === 'edit' ? 'bg-blue-100 text-blue-600' :
            'bg-gray-100 text-gray-600'
          }`}>
            <Icon className="h-4 w-4" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {activity.item}
          </p>
          <p className="text-xs text-gray-500">{activity.time}</p>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-gray-600">Welcome back! Here's what's happening with your portfolio.</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => window.location.reload()}
            className="flex items-center px-3 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </button>
          <button
            onClick={() => {
              // Export all data
              const allData = JSON.stringify(data, null, 2)
              const blob = new Blob([allData], { type: 'application/json' })
              const url = URL.createObjectURL(blob)
              const link = document.createElement('a')
              link.href = url
              link.download = 'portfolio_data_backup.json'
              link.click()
              URL.revokeObjectURL(url)
            }}
            className="flex items-center px-3 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Download className="h-4 w-4 mr-2" />
            Export All
          </button>
        </div>
      </div>

      {/* System Health */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${getHealthColor(systemHealth)}`}>
              {React.createElement(getHealthIcon(systemHealth), { className: "h-5 w-5" })}
            </div>
            <div>
              <h3 className="font-medium text-gray-900">System Health</h3>
              <p className="text-sm text-gray-600">
                {systemHealth === 'good' ? 'All systems operational' :
                 systemHealth === 'warning' ? 'Minor issues detected' :
                 'Critical issues detected'}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Last checked</p>
            <p className="text-xs text-gray-500">{new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Projects"
          value={stats.projects}
          icon={Code}
          color="bg-blue-500"
          change={stats.monthlyGrowth}
          changeType="positive"
        />
        <StatCard
          title="Publications"
          value={stats.publications}
          icon={BookOpen}
          color="bg-green-500"
          change={Math.floor(Math.random() * 10) + 2}
          changeType="positive"
        />
        <StatCard
          title="Skills Listed"
          value={stats.skills}
          icon={Award}
          color="bg-purple-500"
        />
        <StatCard
          title="Experience Entries"
          value={stats.experience}
          icon={FileText}
          color="bg-orange-500"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <QuickActionCard
              title="Add New Project"
              description="Create a new project entry"
              icon={Plus}
              color="bg-blue-500"
              onClick={() => onNavigate('projects')}
            />
            <QuickActionCard
              title="Update Publications"
              description="Manage research publications"
              icon={BookOpen}
              color="bg-green-500"
              onClick={() => onNavigate('publications')}
            />
            <QuickActionCard
              title="Edit Skills"
              description="Update technical skills"
              icon={Award}
              color="bg-purple-500"
              onClick={() => onNavigate('skills')}
            />
            <QuickActionCard
              title="Manage Experience"
              description="Update work experience"
              icon={FileText}
              color="bg-orange-500"
              onClick={() => onNavigate('experience')}
            />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900">Activity Feed</h4>
                <span className="text-sm text-gray-500">Last 7 days</span>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {recentActivity.map((activity, index) => (
                <ActivityItem key={index} activity={activity} index={index} />
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                View all activity
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Overview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stats.projects}</div>
              <div className="text-sm text-gray-600">Active Projects</div>
              <div className="text-xs text-gray-500 mt-1">
                {data.projects?.projects?.filter(p => p.status === 'Completed').length || 0} completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{stats.publications}</div>
              <div className="text-sm text-gray-600">Publications</div>
              <div className="text-xs text-gray-500 mt-1">
                {data.publications?.publications?.filter(p => p.status === 'Published').length || 0} published
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{stats.skills}</div>
              <div className="text-sm text-gray-600">Skills Listed</div>
              <div className="text-xs text-gray-500 mt-1">
                {data.skills?.skills?.filter(s => s.level === 'Expert').length || 0} expert level
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Distribution</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Projects</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">{stats.projects}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Publications</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">{stats.publications}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Skills</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900">{stats.skills}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Last Updated</span>
              </div>
              <span className="text-sm font-medium text-gray-900">
                {new Date().toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Total Views</span>
              </div>
              <span className="text-sm font-medium text-gray-900">
                {stats.totalViews?.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Growth Rate</span>
              </div>
              <span className="text-sm font-medium text-green-600">
                +{stats.monthlyGrowth}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
