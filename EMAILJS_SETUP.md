# EmailJS Setup Guide

This contact form uses EmailJS to send emails directly from the frontend without needing a backend server.

## Setup Instructions

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your Service ID

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Template ID**: `template_contact_form`
**Subject**: `New Contact Form Message from {{from_name}}`
**Content**:
```
You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. Save the template and note down the Template ID

### 4. Get Public Key
1. Go to "Account" > "General"
2. Find your Public Key (User ID)

### 5. Configure Environment Variables
Create a `.env` file in your project root with:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Update Contact.jsx (if needed)
The Contact component is already configured to use these environment variables. If you need to change the template parameters, update the `templateParams` object in the `handleSubmit` function.

## Testing
1. Start your development server: `npm start`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting
- Make sure all environment variables are set correctly
- Check the browser console for any error messages
- Verify your EmailJS service is properly configured
- Ensure your email template variables match the ones used in the code

## Free Tier Limits
- 200 emails per month
- Up to 2 email services
- Up to 2 email templates

For production use with higher volume, consider upgrading to a paid plan.
