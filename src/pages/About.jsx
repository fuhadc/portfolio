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

const About = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering (IoT)",
      school: "Christ (Deemed to be) University",
      year: "2018 - 2022",
      gpa: "First Class",
      description: "Specialized in IoT and Embedded Systems with focus on smart agriculture, healthcare monitoring, and mobile application development"
    }
  ]

  const personalInfo = [
    { label: "Location", value: "Kerala, India", icon: MapPin },
    { label: "Phone", value: "+91-7306525489", icon: Phone },
    { label: "Email", value: "fuhadcs@icloud.com", icon: Mail },
    { label: "Experience", value: "1+ years", icon: Calendar }
  ]

  return (
    <div style={{ padding: '2rem 0', minHeight: '100vh' }}>
      <SEO 
        title="About Muhammed Fuhad C | IoT & Embedded Systems Developer"
        description="Learn about Muhammed Fuhad C, a passionate IoT and Embedded Systems developer specializing in smart agriculture, healthcare monitoring, and mobile applications. Based in Kerala, India."
        keywords="Muhammed Fuhad C about, IoT developer, Embedded Systems developer, Smart Agriculture, Healthcare Monitoring, Mobile App Developer, Kerala India"
        url="/about"
        type="article"
        section="About"
        tags={["About", "IoT Developer", "Embedded Systems", "Smart Agriculture", "Healthcare Monitoring"]}
      />
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="section-title">About Me</h1>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#64748b', 
            maxWidth: '32rem', 
            margin: '0 auto' 
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
              Muhammed Fuhad C
            </h2>
            
            <p className="hero-subtitle" style={{ marginBottom: '1.5rem' }}>
              IoT & Embedded Systems Enthusiast
            </p>
            
            <p className="text-responsive" style={{
              color: '#64748b',
              lineHeight: '1.75',
              maxWidth: '48rem',
              margin: '0 auto 2rem'
            }}>
              Hello! I'm Muhammed Fuhad C, a passionate IoT and Embedded Systems enthusiast, researcher, and developer
              based in Kerala, India. I graduated with a B.Tech in Computer Science Engineering (IoT) from Christ (Deemed to be) University,
              where I discovered my love for creating innovative solutions that bridge the gap between hardware and software.
            </p>

            <p style={{
              fontSize: '1.125rem',
              color: '#64748b',
              lineHeight: '1.75',
              maxWidth: '48rem',
              margin: '0 auto'
            }}>
              I'm passionate about IoT, embedded systems, mobile app development, and AI/ML integration. 
              I love building smart solutions that combine hardware + software to solve real-world problems. 
              With experience at Toyota Industries and published research in IEEE and Springer conferences, 
              I'm committed to creating technology that makes a real difference in people's lives.
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
            {personalInfo.map((info, index) => {
              const Icon = info.icon
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
    </div>
  )
}

export default About