# 🐛 Debug EmailJS on Vercel - Step by Step

## ❌ Problem: Email works locally but not on Vercel

Let's diagnose and fix this together.

---

## 🔍 Step 1: Check If Environment Variables Are Loading

### On Production (Vercel):

Visit this URL on your deployed site:
```
https://www.mfuhad.xyz/#env-test
```

This will show you:
- ✅ Which variables are loaded
- ❌ Which variables are missing
- 📊 All VITE_ environment variables available

### What to Look For:

**If ALL show ✅ Loaded**:
- Environment variables are configured correctly
- Problem is something else (Gmail auth, CORS, etc.)

**If ANY show ❌ Missing**:
- Variables not added to Vercel, OR
- Site needs redeployment after adding variables

---

## 🎯 Step 2: Verify Vercel Environment Variables

Go to: **https://vercel.com/[your-username]/portfolio/settings/environment-variables**

### Check These Exist:

| Variable Name | Value | Environments |
|--------------|-------|--------------|
| `VITE_EMAILJS_SERVICE_ID` | `service_qpmysgb` | ✅ Production, ✅ Preview, ✅ Development |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_9gbqy6j` | ✅ Production, ✅ Preview, ✅ Development |
| `VITE_EMAILJS_PUBLIC_KEY` | `w1-JxvmRCX8qn3X7l` | ✅ Production, ✅ Preview, ✅ Development |

### Common Mistakes:

❌ **Wrong prefix**: `REACT_APP_` instead of `VITE_`
❌ **Typos**: `VITE_EMAILJS_SEVICE_ID` (typo in SERVICE)
❌ **Not checked**: Production environment not selected
❌ **Old values**: Incorrect Service ID or keys

---

## 🔄 Step 3: Force Redeploy

After adding or fixing variables:

### Option A: Redeploy from Dashboard
1. Go to: https://vercel.com/[your-username]/portfolio
2. Click **"Deployments"** tab
3. Click **three dots (...)** on latest deployment
4. Click **"Redeploy"**
5. Wait for deployment to complete

### Option B: Push Empty Commit
```bash
cd /Users/muhammedfuhadc/Desktop/no\ idea/personal/portfolio
git commit --allow-empty -m "chore: Force redeploy for env vars"
git push origin main
```

**IMPORTANT**: Variables are only loaded at build time, not runtime!

---

## 🧪 Step 4: Test on Production

After redeployment:

1. Go to: **https://www.mfuhad.xyz**
2. Navigate to Contact page
3. Open **Browser Console** (F12)
4. Try to submit the form
5. Look for console output:

### Success Output:
```
🔍 EmailJS Config Check: {
  serviceId: "service_qpmysgb",
  templateId: "template_9gbqy6j",
  publicKey: "w1-JxvmRCX8qn3X7l",
  isDev: false,
  mode: "production",
  allEnvVars: ["VITE_EMAILJS_SERVICE_ID", "VITE_EMAILJS_TEMPLATE_ID", "VITE_EMAILJS_PUBLIC_KEY"]
}
```

### Failure Output:
```
🔍 EmailJS Config Check: {
  serviceId: "❌ MISSING",
  templateId: "❌ MISSING",
  publicKey: "❌ MISSING",
  allEnvVars: []
}
```

---

## 📋 Troubleshooting Checklist

### Issue: Variables Show "❌ MISSING" on Production

**Possible Causes:**
- [ ] Variables not added to Vercel dashboard
- [ ] Variables added but site not redeployed
- [ ] Wrong environment selected (only Preview/Development, not Production)
- [ ] Variable names have typos
- [ ] Using wrong prefix (REACT_APP instead of VITE)

**Fix:**
1. Double-check Vercel dashboard for all 3 variables
2. Verify "Production" is checked for each
3. Redeploy the site
4. Clear browser cache and refresh

---

### Issue: Variables Load But Still Get 400 Error

**Check Browser Console for Exact Error:**

#### Error: "Gmail_API: Request had insufficient authentication scopes"
**Fix**: Reconnect Gmail in EmailJS Dashboard
- Go to: https://dashboard.emailjs.com/admin
- Find service `service_qpmysgb`
- Click "Reconnect"
- Grant all permissions

#### Error: "Service not found" or "Invalid user ID"
**Fix**: Verify credentials
- Service ID: `service_qpmysgb`
- Template ID: `template_9gbqy6j`
- Public Key: `w1-JxvmRCX8qn3X7l`
- Double-check these in EmailJS dashboard

#### Error: "CORS policy" or "Access-Control-Allow-Origin"
**Fix**: Add domain to EmailJS allowlist
- Go to: https://dashboard.emailjs.com/admin/account
- Find "Allowed Origins"
- Add: `https://www.mfuhad.xyz` and `https://mfuhad.xyz`

