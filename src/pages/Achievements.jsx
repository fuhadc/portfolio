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
import achievementsData from '../data/achievements.json'
import { getIcon } from '../utils/iconMapper'

const Achievements = () => {
  const { achievements, volunteering, stats } = achievementsData

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
              const Icon = getIcon(achievement.icon)
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
              const Icon = getIcon(achievement.icon)
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
              const Icon = getIcon(volunteer.icon)
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