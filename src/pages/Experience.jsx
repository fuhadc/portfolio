import React from 'react'
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Code, 
  BarChart3,
  Smartphone,
  Database,
  Award
} from 'lucide-react'
import SEO from '../components/SEO'
import experienceData from '../data/experience.json'
import { getIcon } from '../utils/iconMapper'

const Experience = () => {
  const { experiences, summaryStats } = experienceData

  // Generate structured data for experience
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Professional Experience - Muhammed Fuhad C | Software Engineer & Researcher",
    "description": "Professional experience and career journey of Muhammed Fuhad C including software engineering roles, research positions, and academic achievements.",
    "author": {
      "@type": "Person",
      "name": "Muhammed Fuhad C",
      "alternateName": ["Fuhad C", "Fuhad", "Muhammed Fuhad"]
    },
    "publisher": {
      "@type": "Person",
      "name": "Muhammed Fuhad C"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.mfuhad.xyz/experience"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Software Engineering"
      },
      {
        "@type": "Thing",
        "name": "Research"
      },
      {
        "@type": "Thing",
        "name": "Professional Career"
      },
      {
        "@type": "Thing",
        "name": "Academic Achievements"
      }
    ],
    "mentions": experiences.map(exp => ({
      "@type": "Organization",
      "name": exp.company,
      "description": exp.description,
      "employee": {
        "@type": "Person",
        "name": "Muhammed Fuhad C",
        "jobTitle": exp.position
      }
    }))
  }

  return (
    <section id="experience" className="section" style={{ padding: '4rem 0' }}>
      <SEO 
        title="Professional Experience - Muhammed Fuhad C | Software Engineer & Researcher | Career"
        description="Professional experience and career journey of Muhammed Fuhad C including software engineering roles, research positions, and academic achievements. Connect on LinkedIn for professional networking."
        keywords="fuhad experience, muhammed fuhad c experience, Software Engineer, Research experience, Toyota Industries, academic achievements, professional career, linkedin, career, professional, networking, work experience, job history"
        url="/experience"
        type="article"
        section="Experience"
        tags={["Experience", "Career", "Software Engineer", "Research", "Professional", "LinkedIn", "Networking", "Work History"]}
        structuredData={structuredData}
      />
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="section-title">Professional Experience</h1>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#64748b', 
            maxWidth: '32rem', 
            margin: '0 auto' 
          }}>
            A timeline of my professional journey in software development, IoT, and research
          </p>
        </div>

        {/* Experience Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Timeline Line */}
          <div style={{
            position: 'absolute',
            left: '2rem',
            top: '0',
            bottom: '0',
            width: '2px',
            backgroundColor: '#e2e8f0',
            zIndex: 1
          }}></div>

          {experiences.map((exp, index) => {
            const Icon = getIcon(exp.icon)
            return (
              <div key={index} style={{
                position: 'relative',
                marginBottom: '3rem',
                paddingLeft: '5rem'
              }}>
                {/* Timeline Dot */}
                <div style={{
                  position: 'absolute',
                  left: '1.25rem',
                  top: '1.5rem',
                  width: '1.5rem',
                  height: '1.5rem',
                  backgroundColor: exp.color,
                  borderRadius: '50%',
                  border: '4px solid white',
                  boxShadow: '0 0 0 4px #e2e8f0',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={12} color="white" />
                </div>

                {/* Experience Card */}
                <div className="card" style={{
                  position: 'relative',
                  marginLeft: '1rem'
                }}>
                  {/* Header */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#1e293b',
                        marginBottom: '0.25rem'
                      }}>
                        {exp.title}
                      </h3>
                      <p style={{
                        fontSize: '1.125rem',
                        color: exp.color,
                        fontWeight: '600',
                        marginBottom: '0.5rem'
                      }}>
                        {exp.company}
                      </p>
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
                          <MapPin size={16} style={{ marginRight: '0.25rem' }} />
                          {exp.location}
                        </div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          color: '#6b7280',
                          fontSize: '0.875rem'
                        }}>
                          <Calendar size={16} style={{ marginRight: '0.25rem' }} />
                          {exp.duration}
                        </div>
                      </div>
                    </div>
                    
                    <div style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: exp.color,
                      color: 'white',
                      borderRadius: '1rem',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>
                      {exp.type}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    color: '#64748b',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '0.75rem'
                    }}>
                      Key Achievements:
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          marginBottom: '0.5rem',
                          color: '#64748b',
                          fontSize: '0.875rem',
                          lineHeight: '1.5'
                        }}>
                          <div style={{
                            width: '0.5rem',
                            height: '0.5rem',
                            backgroundColor: exp.color,
                            borderRadius: '50%',
                            marginRight: '0.75rem',
                            marginTop: '0.5rem',
                            flexShrink: 0
                          }}></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '0.75rem'
                    }}>
                      Technologies Used:
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: '#f1f5f9',
                          color: '#475569',
                          borderRadius: '1rem',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          border: `1px solid ${exp.color}20`
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary Stats */}
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
            Experience Summary
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            {summaryStats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: stat.color,
                  marginBottom: '0.5rem'
                }}>
                  {stat.value}
                </div>
                <div style={{ color: '#64748b' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience