import React, { useState, useEffect } from 'react'
import { 
  BookOpen, 
  ExternalLink, 
  Calendar, 
  Users, 
  Award,
  FileText,
  Eye
} from 'lucide-react'
import SEO from '../components/SEO'
import citationService from '../services/citationService'


const Publications = () => {
  const [publications, setPublications] = useState([
    {
      title: "Cost Effective and Energy Efficient Drip Irrigation System for IoT Enabled Smart Agriculture",
      authors: "Muhammed Fuhad C, Stenin George, Manu Elappila, Sachin Malayath Jose",
      venue: "Proceedings of the International Conference on Smart Technologies for Smart Nation (SmartTechCon 2024)",
      publisher: "Springer Nature Singapore",
      year: "2024",
      type: "Conference Paper",
      doi: "10.1007/978-981-97-1841-2_14",
      pages: "189-201",
      isbn: "978-981-97-1841-2",
      abstract: "This work addresses the inefficiencies in traditional smart farming methods by proposing a drip irrigation system that utilizes IoT technologies and solenoid valves to control water flow, aiming to reduce resource consumption and operational costs while optimizing crop growth.",
      keywords: ["IoT", "Smart Agriculture", "Drip Irrigation", "Energy Efficiency", "Cost Optimization", "Solenoid Valves"],
      status: "Published",
      impact: "High",
      citations: 2, // Google Scholar: https://scholar.google.com/citations?user=rC6hYXwAAAAJ
      lastUpdated: new Date().toISOString(),
      icon: BookOpen,
      color: "#10b981",
      googleScholarId: "cost-effective-energy-efficient-drip-irrigation-2024"
    },
    {
      title: "Automated Contactless Continuous Temperature Monitoring System for Pandemic Disease Controlling Infrastructures",
      authors: "Muhammed Fuhad C, Stenin George, Manu Elappila, Sachin Malayath Jose",
      venue: "2023 International Conference on Recent Trends in Electronics and Communication (ICRTEC)",
      publisher: "IEEE",
      year: "2023",
      type: "Conference Paper",
      doi: "10.1109/ICRTEC56977.2023.10111891",
      pages: "1-6",
      isbn: "978-1-6654-1234-5",
      abstract: "A comprehensive IoT-based automated temperature monitoring system designed for pandemic control infrastructures, providing contactless continuous monitoring with real-time alerts and data analytics capabilities.",
      keywords: ["IoT", "Temperature Monitoring", "Pandemic Control", "Contactless", "Real-time Alerts", "Data Analytics"],
      status: "Published",
      impact: "High",
      citations: 2, // Google Scholar: https://scholar.google.com/citations?user=rC6hYXwAAAAJ
      lastUpdated: new Date().toISOString(),
      icon: BookOpen,
      color: "#3b82f6",
      googleScholarId: "automated-contactless-temperature-monitoring-2023"
    },
    {
      title: "A Study on Potential Integration of Generative AI and IoT with a Real-world Example of Voice Assistance Application",
      authors: "Muhammed Fuhad C",
      venue: "Under Review",
      publisher: "TBD",
      year: "2024",
      type: "Research Paper",
      doi: null,
      pages: null,
      isbn: null,
      abstract: "This study explores the potential integration of Generative AI and IoT technologies, demonstrating practical applications through a voice assistance system that combines AI capabilities with IoT infrastructure.",
      keywords: ["Generative AI", "IoT", "Voice Assistance", "AI Integration", "Smart Systems"],
      status: "Submitted",
      impact: "High",
      citations: 0,
      lastUpdated: new Date().toISOString(),
      icon: BookOpen,
      color: "#8b5cf6",
      googleScholarId: null
    },
    {
      title: "Developing IoT Visualization and Control System for Fog Computing Infrastructure",
      authors: "Muhammed Fuhad C",
      venue: "ARAIMESF 2024 - Annual Research and Innovation Meet in Engineering and Science Festival",
      publisher: "National Institute of Technology, Rourkela",
      year: "2024",
      type: "Abstract",
      doi: null,
      pages: null,
      isbn: null,
      abstract: "Abstract presented at ARAIMESF 2024, National Institute of Technology, Rourkela, focusing on IoT visualization and control systems for fog computing infrastructure.",
      keywords: ["IoT", "Fog Computing", "Visualization", "Control Systems", "Infrastructure"],
      status: "Presented",
      impact: "Medium",
      citations: 0,
      lastUpdated: new Date().toISOString(),
      icon: BookOpen,
      color: "#f59e0b",
      googleScholarId: null
    }
  ])
  
  const [lastUpdated, setLastUpdated] = useState(null)

  // Fetch citation data on component mount
  useEffect(() => {
    updateCitations()
  }, [])

  // Update citation counts from Google Scholar
  const updateCitations = async () => {
    try {
      const updatedPublications = await citationService.updateAllCitations(publications)
      setPublications(updatedPublications)
      setLastUpdated(new Date().toISOString())
    } catch (error) {
      console.error('Error updating citations:', error)
      // Don't fail the component if citation update fails
      // Just use the existing publications data
    }
  }

  // Calculate dynamic stats from publications
  const totalCitations = publications.reduce((sum, pub) => sum + pub.citations, 0)
  const publishedPapers = publications.filter(pub => pub.status === 'Published').length
  const abstracts = publications.filter(pub => pub.type === 'Abstract').length

  const researchStats = [
    { label: "Total Publications", value: publications.length.toString(), icon: BookOpen },
    { label: "Published Papers", value: publishedPapers.toString(), icon: FileText },
    { label: "Abstracts Presented", value: abstracts.toString(), icon: Award },
    { label: "Total Citations", value: totalCitations.toString(), icon: ExternalLink }
  ]

  return (
    <div style={{ padding: '2rem 0', minHeight: '100vh' }}>
      <SEO 
        title="Research Publications - Muhammed Fuhad C | IEEE & Springer Papers"
        description="Explore the research publications of Muhammed Fuhad C, including IEEE and Springer conference papers on IoT, Smart Agriculture, Healthcare Monitoring, and Embedded Systems."
        keywords="Muhammed Fuhad C publications, IEEE papers, Springer papers, IoT research, Smart Agriculture research, Healthcare Monitoring, Embedded Systems research, academic papers"
        url="/publications"
        type="article"
        section="Research"
        tags={["Research", "Publications", "IEEE", "Springer", "IoT", "Smart Agriculture", "Healthcare Monitoring"]}
      />
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="section-title">Research Publications</h1>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#64748b', 
            maxWidth: '32rem', 
            margin: '0 auto 2rem' 
          }}>
            Published research papers and conference proceedings in IoT, smart agriculture, and healthcare monitoring
          </p>
          
          {/* Google Scholar Profile Link */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <a
              href="https://scholar.google.com/citations?user=rC6hYXwAAAAJ&hl=en&oi=sra"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#4285f4',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(66, 133, 244, 0.2)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#3367d6'
                e.target.style.transform = 'translateY(-1px)'
                e.target.style.boxShadow = '0 4px 8px rgba(66, 133, 244, 0.3)'
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#4285f4'
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 2px 4px rgba(66, 133, 244, 0.2)'
              }}
            >
              <ExternalLink size={16} style={{ marginRight: '0.5rem' }} />
              View Google Scholar Profile
            </a>
          </div>
          
          {lastUpdated && (
            <div style={{ 
              textAlign: 'center', 
              color: '#6b7280', 
              fontSize: '0.875rem',
              marginBottom: '1rem'
            }}>
              Last updated: {new Date(lastUpdated).toLocaleString()}
            </div>
          )}
          
        </div>

        {/* Research Stats */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            {researchStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '4rem',
                    height: '4rem',
                    backgroundColor: '#eff6ff',
                    borderRadius: '1rem',
                    marginBottom: '1rem'
                  }}>
                    <Icon style={{ color: '#3b82f6' }} size={32} />
                  </div>
                  <div style={{
                    fontSize: '1.875rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginBottom: '0.5rem'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    color: '#64748b',
                    fontWeight: '500'
                  }}>
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Publications List */}
        <div>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            color: '#1e293b', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Published Papers
          </h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {publications.map((pub, index) => {
              const Icon = pub.icon
              return (
                <div key={index} className="card">
                  {/* Header */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        color: '#1e293b',
                        marginBottom: '0.5rem',
                        lineHeight: '1.4'
                      }}>
                        {pub.title}
                      </h3>
                      <p style={{
                        color: '#6b7280',
                        fontSize: '0.875rem',
                        marginBottom: '0.5rem'
                      }}>
                        {pub.authors}
                      </p>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap'
                      }}>
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: pub.color,
                          color: 'white',
                          borderRadius: '1rem',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          {pub.type}
                        </span>
                        <span style={{
                          color: '#6b7280',
                          fontSize: '0.875rem'
                        }}>
                          {pub.venue} • {pub.year}
                        </span>
                      </div>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <div style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#f0f9ff',
                        color: '#0369a1',
                        borderRadius: '0.5rem',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        border: '1px solid #bae6fd'
                      }}>
                        {pub.status}
                      </div>
                    </div>
                  </div>

                  {/* Abstract */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '0.5rem'
                    }}>
                      Abstract
                    </h4>
                    <p style={{
                      color: '#64748b',
                      lineHeight: '1.6',
                      fontSize: '0.875rem'
                    }}>
                      {pub.abstract}
                    </p>
                  </div>

                  {/* Keywords */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '0.5rem'
                    }}>
                      Keywords
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {pub.keywords.map((keyword, keyIndex) => (
                        <span key={keyIndex} style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: '#f1f5f9',
                          color: '#475569',
                          borderRadius: '1rem',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          border: '1px solid #e2e8f0'
                        }}>
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '1rem',
                    borderTop: '1px solid #e2e8f0',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      flexWrap: 'wrap'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#6b7280',
                        fontSize: '0.875rem'
                      }}>
                        <Eye size={16} style={{ marginRight: '0.25rem' }} />
                        {pub.citations} citations
                        {pub.lastUpdated && (
                          <span style={{ 
                            marginLeft: '0.5rem', 
                            fontSize: '0.75rem',
                            color: '#9ca3af'
                          }}>
                            (Updated: {new Date(pub.lastUpdated).toLocaleDateString()})
                          </span>
                        )}
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#6b7280',
                        fontSize: '0.875rem'
                      }}>
                        <Award size={16} style={{ marginRight: '0.25rem' }} />
                        {pub.impact} impact
                      </div>
                    </div>
                    
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '0.5rem 1rem',
                          backgroundColor: '#3b82f6',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '0.5rem',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <ExternalLink size={16} style={{ marginRight: '0.5rem' }} />
                        View Paper
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Research Focus Areas */}
        <div style={{
          marginTop: '4rem',
          padding: '2rem',
          backgroundColor: '#f8fafc',
          borderRadius: '1rem',
          border: '1px solid #e2e8f0'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#1e293b',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Research Focus Areas
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0',
              textAlign: 'center'
            }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                backgroundColor: '#dcfce7',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <BookOpen size={24} color="#16a34a" />
              </div>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '0.5rem'
              }}>
                Smart Agriculture
              </h4>
              <p style={{
                color: '#64748b',
                fontSize: '0.875rem'
              }}>
                IoT-based irrigation systems and crop monitoring solutions
              </p>
            </div>
            
            <div style={{
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0',
              textAlign: 'center'
            }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                backgroundColor: '#dbeafe',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <Award size={24} color="#3b82f6" />
              </div>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '0.5rem'
              }}>
                Healthcare Monitoring
              </h4>
              <p style={{
                color: '#64748b',
                fontSize: '0.875rem'
              }}>
                Contactless monitoring systems for health and safety
              </p>
            </div>
            
            <div style={{
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0',
              textAlign: 'center'
            }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                backgroundColor: '#f3e8ff',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <FileText size={24} color="#8b5cf6" />
              </div>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '0.5rem'
              }}>
                IoT Systems
              </h4>
              <p style={{
                color: '#64748b',
                fontSize: '0.875rem'
              }}>
                Energy-efficient and cost-effective IoT solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publications