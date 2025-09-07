import React from 'react'
import { 
  Code, 
  ExternalLink, 
  Github, 
  Smartphone, 
  Cpu, 
  Globe,
  Database,
  FileText,
  Calendar,
  Award
} from 'lucide-react'
import SEO from '../components/SEO'

const Projects = () => {
  const projects = [
    {
      title: "Home Automation IoT System",
      description: "Developed a comprehensive home automation system using IoT technologies for smart home control and monitoring. Features real-time sensor data and remote control capabilities.",
      image: "/api/placeholder/400/250",
      technologies: ["Arduino", "Sensors", "Python", "IoT Protocols", "Home Automation"],
      features: [
        "Real-time home monitoring",
        "Automated device control",
        "Energy optimization",
        "Remote access capabilities",
        "Smart home integration"
      ],
      links: {
        code: "https://github.com/fuhadc/home_automation",
        demo: "https://github.com/fuhadc/home_automation",
        paper: "https://doi.org/10.1007/978-981-97-1841-2_14"
      },
      status: "Completed",
      year: "2024",
      category: "IoT",
      icon: Cpu,
      color: "#10b981"
    },
    {
      title: "Breast Cancer Admin System",
      description: "Developed an administrative system for breast cancer management with comprehensive data handling and monitoring capabilities. Features advanced analytics and reporting.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Web Framework", "Database", "Admin Panel", "Analytics"],
      features: [
        "Comprehensive data management",
        "Real-time analytics dashboard",
        "Admin panel for system control",
        "Data visualization",
        "Automated reporting"
      ],
      links: {
        code: "https://github.com/fuhadc/brestcanceradmin",
        demo: "https://github.com/fuhadc/brestcanceradmin",
        paper: "https://doi.org/10.1109/ICRTEC56977.2023.10111891"
      },
      status: "Completed",
      year: "2023",
      category: "IoT",
      icon: Cpu,
      color: "#3b82f6"
    },
    {
      title: "RakthSeva Blood Donation App",
      description: "Created a user-friendly mobile application to connect blood donors and recipients. Flutter-based platform with real-time notifications and location-based search.",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "Dart", "Firebase", "Google Maps", "Push Notifications"],
      features: [
        "User registration and authentication",
        "Blood group matching system",
        "Location-based donor search",
        "Real-time notifications",
        "Donor history tracking"
      ],
      links: {
        code: "https://github.com/fuhadc/rakthseva",
        demo: "https://github.com/fuhadc/rakthseva",
        app: "https://github.com/fuhadc/rakthseva"
      },
      status: "Completed",
      year: "2023",
      category: "Mobile App",
      icon: Smartphone,
      color: "#8b5cf6"
    },
    {
      title: "IoT Visualization Dashboard and Control System Web App",
      description: "Built a comprehensive web app for visualizing and managing IoT devices with fog computing. Abstract presented at ARAIMESF 2024, NIT Rourkela.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Fog Computing", "IoT", "WebSocket"],
      features: [
        "IoT device visualization",
        "Fog computing integration",
        "Real-time data monitoring",
        "Control system interface",
        "Abstract presented at conference"
      ],
      links: {
        code: "https://github.com/fuhadc/iotDash",
        demo: "https://github.com/fuhadc/iotDash"
      },
      status: "Completed",
      year: "2024",
      category: "Web App",
      icon: Globe,
      color: "#f59e0b"
    },
    {
      title: "News App",
      description: "Developed a mobile app for browsing and categorizing news articles with API integration. Cross-platform application with real-time news updates.",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "Dart", "API Integration", "News APIs", "Categorization"],
      features: [
        "News article browsing",
        "Category-based filtering",
        "API integration",
        "Real-time updates",
        "User-friendly interface"
      ],
      links: {
        code: "https://github.com/fuhadc/NewsApi",
        demo: "https://github.com/fuhadc/NewsApi"
      },
      status: "Completed",
      year: "2023",
      category: "Mobile App",
      icon: Smartphone,
      color: "#06b6d4"
    },
    {
      title: "QR Code Generator Mobile App",
      description: "Developed a mobile application for generating QR codes with various customization options. Cross-platform app with multiple QR code formats and sharing capabilities.",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "Dart", "QR Code Generation", "Mobile Development", "Cross-platform"],
      features: [
        "Multiple QR code formats",
        "Customizable designs",
        "Cross-platform support",
        "Share functionality",
        "History tracking"
      ],
      links: {
        code: "https://github.com/fuhadc/Qr-Code-Generator-Mobile-App",
        demo: "https://github.com/fuhadc/Qr-Code-Generator-Mobile-App"
      },
      status: "Completed",
      year: "2023",
      category: "Mobile App",
      icon: Smartphone,
      color: "#ef4444"
    },
    {
      title: "Fog Computing Integration Web App",
      description: "Engineered a web app demonstrating IoT and fog computing integration. Showcases the potential of fog computing in IoT applications.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Fog Computing", "IoT", "Web Development", "Integration"],
      features: [
        "Fog computing demonstration",
        "IoT integration showcase",
        "Web-based interface",
        "Real-time data processing",
        "Educational platform"
      ],
      links: {
        code: "https://github.com/fuhadc/fogioten",
        demo: "https://github.com/fuhadc/fogioten"
      },
      status: "Completed",
      year: "2023",
      category: "Web App",
      icon: Globe,
      color: "#8b5cf6"
    },
    {
      title: "Google Drive CRM System",
      description: "A comprehensive Flask-based CRM application that integrates with Google Drive to process ZIP files containing images and generate reports. Features advanced image optimization, memory management, and production-ready deployment.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Flask", "MongoDB", "Google Drive API", "Redis", "Celery"],
      features: [
        "Google Drive integration for automatic file monitoring",
        "Image processing with IR generation capabilities",
        "Advanced image optimization with thumbnails",
        "MongoDB-based data storage",
        "Background task processing with Celery",
        "Memory management and monitoring"
      ],
      links: {
        code: "https://github.com/fuhadc/google-drive-crm",
        demo: "https://google-drive-crm.fuhadc.dev"
      },
      status: "Completed",
      year: "2024",
      category: "CRM",
      icon: Database,
      color: "#059669"
    },
    {
      title: "AUSS Market Platform",
      description: "A Python Flask-based marketplace application for the Australian market. Features admin panel, payment processing, real-time updates, and comprehensive product management system.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Flask", "Admin Panel", "Payment Processing", "Real-time Updates"],
      features: [
        "Admin panel for marketplace management",
        "Payment processing integration",
        "Real-time updates and notifications",
        "Product management system",
        "Performance testing with Locust",
        "Production deployment ready"
      ],
      links: {
        code: "https://github.com/fuhadc/auss-market",
        demo: "https://auss-market.fuhadc.dev"
      },
      status: "In Development",
      year: "2024",
      category: "Web App",
      icon: Globe,
      color: "#dc2626"
    },
    {
      title: "Virtual Assistant using Python",
      description: "Built an intelligent virtual assistant using Python with voice recognition and natural language processing capabilities. Features multiple AI integrations and automation.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Speech Recognition", "NLP", "AI Integration", "Automation"],
      features: [
        "Voice recognition capabilities",
        "Natural language processing",
        "AI-powered responses",
        "Task automation",
        "Multi-platform support",
        "Custom command integration"
      ],
      links: {
        code: "https://github.com/fuhadc/virtual-assistant-using-python",
        demo: "https://github.com/fuhadc/virtual-assistant-using-python"
      },
      status: "Completed",
      year: "2023",
      category: "AI/ML",
      icon: Database,
      color: "#7c3aed"
    },
    {
      title: "Weather Monitor Web App",
      description: "Developed a comprehensive weather monitoring web application with real-time data visualization and forecasting capabilities. Features interactive charts and location-based weather data.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Flask", "Weather API", "Data Visualization", "Web Development"],
      features: [
        "Real-time weather data",
        "Interactive data visualization",
        "Location-based forecasting",
        "Historical weather analysis",
        "Responsive web interface"
      ],
      links: {
        code: "https://github.com/fuhadc/whether-monitor-web-app",
        demo: "https://github.com/fuhadc/whether-monitor-web-app"
      },
      status: "Completed",
      year: "2023",
      category: "Web App",
      icon: Globe,
      color: "#06b6d4"
    },
    {
      title: "PDF to DOCX Converter",
      description: "Built a powerful document conversion tool that converts PDF files to DOCX format with high accuracy. Features batch processing and format preservation.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Document Processing", "File Conversion", "Automation", "CLI"],
      features: [
        "High-accuracy PDF conversion",
        "Batch processing capabilities",
        "Format preservation",
        "Command-line interface",
        "Error handling and validation"
      ],
      links: {
        code: "https://github.com/fuhadc/pdftodocx",
        demo: "https://github.com/fuhadc/pdftodocx"
      },
      status: "Completed",
      year: "2023",
      category: "Web App",
      icon: FileText,
      color: "#059669"
    }
  ]

  const projectStats = [
    { label: "Total Projects", value: "13", icon: Code },
    { label: "IoT Projects", value: "3", icon: Cpu },
    { label: "Mobile Apps", value: "3", icon: Smartphone },
    { label: "Web Apps", value: "6", icon: Globe },
    { label: "AI/ML Projects", value: "1", icon: Database }
  ]

  const categories = ["All", "IoT", "Mobile App", "Web App", "CRM", "AI/ML"]

  return (
    <div style={{ padding: '2rem 0', minHeight: '100vh' }}>
      <SEO 
        title="Projects - Muhammed Fuhad C | IoT, Mobile Apps & Web Development"
        description="Explore the portfolio of projects by Muhammed Fuhad C including IoT solutions, mobile applications, web development, and smart agriculture systems."
        keywords="Muhammed Fuhad C projects, IoT projects, mobile app development, web development, smart agriculture, healthcare monitoring, Flutter apps, React projects"
        url="/projects"
        type="article"
        section="Portfolio"
        tags={["Projects", "IoT", "Mobile Apps", "Web Development", "Smart Agriculture", "Healthcare Monitoring"]}
      />
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="section-title">Featured Projects</h1>
          <p className="text-responsive" style={{ 
            color: '#64748b', 
            maxWidth: '32rem', 
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            A showcase of my work spanning IoT systems, mobile applications, web development, and innovative solutions
          </p>
        </div>

        {/* Project Stats */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            {projectStats.map((stat, index) => {
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

        {/* Projects Grid */}
        <div>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            color: '#1e293b', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Project Portfolio
          </h2>
          
          <div className="grid-responsive">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <div key={index} className="card" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}>
                  {/* Project Image Placeholder */}
                  <div style={{
                    width: '100%',
                    height: '200px',
                    backgroundColor: '#f1f5f9',
                    borderRadius: '0.75rem',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #e2e8f0'
                  }}>
                    <Icon size={48} color={project.color} />
                  </div>

                  {/* Project Header */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem'
                  }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        color: '#1e293b',
                        marginBottom: '0.5rem',
                        lineHeight: '1.4'
                      }}>
                        {project.title}
                      </h3>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.5rem'
                      }}>
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: project.color,
                          color: 'white',
                          borderRadius: '1rem',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          {project.category}
                        </span>
                        <span style={{
                          color: '#6b7280',
                          fontSize: '0.875rem'
                        }}>
                          {project.year}
                        </span>
                      </div>
                    </div>
                    
                    <div style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: project.status === 'Completed' ? '#dcfce7' : '#fef3c7',
                      color: project.status === 'Completed' ? '#166534' : '#92400e',
                      borderRadius: '1rem',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}>
                      {project.status}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    color: '#64748b',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    flex: 1
                  }}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '0.5rem'
                    }}>
                      Technologies:
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: '#f1f5f9',
                          color: '#475569',
                          borderRadius: '1rem',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          border: '1px solid #e2e8f0'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '0.5rem'
                    }}>
                      Key Features:
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {project.features.slice(0, 3).map((feature, featIndex) => (
                        <li key={featIndex} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          marginBottom: '0.25rem',
                          color: '#64748b',
                          fontSize: '0.75rem',
                          lineHeight: '1.4'
                        }}>
                          <div style={{
                            width: '0.25rem',
                            height: '0.25rem',
                            backgroundColor: project.color,
                            borderRadius: '50%',
                            marginRight: '0.5rem',
                            marginTop: '0.375rem',
                            flexShrink: 0
                          }}></div>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li style={{
                          color: '#6b7280',
                          fontSize: '0.75rem',
                          fontStyle: 'italic'
                        }}>
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Links */}
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                    marginTop: 'auto'
                  }}>
                    {project.links.code && (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '0.5rem 1rem',
                          backgroundColor: '#1f2937',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '0.5rem',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Github size={14} style={{ marginRight: '0.25rem' }} />
                        Code
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '0.5rem 1rem',
                          backgroundColor: '#3b82f6',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '0.5rem',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <ExternalLink size={14} style={{ marginRight: '0.25rem' }} />
                        Demo
                      </a>
                    )}
                    {project.links.paper && (
                      <a
                        href={project.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '0.5rem 1rem',
                          backgroundColor: '#10b981',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '0.5rem',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <FileText size={14} style={{ marginRight: '0.25rem' }} />
                        Paper
                      </a>
                    )}
                    {project.links.app && (
                      <a
                        href={project.links.app}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '0.5rem 1rem',
                          backgroundColor: '#8b5cf6',
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '0.5rem',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Smartphone size={14} style={{ marginRight: '0.25rem' }} />
                        App
                      </a>
                    )}
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

export default Projects