---

### Issue: Works on Vercel Preview but Not Production

**Cause**: Environment variables not set for Production environment

**Fix**:
1. Go to Vercel → Settings → Environment Variables
2. For each variable, edit and ensure **"Production"** is checked
3. Save
4. Redeploy

---

## 📊 Quick Diagnostic Steps

### 1. Visit Env Test Page
```
https://www.mfuhad.xyz/#env-test
```
→ Shows which variables are loaded

### 2. Check Vercel Dashboard
→ All 3 variables exist with correct names

### 3. Check Environments
→ Production checkbox is selected

### 4. Redeploy
→ After any changes to env vars

### 5. Test Form
→ Check browser console for errors

### 6. Check EmailJS Dashboard
→ Gmail service connected, template exists

---

## 🎯 Expected Results When Working

### Console Output:
```javascript
🔍 EmailJS Config Check: {
  serviceId: "service_qpmysgb",
  templateId: "template_9gbqy6j", 
  publicKey: "w1-JxvmRCX8qn3X7l",
  isDev: false,
  mode: "production",
  allEnvVars: Array(3) ["VITE_EMAILJS_SERVICE_ID", ...]
}
```

### Form Submission:
```
✅ Email sent successfully: {status: 200, text: "OK"}
```

### Email Received:
```
To: fuhadcs@gmail.com
Subject: New Contact from [Name]: [Subject]
Body: [Message content]
```

---

## 🚨 If Still Not Working After All Steps

### Collect This Information:

1. **Env Test Result**: Visit `/#env-test` and screenshot
2. **Vercel Variables**: Screenshot of environment variables page
3. **Console Errors**: Screenshot of browser console when submitting form
4. **Network Tab**: Screenshot of failed EmailJS request (if any)
5. **EmailJS Dashboard**: Screenshot showing service status

### Common Last Resort Fixes:

1. **Delete and Re-add Variables**
   - Remove all 3 from Vercel
   - Add them fresh
   - Redeploy

2. **Create New EmailJS Service**
   - Create new Gmail service in EmailJS
   - Get new Service ID
   - Update in Vercel
   - Redeploy

3. **Check Build Logs**
   - Vercel Deployments → Latest → Function Logs
   - Look for any build-time errors

---

## 📝 Summary

**Quick Steps:**
1. Visit `https://www.mfuhad.xyz/#env-test` → Check if vars load
2. If missing → Add to Vercel → Redeploy
3. If loaded → Check Gmail connection in EmailJS
4. Test form → Check console for specific error
5. Fix specific error → Redeploy → Test again

---

## 🔗 Quick Links

- **Env Test**: https://www.mfuhad.xyz/#env-test
- **Vercel Dashboard**: https://vercel.com/dashboard
- **EmailJS Dashboard**: https://dashboard.emailjs.com/admin
- **Vercel Env Vars**: https://vercel.com/[username]/portfolio/settings/environment-variables

---

**Start with Step 1 (Env Test) and work through each step!** 🎯

