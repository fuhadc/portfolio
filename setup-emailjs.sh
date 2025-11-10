#!/bin/bash

# EmailJS Setup Script
# This script will help you configure EmailJS for your contact form

echo "🚀 EmailJS Setup for Portfolio Contact Form"
echo "=========================================="
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ .env file not found!"
    echo "Creating .env from env.sample..."
    cp env.sample .env
fi

echo "✅ Service ID already provided: service_qpmysgb"
echo ""
echo "📋 Next Steps:"
echo ""
echo "1. Go to EmailJS Dashboard: https://dashboard.emailjs.com"
echo ""
echo "2. Get your Template ID:"
echo "   - Click 'Email Templates' in sidebar"
echo "   - You should see a template for your contact form"
echo "   - Copy the Template ID (e.g., template_abc123)"
echo ""
echo "3. Get your Public Key:"
echo "   - Click 'Account' in sidebar"
echo "   - Find 'API Keys' section"
echo "   - Copy your Public Key"
echo ""
echo "4. Update .env file:"
echo ""
echo "Run these commands (replace with your actual values):"
echo ""
echo "# Update Service ID (already done)"
echo "sed -i.bak 's/VITE_EMAILJS_SERVICE_ID=.*/VITE_EMAILJS_SERVICE_ID=service_qpmysgb/' .env"
echo ""
echo "# Update Template ID"
echo "sed -i.bak 's/VITE_EMAILJS_TEMPLATE_ID=.*/VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID/' .env"
echo ""
echo "# Update Public Key"
echo "sed -i.bak 's/VITE_EMAILJS_PUBLIC_KEY=.*/VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY/' .env"
echo ""
echo "Or manually edit .env file and update these lines:"
echo "VITE_EMAILJS_SERVICE_ID=service_qpmysgb"
echo "VITE_EMAILJS_TEMPLATE_ID=your_template_id_here"
echo "VITE_EMAILJS_PUBLIC_KEY=your_public_key_here"
echo ""
echo "5. Restart dev server:"
echo "   npm run dev"
echo ""
echo "6. Test contact form:"
echo "   - Go to http://localhost:5173"
echo "   - Fill out contact form"
echo "   - Check fuhadcs@icloud.com for email!"
echo ""
echo "=========================================="
echo "Need help? See EMAILJS_QUICK_START.md"

