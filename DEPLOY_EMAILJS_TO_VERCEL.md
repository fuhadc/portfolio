# 🌐 Deploy EmailJS to Vercel (Production)

## ❌ Current Problem
```
✅ Works locally (localhost:5173)
❌ Doesn't work on production (www.mfuhad.xyz)
```

**Why?** The `.env` file is not deployed - it only exists on your computer!

---

## ✅ SOLUTION - Add Environment Variables to Vercel

### Step 1: Go to Vercel Dashboard

**Click this link**: https://vercel.com/dashboard

Or:
1. Go to https://vercel.com
2. Sign in
3. Find your **portfolio** project
4. Click on it

---

### Step 2: Open Environment Variables Settings

In your project dashboard:

1. Click **"Settings"** tab (top navigation)
2. Click **"Environment Variables"** in the left sidebar

**Direct link format:**
```
https://vercel.com/[your-username]/portfolio/settings/environment-variables
```

---

### Step 3: Add EmailJS Variables

Click **"Add New"** button and add these **3 variables**:

#### Variable 1: Service ID
```
Name:  VITE_EMAILJS_SERVICE_ID
Value: service_qpmysgb
```
**Environment**: ✅ Production, ✅ Preview, ✅ Development (check all three)

#### Variable 2: Template ID
```
Name:  VITE_EMAILJS_TEMPLATE_ID
Value: template_9gbqy6j
```
**Environment**: ✅ Production, ✅ Preview, ✅ Development (check all three)

#### Variable 3: Public Key
```
Name:  VITE_EMAILJS_PUBLIC_KEY
Value: w1-JxvmRCX8qn3X7l
```
**Environment**: ✅ Production, ✅ Preview, ✅ Development (check all three)

---

### Step 4: Redeploy Your Site

After adding the variables, you **MUST** redeploy:

**Option A: Redeploy from Vercel Dashboard**
1. Go to **"Deployments"** tab
2. Click the **three dots (...)** on the latest deployment
3. Click **"Redeploy"**
4. Confirm

**Option B: Push a New Commit**
```bash
# Make a small change and push
git commit --allow-empty -m "chore: Trigger redeploy for env vars"
git push origin main
```

**Note**: Environment variables are only applied during build time, so you must redeploy!

---

## 🧪 Verify Deployment

### Step 1: Check Build Logs
1. Go to **"Deployments"** tab
2. Click on the latest deployment
3. Click **"Building"** to see logs
4. Make sure no environment variable errors

### Step 2: Test on Production
1. Go to: https://www.mfuhad.xyz
2. Navigate to **Contact** page
3. Open browser console (F12)
4. Look for the debug message:
   ```
   EmailJS Config: {
     serviceId: '✓ Loaded',
     templateId: '✓ Loaded',
     publicKey: '✓ Loaded'
   }
   ```

### Step 3: Submit Test Email
1. Fill out the contact form
2. Submit
3. Check `fuhadcs@gmail.com` for the email

---

## 📋 Complete Checklist

- [ ] Go to Vercel dashboard
- [ ] Open project settings → Environment Variables
- [ ] Add `VITE_EMAILJS_SERVICE_ID` = `service_qpmysgb`
- [ ] Add `VITE_EMAILJS_TEMPLATE_ID` = `template_9gbqy6j`
- [ ] Add `VITE_EMAILJS_PUBLIC_KEY` = `w1-JxvmRCX8qn3X7l`
- [ ] Select all 3 environments (Production, Preview, Development)
- [ ] Click "Save" for each variable
- [ ] Redeploy the site
- [ ] Test on www.mfuhad.xyz
- [ ] Verify email arrives at fuhadcs@gmail.com

---

## 🎯 Quick Copy-Paste

If Vercel allows bulk import, use this:

```env
VITE_EMAILJS_SERVICE_ID=service_qpmysgb
VITE_EMAILJS_TEMPLATE_ID=template_9gbqy6j
VITE_EMAILJS_PUBLIC_KEY=w1-JxvmRCX8qn3X7l
```

---

## 🔍 Troubleshooting Production Issues

### Issue 1: "✗ Missing" in Production Console

**Cause**: Environment variables not added or deployment didn't rebuild

**Fix**:
1. Double-check all 3 variables are in Vercel settings
2. Redeploy the site
3. Hard refresh browser (Ctrl+Shift+R)

### Issue 2: Still 400 Error on Production

**Cause**: EmailJS domain restrictions

**Fix**:
1. Go to: https://dashboard.emailjs.com/admin/account
2. Find **"Allowed Origins"** or **"Domain Restrictions"**
3. Add your domain: `https://www.mfuhad.xyz`
4. Also add: `https://mfuhad.xyz` (without www)
5. Save and test again

### Issue 3: Works on Preview but not Production

**Cause**: Environment variables not set for Production environment

**Fix**:
1. Check that all variables have **Production** checkbox selected
2. Redeploy

### Issue 4: Variables Not Loading After Redeploy

**Cause**: Build cache

**Fix**:
1. In Vercel, go to Settings → General
2. Scroll to **"Build & Development Settings"**
3. Click **"Clear Cache"**
4. Redeploy

---

## 🌐 Domain Allowlist in EmailJS

EmailJS might restrict which domains can use your account:

### Step 1: Check EmailJS Settings
1. Go to: https://dashboard.emailjs.com/admin/account
2. Look for **"Allowed Origins"** or **"Restrict Access"** section

### Step 2: Add Your Domain
Add these domains:
```
https://www.mfuhad.xyz
https://mfuhad.xyz
http://localhost:5173
```

### Step 3: Save
Click "Save" and test again

---

## 📊 Comparison: Local vs Production

| Aspect | Local (Works ✅) | Production (Not Working ❌) |
|--------|-----------------|----------------------------|
| **Env File** | `.env` file present | `.env` NOT deployed |
| **Variables** | Loaded from `.env` | Must be in Vercel settings |
| **Domain** | `localhost:5173` | `www.mfuhad.xyz` |
| **CORS** | Usually no issues | May need domain allowlist |
| **How to Fix** | Already working | Add vars to Vercel + redeploy |

---

## 🚀 Quick Steps (TL;DR)

1. **Vercel Settings** → Environment Variables
2. **Add 3 variables**:
   - `VITE_EMAILJS_SERVICE_ID` = `service_qpmysgb`
   - `VITE_EMAILJS_TEMPLATE_ID` = `template_9gbqy6j`
   - `VITE_EMAILJS_PUBLIC_KEY` = `w1-JxvmRCX8qn3X7l`
3. **Check all environments** (Production, Preview, Development)
4. **Redeploy** from Vercel dashboard
5. **Test** on www.mfuhad.xyz

**Time needed**: 3-5 minutes

---

## ✅ Success Indicators

When everything works:

**Production Console (F12):**
```
EmailJS Config: {serviceId: '✓ Loaded', templateId: '✓ Loaded', publicKey: '✓ Loaded'}
Email sent successfully: {status: 200, text: 'OK'}
```

**Email Arrives:**
```
To: fuhadcs@gmail.com
Subject: New Contact from [name]: [subject]
```

**No Errors:**
- No 400 errors
- No "Missing" credentials
- No CORS errors

---

## 🎓 Why This Happens

**Security**: The `.env` file is in `.gitignore` and never pushed to GitHub or deployed.

**Solution**: Cloud platforms (Vercel, Netlify, etc.) have their own environment variable systems.

**For Vite**: Variables must start with `VITE_` to be exposed to the browser.

---

## 📞 Still Not Working?

### Check These:

1. **Vercel Dashboard**: All 3 variables present and saved
2. **Variable Names**: Must start with `VITE_` (not `REACT_APP_`)
3. **Environments**: All checked (Production, Preview, Development)
4. **Redeployed**: After adding variables
5. **EmailJS Domain**: `www.mfuhad.xyz` in allowed origins
6. **Browser Console**: Check what the actual error is
7. **Network Tab**: Look at the EmailJS API request/response

---

**Start here**: https://vercel.com/dashboard

**Add these 3 variables → Redeploy → Test!** 🚀

---

**Last Updated**: November 10, 2025

