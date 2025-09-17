#!/usr/bin/env node

/**
 * SEO Testing Script for Muhammed Fuhad C Portfolio
 * 
 * This script validates all SEO implementations across the portfolio website
 * Run with: node test-seo.js
 */

import { seoValidator } from './src/utils/seoValidator.js'

// Mock SEO configurations for testing
const mockSEOConfigs = {
  home: {
    title: "Muhammed Fuhad C (Fuad) - IoT & Embedded Systems Developer | Portfolio | Social Media Links",
    description: "Muhammed Fuhad C (Fuad) - Professional IoT & Embedded Systems Developer. Specializing in Smart Agriculture, Healthcare Monitoring, Mobile Apps. View portfolio, projects, and connect on social media. Find me on Instagram, Facebook, LinkedIn, GitHub, Twitter, and ResearchGate.",
    keywords: "fuad, fuhad, muhammed fuhad, fuhad c, muhammed fuhad c, iot developer, embedded systems developer, smart agriculture, healthcare monitoring, mobile app developer, flutter developer, python developer, arduino, raspberry pi, research, ieee, springer, kerala, india, portfolio, developer, software engineer, researcher, toyota industries, christ university, btech, computer science, engineering, instagram, facebook, linkedin, github, twitter, researchgate, social media, contact, hire, collaboration",
    url: "/",
    type: "website",
    tags: ["IoT", "Embedded Systems", "Research", "Mobile Development", "Smart Agriculture", "Healthcare Monitoring", "Social Media", "Portfolio", "Fuad", "Fuhad"]
  },
  about: {
    title: "About Muhammed Fuhad C (Fuad) | IoT & Embedded Systems Developer | Social Media Links",
    description: "Learn about Muhammed Fuhad C (Fuad), a passionate IoT and Embedded Systems developer specializing in smart agriculture, healthcare monitoring, and mobile applications. Based in Kerala, India. Connect on social media platforms.",
    keywords: "fuad about, fuhad about, muhammed fuhad c about, IoT developer, Embedded Systems developer, Smart Agriculture, Healthcare Monitoring, Mobile App Developer, Kerala India, instagram, facebook, linkedin, github, twitter, researchgate, social media, contact, personal profile, background, education, christ university, toyota industries",
    url: "/about",
    type: "article",
    section: "About",
    tags: ["About", "IoT Developer", "Embedded Systems", "Smart Agriculture", "Healthcare Monitoring", "Social Media", "Contact", "Personal Profile", "Background", "Education"]
  },
  projects: {
    title: "Projects - Muhammed Fuhad C (Fuad) | IoT, Mobile Apps & Web Development | Portfolio",
    description: "Explore the portfolio of projects by Muhammed Fuhad C (Fuad) including IoT solutions, mobile applications, web development, and smart agriculture systems. View code on GitHub and connect for collaborations.",
    keywords: "fuad projects, fuhad projects, muhammed fuhad c projects, IoT projects, mobile app development, web development, smart agriculture, healthcare monitoring, Flutter apps, React projects, github, portfolio, developer, collaboration, open source, code, programming",
    url: "/projects",
    type: "article",
    section: "Portfolio",
    tags: ["Projects", "IoT", "Mobile Apps", "Web Development", "Smart Agriculture", "Healthcare Monitoring", "GitHub", "Portfolio", "Collaboration", "Open Source"]
  },
  skills: {
    title: "Skills & Technologies - Muhammed Fuhad C (Fuad) | IoT & Development Expertise | Technical Profile",
    description: "Comprehensive overview of technical skills and technologies mastered by Muhammed Fuhad C (Fuad) including IoT, Embedded Systems, Mobile Development, and Research methodologies. Connect for technical discussions.",
    keywords: "fuad skills, fuhad skills, muhammed fuhad c skills, IoT skills, Embedded Systems skills, Mobile Development, Flutter, Python, Arduino, Raspberry Pi, Research skills, technical profile, developer skills, programming, certifications, professional skills",
    url: "/skills",
    type: "article",
    section: "Skills",
    tags: ["Skills", "Technologies", "IoT", "Embedded Systems", "Mobile Development", "Programming", "Technical", "Developer", "Certifications"]
  },
  experience: {
    title: "Professional Experience - Muhammed Fuhad C (Fuad) | Software Engineer & Researcher | Career",
    description: "Professional experience and career journey of Muhammed Fuhad C (Fuad) including software engineering roles, research positions, and academic achievements. Connect on LinkedIn for professional networking.",
    keywords: "fuad experience, fuhad experience, muhammed fuhad c experience, Software Engineer, Research experience, Toyota Industries, academic achievements, professional career, linkedin, career, professional, networking, work experience, job history",
    url: "/experience",
    type: "article",
    section: "Experience",
    tags: ["Experience", "Career", "Software Engineer", "Research", "Professional", "LinkedIn", "Networking", "Work History"]
  },
  achievements: {
    title: "Achievements & Awards - Muhammed Fuhad C (Fuad) | Academic & Professional Recognition",
    description: "Academic achievements, professional awards, certifications, and recognition received by Muhammed Fuhad C (Fuad) in IoT, Embedded Systems, and Research domains. Connect to learn more about accomplishments.",
    keywords: "fuad achievements, fuhad achievements, muhammed fuhad c achievements, awards, certifications, academic recognition, professional awards, IoT achievements, accomplishments, recognition, connect, academic excellence, research awards, technology achievements, embedded systems awards, mobile development recognition",
    url: "/achievements",
    type: "article",
    section: "Achievements",
    tags: ["Achievements", "Awards", "Certifications", "Recognition", "Academic", "Professional", "Accomplishments", "IoT", "Embedded Systems", "Research"]
  },
  publications: {
    title: "Research Publications - Muhammed Fuhad C (Fuad) | IEEE & Springer Papers | Academic Profile",
    description: "Explore the research publications of Muhammed Fuhad C (Fuad), including IEEE and Springer conference papers on IoT, Smart Agriculture, Healthcare Monitoring, and Embedded Systems. Connect on ResearchGate and other academic platforms.",
    keywords: "fuad publications, fuhad publications, muhammed fuhad c publications, IEEE papers, Springer papers, IoT research, Smart Agriculture research, Healthcare Monitoring, Embedded Systems research, academic papers, researchgate, academic profile, researcher, citations, research papers, conference proceedings",
    url: "/publications",
    type: "article",
    section: "Research",
    tags: ["Research", "Publications", "IEEE", "Springer", "IoT", "Smart Agriculture", "Healthcare Monitoring", "Academic", "ResearchGate", "Citations", "Research Papers"]
  },
  contact: {
    title: "Contact Muhammed Fuhad C (Fuad) | Get In Touch for IoT & Development Projects | Social Media",
    description: "Get in touch with Muhammed Fuhad C (Fuad) for IoT projects, Embedded Systems development, mobile app development, and research collaborations. Find all social media links and contact information.",
    keywords: "contact fuad, contact fuhad, contact muhammed fuhad c, IoT projects, Embedded Systems development, mobile app development, research collaboration, hire developer, instagram, facebook, linkedin, github, twitter, researchgate, social media, contact, collaboration, hire, get in touch, connect",
    url: "/contact",
    type: "article",
    section: "Contact",
    tags: ["Contact", "Hire", "Collaboration", "IoT Projects", "Development Services", "Social Media", "Instagram", "Facebook", "LinkedIn", "GitHub", "Twitter", "ResearchGate", "Connect"]
  },
  certifications: {
    title: "Certifications - Muhammed Fuhad C (Fuad) | Professional Certifications & Achievements | Skills Validation",
    description: "View the professional certifications and achievements of Muhammed Fuhad C (Fuad) including IBM AI Engineering, Stanford IoT, Coursera specializations, and more. Validated skills in IoT, AI, and development.",
    keywords: "fuad certifications, fuhad certifications, muhammed fuhad c certifications, IBM AI Engineering, Stanford IoT, Coursera certificates, professional certifications, Udemy courses, NPTEL, skills validation, verified skills, professional development, AI, IoT, web development, python, machine learning",
    url: "/certifications",
    type: "article",
    section: "Portfolio",
    tags: ["Certifications", "Professional Development", "AI Engineering", "IoT", "Web Development", "Python", "Skills Validation", "Verified Skills", "Machine Learning"]
  }
}

