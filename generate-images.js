#!/usr/bin/env node

/**
 * Generate Open Graph Images for mfuhad.xyz
 * 
 * This script creates the missing OG images referenced in sitemap.xml
 * Run with: node generate-images.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

// SVG templates for each image
const createOGImage = (title, subtitle, description, gradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)') => {
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#grad)"/>
  <text x="600" y="250" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle" text-shadow="2px 2px 4px rgba(0,0,0,0.3)">${title}</text>
  <text x="600" y="320" font-family="Arial, sans-serif" font-size="28" fill="white" text-anchor="middle" opacity="0.9">${subtitle}</text>
  <text x="600" y="380" font-family="Arial, sans-serif" font-size="20" fill="white" text-anchor="middle" opacity="0.8">${description}</text>
  <text x="600" y="450" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle" opacity="0.7">mfuhad.xyz</text>
</svg>`;
};

const createProfileImage = () => {
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#grad)"/>
  <circle cx="200" cy="150" r="60" fill="white" opacity="0.2"/>
  <text x="200" y="250" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle">Muhammed Fuhad C</text>
  <text x="200" y="280" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle" opacity="0.9">IoT &amp; Embedded Systems Developer</text>
  <text x="200" y="320" font-family="Arial, sans-serif" font-size="14" fill="white" text-anchor="middle" opacity="0.7">mfuhad.xyz</text>
</svg>`;
};

// Define all the images to create
const images = [
    {
        filename: 'og-image.jpg',
        svg: createOGImage(
            'Muhammed Fuhad C',
            'IoT & Embedded Systems Developer',
            'Researcher | Portfolio | mfuhad.xyz'
        )
    },
    {
        filename: 'profile-image.jpg',
        svg: createProfileImage()
    },
    {
        filename: 'publications-og.jpg',
        svg: createOGImage(
            'Research Publications',
            'IEEE & Springer Papers',
            'IoT | Smart Agriculture | Healthcare Monitoring | mfuhad.xyz'
        )
    },
    {
        filename: 'projects-og.jpg',
        svg: createOGImage(
            'Projects Portfolio',
            'IoT | Mobile Apps & Web Development',
            'Smart Agriculture | Healthcare Monitoring | mfuhad.xyz'
        )
    },
    {
        filename: 'contact-og.jpg',
        svg: createOGImage(
            'Get In Touch',
            'Social Media Links & Contact Info',
            'IoT Projects | Development Services | mfuhad.xyz'
        )
    }
];

console.log('🎨 Generating Open Graph Images for mfuhad.xyz...\n');

// Create SVG files first
images.forEach((image, index) => {
    const svgPath = path.join(publicDir, image.filename.replace('.jpg', '.svg'));
    fs.writeFileSync(svgPath, image.svg);
    console.log(`✅ Created ${image.filename.replace('.jpg', '.svg')}`);
});

console.log('\n📋 Next Steps:');
console.log('1. Open the HTML file: generate-og-images.html in your browser');
console.log('2. Right-click each image and save as JPG');
console.log('3. Or use an online SVG to JPG converter');
console.log('4. Place the JPG files in your public/ directory');
console.log('\n🔗 Online SVG to JPG converters:');
console.log('- https://convertio.co/svg-jpg/');
console.log('- https://cloudconvert.com/svg-to-jpg');
console.log('- https://www.freeconvert.com/svg-to-jpg');

console.log('\n✨ All SVG templates created successfully!');
