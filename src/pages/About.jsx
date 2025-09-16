import React from 'react'
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Download,
  Calendar,
  Award,
  BookOpen
} from 'lucide-react'
import SEO from '../components/SEO'
import aboutData from '../data/about.json'
import { getIcon } from '../utils/iconMapper'

const About = () => {
  const { personalInfo, education } = aboutData

  return (
    <section id="about" className="section" style={{ padding: '4rem 0' }}>
      <SEO 
        title="About Muhammed Fuhad C | IoT & Embedded Systems Developer | Social Media Links"
        description="Learn about Muhammed Fuhad C, a passionate IoT and Embedded Systems developer specializing in smart agriculture, healthcare monitoring, and mobile applications. Based in Kerala, India. Connect on social media platforms."
        keywords="fuhad about, muhammed fuhad c about, IoT developer, Embedded Systems developer, Smart Agriculture, Healthcare Monitoring, Mobile App Developer, Kerala India, instagram, facebook, linkedin, github, twitter, researchgate, social media, contact, personal profile, background, education, christ university, toyota industries"
        url="/about"
        type="article"
        section="About"
        tags={["About", "IoT Developer", "Embedded Systems", "Smart Agriculture", "Healthcare Monitoring", "Social Media", "Contact", "Personal Profile", "Background", "Education"]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "headline": "About Muhammed Fuhad C | IoT & Embedded Systems Developer",
          "description": "Learn about Muhammed Fuhad C, a passionate IoT and Embedded Systems developer specializing in smart agriculture, healthcare monitoring, and mobile applications.",
          "mainEntity": {
            "@type": "Person",
            "name": "Muhammed Fuhad C",
            "alternateName": ["Fuhad C", "Fuhad", "Muhammed Fuhad"],
            "jobTitle": "IoT & Embedded Systems Developer | Researcher | Software Engineer",
            "description": "Passionate IoT and Embedded Systems enthusiast, researcher, and developer specializing in smart agriculture, healthcare monitoring, and mobile applications.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kerala",
              "addressRegion": "Kerala",
              "addressCountry": "India"
            },
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Christ (Deemed to be) University",
              "description": "Bachelor of Technology in Computer Science Engineering (IoT)"
            },
            "worksFor": {
              "@type": "Organization",
              "name": "Toyota Industries",
              "description": "Software Engineer"
            },
            "sameAs": [
              "https://linkedin.com/in/fuhadc",
              "https://github.com/fuhadc",
              "https://www.researchgate.net/profile/Muhammed-Fuhad",
              "https://www.instagram.com/_fuhad_c",
              "https://x.com/_fuhad_c",
              "https://www.facebook.com/fuhadcs3"
            ]
          },
          "author": {
            "@type": "Person",
            "name": "Muhammed Fuhad C"
          },
          "publisher": {
            "@type": "Person",
            "name": "Muhammed Fuhad C"
          },
          "datePublished": "2024-01-01",
          "dateModified": new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://muhammedfuhadc.dev/about"
          }
        }}
      />
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="section-title">About Me</h1>
          <p className="mobile-text-sm" style={{ 
            fontSize: '1.125rem', 
            color: '#64748b', 
            maxWidth: '32rem', 
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            Get to know more about my background, education, and passion for technology
          </p>
        </div>

        {/* Profile Section */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="card" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div className="profile-avatar" style={{ margin: '0 auto 2rem' }}>
              M
            </div>
            
            <h2 className="hero-title">
              {personalInfo.name}
            </h2>
            
            <p className="hero-subtitle" style={{ marginBottom: '1.5rem' }}>
              {personalInfo.title}
            </p>
            
            <p className="text-responsive" style={{
              color: '#64748b',
              lineHeight: '1.75',
              maxWidth: '48rem',
              margin: '0 auto 2rem'
            }}>
              {personalInfo.description}
            </p>

            <p style={{
              fontSize: '1.125rem',
              color: '#64748b',
              lineHeight: '1.75',
              maxWidth: '48rem',
              margin: '0 auto'
            }}>
              {personalInfo.detailedDescription}
            </p>
          </div>
        </div>

        {/* Personal Information */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            color: '#1e293b', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Personal Information
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {personalInfo.contactInfo.map((info, index) => {
              const Icon = getIcon(info.icon)
              return (
                <div key={index} className="card" style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1.5rem'
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: '#eff6ff',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    flexShrink: 0
                  }}>
                    <Icon size={20} color="#3b82f6" />
                  </div>
                  
                  <div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      marginBottom: '0.25rem'
                    }}>
                      {info.label}
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#1e293b'
                    }}>
                      {info.value}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Education Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            color: '#1e293b', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Education
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2rem'
          }}>
            {education.map((edu, index) => (
              <div key={index} className="card">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: '#3b82f6',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem'
                  }}>
                    <GraduationCap size={20} color="white" />
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '0.25rem'
                    }}>
                      {edu.degree}
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      color: '#3b82f6',
                      fontWeight: '500'
                    }}>
                      {edu.school}
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '0.5rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Calendar size={16} color="#6b7280" style={{ marginRight: '0.5rem' }} />
                    <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>{edu.year}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Award size={16} color="#6b7280" style={{ marginRight: '0.5rem' }} />
                    <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>{edu.gpa}</span>
                  </div>
                </div>
                
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.6'
                }}>
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Download Resume CTA */}
        <div style={{
          textAlign: 'center',
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

export default About