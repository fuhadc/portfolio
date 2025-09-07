// SEO Configuration for Portfolio Website
export const seoConfig = {
  // Default SEO settings
  default: {
    title: "Muhammed Fuhad C - IoT & Embedded Systems Enthusiast | Researcher | Developer",
    description: "Passionate IoT and Embedded Systems enthusiast, researcher, and developer. Specializing in smart agriculture, healthcare monitoring, mobile applications, and research with published papers in IEEE and Springer conferences.",
    keywords: "Muhammed Fuhad C, IoT, Embedded Systems, Smart Agriculture, Healthcare Monitoring, Mobile Apps, Research, IEEE, Springer, Flutter, Python, Arduino, Raspberry Pi",
    author: "Muhammed Fuhad C",
    url: "https://muhammedfuhadc.dev",
    image: "https://muhammedfuhadc.dev/og-image.jpg",
    type: "website",
    locale: "en_US",
    siteName: "Muhammed Fuhad C Portfolio"
  },

  // Page-specific SEO configurations
  pages: {
    home: {
      title: "Muhammed Fuhad C - IoT & Embedded Systems Enthusiast | Researcher | Developer",
      description: "Passionate IoT and Embedded Systems enthusiast, researcher, and developer. Specializing in smart agriculture, healthcare monitoring, mobile applications, and research with published papers in IEEE and Springer conferences.",
      keywords: "Muhammed Fuhad C, IoT, Embedded Systems, Smart Agriculture, Healthcare Monitoring, Mobile Apps, Research, IEEE, Springer, Flutter, Python, Arduino, Raspberry Pi",
      url: "/",
      type: "website",
      tags: ["IoT", "Embedded Systems", "Research", "Mobile Development", "Smart Agriculture", "Healthcare Monitoring"]
    },
    
    about: {
      title: "About Muhammed Fuhad C | IoT & Embedded Systems Developer",
      description: "Learn about Muhammed Fuhad C, a passionate IoT and Embedded Systems developer specializing in smart agriculture, healthcare monitoring, and mobile applications. Based in Kerala, India.",
      keywords: "Muhammed Fuhad C about, IoT developer, Embedded Systems developer, Smart Agriculture, Healthcare Monitoring, Mobile App Developer, Kerala India",
      url: "/about",
      type: "article",
      section: "About",
      tags: ["About", "IoT Developer", "Embedded Systems", "Smart Agriculture", "Healthcare Monitoring"]
    },
    
    publications: {
      title: "Research Publications - Muhammed Fuhad C | IEEE & Springer Papers",
      description: "Explore the research publications of Muhammed Fuhad C, including IEEE and Springer conference papers on IoT, Smart Agriculture, Healthcare Monitoring, and Embedded Systems.",
      keywords: "Muhammed Fuhad C publications, IEEE papers, Springer papers, IoT research, Smart Agriculture research, Healthcare Monitoring, Embedded Systems research, academic papers",
      url: "/publications",
      type: "article",
      section: "Research",
      tags: ["Research", "Publications", "IEEE", "Springer", "IoT", "Smart Agriculture", "Healthcare Monitoring"]
    },
    
    projects: {
      title: "Projects - Muhammed Fuhad C | IoT, Mobile Apps & Web Development",
      description: "Explore the portfolio of projects by Muhammed Fuhad C including IoT solutions, mobile applications, web development, and smart agriculture systems.",
      keywords: "Muhammed Fuhad C projects, IoT projects, mobile app development, web development, smart agriculture, healthcare monitoring, Flutter apps, React projects",
      url: "/projects",
      type: "article",
      section: "Portfolio",
      tags: ["Projects", "IoT", "Mobile Apps", "Web Development", "Smart Agriculture", "Healthcare Monitoring"]
    },
    
    skills: {
      title: "Skills & Technologies - Muhammed Fuhad C | IoT & Development Expertise",
      description: "Comprehensive overview of technical skills and technologies mastered by Muhammed Fuhad C including IoT, Embedded Systems, Mobile Development, and Research methodologies.",
      keywords: "Muhammed Fuhad C skills, IoT skills, Embedded Systems skills, Mobile Development, Flutter, Python, Arduino, Raspberry Pi, Research skills",
      url: "/skills",
      type: "article",
      section: "Skills",
      tags: ["Skills", "Technologies", "IoT", "Embedded Systems", "Mobile Development", "Programming"]
    },
    
    experience: {
      title: "Professional Experience - Muhammed Fuhad C | Software Engineer & Researcher",
      description: "Professional experience and career journey of Muhammed Fuhad C including software engineering roles, research positions, and academic achievements.",
      keywords: "Muhammed Fuhad C experience, Software Engineer, Research experience, Toyota Industries, academic achievements, professional career",
      url: "/experience",
      type: "article",
      section: "Experience",
      tags: ["Experience", "Career", "Software Engineer", "Research", "Professional"]
    },
    
    achievements: {
      title: "Achievements & Awards - Muhammed Fuhad C | Academic & Professional Recognition",
      description: "Academic achievements, professional awards, certifications, and recognition received by Muhammed Fuhad C in IoT, Embedded Systems, and Research domains.",
      keywords: "Muhammed Fuhad C achievements, awards, certifications, academic recognition, professional awards, IoT achievements",
      url: "/achievements",
      type: "article",
      section: "Achievements",
      tags: ["Achievements", "Awards", "Certifications", "Recognition", "Academic"]
    },
    
    contact: {
      title: "Contact Muhammed Fuhad C | Get In Touch for IoT & Development Projects",
      description: "Get in touch with Muhammed Fuhad C for IoT projects, Embedded Systems development, mobile app development, and research collaborations.",
      keywords: "Contact Muhammed Fuhad C, IoT projects, Embedded Systems development, mobile app development, research collaboration, hire developer",
      url: "/contact",
      type: "article",
      section: "Contact",
      tags: ["Contact", "Hire", "Collaboration", "IoT Projects", "Development Services"]
    }
  },

  // Social media configurations
  social: {
    twitter: {
      card: "summary_large_image",
      creator: "@_fuhad_c",
      site: "@_fuhad_c"
    },
    facebook: {
      appId: "your-facebook-app-id"
    },
    linkedin: {
      profile: "https://linkedin.com/in/fuhadc"
    },
    github: {
      profile: "https://github.com/fuhadc"
    }
  },

  // Structured data configurations
  structuredData: {
    person: {
      name: "Muhammed Fuhad C",
      alternateName: "Fuhad C",
      jobTitle: "IoT & Embedded Systems Enthusiast | Researcher | Developer",
      description: "Passionate IoT and Embedded Systems enthusiast, researcher, and developer specializing in smart agriculture, healthcare monitoring, and mobile applications.",
      url: "https://muhammedfuhadc.dev",
      image: "https://muhammedfuhadc.dev/profile-image.jpg",
      email: "fuhadcs@icloud.com",
      telephone: "+91-7306525489",
      address: {
        addressLocality: "Kerala",
        addressRegion: "Kerala",
        addressCountry: "India"
      },
      sameAs: [
        "https://linkedin.com/in/fuhadc",
        "https://github.com/fuhadc",
        "https://www.researchgate.net/profile/Muhammed-Fuhad",
        "https://www.instagram.com/_fuhad_c",
        "https://x.com/_fuhad_c",
        "https://www.facebook.com/fuhadcs3"
      ]
    },
    
    organization: {
      name: "Muhammed Fuhad C Portfolio",
      url: "https://muhammedfuhadc.dev",
      logo: "https://muhammedfuhadc.dev/logo.png",
      description: "Professional portfolio showcasing IoT, Embedded Systems, and Research work"
    }
  },

  // Performance and accessibility settings
  performance: {
    preconnect: [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://www.google-analytics.com"
    ],
    dnsPrefetch: [
      "//fonts.googleapis.com",
      "//fonts.gstatic.com",
      "//www.google-analytics.com"
    ]
  }
}

// Helper function to get SEO config for a specific page
export const getSEOConfig = (pageName) => {
  return {
    ...seoConfig.default,
    ...seoConfig.pages[pageName]
  }
}

// Helper function to generate structured data
export const generateStructuredData = (type, data) => {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  }
  
  return JSON.stringify(baseStructuredData, null, 2)
}