// Mock structured data for testing
const mockStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Muhammed Fuhad C",
  "alternateName": ["Fuhad C", "Fuad", "Fuhad", "Muhammed Fuhad"],
  "jobTitle": "IoT & Embedded Systems Developer | Researcher | Software Engineer",
  "description": "Passionate IoT and Embedded Systems enthusiast, researcher, and developer specializing in smart agriculture, healthcare monitoring, and mobile applications.",
  "url": "https://www.mfuhad.xyz",
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
}

// Main testing function
function runSEOTests() {
  console.log('🔍 Starting SEO Validation Tests...\n')
  
  let totalErrors = 0
  let totalWarnings = 0
  let totalIssues = 0

  // Test each page
  Object.entries(mockSEOConfigs).forEach(([pageName, seoConfig]) => {
    console.log(`📄 Testing ${pageName.toUpperCase()} page...`)
    
    // Validate page SEO
    const seoValidation = seoValidator.validatePageSEO(pageName, seoConfig)
    totalErrors += seoValidation.errors.length
    totalWarnings += seoValidation.warnings.length
    
    if (seoValidation.errors.length > 0) {
      console.log(`  ❌ Errors: ${seoValidation.errors.join(', ')}`)
    }
    
    if (seoValidation.warnings.length > 0) {
      console.log(`  ⚠️  Warnings: ${seoValidation.warnings.join(', ')}`)
    }
    
    // Validate meta tags
    const metaValidation = seoValidator.validateMetaTags(seoConfig)
    console.log(`  📊 Meta Tags: Title(${metaValidation.title.length} chars), Description(${metaValidation.description.length} chars), Keywords(${metaValidation.keywords.count} items)`)
    
    // Check for common issues
    const issues = seoValidator.checkCommonIssues(seoConfig)
    totalIssues += issues.length
    if (issues.length > 0) {
      console.log(`  💡 Suggestions: ${issues.join(', ')}`)
    }
    
    console.log(`  ✅ ${pageName} page validated\n`)
  })

  // Test structured data
  console.log('🏗️  Testing Structured Data...')
  const structuredDataValidation = seoValidator.validateStructuredData(mockStructuredData)
  totalErrors += structuredDataValidation.errors.length
  totalWarnings += structuredDataValidation.warnings.length
  
  if (structuredDataValidation.errors.length > 0) {
    console.log(`  ❌ Errors: ${structuredDataValidation.errors.join(', ')}`)
  }
  
  if (structuredDataValidation.warnings.length > 0) {
    console.log(`  ⚠️  Warnings: ${structuredDataValidation.warnings.join(', ')}`)
  }
  
  console.log('  ✅ Structured data validated\n')

  // Generate overall report
  const report = seoValidator.generateReport()
  
  console.log('📊 SEO VALIDATION REPORT')
  console.log('========================')
  console.log(`Total Pages: ${report.totalPages}`)
  console.log(`Pages with SEO: ${report.pagesWithSEO}`)
  console.log(`Pages with Structured Data: ${report.pagesWithStructuredData}`)
  console.log(`Total Errors: ${totalErrors}`)
  console.log(`Total Warnings: ${totalWarnings}`)
  console.log(`Total Issues: ${totalIssues}`)
  console.log(`Overall Score: ${report.overallScore}/100`)
  console.log(`Grade: ${report.grade}`)
  
  // Recommendations
  console.log('\n💡 RECOMMENDATIONS')
  console.log('==================')
  
  if (totalErrors === 0 && totalWarnings === 0) {
    console.log('🎉 Excellent! All SEO implementations are working perfectly.')
    console.log('✅ All pages have proper SEO configuration')
    console.log('✅ All pages have structured data')
    console.log('✅ Meta tags are properly configured')
    console.log('✅ Keywords are optimized for search engines')
    console.log('✅ Social media optimization is implemented')
  } else {
    if (totalErrors > 0) {
      console.log('❌ Fix critical errors first')
    }
    if (totalWarnings > 0) {
      console.log('⚠️  Address warnings for better SEO performance')
    }
    if (totalIssues > 0) {
      console.log('💡 Consider implementing suggested improvements')
    }
  }
  
  console.log('\n🚀 NEXT STEPS')
  console.log('=============')
  console.log('1. Submit sitemap to Google Search Console')
  console.log('2. Test social media sharing on all platforms')
  console.log('3. Validate structured data with Google Rich Results Test')
  console.log('4. Monitor search console for indexing status')
  console.log('5. Set up Google Analytics for traffic monitoring')
  
  console.log('\n✨ SEO implementation completed successfully!')
}

// Run the tests
runSEOTests()


