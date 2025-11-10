import React, { useState, useRef } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  ExternalLink,
  MessageCircle,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle
} from 'lucide-react'
import emailjs from '@emailjs/browser'
import SEO from '../components/SEO'
import contactData from '../data/contact.json'
import { getIcon } from '../utils/iconMapper'
import { useAnalytics } from '../hooks/useAnalytics'

const Contact = () => {
  const form = useRef()
  const analytics = useAnalytics()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    }
  }

  const validateForm = () => {
    const errors = {}
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long'
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      // EmailJS configuration - you'll need to replace these with your actual EmailJS credentials
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_1234567'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_1234567'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Muhammed Fuhad C',
        reply_to: formData.email
      }
      
      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      
      console.log('Email sent successfully:', result)
      
      // Track successful form submission
      analytics.trackEvent('contact_form_submit', {
        event_category: 'Contact',
        event_label: 'Form Submission',
        form_subject: formData.subject,
        form_name: formData.name
      })
      
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setFormErrors({})
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
      
    } catch (error) {
      console.error('Error sending email:', error)
      
      // Track form submission error
      analytics.trackEvent('contact_form_error', {
        event_category: 'Contact',
        event_label: 'Form Error',
        error_message: error.message || 'Unknown error'
      })
      
      setIsSubmitting(false)
      
      // Create mailto link as fallback
      const mailtoLink = `mailto:fuhadcs@icloud.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`
      
      setSubmitError(
        <div>
          <p>Failed to send message automatically. Please click the button below to send via your email client:</p>
          <a 
            href={mailtoLink}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.5rem 1rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              marginTop: '0.5rem',
              gap: '0.5rem'
            }}
          >
            <Mail size={16} />
            Open Email Client
          </a>
        </div>
      )
    }
  }

  const { contactInfo, socialLinks, availability } = contactData

  // Generate structured data for contact
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "headline": "Contact Muhammed Fuhad C | Get In Touch for IoT & Development Projects",
    "description": "Get in touch with Muhammed Fuhad C for IoT projects, Embedded Systems development, mobile app development, and research collaborations. Find all social media links and contact information.",
    "mainEntity": {
      "@type": "Person",
      "name": "Muhammed Fuhad C",
      "alternateName": ["Fuhad C", "Fuhad", "Muhammed Fuhad"],
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
      ]
    },
    "author": {
      "@type": "Person",
      "name": "Muhammed Fuhad C"
    },
    "publisher": {
      "@type": "Person",
      "name": "Muhammed Fuhad C"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.mfuhad.xyz/contact"
    }
  }

  return (
    <section id="contact" className="section" style={{ padding: '4rem 0' }}>
      <SEO 
        title="Contact Muhammed Fuhad C | Get In Touch for IoT & Development Projects | Social Media"
        description="Get in touch with Muhammed Fuhad C for IoT projects, Embedded Systems development, mobile app development, and research collaborations. Find all social media links and contact information."
        keywords="contact fuhad, contact muhammed fuhad c, IoT projects, Embedded Systems development, mobile app development, research collaboration, hire developer, instagram, facebook, linkedin, github, twitter, researchgate, social media, contact, collaboration, hire, get in touch, connect"
        url="/contact"
        type="article"
        section="Contact"
        tags={["Contact", "Hire", "Collaboration", "IoT Projects", "Development Services", "Social Media", "Instagram", "Facebook", "LinkedIn", "GitHub", "Twitter", "ResearchGate", "Connect"]}
        structuredData={structuredData}
      />
      <div className="container">
        {/* Header */}
        <div className="animate-fade-in-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="section-title" style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Get In Touch
          </h1>
          <p className="mobile-text-sm animate-fade-in-up animate-delay-200" style={{ 
            fontSize: '1.125rem', 
            color: '#64748b', 
            maxWidth: '32rem', 
            margin: '0 auto',
            padding: '0 1rem',
            lineHeight: '1.7'
          }}>
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid-responsive-2 mobile-grid-1" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* Contact Form */}
          <div className="card animate-fade-in-up animate-delay-100">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '2rem'
            }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '1rem',
                boxShadow: '0 4px 12px rgba(59,130,246,0.3)'
              }}>
                <MessageCircle size={20} color="white" />
              </div>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #1e293b, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                margin: 0
              }}>
                Send a Message
              </h2>
            </div>

            {isSubmitted ? (
              <div className="animate-scale-in" style={{
                textAlign: 'center',
                padding: '3rem 2rem',
                background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                borderRadius: '1rem',
                border: '2px solid #86efac',
                boxShadow: '0 10px 30px rgba(16,185,129,0.15)'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '5rem',
                  height: '5rem',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  borderRadius: '50%',
                  marginBottom: '1.5rem',
                  boxShadow: '0 8px 20px rgba(16,185,129,0.3)',
                  animation: 'scaleIn 0.6s ease-out'
                }}>
                  <CheckCircle size={36} color="white" />
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #059669, #047857)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.75rem'
                }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ 
                  color: '#64748b', 
                  marginBottom: '2rem',
                  fontSize: '1.125rem',
                  lineHeight: '1.7'
                }}>
                  Thank you for your message. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.75rem 1.5rem',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    gap: '0.5rem'
                  }}
                >
                  <Send size={18} />
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit}>
                {submitError && (
                  <div style={{
                    padding: '1rem',
                    backgroundColor: '#fef2f2',
                    border: '1px solid #fecaca',
                    borderRadius: '0.5rem',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <XCircle size={20} color="#dc2626" />
                    <span style={{ color: '#dc2626', fontSize: '0.875rem' }}>
                      {submitError}
                    </span>
                  </div>
                )}
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: `1px solid ${formErrors.name ? '#dc2626' : '#d1d5db'}`,
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      backgroundColor: formErrors.name ? '#fef2f2' : 'white'
                    }}
                    placeholder="Your full name"
                  />
                  {formErrors.name && (
                    <p style={{
                      color: '#dc2626',
                      fontSize: '0.75rem',
                      marginTop: '0.25rem',
                      marginBottom: 0
                    }}>
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: `1px solid ${formErrors.email ? '#dc2626' : '#d1d5db'}`,
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      backgroundColor: formErrors.email ? '#fef2f2' : 'white'
                    }}
                    placeholder="your.email@example.com"
                  />
                  {formErrors.email && (
                    <p style={{
                      color: '#dc2626',
                      fontSize: '0.75rem',
                      marginTop: '0.25rem',
                      marginBottom: 0
                    }}>
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: `1px solid ${formErrors.subject ? '#dc2626' : '#d1d5db'}`,
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      backgroundColor: formErrors.subject ? '#fef2f2' : 'white'
                    }}
                    placeholder="What's this about?"
                  />
                  {formErrors.subject && (
                    <p style={{
                      color: '#dc2626',
                      fontSize: '0.75rem',
                      marginTop: '0.25rem',
                      marginBottom: 0
                    }}>
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: `1px solid ${formErrors.message ? '#dc2626' : '#d1d5db'}`,
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      resize: 'vertical',
                      transition: 'border-color 0.3s ease',
                      backgroundColor: formErrors.message ? '#fef2f2' : 'white'
                    }}
                    placeholder="Tell me about your project or question..."
                  />
                  {formErrors.message && (
                    <p style={{
                      color: '#dc2626',
                      fontSize: '0.75rem',
                      marginTop: '0.25rem',
                      marginBottom: 0
                    }}>
                      {formErrors.message}
                    </p>
                  )}
                  <p style={{
                    color: '#6b7280',
                    fontSize: '0.75rem',
                    marginTop: '0.25rem',
                    marginBottom: 0
                  }}>
                    {formData.message.length}/500 characters (minimum 10)
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: isSubmitting ? '#9ca3af' : '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: '500',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid #ffffff40',
                        borderTop: '2px solid #ffffff',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            {/* Contact Details */}
            <div className="card animate-fade-in-up animate-delay-200" style={{ marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #1e293b, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1.5rem'
              }}>
                Contact Information
              </h2>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {contactInfo.map((info, index) => {
                  const Icon = getIcon(info.icon)
                  return (
                    <a
                      key={index}
                      href={info.href}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '1rem',
                        backgroundColor: '#f8fafc',
                        borderRadius: '0.75rem',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        border: '1px solid #e2e8f0'
                      }}
                    >
                      <div style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        backgroundColor: info.color,
                        borderRadius: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '1rem',
                        flexShrink: 0
                      }}>
                        <Icon size={16} color="white" />
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
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="card animate-fade-in-up animate-delay-300" style={{ marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #1e293b, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1.5rem'
              }}>
                Connect With Me
              </h2>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {socialLinks.map((social, index) => {
                  const Icon = getIcon(social.icon)
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => analytics.trackSocialClick(social.name, 'click')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '1rem',
                        backgroundColor: '#f8fafc',
                        borderRadius: '0.75rem',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        border: '1px solid #e2e8f0'
                      }}
                    >
                      <div style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        backgroundColor: social.color,
                        borderRadius: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '1rem',
                        flexShrink: 0
                      }}>
                        <Icon size={16} color="white" />
                      </div>
                      <div>
                        <div style={{
                          fontSize: '1rem',
                          fontWeight: '600',
                          color: '#1e293b',
                          marginBottom: '0.25rem'
                        }}>
                          {social.name}
                        </div>
                        <div style={{
                          fontSize: '0.875rem',
                          color: '#6b7280'
                        }}>
                          {social.description}
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="card animate-fade-in-up animate-delay-400">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem',
                  boxShadow: '0 4px 12px rgba(16,185,129,0.3)'
                }}>
                  <Clock size={16} color="white" />
                </div>
                <h2 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #1e293b, #10b981)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0
                }}>
                  Availability
                </h2>
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {availability.map((slot, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem',
                    backgroundColor: '#f8fafc',
                    borderRadius: '0.5rem',
                    border: '1px solid #e2e8f0'
                  }}>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#1e293b'
                    }}>
                      {slot.day}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      textAlign: 'right'
                    }}>
                      {slot.time}
                      <br />
                      <span style={{ fontSize: '0.75rem' }}>({slot.timezone})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          backgroundColor: '#f8fafc',
          borderRadius: '1rem',
          border: '1px solid #e2e8f0'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '1rem'
          }}>
            Ready to Start a Project?
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#64748b',
            marginBottom: '2rem',
            maxWidth: '32rem',
            margin: '0 auto 2rem'
          }}>
            Whether you have a question about IoT development, need help with a mobile app, or want to discuss a research collaboration, I'm here to help!
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="mailto:fuhadcs@icloud.com"
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
              <Mail style={{ marginRight: '0.5rem' }} size={20} />
              Send Email
            </a>
            <a
              href="tel:+917306525489"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'transparent',
                color: '#3b82f6',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                fontWeight: '500',
                border: '2px solid #3b82f6',
                transition: 'all 0.3s ease'
              }}
            >
              <Phone style={{ marginRight: '0.5rem' }} size={20} />
              Call Now
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}

export default Contact