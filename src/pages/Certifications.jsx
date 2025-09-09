import React, { useState } from 'react'
import { 
  Award, 
  ExternalLink, 
  Eye,
  Download,
  Calendar,
  Building
} from 'lucide-react'
import SEO from '../components/SEO'
import certificationsData from '../data/certifications.json'
import { getIcon } from '../utils/iconMapper'

const Certifications = () => {
  const { certifications } = certificationsData
  const [selectedImage, setSelectedImage] = useState(null)

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <div style={{ padding: '2rem 0', minHeight: '100vh' }}>
      <SEO 
        title="Certifications - Muhammed Fuhad C (Fuad) | Professional Certifications & Achievements | Skills Validation"
        description="View the professional certifications and achievements of Muhammed Fuhad C (Fuad) including IBM AI Engineering, Stanford IoT, Coursera specializations, and more. Validated skills in IoT, AI, and development."
        keywords="fuad certifications, fuhad certifications, muhammed fuhad c certifications, IBM AI Engineering, Stanford IoT, Coursera certificates, professional certifications, Udemy courses, NPTEL, skills validation, verified skills, professional development, AI, IoT, web development, python, machine learning"
        url="/certifications"
        type="article"
        section="Portfolio"
        tags={["Certifications", "Professional Development", "AI Engineering", "IoT", "Web Development", "Python", "Skills Validation", "Verified Skills", "Machine Learning"]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Certifications - Muhammed Fuhad C (Fuad) | Professional Certifications & Achievements",
          "description": "View the professional certifications and achievements of Muhammed Fuhad C (Fuad) including IBM AI Engineering, Stanford IoT, Coursera specializations, and more.",
          "author": {
            "@type": "Person",
            "name": "Muhammed Fuhad C",
            "alternateName": ["Fuhad C", "Fuad", "Fuhad", "Muhammed Fuhad"]
          },
          "publisher": {
            "@type": "Person",
            "name": "Muhammed Fuhad C"
          },
          "datePublished": "2024-01-01",
          "dateModified": new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://muhammedfuhadc.dev/certifications"
          },
          "about": [
            {
              "@type": "Thing",
              "name": "Professional Certifications"
            },
            {
              "@type": "Thing",
              "name": "Skills Validation"
            },
            {
              "@type": "Thing",
              "name": "AI Engineering"
            },
            {
              "@type": "Thing",
              "name": "IoT Development"
            }
          ],
          "mentions": certifications.map(cert => ({
            "@type": "EducationalOccupationalCredential",
            "name": cert.name,
            "description": cert.authority,
            "credentialCategory": "certification",
            "recognizedBy": {
              "@type": "Organization",
              "name": cert.authority
            },
            "validFrom": cert.startedOn,
            "validUntil": cert.finishedOn
          }))
        }}
      />
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="section-title">Professional Certifications</h1>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#64748b', 
            maxWidth: '32rem', 
            margin: '0 auto' 
          }}>
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        {/* Certifications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {certifications.map((cert, index) => {
            const Icon = getIcon(cert.icon)
            return (
              <div key={index} className="card" style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                {/* Certificate Image or Icon */}
                <div style={{
                  width: '100%',
                  height: '200px',
                  backgroundColor: '#f1f5f9',
                  borderRadius: '0.75rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #e2e8f0',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {cert.image && cert.image.trim() !== '' ? (
                    <>
                      <img 
                        src={cert.image} 
                        alt={cert.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                      <button
                        onClick={() => openImageModal(cert.image)}
                        style={{
                          position: 'absolute',
                          top: '0.5rem',
                          right: '0.5rem',
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '0.375rem',
                          padding: '0.5rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
                        }}
                      >
                        <Eye size={14} />
                        View
                      </button>
                    </>
                  ) : (
                    <Icon size={48} color={cert.color} />
                  )}
                </div>

                {/* Certificate Details */}
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '0.75rem',
                    lineHeight: '1.4'
                  }}>
                    {cert.name}
                  </h3>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <Building size={16} color="#6b7280" style={{ marginRight: '0.5rem' }} />
                    <span style={{
                      color: '#6b7280',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>
                      {cert.authority}
                    </span>
                  </div>

                  {cert.licenseNumber && (
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#9ca3af',
                      marginBottom: '1rem',
                      fontFamily: 'monospace'
                    }}>
                      License: {cert.licenseNumber}
                    </div>
                  )}

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <Calendar size={16} color="#6b7280" style={{ marginRight: '0.5rem' }} />
                    <span style={{
                      color: '#6b7280',
                      fontSize: '0.875rem'
                    }}>
                      {cert.startedOn}
                      {cert.finishedOn && ` - ${cert.finishedOn}`}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '0.75rem',
                  marginTop: 'auto',
                  paddingTop: '1rem',
                  borderTop: '1px solid #e2e8f0'
                }}>
                  {cert.url && (
                    <a
                      href={cert.url}
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
                        transition: 'all 0.3s ease',
                        flex: 1,
                        justifyContent: 'center'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#2563eb'
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#3b82f6'
                      }}
                    >
                      <ExternalLink size={14} style={{ marginRight: '0.25rem' }} />
                      View Certificate
                    </a>
                  )}
                  
                  {cert.image && (
                    <button
                      onClick={() => openImageModal(cert.image)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.5rem 1rem',
                        backgroundColor: '#10b981',
                        color: 'white',
                        border: 'none',
                        borderRadius: '0.5rem',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        flex: 1,
                        justifyContent: 'center'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#059669'
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#10b981'
                      }}
                    >
                      <Eye size={14} style={{ marginRight: '0.25rem' }} />
                      View Image
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '2rem'
        }}>
          <div style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh'
          }}>
            <img 
              src={selectedImage} 
              alt="Certificate" 
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '0.5rem'
              }}
            />
            <button
              onClick={closeImageModal}
              style={{
                position: 'absolute',
                top: '-2.5rem',
                right: '0',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Certifications
