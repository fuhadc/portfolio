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

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Toyota Industries Engine India Private Limited",
      location: "Bengaluru, Karnataka, India",
      type: "Internship",
      duration: "Jan 2023 – Mar 2024",
      description: "Built tools for engine testing automation and error analytics (TNGA project). Developed APIs using Flask Restful. Designed a Flutter app for production activity management (HCPS project).",
      achievements: [
        "Demonstrated strong programming skills by developing software tools to automate engine testing, error detection, and analytics for the TNGA project.",
        "Proven experience in API development using Flask Restful to enhance project functionality and performance.",
        "Successfully improved company efficiency and productivity by creating a user-friendly Flutter application for managing production activity as part of the HCPS project."
      ],
      technologies: ["Python", "Flask", "Flutter", "Dart", "SQL", "Automation"],
      icon: Code,
      color: "#3b82f6"
    },
    {
      title: "Digital Marketing In-Charge",
      company: "Henna Maternity Corner",
      location: "Malappuram, Kerala, India",
      type: "Full-time",
      duration: "Aug 2022 – Dec 2022",
      description: "Oversaw digital marketing campaigns and improved online presence. Analyzed and reported marketing metrics for better decision-making.",
      achievements: [
        "Oversaw the digital marketing campaigns and improved online presence",
        "Analyzed and reported marketing metrics for better decision-making",
        "Managed social media presence and content strategy"
      ],
      technologies: ["Digital Marketing", "SEO", "Analytics", "Social Media"],
      icon: BarChart3,
      color: "#10b981"
    },
    {
      title: "Machine Learning Intern",
      company: "Futurism Technologies and Consulting Private Limited",
      location: "Bengaluru, Karnataka, India",
      type: "Internship",
      duration: "Jun 2022 – Jul 2022",
      description: "Designed and implemented machine learning models for IoT-based data collection and processing. Conducted data preprocessing and model evaluation.",
      achievements: [
        "Designed and implemented machine learning models for IoT-based data collection and processing",
        "Conducted data preprocessing and model evaluation",
        "Worked on real-world IoT data analysis projects"
      ],
      technologies: ["Machine Learning", "Python", "IoT", "Data Processing"],
      icon: Database,
      color: "#8b5cf6"
    },
    {
      title: "IoT Intern",
      company: "Industry Institute Interaction Cell (IIIC) - JNEC",
      location: "Bengaluru, Karnataka, India",
      type: "Internship",
      duration: "May 2022 – Jun 2022",
      description: "Developed IoT prototypes for smart applications. Collaborated with teams to build real-world IoT solutions.",
      achievements: [
        "Developed IoT prototypes for smart applications",
        "Collaborated with teams to build real-world IoT solutions",
        "Gained hands-on experience with IoT hardware and software integration"
      ],
      technologies: ["IoT", "Arduino", "Raspberry Pi", "Sensors", "Prototyping"],
      icon: Smartphone,
      color: "#f59e0b"
    }
  ]

  return (
    <div style={{ padding: '2rem 0', minHeight: '100vh' }}>
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
            const Icon = exp.icon
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
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#3b82f6',
                marginBottom: '0.5rem'
              }}>
                1+
              </div>
              <div style={{ color: '#64748b' }}>Years Experience</div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#10b981',
                marginBottom: '0.5rem'
              }}>
                4
              </div>
              <div style={{ color: '#64748b' }}>Companies</div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#8b5cf6',
                marginBottom: '0.5rem'
              }}>
                7+
              </div>
              <div style={{ color: '#64748b' }}>Projects Completed</div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#f59e0b',
                marginBottom: '0.5rem'
              }}>
                10+
              </div>
              <div style={{ color: '#64748b' }}>Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience