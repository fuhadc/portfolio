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
import publicationsData from '../data/publications.json'
import { getIcon } from '../utils/iconMapper'


const Publications = () => {
  const [publications, setPublications] = useState(publicationsData.publications.map(pub => ({
    ...pub,
    lastUpdated: new Date().toISOString()
  })))
  
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
  const publishedWorks = publications.filter(pub => pub.status === 'Published')
  const totalCitations = publishedWorks.reduce((sum, pub) => sum + (pub.citations || 0), 0)
  const publishedCount = publishedWorks.length
  const abstracts = publications.filter(pub => pub.type === 'Abstract' && pub.status === 'Presented').length

  const researchStats = [
    { label: "Total Publications", value: publications.length.toString(), icon: BookOpen },
    { label: "Published Works", value: publishedCount.toString(), icon: FileText },
    { label: "Abstracts Presented", value: abstracts.toString(), icon: Award },
    { label: "Total Citations", value: totalCitations.toString(), icon: ExternalLink }
  ]

  return (
    <section id="publications" className="section" style={{ padding: '4rem 0' }}>
      <SEO 
        title="Research Publications - Muhammed Fuhad C | IEEE & Springer Papers | Academic Profile"
        description="Explore the research publications of Muhammed Fuhad C, including IEEE and Springer conference papers on IoT, Smart Agriculture, Healthcare Monitoring, and Embedded Systems. Connect on ResearchGate and other academic platforms."
        keywords="fuhad publications, muhammed fuhad c publications, IEEE papers, Springer papers, IoT research, Smart Agriculture research, Healthcare Monitoring, Embedded Systems research, academic papers, researchgate, academic profile, researcher, citations, research papers, conference proceedings"
        url="/publications"
        type="article"
        section="Research"
        tags={["Research", "Publications", "IEEE", "Springer", "IoT", "Smart Agriculture", "Healthcare Monitoring", "Academic", "ResearchGate", "Citations", "Research Papers"]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Research Publications - Muhammed Fuhad C | IEEE & Springer Papers",
          "description": "Explore the research publications of Muhammed Fuhad C, including IEEE and Springer conference papers on IoT, Smart Agriculture, Healthcare Monitoring, and Embedded Systems.",
          "author": {
            "@type": "Person",
            "name": "Muhammed Fuhad C",
            "alternateName": ["Fuhad C", "Fuhad", "Muhammed Fuhad"],
            "sameAs": [
              "https://scholar.google.com/citations?user=rC6hYXwAAAAJ&hl=en&oi=sra",
              "https://www.researchgate.net/profile/Muhammed-Fuhad"
            ]
          },
          "publisher": {
            "@type": "Person",
            "name": "Muhammed Fuhad C"
          },
          "datePublished": "2024-01-01",
          "dateModified": new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.mfuhad.xyz/publications"
          },
          "about": [
            {
              "@type": "Thing",
              "name": "IoT Research"
            },
            {
              "@type": "Thing",
              "name": "Smart Agriculture"
            },
            {
              "@type": "Thing",
              "name": "Healthcare Monitoring"
            },
            {
              "@type": "Thing",
              "name": "Embedded Systems"
            }
          ],
          "mentions": publications.map(pub => ({
            "@type": "ScholarlyArticle",
            "headline": pub.title,
            "author": {
              "@type": "Person",
              "name": pub.authors
            },
            "publisher": {
              "@type": "Organization",
              "name": pub.venue
            },
            "datePublished": pub.year,
            "description": pub.abstract,
            "keywords": pub.keywords.join(", "),
            "citationCount": pub.citations
          }))
        }}
      />
      <div className="container">
        {/* Header */}
        <div className="animate-fade-in-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="section-title" style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Research Publications
          </h1>
          <p className="animate-fade-in-up animate-delay-200" style={{ 
            fontSize: '1.125rem', 
            color: '#64748b', 
            maxWidth: '32rem', 
            margin: '0 auto 2rem',
            lineHeight: '1.7'
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
            gap: '2rem',
            width: '100%',
            maxWidth: '100%'
          }}>
            {researchStats.map((stat, index) => {
              const Icon = getIcon(stat.icon)
              return (
                <div 
                  key={index} 
                  className={`animate-scale-in animate-delay-${index * 100}`}
                  style={{ 
                    textAlign: 'center',
                    padding: '1.5rem',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    borderRadius: '1rem',
                    border: '1px solid rgba(226,232,240,0.6)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(59,130,246,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)'
                  }}
                >
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '4rem',
                    height: '4rem',
                    background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                    borderRadius: '1rem',
                    marginBottom: '1rem',
                    boxShadow: '0 4px 12px rgba(59,130,246,0.1)'
                  }}>
                    <Icon style={{ color: '#3b82f6' }} size={32} />
                  </div>
                  <div style={{
                    fontSize: '1.875rem',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
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
          <h2 className="animate-fade-in-up" style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            background: 'linear-gradient(135deg, #1e293b, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Published Works
          </h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {publications.map((pub, index) => {
              const Icon = getIcon(pub.icon)
              return (
                <div 
                  key={index} 
                  className={`card animate-fade-in-up animate-delay-${Math.min(index * 100, 500)}`}
                  style={{
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Header */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    width: '100%'
                  }}>
                    <div style={{ flex: 1, minWidth: '250px', maxWidth: '100%' }}>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        color: '#1e293b',
                        marginBottom: '0.5rem',
                        lineHeight: '1.4',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word'
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
                    borderTop: '2px solid rgba(226,232,240,0.6)',
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
                        padding: '0.5rem 1rem',
                        background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                        borderRadius: '0.5rem',
                        color: '#3b82f6',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        border: '1px solid #bae6fd'
                      }}>
                        <Eye size={16} style={{ marginRight: '0.5rem' }} />
                        {pub.citations} citations
                        {pub.lastUpdated && (
                          <span style={{ 
                            marginLeft: '0.5rem', 
                            fontSize: '0.75rem',
                            color: '#64748b'
                          }}>
                            (Updated: {new Date(pub.lastUpdated).toLocaleDateString()})
                          </span>
                        )}
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.5rem 1rem',
                        background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                        borderRadius: '0.5rem',
                        color: '#d97706',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        border: '1px solid #fcd34d'
                      }}>
                        <Award size={16} style={{ marginRight: '0.5rem' }} />
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
            gap: '1.5rem',
            width: '100%',
            maxWidth: '100%'
          }}>
            {publicationsData.researchFocusAreas.map((area, index) => {
              const Icon = getIcon(area.icon)
              return (
                <div key={index} style={{
                  padding: '1.5rem',
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: `${area.color}20`,
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem'
                  }}>
                    <Icon size={24} color={area.color} />
                  </div>
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '0.5rem'
                  }}>
                    {area.title}
                  </h4>
                  <p style={{
                    color: '#64748b',
                    fontSize: '0.875rem'
                  }}>
                    {area.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Publications