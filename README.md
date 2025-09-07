# Muhammed Fuhad C - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TailwindCSS, and Framer Motion. This website showcases my work as an IoT & Embedded Systems enthusiast, researcher, and developer.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Theme**: Toggle between dark and light modes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Complete SEO setup with meta tags, structured data, and sitemap
- **Modern UI**: Clean, professional design with TailwindCSS
- **Contact Form**: Working contact form with EmailJS integration
- **Social Integration**: Links to all professional profiles

## 📱 Pages

1. **Home**: Hero section with introduction and quick stats
2. **About**: Personal story, education, and interests
3. **Experience**: Professional timeline with detailed work history
4. **Publications**: Research papers and academic publications
5. **Projects**: Showcase of IoT, mobile, and web projects
6. **Skills**: Technical skills and certifications
7. **Achievements**: Awards, recognitions, and volunteering
8. **Contact**: Contact form and social media links

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icon library
- **EmailJS**: Contact form integration

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fuhadc/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── components/
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Publications.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Achievements.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary color palette
      },
      dark: {
        // Your dark theme colors
      }
    }
  }
}
```

### Content
Update the content in each page component:
- Personal information in `About.jsx`
- Work experience in `Experience.jsx`
- Projects in `Projects.jsx`
- Skills in `Skills.jsx`
- And so on...

### Contact Form
To enable the contact form, you'll need to:
1. Sign up for EmailJS
2. Create a service and template
3. Update the service ID, template ID, and public key in `Contact.jsx`

## 📈 SEO Features

- Meta tags for social media sharing
- Open Graph tags for Facebook/LinkedIn
- Twitter Card tags
- Structured data (JSON-LD)
- Sitemap.xml
- Robots.txt
- Canonical URLs

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Other Platforms

The project can be deployed to any static hosting service that supports SPAs.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

- **Email**: fuhadcs@icloud.com
- **LinkedIn**: [linkedin.com/in/fuhadc](https://linkedin.com/in/fuhadc)
- **GitHub**: [github.com/fuhadc](https://github.com/fuhadc)
- **ResearchGate**: [researchgate.net/profile/Muhammed-Fuhad](https://www.researchgate.net/profile/Muhammed-Fuhad)

---

Made with ❤️ by Muhammed Fuhad C