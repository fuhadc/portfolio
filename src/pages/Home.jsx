import React, { memo } from 'react'
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
import SEO from '../components/SEO'
import homeData from '../data/home.json'
import { getIcon } from '../utils/iconMapper'

const Home = memo(() => {
  const { hero, socialLinks, quickStats, coreExpertise } = homeData

  return (
    <>
      <SEO 
        title="Muhammed Fuhad C - IoT & Embedded Systems Developer"
        description="IoT & Embedded Systems developer specializing in smart agriculture, healthcare monitoring, and mobile apps. IEEE & Springer researcher."
        keywords="fuhad, muhammed fuhad, fuhad c, muhammed fuhad c, iot developer, embedded systems developer, smart agriculture, healthcare monitoring, mobile app developer, flutter developer, python developer, arduino, raspberry pi, research, ieee, springer, kerala, india, portfolio, developer, software engineer, researcher, toyota industries, christ university, btech, computer science, engineering, instagram, facebook, linkedin, github, twitter, researchgate, social media, contact, hire, collaboration"
        url="/"
        type="website"
        tags={["IoT", "Embedded Systems", "Research", "Mobile Development", "Smart Agriculture", "Healthcare Monitoring", "Social Media", "Portfolio", "Fuhad"]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Muhammed Fuhad C",
          "alternateName": ["Fuhad C", "Fuhad", "Muhammed Fuhad"],
          "jobTitle": "IoT & Embedded Systems Developer | Researcher | Software Engineer",
          "description": "Passionate IoT and Embedded Systems enthusiast, researcher, and developer specializing in smart agriculture, healthcare monitoring, and mobile applications. Based in Kerala, India.",
          "url": "https://mfuhad.xyz",
          "email": "fuhadcs@icloud.com",
          "telephone": "+91-7306525489",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kerala",
            "addressRegion": "Kerala",
            "addressCountry": "India"
          },
          "sameAs": [
            "https://linkedin.com/in/fuhadc",
            "https://github.com/fuhadc",
            "https://www.researchgate.net/profile/Muhammed-Fuhad",
            "https://www.instagram.com/_fuhad_c",
            "https://x.com/_fuhad_c",
            "https://www.facebook.com/fuhadcs3"
          ],
          "knowsAbout": [
            "IoT Development",
            "Embedded Systems",
            "Smart Agriculture",
            "Healthcare Monitoring",
            "Mobile App Development",
            "Flutter",
            "Python",
            "Arduino",
            "Raspberry Pi",
            "Research",
            "IEEE Publications",
            "Springer Publications"
          ]
        }}
      />
      
      {/* Hero Section */}
      <section id="home" className="hero" style={{ minHeight: '100vh', paddingTop: '5rem', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            {/* Profile Image Placeholder */}
            <div className="animate-scale-in" style={{ 
              display: 'inline-block', 
              marginBottom: '2rem',
              position: 'relative'
            }}>
              <div className="profile-avatar animate-float">
                M
              </div>
              <div className="animate-scale-in animate-delay-300" style={{
                position: 'absolute',
                bottom: '-0.5rem',
                right: '-0.5rem',
                width: '2rem',
                height: '2rem',
                backgroundColor: '#10b981',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)',
                animation: 'pulse 2s ease-in-out infinite'
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
            <h1 className="hero-title animate-fade-in-up animate-delay-100">
              {hero.name}
            </h1>
            
            <div className="hero-subtitle animate-fade-in-up animate-delay-200" style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {hero.title}
            </div>
            
            <div className="hero-description animate-fade-in-up animate-delay-300" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
              padding: '1.5rem 2rem',
              borderRadius: '1rem',
              maxWidth: '56rem',
              margin: '1rem auto',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              border: '1px solid rgba(226,232,240,0.6)'
            }}>
              {hero.subtitle} - Specializing in <strong style={{color: '#3b82f6'}}>IoT development</strong>, <strong style={{color: '#8b5cf6'}}>embedded systems</strong>, <strong style={{color: '#10b981'}}>smart agriculture</strong>, <strong style={{color: '#f59e0b'}}>healthcare monitoring</strong>, and <strong style={{color: '#ec4899'}}>AI-powered solutions</strong>. Expert in <strong style={{color: '#3b82f6'}}>artificial intelligence integration</strong>, <strong style={{color: '#8b5cf6'}}>machine learning</strong>, and <strong style={{color: '#ec4899'}}>generative AI applications</strong>.
            </div>

            {/* Description */}
            <p className="hero-description animate-fade-in-up animate-delay-400" style={{
              maxWidth: '56rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.75',
              padding: '0 1rem',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}>
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="cta-buttons animate-fade-in-up animate-delay-500">
              <button
                onClick={() => {
                  const element = document.getElementById('projects')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="btn mobile-flex-col"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '1rem 2rem',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  minHeight: '44px',
                  width: '100%',
                  maxWidth: '280px',
                  justifyContent: 'center'
                }}
              >
                View My Work
                <ArrowRight style={{ marginLeft: '0.5rem' }} size={20} />
              </button>
              
              <a
                href="/resume_fuhad.pdf"
                download="Muhammed_Fuhad_C_Resume.pdf"
                className="btn btn-outline mobile-flex-col"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '1rem 2rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  minHeight: '44px',
                  width: '100%',
                  maxWidth: '280px',
                  justifyContent: 'center'
                }}
              >
                <Download style={{ marginRight: '0.5rem' }} size={20} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="social-links animate-fade-in animate-delay-500">
              {socialLinks.map((link, index) => {
                const Icon = getIcon(link.icon)
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`animate-scale-in animate-delay-${(index + 6) * 100}`}
                    aria-label={link.name}
                    title={link.name}
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
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
        borderTop: '1px solid rgba(226,232,240,0.6)',
        borderBottom: '1px solid rgba(226,232,240,0.6)'
      }}>
        <div className="container">
          <div className="grid-responsive mobile-grid-2" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1.5rem',
            width: '100%',
            maxWidth: '100%'
          }}>
            {quickStats.map((stat, index) => {
              const Icon = getIcon(stat.icon)
              return (
                <div 
                  key={index} 
                  className={`animate-fade-in-up animate-delay-${index * 100}`}
                  style={{ 
                    textAlign: 'center',
                    padding: '1.5rem',
                    background: 'white',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    border: '1px solid rgba(226,232,240,0.6)',
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
                  <div className="mobile-text-lg" style={{
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
      </section>

      {/* Featured Skills Preview */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">
              IoT & Embedded Systems Expertise
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#64748b',
              maxWidth: '32rem',
              margin: '0 auto'
            }}>
              Specialized skills in IoT development, mobile applications, and research. 
              <a href="/skills" style={{ color: '#3b82f6', textDecoration: 'none' }}>View detailed skills</a> or 
              <a href="/projects" style={{ color: '#3b82f6', textDecoration: 'none' }}>explore my projects</a>. 
              Learn more <a href="/about" style={{ color: '#3b82f6', textDecoration: 'none' }}>about my background</a> or 
              <a href="/publications" style={{ color: '#3b82f6', textDecoration: 'none' }}>view my research publications</a>.
            </p>
          </div>

          <div className="grid-responsive mobile-grid-1" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            width: '100%',
            maxWidth: '100%'
          }}>
            {coreExpertise.map((expertise, index) => {
              const Icon = getIcon(expertise.icon)
              return (
                <div 
                  key={index} 
                  className={`card animate-fade-in-up animate-delay-${index * 100}`}
                  style={{
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{
                    width: '4rem',
                    height: '4rem',
                    background: `linear-gradient(135deg, ${expertise.color}40, ${expertise.color}20)`,
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    boxShadow: `0 4px 12px ${expertise.color}20`,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)'
                    e.currentTarget.style.boxShadow = `0 8px 20px ${expertise.color}30`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
                    e.currentTarget.style.boxShadow = `0 4px 12px ${expertise.color}20`
                  }}
                  >
                    <Icon style={{ color: expertise.color }} size={32} />
                  </div>
                  <h3 className="mobile-text-lg" style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '0.5rem',
                    textAlign: 'center'
                  }}>
                    {expertise.title}
                  </h3>
                  <p className="mobile-text-sm" style={{
                    color: '#64748b',
                    textAlign: 'center',
                    lineHeight: '1.6'
                  }}>
                    {expertise.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Social Media & Contact Section */}
      <section className="section" style={{ backgroundColor: '#1e293b', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ color: 'white' }}>
              Connect with <span style={{ color: '#3b82f6' }}>Fuhad</span>
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#cbd5e1',
              maxWidth: '40rem',
              margin: '0 auto'
            }}>
              Find me on all social media platforms and get in touch for IoT projects, 
              collaborations, and professional networking opportunities. Check out my work on 
              <a href="https://github.com/fuhadc" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', textDecoration: 'none' }}> GitHub</a> and 
              <a href="https://www.researchgate.net/profile/Muhammed-Fuhad" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', textDecoration: 'none' }}> ResearchGate</a>.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="grid-responsive mobile-grid-1" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {socialLinks.map((social, index) => {
              const Icon = getIcon(social.icon)
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.75rem',
                    textDecoration: 'none',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    minHeight: '44px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                    e.target.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                    e.target.style.transform = 'translateY(0)'
                  }}
                >
                  <Icon size={24} style={{ marginRight: '0.75rem' }} />
                  <div>
                    <div className="mobile-text-sm" style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                      {social.name}
                    </div>
                    <div className="mobile-text-sm" style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>
                      {social.username}
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="mobile-flex-col" style={{ textAlign: 'center' }}>
            <button
              onClick={() => {
                const element = document.getElementById('social')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="touch-target"
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
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                marginRight: '1rem',
                marginBottom: '1rem',
                border: 'none',
                cursor: 'pointer',
                minHeight: '44px',
                width: '100%',
                maxWidth: '280px',
                justifyContent: 'center'
              }}
            >
              View All Social Links
              <ExternalLink style={{ marginLeft: '0.5rem' }} size={20} />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="touch-target"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '1rem 2rem',
                backgroundColor: 'transparent',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.75rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: '2px solid white',
                cursor: 'pointer',
                minHeight: '44px',
                width: '100%',
                maxWidth: '280px',
                justifyContent: 'center'
              }}
            >
              Contact Me
              <Mail style={{ marginLeft: '0.5rem' }} size={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  )
})

Home.displayName = 'Home'

export default Home