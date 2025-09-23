import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Twitter, 
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Code,
  Briefcase
} from 'lucide-react'

const Social = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/fuhadc",
      icon: Github,
      color: "#1f2937",
      description: "View my code repositories and open source contributions",
      username: "@fuhadc"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/fuhadc",
      icon: Linkedin,
      color: "#0077b5",
      description: "Connect with me professionally and view my career journey",
      username: "Muhammed Fuhad C"
    },
    {
      name: "ResearchGate",
      href: "https://www.researchgate.net/profile/Muhammed-Fuhad",
      icon: BookOpen,
      color: "#00d4aa",
      description: "Check out my research publications and academic profile",
      username: "Muhammed Fuhad"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/_fuhad_c/",
      icon: Instagram,
      color: "#E4405F",
      description: "Follow me for behind-the-scenes content and personal updates",
      username: "@_fuhad_c"
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/fuhadcs3/",
      icon: Facebook,
      color: "#1877F2",
      description: "Connect with me on Facebook for updates and discussions",
      username: "Muhammed Fuhad C"
    },
    {
      name: "Twitter/X",
      href: "https://x.com/_fuhad_c",
      icon: Twitter,
      color: "#1DA1F2",
      description: "Follow me on Twitter for tech insights and quick updates",
      username: "@_fuhad_c"
    }
  ]

  const contactInfo = [
    {
      label: "Email",
      value: "fuhadcs@icloud.com",
      href: "mailto:fuhadcs@icloud.com",
      icon: Mail,
      color: "#ef4444"
    },
    {
      label: "Phone",
      value: "+91-7306525489",
      href: "tel:+917306525489",
      icon: Phone,
      color: "#10b981"
    },
    {
      label: "Location",
      value: "Kerala, India",
      href: "#",
      icon: MapPin,
      color: "#3b82f6"
    }
  ]

  const quickStats = [
    {
      icon: Code,
      label: "Projects",
      value: "10+",
      description: "IoT & Mobile Apps"
    },
    {
      icon: BookOpen,
      label: "Publications",
      value: "5+",
      description: "IEEE & Springer"
    },
    {
      icon: Award,
      label: "Certifications",
      value: "8+",
      description: "Professional"
    },
    {
      icon: Briefcase,
      label: "Experience",
      value: "2+",
      description: "Years"
    }
  ]

  return (
    <section id="social" className="section" style={{ padding: '4rem 0' }}>
      <Helmet>
        <title>Social Media & Contact - Muhammed Fuhad C | All Social Links & Contact Information</title>
        <meta name="description" content="Connect with Muhammed Fuhad C on all social media platforms. Find Instagram, Facebook, LinkedIn, GitHub, Twitter, and ResearchGate links. Get contact information and connect for IoT projects, collaborations, and professional networking." />
        <meta name="keywords" content="fuhad social media, muhammed fuhad c social media, instagram fuhad, facebook fuhad, linkedin fuhad, github fuhad, twitter fuhad, researchgate fuhad, contact fuhad, social media links, professional networking, iot developer contact, embedded systems developer contact, mobile app developer contact, research collaboration, hire developer, connect with fuhad, social media profiles, contact information, professional contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Social Media & Contact - Muhammed Fuhad C | All Social Links" />
        <meta property="og:description" content="Connect with Muhammed Fuhad C on all social media platforms. Find Instagram, Facebook, LinkedIn, GitHub, Twitter, and ResearchGate links." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mfuhad.xyz/social" />
        <meta property="og:image" content="https://www.mfuhad.xyz/social-og.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:title" content="Social Media & Contact - Muhammed Fuhad C | All Social Links" />
        <meta property="twitter:description" content="Connect with Muhammed Fuhad C on all social media platforms. Find Instagram, Facebook, LinkedIn, GitHub, Twitter, and ResearchGate links." />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://www.mfuhad.xyz/social-og.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Muhammed Fuhad C",
            "alternateName": ["Fuhad C", "Fuhad", "Muhammed Fuhad"],
            "url": "https://www.mfuhad.zyz/social",
            "sameAs": [
              "https://linkedin.com/in/fuhadc",
              "https://github.com/fuhadc",
              "https://www.researchgate.net/profile/Muhammed-Fuhad",
              "https://www.instagram.com/_fuhad_c",
              "https://x.com/_fuhad_c",
              "https://www.facebook.com/fuhadcs3"
            ],
            "email": "fuhadcs@icloud.com",
            "telephone": "+91-7306525489",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kerala",
              "addressRegion": "Kerala",
              "addressCountry": "India"
            }
          })}
        </script>
      </Helmet>

      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <div className="container" style={{ padding: '3rem 0' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>
              Connect with <span style={{ color: '#3b82f6' }}>Fuhad</span>
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#64748b', 
              maxWidth: '48rem', 
              margin: '0 auto' 
            }}>
              Find me on all social media platforms and get in touch for IoT projects, 
              collaborations, and professional networking opportunities.
            </p>
          </div>

          {/* Quick Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {quickStats.map((stat, index) => (
              <div key={index} className="card" style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: '#eff6ff',
                  borderRadius: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <stat.icon style={{ color: '#3b82f6' }} size={24} />
                </div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  marginBottom: '0.25rem'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  color: '#64748b',
                  fontWeight: '500',
                  marginBottom: '0.25rem'
                }}>
                  {stat.label}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#9ca3af'
                }}>
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Links */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '700', 
              color: '#1e293b', 
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Social Media Profiles
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1.5rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: `${social.color}20`,
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    flexShrink: 0
                  }}>
                    <social.icon size={24} style={{ color: social.color }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '0.25rem'
                    }}>
                      {social.name}
                    </h3>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      marginBottom: '0.5rem'
                    }}>
                      {social.username}
                    </p>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#64748b'
                    }}>
                      {social.description}
                    </p>
                  </div>
                  <ExternalLink size={20} style={{ color: '#9ca3af' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '700', 
              color: '#1e293b', 
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Contact Information
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="card"
                  style={{
                    textAlign: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <contact.icon 
                    size={32} 
                    style={{ 
                      color: contact.color,
                      margin: '0 auto 1rem',
                      display: 'block'
                    }} 
                  />
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '0.5rem'
                  }}>
                    {contact.label}
                  </h3>
                  <p style={{
                    color: '#64748b',
                    fontSize: '0.875rem'
                  }}>
                    {contact.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            borderRadius: '1rem',
            padding: '2rem',
            textAlign: 'center',
            color: 'white',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Ready to Collaborate?
            </h2>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '2rem',
              opacity: 0.9
            }}>
              Let's work together on your next IoT project, mobile app, or research collaboration.
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <a
                href="mailto:fuhadcs@icloud.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.75rem 2rem',
                  backgroundColor: 'white',
                  color: '#3b82f6',
                  textDecoration: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f1f5f9'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'white'
                }}
              >
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/fuhadc"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.75rem 2rem',
                  backgroundColor: 'transparent',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  border: '2px solid white',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white'
                  e.target.style.color = '#3b82f6'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.color = 'white'
                }}
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Social




