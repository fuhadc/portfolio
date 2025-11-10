# EmailJS Credentials Setup

## ✅ What You Have

**Service ID**: `service_qpmysgb`

---

## 📋 What You Still Need

### 1. Template ID
### 2. Public Key

---

## 🚀 Quick Setup (2 minutes)

### Step 1: Get Template ID

1. Go to **https://dashboard.emailjs.com**
2. Click **"Email Templates"** (left sidebar)
3. You should see your contact form template
4. Copy the **Template ID** (looks like `template_abc123`)

**Don't have a template?** Create one:
- Click **"Create New Template"**
- **Subject**: `New Contact: {{subject}}`
- **To Email**: `fuhadcs@icloud.com`
- **Content**:
```
From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```
- **Save** and copy the Template ID

---

### Step 2: Get Public Key

1. Stay in **https://dashboard.emailjs.com**
2. Click **"Account"** (left sidebar)
3. Find **"API Keys"** section
4. Copy your **Public Key** (not the Private Key!)

---

### Step 3: Update .env File

Open your `.env` file and update these lines:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_qpmysgb
VITE_EMAILJS_TEMPLATE_ID=template_YOUR_ID_HERE
VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE
```

**Replace:**
- `template_YOUR_ID_HERE` with your actual Template ID
- `YOUR_PUBLIC_KEY_HERE` with your actual Public Key

---

### Step 4: Restart Dev Server

```bash
# Stop current server (Ctrl+C)
npm run dev
```

---

### Step 5: Test It!

1. Go to `http://localhost:5173`
2. Navigate to Contact page
3. Fill out the form:
   - Name: Test User
   - Email: your-email@example.com
   - Subject: Test Message
   - Message: This is a test
4. Click **"Send Message"**
5. **Check fuhadcs@icloud.com** for the email! 📧

---

## 🌐 Deploy to Production

Once local testing works, add to Vercel:

1. Go to **https://vercel.com** → Your project
2. **Settings → Environment Variables**
3. Add all three:

| Variable Name | Value |
|---------------|-------|
| `VITE_EMAILJS_SERVICE_ID` | `service_qpmysgb` |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_...` (your template ID) |
| `VITE_EMAILJS_PUBLIC_KEY` | Your public key |

4. **Save**
5. **Redeploy** your project

---

## 📝 Example .env File

Your complete `.env` should look like this:

```env
# Environment Configuration for Portfolio
# API Configuration
VITE_CITATION_API_URL=https://citation-api-mfuhad.vercel.app/api

# Site Configuration
VITE_SITE_URL=https://www.mfuhad.xyz
VITE_SITE_NAME=Muhammed Fuhad C - Portfolio

# EmailJS Configuration
# Contact form sends to fuhadcs@icloud.com
VITE_EMAILJS_SERVICE_ID=service_qpmysgb
VITE_EMAILJS_TEMPLATE_ID=template_abc123
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here

# Google Analytics (optional)
VITE_GA_MEASUREMENT_ID=G-02F5YF0N07

# Base URL
VITE_BASE_URL=https://www.mfuhad.xyz
```

---

## ✅ Verification Checklist

- [ ] Service ID added: `service_qpmysgb`
- [ ] Template ID obtained from EmailJS dashboard
- [ ] Public Key obtained from EmailJS dashboard
- [ ] `.env` file updated with all three credentials
- [ ] Dev server restarted
- [ ] Test email sent successfully
- [ ] Email received at fuhadcs@icloud.com
- [ ] Environment variables added to Vercel
- [ ] Production site redeployed
- [ ] Live contact form tested

---

## 🆘 Troubleshooting

### Can't find Template ID?
- Go to https://dashboard.emailjs.com/admin/templates
- You should see your templates listed
- If empty, create a new template (see Step 1)

### Can't find Public Key?
- Go to https://dashboard.emailjs.com/admin/account
- Look for "API Keys" section
- Copy the **Public Key** (not Private Key!)

### Form still showing 400 error?
1. Double-check all three credentials are correct
2. Make sure there are no extra spaces
3. Restart the dev server
4. Check browser console for specific error

### Email not received?
1. Check spam folder
2. Verify "To Email" in template is `fuhadcs@icloud.com`
3. Check EmailJS dashboard logs for errors
4. Try sending another test

---

## 📧 What You'll Receive

Once setup, you'll get emails like:

```
To: fuhadcs@icloud.com
From: Portfolio Contact Form
Subject: New Contact: Project Inquiry

From: John Doe
Email: john@example.com
Subject: Project Inquiry

Message:
Hi, I'd like to discuss a project...
```

---

## 🎯 Current Status

| Item | Status |
|------|--------|
| Service ID | ✅ **Done** - `service_qpmysgb` |
| Template ID | ⏳ **Needed** - Get from dashboard |
| Public Key | ⏳ **Needed** - Get from dashboard |
| Update .env | ⏳ **Waiting** - After getting credentials |
| Test Form | ⏳ **Next** - After .env update |

---

**Once you provide Template ID and Public Key, your contact form will be fully functional!** 📨

Need detailed setup? See **EMAILJS_SETUP_COMPLETE.md**

