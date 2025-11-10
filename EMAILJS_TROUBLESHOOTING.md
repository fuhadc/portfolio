# 🔧 EmailJS 400 Error Troubleshooting

## ❌ Current Error
```
POST https://api.emailjs.com/api/v1.0/email/send 400 (Bad Request)
```

---

## ✅ Quick Fixes (Try These First)

### 1. Restart Development Server ⚡
**Most Common Fix** - Vite doesn't hot-reload .env changes

```bash
# Stop server (Ctrl+C)
npm run dev
```

### 2. Check Browser Console
Open the contact form and look for:
```
EmailJS Config: {
  serviceId: '✓ Loaded' or '✗ Missing',
  templateId: '✓ Loaded' or '✗ Missing',
  publicKey: '✓ Loaded' or '✗ Missing'
}
```

---

## 🔍 Verify EmailJS Dashboard Settings

### Step 1: Check Service ID
1. Go to: https://dashboard.emailjs.com/admin
2. Click on your email service
3. Verify Service ID is: **`service_qpmysgb`**

### Step 2: Check Template ID
1. Go to: https://dashboard.emailjs.com/admin/templates
2. Find your template
3. Verify Template ID is: **`template_9gbqy6j`**

### Step 3: Check Public Key
1. Go to: https://dashboard.emailjs.com/admin/account
2. Under "API Keys" section
3. Verify Public Key is: **`w1-JxvmRCX8qn3X7l`**

---

## 📧 Template Configuration

Your EmailJS template **MUST** have these exact variable names:

### Required Variables:
```
{{from_name}}    - Sender's name
{{from_email}}   - Sender's email
{{subject}}      - Email subject
{{message}}      - Email message
{{to_name}}      - Recipient name (optional)
{{reply_to}}     - Reply-to email (optional)
```

### Recommended Template Content:

**Subject Line:**
```
New Contact from {{from_name}}: {{subject}}
```

**Email Body:**
```
You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply To: {{reply_to}}
```

**To Email:** `fuhadcs@gmail.com`

---

## 🔐 Common Issues & Solutions

### Issue 1: Credentials Not Loading
**Symptoms**: Console shows '✗ Missing'
**Solution**: 
```bash
# Verify .env file
cat .env | grep EMAILJS

# Should show:
VITE_EMAILJS_SERVICE_ID=service_qpmysgb
VITE_EMAILJS_TEMPLATE_ID=template_9gbqy6j
VITE_EMAILJS_PUBLIC_KEY=w1-JxvmRCX8qn3X7l

# Restart server
npm run dev
```

### Issue 2: Wrong Public Key Format
**Check**: Your public key should be the **User ID** from EmailJS Account settings
- ✅ Correct: `w1-JxvmRCX8qn3X7l` (User ID/Public Key)
- ❌ Wrong: `8NRrthnnmlOK1lwmUsIWo` (Private Key - for server-side only)

### Issue 3: Service Not Active
1. Go to EmailJS Dashboard
2. Make sure your email service is **Connected** (green checkmark)
3. If not, reconnect your email account

### Issue 4: Template Variables Mismatch
**Error 400** can occur if template expects variables that aren't sent.

**Check your template** for any **required** variables and ensure they're in the `templateParams` object.

### Issue 5: Account Limit Reached
- Free EmailJS accounts: 200 emails/month
- Check: https://dashboard.emailjs.com/admin/account

---

## 🧪 Test with Browser Console

Open browser console (F12) and run:

```javascript
// Check if credentials are loaded
console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID)
console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID)
console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
```

**Expected Output:**
```
Service ID: service_qpmysgb
Template ID: template_9gbqy6j
Public Key: w1-JxvmRCX8qn3X7l
```

---

## 📋 Verification Checklist

- [ ] Development server restarted after .env update
- [ ] Browser console shows all 3 credentials loaded (✓)
- [ ] Service ID matches: `service_qpmysgb`
- [ ] Template ID matches: `template_9gbqy6j`
- [ ] Public Key matches: `w1-JxvmRCX8qn3X7l`
- [ ] Email service is connected in EmailJS dashboard
- [ ] Template has all required variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- [ ] Template "To Email" is set to: `fuhadcs@gmail.com`
- [ ] Account is within email limit (200/month for free)

---

## 🔄 Full Reset Process

If nothing works, try a complete reset:

```bash
# 1. Verify .env file
cat .env | grep EMAILJS

# 2. If missing, run update script again
./update-env.sh

# 3. Clear any build cache
rm -rf node_modules/.vite

# 4. Restart server
npm run dev

# 5. Hard refresh browser
# Mac: Cmd+Shift+R
# Windows/Linux: Ctrl+Shift+R
```

---

## 📞 Still Having Issues?

### Get More Details:

Add this to your browser console when the error occurs:

```javascript
// In browser console, after form submission fails
// Check the Network tab for the failed request
// Look at the Response to see the exact error message
```

### Check EmailJS Logs:
1. Go to: https://dashboard.emailjs.com/admin/logs
2. Look for failed send attempts
3. The error message will tell you exactly what's wrong

---

## 🎯 Expected Success Response

When working correctly, you'll see:

**Browser Console:**
```
EmailJS Config: {serviceId: '✓ Loaded', templateId: '✓ Loaded', publicKey: '✓ Loaded'}
Email sent successfully: {status: 200, text: 'OK'}
```

**Email arrives at:** `fuhadcs@gmail.com`

---

## 💡 Pro Tips

1. **Test in EmailJS Dashboard First**
   - Go to your template
   - Click "Test It"
   - If it fails there, fix template configuration first

2. **Check Service Connection**
   - Gmail, Outlook, etc. need to be connected and authorized
   - Reconnect if you see any warnings

3. **Verify Public Key**
   - It's called "Public Key" in newer EmailJS versions
   - Also known as "User ID" in older versions
   - Find it under Account settings, NOT in the service settings

---

**Last Updated**: November 10, 2025

