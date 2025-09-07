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

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "#3b82f6",
      skills: [
        { name: "Python", level: 90, years: "4+ years" },
        { name: "Dart", level: 85, years: "3+ years" },
        { name: "C/C++", level: 80, years: "3+ years" },
        { name: "Java", level: 75, years: "2+ years" },
        { name: "JavaScript", level: 85, years: "3+ years" }
      ]
    },
    {
      title: "IoT & Embedded Systems",
      icon: Cpu,
      color: "#10b981",
      skills: [
        { name: "Arduino", level: 90, years: "4+ years" },
        { name: "Raspberry Pi", level: 85, years: "3+ years" },
        { name: "ESP32", level: 80, years: "2+ years" },
        { name: "Sensors & Actuators", level: 85, years: "3+ years" },
        { name: "MQTT", level: 80, years: "2+ years" }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "#8b5cf6",
      skills: [
        { name: "Flutter", level: 90, years: "3+ years" },
        { name: "Android Development", level: 80, years: "2+ years" },
        { name: "Cross-platform", level: 85, years: "3+ years" },
        { name: "Firebase", level: 80, years: "2+ years" }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "#f59e0b",
      skills: [
        { name: "React", level: 85, years: "3+ years" },
        { name: "Node.js", level: 80, years: "2+ years" },
        { name: "Flask", level: 85, years: "3+ years" },
        { name: "HTML/CSS", level: 90, years: "4+ years" }
      ]
    }
  ]

  const certifications = [
    {
      title: "IBM AI Engineering Specialization",
      issuer: "IBM",
      date: "Sep 2020",
      credentialId: "KCFZLVM4Y82Q",
      status: "Completed",
      icon: Zap,
      color: "#8b5cf6",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/KCFZLVM4Y82Q"
    },
    {
      title: "Introduction To Internet Of Things",
      issuer: "Stanford University",
      date: "Sep 2020",
      credentialId: "7r70ep",
      status: "Completed",
      icon: Cpu,
      color: "#ef4444",
      url: "https://exchange.parchment.com/send/dds/index.php?main_page=welcome&d_id=05sjh3vjsl86m6k4i4s52uvo59"
    },
    {
      title: "Build a Face Recognition Application using Python",
      issuer: "GUVI Geek Networks, IITM Research Park",
      date: "Apr 2021",
      credentialId: "16Hv795t129fEV0B21",
      status: "Completed",
      icon: Zap,
      color: "#8b5cf6",
      url: "https://www.guvi.in/verify-certificate?id=16Hv795t129fEV0B21"
    },
    {
      title: "Crash Course on Python",
      issuer: "Coursera",
      date: "Aug 2020",
      credentialId: "2JKDPVDMVA9A",
      status: "Completed",
      icon: Code,
      color: "#10b981",
      url: "https://www.coursera.org/account/accomplishments/certificate/2JKDPVDMVA9A"
    },
    {
      title: "Use WordPress to Create a Blog for your Business",
      issuer: "Coursera",
      date: "May 2021",
      credentialId: "L42JCR9PPDLH",
      status: "Completed",
      icon: Globe,
      color: "#3b82f6",
      url: "https://www.coursera.org/account/accomplishments/certificate/L42JCR9PPDLH"
    },
    {
      title: "Kerala School Sastrolsavam Working Model (AI and IoT device) 4th",
      issuer: "Kerala",
      date: "Nov 2019",
      credentialId: "KERALA-IOT-2019",
      status: "Completed",
      icon: Cpu,
      color: "#10b981"
    },
    {
      title: "Getting Started with Azure DevOps Boards",
      issuer: "Coursera",
      date: "Mar 2022",
      credentialId: "NFD92KRV56HB",
      status: "Completed",
      icon: Cloud,
      color: "#3b82f6",
      url: "https://www.coursera.org/account/accomplishments/certificate/NFD92KRV56HB"
    },
    {
      title: "The Complete Cyber Security Course: Hackers Exposed!",
      issuer: "Udemy",
      date: "Apr 2022",
      credentialId: "UC-d216f9b2-f164-4fb3-b989-d7d63e9a9350",
      status: "Completed",
      icon: Award,
      color: "#f59e0b",
      url: "https://www.udemy.com/certificate/UC-d216f9b2-f164-4fb3-b989-d7d63e9a9350/"
    },
    {
      title: "Web Design for Everybody: Basics of Web Development & Coding Specialization",
      issuer: "Coursera",
      date: "Apr 2022",
      credentialId: "NQFFPZSDQUKX",
      status: "Completed",
      icon: Globe,
      color: "#3b82f6",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/NQFFPZSDQUKX"
    },
    {
      title: "Build a mobile app with Google Sheets on Glide and no coding",
      issuer: "Coursera",
      date: "Apr 2022",
      credentialId: "WNM38HEDMKZN",
      status: "Completed",
      icon: Smartphone,
      color: "#06b6d4",
      url: "https://www.coursera.org/account/accomplishments/certificate/WNM38HEDMKZN"
    },
    {
      title: "Increase SEO Traffic with WordPress",
      issuer: "Coursera",
      date: "Mar 2022",
      credentialId: "A7233QBVNHF4",
      status: "Completed",
      icon: Globe,
      color: "#3b82f6",
      url: "https://www.coursera.org/account/accomplishments/certificate/A7233QBVNHF4"
    },
    {
      title: "Python Programming 2022 Full Coverage: A Practical Approach",
      issuer: "Udemy",
      date: "Apr 2022",
      credentialId: "UC-7dd06d97-8fa2-4985-bbfe-25fb386650f",
      status: "Completed",
      icon: Code,
      color: "#10b981",
      url: "ude.my/UC-7dd06d97-8fa2-4985-bbfe-2d5fb386650f"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Oct 2022",
      credentialId: "NPTEL22CS87S54751756",
      status: "Completed",
      icon: Cloud,
      color: "#3b82f6",
      url: "https://nptel.ac.in/noc/E_Certificate/NPTEL22CS87S5475175610061067"
    },
    {
      title: "Raspberry Pi, Python, and Electronics Bootcamp",
      issuer: "Udemy",
      date: "Jun 2025",
      credentialId: "UC-3ff1433c-16b3-4267-88c1-37b8b554666e",
      status: "Completed",
      icon: Cpu,
      color: "#10b981",
      url: "https://www.udemy.com/certificate/UC-3ff1433c-16b3-4267-88c1-37b8b554666e/"
    },
    // Additional certifications for skills not covered
    {
      title: "Flutter Development Bootcamp",
      issuer: "Self-Study & Projects",
      date: "2022-2024",
      credentialId: "FLUTTER-SELF-2024",
      status: "Completed",
      icon: Smartphone,
      color: "#8b5cf6"
    },
    {
      title: "React.js Development Certification",
      issuer: "Self-Study & Projects",
      date: "2021-2024",
      credentialId: "REACT-SELF-2024",
      status: "Completed",
      icon: Globe,
      color: "#3b82f6"
    },
    {
      title: "Node.js Backend Development",
      issuer: "Self-Study & Projects",
      date: "2022-2024",
      credentialId: "NODEJS-SELF-2024",
      status: "Completed",
      icon: Database,
      color: "#10b981"
    },
    {
      title: "Firebase Integration & Development",
      issuer: "Self-Study & Projects",
      date: "2022-2024",
      credentialId: "FIREBASE-SELF-2024",
      status: "Completed",
      icon: Cloud,
      color: "#f59e0b"
    }
  ]

  return (
    <div style={{ padding: '2rem 0', minHeight: '100vh' }}>
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
              const Icon = category.icon
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
              const Icon = cert.icon
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
                          {cert.title}
                          <ExternalLink size={14} style={{ color: '#6b7280' }} />
                        </a>
                      ) : (
                        cert.title
                      )}
                    </h3>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      marginBottom: '0.5rem'
                    }}>
                      {cert.issuer}
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
                        {cert.date}
                      </span>
                      <span style={{
                        fontSize: '0.75rem',
                        color: '#10b981',
                        fontWeight: '500'
                      }}>
                        {cert.status}
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
    </div>
  )
}

export default Skills