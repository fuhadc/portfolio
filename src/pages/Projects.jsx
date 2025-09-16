import React, { useState } from 'react'
import { 
  Code, 
  ExternalLink, 
  Github, 
  Smartphone, 
  Cpu, 
  Globe,
  Database,
  FileText,
  Calendar,
  Award,
  Eye
} from 'lucide-react'
import SEO from '../components/SEO'
import { getDataByType, DATA_TYPES } from '../utils/dataManager'
import { getIcon } from '../utils/iconMapper'

const Projects = () => {
  const projectsData = getDataByType(DATA_TYPES.PROJECTS)
  const { projects, projectStats } = projectsData
  const [selectedImage, setSelectedImage] = useState(null)

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <section id="projects" className="section" style={{ padding: '4rem 0' }}>
      <SEO 
        title="Projects - Muhammed Fuhad C (Fuad) | IoT, Mobile Apps & Web Development | Portfolio"
        description="Explore the portfolio of projects by Muhammed Fuhad C (Fuad) including IoT solutions, mobile applications, web development, and smart agriculture systems. View code on GitHub and connect for collaborations."
        keywords="fuad projects, fuhad projects, muhammed fuhad c projects, IoT projects, mobile app development, web development, smart agriculture, healthcare monitoring, Flutter apps, React projects, github, portfolio, developer, collaboration, open source, code, programming"
        url="/projects"
        type="article"
        section="Portfolio"
        tags={["Projects", "IoT", "Mobile Apps", "Web Development", "Smart Agriculture", "Healthcare Monitoring", "GitHub", "Portfolio", "Collaboration", "Open Source"]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Projects - Muhammed Fuhad C (Fuad) | IoT, Mobile Apps & Web Development",
          "description": "Explore the portfolio of projects by Muhammed Fuhad C (Fuad) including IoT solutions, mobile applications, web development, and smart agriculture systems.",
          "author": {
            "@type": "Person",
            "name": "Muhammed Fuhad C",
            "alternateName": ["Fuhad C", "Fuad", "Fuhad", "Muhammed Fuhad"],
            "sameAs": [
              "https://github.com/fuhadc"
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
            "@id": "https://muhammedfuhadc.dev/projects"
          },
          "about": [
            {
              "@type": "Thing",
              "name": "IoT Development"
            },
            {
              "@type": "Thing",
              "name": "Mobile App Development"
            },
            {
              "@type": "Thing",
              "name": "Web Development"
            },
            {
              "@type": "Thing",
              "name": "Smart Agriculture"
            }
          ]
        }}
      />
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="section-title">Featured Projects</h1>
          <p className="mobile-text-sm" style={{ 
            color: '#64748b', 
            maxWidth: '32rem', 
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            A showcase of my work spanning IoT systems, mobile applications, web development, and innovative solutions
          </p>
        </div>

        {/* Project Stats */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="grid-responsive mobile-grid-2" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            width: '100%',
            maxWidth: '100%'
          }}>
            {projectStats.map((stat, index) => {
              const Icon = getIcon(stat.icon)
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
                  <div className="mobile-text-lg" style={{
                    fontSize: '1.875rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    marginBottom: '0.5rem'
                  }}>
                    {stat.value}
                  </div>
                  <div className="mobile-text-sm" style={{
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

        {/* Projects Grid */}
        <div>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            color: '#1e293b', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Project Portfolio
          </h2>
          
          <div className="grid-responsive">
            {projects.map((project, index) => {
              const Icon = getIcon(project.icon)
              // Debug: Log project image data (only in development)
              if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development' && project.image) {
                console.log(`Project ${index} (${project.title}):`, {
                  hasImage: !!project.image,
                  imageLength: project.image.length,
                  isDataUrl: project.image.startsWith('data:image/'),
                  imagePreview: project.image.substring(0, 50) + '...'
                })
              }
              return (
                <div key={index} className="card" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}>
                  {/* Project Image - Hidden by default, shown only in modal */}
                  <div style={{
                    width: '100%',
                    height: '200px',
                    backgroundColor: '#f1f5f9',
                    borderRadius: '0.75rem',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #e2e8f0',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {project.image && project.image.trim() !== '' && !project.image.includes('/api/placeholder') ? (
                      <>
                        {/* Hidden image placeholder with view button */}
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '1rem',
                          color: '#64748b'
                        }}>
                          <div style={{
                            width: '4rem',
                            height: '4rem',
                            backgroundColor: project.color + '20',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <Icon size={24} color={project.color} />
                          </div>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ 
                              fontSize: '0.875rem', 
                              fontWeight: '500', 
                              marginBottom: '0.25rem' 
                            }}>
                              Project Image Available
                            </div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                              Click to view
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => openImageModal(project.image)}
                          style={{
                            position: 'absolute',
                            top: '0.5rem',
                            right: '0.5rem',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '0.375rem',
                            padding: '0.5rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            fontSize: '0.75rem',
                            fontWeight: '500',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
                          }}
                        >
                          <Eye size={14} />
                          View
                        </button>
                      </>
                    ) : (
                      <Icon size={48} color={project.color} />
                    )}
                  </div>

                  {/* Project Header */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        color: '#1e293b',
                        marginBottom: '0.5rem',
                        lineHeight: '1.4',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word'
                      }}>
                        {project.title}
                      </h3>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.5rem'
                      }}>
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: project.color,
                          color: 'white',
                          borderRadius: '1rem',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          {project.category}
                        </span>
                        <span style={{
                          color: '#6b7280',
                          fontSize: '0.875rem'
                        }}>
                          {project.year}
                        </span>
                      </div>
                    </div>
                    
                    <div style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: project.status === 'Completed' ? '#dcfce7' : '#fef3c7',
                      color: project.status === 'Completed' ? '#166534' : '#92400e',
                      borderRadius: '1rem',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {project.status}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    color: '#64748b',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    flex: 1
                  }}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '0.5rem'
                    }}>
                      Technologies:
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: '#f1f5f9',
                          color: '#475569',
                          borderRadius: '1rem',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          border: '1px solid #e2e8f0'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '0.5rem'
                    }}>
                      Key Features:
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {project.features.slice(0, 3).map((feature, featIndex) => (
                        <li key={featIndex} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          marginBottom: '0.25rem',
                          color: '#64748b',
                          fontSize: '0.75rem',
                          lineHeight: '1.4'
                        }}>
                          <div style={{
                            width: '0.25rem',
                            height: '0.25rem',
                            backgroundColor: project.color,
                            borderRadius: '50%',
                            marginRight: '0.5rem',
                            marginTop: '0.375rem',
                            flexShrink: 0
                          }}></div>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li style={{
                          color: '#6b7280',
                          fontSize: '0.75rem',
                          fontStyle: 'italic'
                        }}>
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Links */}
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                    marginTop: 'auto',
                    width: '100%'
                  }}>
                    {project.links.code && (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '0.5rem 1rem',
                          backgroundColor: '#1f2937',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '0.5rem',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Github size={14} style={{ marginRight: '0.25rem' }} />
                        Code
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
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
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <ExternalLink size={14} style={{ marginRight: '0.25rem' }} />
                        Demo
                      </a>
                    )}
                    {project.links.paper && (
                      <a
                        href={project.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '0.5rem 1rem',
                          backgroundColor: '#10b981',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '0.5rem',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <FileText size={14} style={{ marginRight: '0.25rem' }} />
                        Paper
                      </a>
                    )}
                    {project.links.app && (
                      <a
                        href={project.links.app}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '0.5rem 1rem',
                          backgroundColor: '#8b5cf6',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '0.5rem',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Smartphone size={14} style={{ marginRight: '0.25rem' }} />
                        App
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '2rem'
        }}>
          <div style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh'
          }}>
            <img 
              src={selectedImage} 
              alt="Project" 
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '0.5rem'
              }}
            />
            <button
              onClick={closeImageModal}
              style={{
                position: 'absolute',
                top: '-2.5rem',
                right: '0',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects