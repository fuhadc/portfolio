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
    <>
      <Helmet>
        <title>Social Media & Contact - Muhammed Fuhad C (Fuad) | All Social Links & Contact Information</title>
        <meta name="description" content="Connect with Muhammed Fuhad C (Fuad) on all social media platforms. Find Instagram, Facebook, LinkedIn, GitHub, Twitter, and ResearchGate links. Get contact information and connect for IoT projects, collaborations, and professional networking." />
        <meta name="keywords" content="fuad social media, fuhad social media, muhammed fuhad c social media, instagram fuad, facebook fuad, linkedin fuad, github fuad, twitter fuad, researchgate fuad, contact fuad, social media links, professional networking, iot developer contact, embedded systems developer contact, mobile app developer contact, research collaboration, hire developer, connect with fuad, social media profiles, contact information, professional contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Social Media & Contact - Muhammed Fuhad C (Fuad) | All Social Links" />
        <meta property="og:description" content="Connect with Muhammed Fuhad C (Fuad) on all social media platforms. Find Instagram, Facebook, LinkedIn, GitHub, Twitter, and ResearchGate links." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muhammedfuhadc.dev/social" />
        <meta property="og:image" content="https://muhammedfuhadc.dev/social-og.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:title" content="Social Media & Contact - Muhammed Fuhad C (Fuad) | All Social Links" />
        <meta property="twitter:description" content="Connect with Muhammed Fuhad C (Fuad) on all social media platforms. Find Instagram, Facebook, LinkedIn, GitHub, Twitter, and ResearchGate links." />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://muhammedfuhadc.dev/social-og.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Muhammed Fuhad C",
            "alternateName": ["Fuhad C", "Fuad", "Fuhad", "Muhammed Fuhad"],
            "url": "https://muhammedfuhadc.dev/social",
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

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Connect with <span className="text-blue-600">Fuad</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find me on all social media platforms and get in touch for IoT projects, 
              collaborations, and professional networking opportunities.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {quickStats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Social Media Profiles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                      style={{ backgroundColor: `${social.color}20` }}
                    >
                      <social.icon 
                        className="w-6 h-6" 
                        style={{ color: social.color }}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {social.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {social.username}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 ml-auto group-hover:text-blue-600 transition-colors" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {social.description}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
                >
                  <contact.icon 
                    className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" 
                    style={{ color: contact.color }}
                  />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 transition-colors">
                    {contact.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Collaborate?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Let's work together on your next IoT project, mobile app, or research collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:fuhadcs@icloud.com"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/fuhadc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* SEO Keywords Section */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Find Me By Searching
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "fuad", "fuhad", "muhammed fuhad", "fuhad c", "muhammed fuhad c",
                "iot developer", "embedded systems developer", "mobile app developer",
                "flutter developer", "python developer", "arduino developer",
                "raspberry pi developer", "smart agriculture", "healthcare monitoring",
                "research", "ieee", "springer", "kerala developer", "india developer",
                "portfolio", "software engineer", "researcher", "toyota industries",
                "christ university", "btech", "computer science", "engineering",
                "instagram fuad", "facebook fuad", "linkedin fuad", "github fuad",
                "twitter fuad", "researchgate fuad", "contact fuad", "hire fuad",
                "collaboration", "social media", "professional networking"
              ].map((keyword, index) => (
                <span
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Social


