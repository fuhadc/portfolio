import React from 'react'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ArrowRight,
  Code,
  Cpu,
  Globe,
  Database,
  ExternalLink
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const Home = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/fuhadc', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/fuhadc', icon: Linkedin },
    { name: 'ResearchGate', href: 'https://www.researchgate.net/profile/Muhammed-Fuhad', icon: ExternalLink },
    { name: 'Email', href: 'mailto:fuhadcs@icloud.com', icon: Mail },
  ]

  const quickStats = [
    { label: 'Projects Completed', value: '7+', icon: Code },
    { label: 'IoT Solutions', value: '4+', icon: Cpu },
    { label: 'Mobile Apps', value: '3+', icon: Globe },
    { label: 'Research Papers', value: '3+', icon: Database },
  ]

  return (
    <div style={{ minHeight: '100vh' }}>
      <SEO 
        title="Muhammed Fuhad C - IoT & Embedded Systems Enthusiast | Researcher | Developer"
        description="Passionate IoT and Embedded Systems enthusiast, researcher, and developer. Specializing in smart agriculture, healthcare monitoring, mobile applications, and research with published papers in IEEE and Springer conferences."
        keywords="Muhammed Fuhad C, IoT, Embedded Systems, Smart Agriculture, Healthcare Monitoring, Mobile Apps, Research, IEEE, Springer, Flutter, Python, Arduino, Raspberry Pi"
        url="/"
        type="website"
        tags={["IoT", "Embedded Systems", "Research", "Mobile Development", "Smart Agriculture", "Healthcare Monitoring"]}
      />
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            {/* Profile Image Placeholder */}
            <div style={{ 
              display: 'inline-block', 
              marginBottom: '2rem',
              position: 'relative'
            }}>
              <div className="profile-avatar">
                M
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-0.5rem',
                right: '-0.5rem',
                width: '2rem',
                height: '2rem',
                backgroundColor: '#10b981',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '0.75rem',
                  height: '0.75rem',
                  backgroundColor: 'white',
                  borderRadius: '50%'
                }}></div>
              </div>
            </div>

            {/* Name and Title */}
            <h1 className="hero-title">
              Muhammed Fuhad C
            </h1>
            
            <div className="hero-subtitle">
              IoT & Embedded Systems Enthusiast
            </div>
            
            <div className="hero-description">
              Researcher • Developer • Innovator
            </div>

            {/* Description */}
            <p className="hero-description" style={{
              maxWidth: '56rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.75',
              padding: '0 1rem'
            }}>
              I'm passionate about IoT, embedded systems, mobile app development, and AI/ML integration. 
              I love building smart solutions that combine hardware + software to solve real-world problems. 
              With experience at Toyota Industries and published research, I'm committed to creating innovative technology solutions.
            </p>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <Link
                to="/projects"
                className="btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '1rem 2rem',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '0.75rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                View My Work
                <ArrowRight style={{ marginLeft: '0.5rem' }} size={20} />
              </Link>
              
              <a
                href="/resume.pdf"
                download
                className="btn btn-outline"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '1rem 2rem',
                  backgroundColor: 'transparent',
                  color: '#3b82f6',
                  textDecoration: 'none',
                  borderRadius: '0.75rem',
                  fontWeight: '600',
                  border: '2px solid #3b82f6',
                  transition: 'all 0.3s ease'
                }}
              >
                <Download style={{ marginRight: '0.5rem' }} size={20} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="social-links">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '3rem',
                      height: '3rem',
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '50%',
                      color: '#64748b',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                    aria-label={link.name}
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1.5rem'
          }}>
            {quickStats.map((stat, index) => {
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
      </section>

      {/* Featured Skills Preview */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">
              Core Expertise
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#64748b',
              maxWidth: '32rem',
              margin: '0 auto'
            }}>
              Specialized skills in IoT development, mobile applications, and research
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            <div className="card">
              <div style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: '#dbeafe',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <Cpu style={{ color: '#3b82f6' }} size={32} />
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '0.5rem',
                textAlign: 'center'
              }}>
                IoT Development
              </h3>
              <p style={{
                color: '#64748b',
                textAlign: 'center'
              }}>
                Arduino, Raspberry Pi, sensors, and embedded systems
              </p>
            </div>

            <div className="card">
              <div style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: '#dcfce7',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <Code style={{ color: '#16a34a' }} size={32} />
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '0.5rem',
                textAlign: 'center'
              }}>
                Mobile Apps
              </h3>
              <p style={{
                color: '#64748b',
                textAlign: 'center'
              }}>
                Flutter, Dart, cross-platform development
              </p>
            </div>

            <div className="card">
              <div style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: '#f3e8ff',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                <Database style={{ color: '#9333ea' }} size={32} />
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '0.5rem',
                textAlign: 'center'
              }}>
                Research
              </h3>
              <p style={{
                color: '#64748b',
                textAlign: 'center'
              }}>
                Published papers, data analysis, innovation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home