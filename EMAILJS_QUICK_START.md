# 🚀 EmailJS Quick Start - 5 Minutes

Send contact form emails to **fuhadcs@icloud.com**

---

## ⚡ Super Quick Setup

### 1️⃣ Sign Up (1 min)
- Go to **https://www.emailjs.com/signup**
- Sign up with email or Google

### 2️⃣ Connect Email Service (2 min)
1. Click **"Email Services"** → **"Add New Service"**
2. Choose **Gmail** (easiest) or **iCloud**
3. For iCloud: Use app-specific password from https://appleid.apple.com
4. Save and copy the **Service ID** (e.g., `service_abc123`)

### 3️⃣ Create Template (1 min)
1. Click **"Email Templates"** → **"Create New Template"**
2. **To Email**: `fuhadcs@icloud.com`
3. **Subject**: `New Contact: {{subject}}`
4. **Content**:
```
From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```
5. Save and copy the **Template ID** (e.g., `template_xyz789`)

### 4️⃣ Get Public Key (30 sec)
1. Click **"Account"** → Copy your **Public Key**

### 5️⃣ Add to Project (30 sec)
```bash
# Create .env file
cp env.sample .env
```

Edit `.env`:
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 6️⃣ Test (1 min)
```bash
# Restart server
npm run dev

# Go to http://localhost:5173
# Fill contact form → Send
# Check fuhadcs@icloud.com!
```

---

## 🌐 Deploy to Production

### Vercel Dashboard:
1. Go to https://vercel.com → Your project
2. **Settings → Environment Variables**
3. Add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. **Redeploy**

**Done!** 🎉

---

## 📧 Test Email

After setup, you should receive emails like:

```
To: fuhadcs@icloud.com
Subject: New Contact: Project Inquiry

From: John Doe
Email: john@example.com
Subject: Project Inquiry

Message:
Hi, I'd like to discuss a project with you...
```

---

## ❓ Problems?

### Email not sending?
1. Check console for errors (F12)
2. Verify Service ID, Template ID, and Public Key
3. Restart dev server
4. Check EmailJS dashboard logs

### Using iCloud?
- Need app-specific password
- Go to https://appleid.apple.com
- Security → Generate app password

### Need help?
- See **EMAILJS_SETUP_COMPLETE.md** for detailed guide
- EmailJS docs: https://www.emailjs.com/docs/

---

## 🎯 Current Status

✅ **Code**: Already implemented in your contact form
✅ **Form**: Fully functional with validation
✅ **Design**: Beautiful UI with animations
❌ **EmailJS**: Needs your credentials (5 min setup)

**After setup → Contact form will send to fuhadcs@icloud.com** 📨

