import React from 'react'
import { 
  Code, 
  Cpu, 
  Smartphone, 
  Globe, 
  Database, 
  Award, 
  Download,
  ExternalLink,
  Star,
  CheckCircle,
  BookOpen,
  Zap,
  Cloud
} from 'lucide-react'
import SEO from '../components/SEO'
import skillsData from '../data/skills.json'
import certificationsData from '../data/certifications.json'
import { getIcon } from '../utils/iconMapper'

const Skills = () => {
  const { skillCategories } = skillsData
  const { certifications } = certificationsData

  // Generate structured data for skills
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Skills & Technologies - Muhammed Fuhad C | IoT & Development Expertise",
    "description": "Comprehensive overview of technical skills and technologies mastered by Muhammed Fuhad C including IoT, Embedded Systems, Mobile Development, and Research methodologies.",
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
      "@id": "https://www.mfuhad.xyz/skills"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "IoT Development"
      },
      {
        "@type": "Thing",
        "name": "Embedded Systems"
      },
      {
        "@type": "Thing",
        "name": "Mobile Development"
      },
      {
        "@type": "Thing",
        "name": "Programming"
      }
    ],
    "mentions": skillCategories.flatMap(category => 
      category.skills.map(skill => ({
        "@type": "Thing",
        "name": skill.name,
        "description": `${skill.name} - ${skill.years} of experience`,
        "skillLevel": skill.level
      }))
    )
  }

  return (
    <section id="skills" className="section" style={{ padding: '4rem 0' }}>
      <SEO 
        title="Skills & Technologies - Muhammed Fuhad C | IoT & Development Expertise | Technical Profile"
        description="Comprehensive overview of technical skills and technologies mastered by Muhammed Fuhad C including IoT, Embedded Systems, Mobile Development, and Research methodologies. Connect for technical discussions."
        keywords="fuhad skills, muhammed fuhad c skills, IoT skills, Embedded Systems skills, Mobile Development, Flutter, Python, Arduino, Raspberry Pi, Research skills, technical profile, developer skills, programming, certifications, professional skills"
        url="/skills"
        type="article"
        section="Skills"
        tags={["Skills", "Technologies", "IoT", "Embedded Systems", "Mobile Development", "Programming", "Technical", "Developer", "Certifications"]}
        structuredData={structuredData}
      />
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="section-title">Skills & Certifications</h1>
          <p className="text-responsive" style={{ 
            color: '#64748b', 
            maxWidth: '32rem', 
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            Technical expertise and professional certifications in IoT, mobile development, and software engineering
          </p>
        </div>

        {/* Skills Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '1.75rem', 
            fontWeight: '700', 
            color: '#1e293b', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Technical Skills
          </h2>
          
          <div className="grid-responsive">
            {skillCategories.map((category, index) => {
              const Icon = getIcon(category.icon)
              return (
                <div key={index} className="card">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      backgroundColor: category.color,
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem'
                    }}>
                      <Icon size={24} color="white" />
                    </div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      margin: 0
                    }}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '0.5rem'
                        }}>
                          <span style={{
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            color: '#374151'
                          }}>
                            {skill.name}
                          </span>
                          <span style={{
                            fontSize: '0.875rem',
                            color: '#6b7280'
                          }}>
                            {skill.level}%
                          </span>
                        </div>
                        <div style={{
                          width: '100%',
                          height: '0.5rem',
                          backgroundColor: '#e5e7eb',
                          borderRadius: '0.25rem',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            width: `${skill.level}%`,
                            height: '100%',
                            backgroundColor: category.color,
                            borderRadius: '0.25rem',
                            transition: 'width 0.3s ease'
                          }}></div>
                        </div>
                        <div style={{
                          fontSize: '0.75rem',
                          color: '#9ca3af',
                          marginTop: '0.25rem'
                        }}>
                          {skill.years}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            color: '#1e293b', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Certifications
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {certifications.map((cert, index) => {
              const Icon = getIcon(cert.icon)
              return (
                <div key={index} className="card" style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1.5rem'
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: cert.color,
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    flexShrink: 0
                  }}>
                    <Icon size={24} color="white" />
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '0.25rem',
                      lineHeight: '1.4'
                    }}>
                      {cert.url ? (
                        <a 
                          href={cert.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ 
                            color: 'inherit', 
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}
                        >
                          {cert.name}
                          <ExternalLink size={14} style={{ color: '#6b7280' }} />
                        </a>
                      ) : (
                        cert.name
                      )}
                    </h3>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      marginBottom: '0.5rem'
                    }}>
                      {cert.authority}
                    </p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{
                        fontSize: '0.75rem',
                        color: '#9ca3af'
                      }}>
                        {cert.startedOn}
                        {cert.finishedOn && ` - ${cert.finishedOn}`}
                      </span>
                      <span style={{
                        fontSize: '0.75rem',
                        color: '#10b981',
                        fontWeight: '500'
                      }}>
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Download Resume CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: '#f8fafc',
          borderRadius: '1rem',
          border: '1px solid #e2e8f0'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#1e293b',
            marginBottom: '1rem'
          }}>
            Download My Resume
          </h3>
          <p style={{
            color: '#64748b',
            marginBottom: '1.5rem'
          }}>
            Get a detailed overview of my experience, skills, and achievements
          </p>
          <a
            href="/resume_fuhad.pdf"
            download="Muhammed_Fuhad_C_Resume.pdf"
            className="btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.5rem',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
          >
            <Download style={{ marginRight: '0.5rem' }} size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Skills