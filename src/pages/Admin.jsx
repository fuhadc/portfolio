import React, { useEffect } from 'react'
import { AdminProvider, useAdmin } from '../contexts/AdminContext'
import AdminAuth from '../components/admin/AdminAuth'
import AdminLayout from '../components/admin/AdminLayout'
import AdminDashboard from '../components/admin/AdminDashboard'
import ContentManagement from '../components/admin/ContentManagement'
import SEO from '../components/SEO'

// Import data files
import homeData from '../data/home.json'
import projectsData from '../data/projects.json'
import publicationsData from '../data/publications.json'
import skillsData from '../data/skills.json'
import experienceData from '../data/experience.json'
import achievementsData from '../data/achievements.json'
import certificationsData from '../data/certifications.json'
import aboutData from '../data/about.json'
import contactData from '../data/contact.json'

// Main Admin component that uses the context
const AdminContent = () => {
  const { isAuthenticated, activeTab, data, setData } = useAdmin()

  // Initialize data on mount
  useEffect(() => {
    const initialData = {
      home: homeData,
      projects: projectsData,
      publications: publicationsData,
      skills: skillsData,
      experience: experienceData,
      achievements: achievementsData,
      certifications: certificationsData,
      about: aboutData,
      contact: contactData
    }
    setData(initialData)
  }, []) // Remove setData from dependencies to prevent infinite loop

  if (!isAuthenticated) {
    return <AdminAuth />
  }

  return (
    <AdminLayout>
      <SEO 
        title="Admin Panel - Portfolio Management"
        description="Secure admin panel for managing portfolio content"
        keywords="admin, portfolio, management, content"
        url="/admin"
      />
      {activeTab === 'dashboard' ? (
        <AdminDashboard />
      ) : (
        <ContentManagement />
      )}
    </AdminLayout>
  )
}

// Main Admin component with provider
const Admin = () => {
  return (
    <AdminProvider>
      <AdminContent />
    </AdminProvider>
  )
}

export default Admin
