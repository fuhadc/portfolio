# Open Graph Images Creation Guide - mfuhad.xyz

## 🎨 Missing Images Required

Your sitemap references these images that need to be created:

1. **og-image.jpg** (1200x630px) - Homepage
2. **profile-image.jpg** (400x400px) - About page  
3. **publications-og.jpg** (1200x630px) - Publications page
4. **projects-og.jpg** (1200x630px) - Projects page
5. **contact-og.jpg** (1200x630px) - Contact page

## 🚀 Quick Solutions

### Option 1: Use the HTML Generator (Recommended)
1. Open `generate-og-images.html` in your browser
2. Right-click each image and "Save image as..."
3. Save with the correct filenames in your `public/` folder

### Option 2: Use Online Tools
1. Go to [Canva](https://canva.com) or [Figma](https://figma.com)
2. Create images with these specifications:
   - **Size**: 1200x630px (for OG images) or 400x400px (for profile)
   - **Format**: JPG
   - **Content**: Use the text from the SVG templates

### Option 3: Use AI Image Generators
1. **DALL-E 3** or **Midjourney**: Generate professional portfolio images
2. **Canva AI**: Use their AI image generator
3. **Adobe Firefly**: Create branded images

## 📋 Image Specifications

### 1. og-image.jpg (1200x630px)
- **Title**: "Muhammed Fuhad C"
- **Subtitle**: "IoT & Embedded Systems Developer"  
- **Description**: "Researcher | Portfolio | mfuhad.xyz"
- **Style**: Professional gradient background, clean typography

### 2. profile-image.jpg (400x400px)
- **Title**: "Muhammed Fuhad C"
- **Subtitle**: "IoT & Embedded Systems Developer"
- **Style**: Circular or square design, professional headshot area

### 3. publications-og.jpg (1200x630px)
- **Title**: "Research Publications"
- **Subtitle**: "IEEE & Springer Papers"
- **Description**: "IoT | Smart Agriculture | Healthcare Monitoring | mfuhad.xyz"

### 4. projects-og.jpg (1200x630px)
- **Title**: "Projects Portfolio"
- **Subtitle**: "IoT | Mobile Apps & Web Development"
- **Description**: "Smart Agriculture | Healthcare Monitoring | mfuhad.xyz"

### 5. contact-og.jpg (1200x630px)
- **Title**: "Get In Touch"
- **Subtitle**: "Social Media Links & Contact Info"
- **Description**: "IoT Projects | Development Services | mfuhad.xyz"

## 🎨 Design Guidelines

### Color Scheme
- **Primary**: Blue gradient (#667eea to #764ba2)
- **Text**: White with shadow
- **Accent**: Professional, clean design

### Typography
- **Main Title**: Bold, 48px
- **Subtitle**: Regular, 28px  
- **Description**: Light, 20px
- **Font**: Arial or similar sans-serif

### Layout
- **Centered text alignment**
- **Gradient background**
- **Text shadows for readability**
- **Professional, clean aesthetic**

## 🛠️ Technical Implementation

### File Structure
```
public/
├── og-image.jpg          (1200x630px)
├── profile-image.jpg     (400x400px)
├── publications-og.jpg   (1200x630px)
├── projects-og.jpg       (1200x630px)
└── contact-og.jpg        (1200x630px)
```

### Image Optimization
- **Format**: JPG
- **Quality**: 85-95%
- **Compression**: Optimized for web
- **File size**: < 500KB each

## 🔧 Alternative: Use Placeholder Images

If you need to deploy quickly, you can use placeholder images:

1. **Temporary Solution**: Use any 1200x630px image for OG images
2. **Update Later**: Replace with proper branded images
3. **Test First**: Ensure your site works with placeholders

## 📱 Testing Your Images

### 1. Facebook Sharing Debugger
- Go to [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- Enter your URL: `https://mfuhad.xyz`
- Check if images appear correctly

### 2. Twitter Card Validator
- Go to [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- Test your URLs

### 3. LinkedIn Post Inspector
- Go to [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- Check how your links appear

## 🎯 Priority Order

1. **og-image.jpg** - Most important (homepage)
2. **profile-image.jpg** - For about page
3. **publications-og.jpg** - For research content
4. **projects-og.jpg** - For portfolio content
5. **contact-og.jpg** - For contact page

## 📞 Quick Fix

If you need to deploy immediately:

1. **Copy any existing image** to create placeholders
2. **Rename them** to match the required filenames
3. **Deploy your site** with placeholders
4. **Create proper images** later and replace them

---

**Next Steps**: 
1. Create the images using any of the methods above
2. Place them in the `public/` directory
3. Deploy your updated site
4. Test social media sharing

**Last Updated**: December 20, 2024