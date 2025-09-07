import React from 'react'
import { 
  Trophy, 
  Award, 
  Medal, 
  Users, 
  Calendar, 
  MapPin,
  Star,
  ExternalLink,
  Download
} from 'lucide-react'
import SEO from '../components/SEO'

const Achievements = () => {
  const achievements = [
    {
      title: "AI Integrated IoT Device for Voice Assistant",
      description: "Secured 4th place with A Grade in the Working Model event at Kerala School Sasthrolsavam 2019-2020 (State-Level). Developed an innovative AI-powered IoT device that combines voice recognition with smart home automation capabilities.",
      year: "2019-2020",
      category: "Competition",
      level: "State Level",
      position: "4th Place (A Grade)",
      organization: "Kerala School Sasthrolsavam",
      location: "Kerala, India",
      icon: Trophy,
      color: "#f59e0b",
      featured: true,
      details: [
        "Secured 4th place with A Grade in Working Model event",
        "Designed and built a complete voice assistant system",
        "Integrated AI voice recognition with IoT sensors",
        "Implemented smart home automation features",
        "Demonstrated at state-level science exhibition",
        "Received recognition for innovation and technical excellence"
      ]
    },
    {
      title: "Poster Presentation at Bangalore Tech Summit",
      description: "Presented research work on Contactless Continuous Temperature Monitoring System at the prestigious Bangalore Tech Summit 2022, showcasing innovative IoT solutions for pandemic control.",
      year: "2022",
      category: "Conference",
      level: "National Level",
      position: "Presented",
      organization: "Bangalore Tech Summit",
      location: "Bangalore, India",
      icon: Award,
      color: "#3b82f6",
      featured: false,
      details: [
        "Presented research on Contactless Continuous Temperature Monitoring System",
        "Showcased IoT solutions for pandemic control",
        "Networked with industry professionals",
        "Received positive feedback from experts"
      ]
    }
  ]

  const volunteering = [
    {
      title: "Congress on Intelligent Systems 2022 (CIS 2022)",
      organization: "CIS 2022 Conference",
      duration: "September 2022",
      description: "Volunteered at the Congress on Intelligent Systems 2022, contributing to the organization and execution of this prestigious academic conference.",
      impact: "Helped organize conference sessions and assisted attendees",
      icon: Users,
      color: "#3b82f6"
    },
    {
      title: "Tech Workshop for Students",
      organization: "Local Community Center",
      duration: "2021-2022",
      description: "Conducted workshops on IoT and programming for high school students, sharing knowledge and inspiring the next generation of technologists.",
      impact: "Trained 50+ students in basic IoT concepts and programming",
      icon: Users,
      color: "#10b981"
    }
  ]

  const stats = [
    { label: "Awards Won", value: "1", icon: Trophy },
    { label: "Competitions", value: "1", icon: Medal },
    { label: "Volunteering Events", value: "2+", icon: Users },
    { label: "Conference Presentations", value: "2+", icon: Star }
  ]

  return (
    <div style={{ padding: '2rem 0', minHeight: '100vh' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="section-title">Achievements & Volunteering</h1>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#64748b', 
            maxWidth: '32rem', 
            margin: '0 auto' 
          }}>
            Recognition for excellence in technology, research, and community service
          </p>
        </div>

        {/* Stats */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            {stats.map((stat, index) => {
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

        {/* Featured Achievements */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            color: '#1e293b', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Featured Achievements
          </h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {achievements.filter(ach => ach.featured).map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div key={index} className="card" style={{
                  border: `2px solid ${achievement.color}20`,
                  backgroundColor: `${achievement.color}05`
                }}>
                  {/* Header */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1.5rem',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '1rem'
                      }}>
                        <div style={{
                          width: '3rem',
                          height: '3rem',
                          backgroundColor: achievement.color,
                          borderRadius: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '1rem'
                        }}>
                          <Icon size={20} color="white" />
                        </div>
                        <div>
                          <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: '700',
                            color: '#1e293b',
                            marginBottom: '0.25rem'
                          }}>
                            {achievement.title}
                          </h3>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            flexWrap: 'wrap'
                          }}>
                            <span style={{
                              padding: '0.25rem 0.75rem',
                              backgroundColor: achievement.color,
                              color: 'white',
                              borderRadius: '1rem',
                              fontSize: '0.75rem',
                              fontWeight: '500'
                            }}>
                              {achievement.category}
                            </span>
                            <span style={{
                              color: '#6b7280',
                              fontSize: '0.875rem'
                            }}>
                              {achievement.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div style={{
                      textAlign: 'right'
                    }}>
                      <div style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: achievement.color,
                        marginBottom: '0.25rem'
                      }}>
                        {achievement.position}
                      </div>
                      <div style={{
                        color: '#6b7280',
                        fontSize: '0.875rem'
                      }}>
                        {achievement.level}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    color: '#64748b',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}>
                    {achievement.description}
                  </p>

                  {/* Organization & Location */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                    padding: '1rem',
                    backgroundColor: 'white',
                    borderRadius: '0.5rem',
                    border: '1px solid #e2e8f0',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div>
                      <div style={{
                        fontSize: '0.875rem',
                        color: '#6b7280',
                        marginBottom: '0.25rem'
                      }}>
                        Organization
                      </div>
                      <div style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#1e293b'
                      }}>
                        {achievement.organization}
                      </div>
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.875rem',
                        color: '#6b7280',
                        marginBottom: '0.25rem'
                      }}>
                        Location
                      </div>
                      <div style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#1e293b'
                      }}>
                        {achievement.location}
                      </div>
                    </div>
                  </div>

                  {/* Key Details */}
                  <div>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '0.75rem'
                    }}>
                      Key Highlights:
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {achievement.details.map((detail, detailIndex) => (
                        <li key={detailIndex} style={{
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
                            backgroundColor: achievement.color,
                            borderRadius: '50%',
                            marginRight: '0.75rem',
                            marginTop: '0.5rem',
                            flexShrink: 0
                          }}></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Other Achievements */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            color: '#1e293b', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Other Achievements
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {achievements.filter(ach => !ach.featured).map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div key={index} className="card">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      backgroundColor: achievement.color,
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem'
                    }}>
                      <Icon size={16} color="white" />
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: '#1e293b',
                        marginBottom: '0.25rem'
                      }}>
                        {achievement.title}
                      </h3>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: achievement.color,
                          color: 'white',
                          borderRadius: '1rem',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          {achievement.category}
                        </span>
                        <span style={{
                          color: '#6b7280',
                          fontSize: '0.75rem'
                        }}>
                          {achievement.year}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p style={{
                    color: '#64748b',
                    fontSize: '0.875rem',
                    lineHeight: '1.5',
                    marginBottom: '1rem'
                  }}>
                    {achievement.description}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#6b7280'
                    }}>
                      {achievement.organization}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: achievement.color
                    }}>
                      {achievement.position}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Volunteering Section */}
        <div>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            color: '#1e293b', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Volunteering & Community Service
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {volunteering.map((volunteer, index) => {
              const Icon = volunteer.icon
              return (
                <div key={index} className="card">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      backgroundColor: volunteer.color,
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem'
                    }}>
                      <Icon size={16} color="white" />
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: '#1e293b',
                        marginBottom: '0.25rem'
                      }}>
                        {volunteer.title}
                      </h3>
                      <div style={{
                        color: '#6b7280',
                        fontSize: '0.875rem'
                      }}>
                        {volunteer.organization} • {volunteer.duration}
                      </div>
                    </div>
                  </div>
                  
                  <p style={{
                    color: '#64748b',
                    fontSize: '0.875rem',
                    lineHeight: '1.5',
                    marginBottom: '1rem'
                  }}>
                    {volunteer.description}
                  </p>
                  
                  <div style={{
                    padding: '0.75rem',
                    backgroundColor: '#f8fafc',
                    borderRadius: '0.5rem',
                    border: '1px solid #e2e8f0'
                  }}>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#6b7280',
                      marginBottom: '0.25rem'
                    }}>
                      Impact:
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#1e293b',
                      fontWeight: '500'
                    }}>
                      {volunteer.impact}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements