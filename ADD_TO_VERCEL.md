# ✅ Add These Exact Credentials to Vercel

## 📋 Your EmailJS Credentials

| Credential | Value |
|-----------|-------|
| **Service ID** | `service_qpmysgb` |
| **Template ID** | `template_9gbqy6j` |
| **Public Key** | `w1-JxvmRCX8qn3X7l` |
| **Delivers to** | `fuhadcs@gmail.com` |

---

## 🚀 3-Step Process

### Step 1: Open Vercel Environment Variables

Click this link and sign in:
```
https://vercel.com/dashboard
```

Then:
1. Find your **portfolio** project
2. Click on it
3. Click **Settings** (top menu)
4. Click **Environment Variables** (left sidebar)

---

### Step 2: Add These 3 Variables

Click **"Add Variable"** or **"Add New"** button

#### Copy and Paste These Exactly:

**Variable 1:**
```
Name:  VITE_EMAILJS_SERVICE_ID
Value: service_qpmysgb
```
✅ Check: Production
✅ Check: Preview  
✅ Check: Development
Click **Save**

**Variable 2:**
```
Name:  VITE_EMAILJS_TEMPLATE_ID
Value: template_9gbqy6j
```
✅ Check: Production
✅ Check: Preview
✅ Check: Development
Click **Save**

**Variable 3:**
```
Name:  VITE_EMAILJS_PUBLIC_KEY
Value: w1-JxvmRCX8qn3X7l
```
✅ Check: Production
✅ Check: Preview
✅ Check: Development
Click **Save**

---

### Step 3: Redeploy

After adding all 3 variables:

1. Go to **"Deployments"** tab (top menu)
2. Find the latest deployment
3. Click the **three dots (...)** on the right
4. Click **"Redeploy"**
5. Wait 1-2 minutes for deployment to complete

---

## ✅ Verify It Works

After redeployment completes:

### Test 1: Check Variables Load
Visit: **https://www.mfuhad.xyz/#env-test**

You should see:
```
✅ Service ID: service_qpmysgb
✅ Template ID: template_9gbqy6j
✅ Public Key: w1-JxvmRCX8qn3X7l
```

### Test 2: Send Email
1. Go to: **https://www.mfuhad.xyz**
2. Navigate to Contact page
3. Fill out the form
4. Submit
5. Check **fuhadcs@gmail.com** for the email

---

## 📝 Checklist

- [ ] Opened Vercel dashboard
- [ ] Found portfolio project
- [ ] Opened Settings → Environment Variables
- [ ] Added `VITE_EMAILJS_SERVICE_ID` = `service_qpmysgb`
- [ ] Added `VITE_EMAILJS_TEMPLATE_ID` = `template_9gbqy6j`
- [ ] Added `VITE_EMAILJS_PUBLIC_KEY` = `w1-JxvmRCX8qn3X7l`
- [ ] Checked Production for all 3 variables
- [ ] Saved all 3 variables
- [ ] Went to Deployments tab
- [ ] Clicked Redeploy on latest deployment
- [ ] Waited for deployment to complete
- [ ] Visited /#env-test to verify variables load
- [ ] Tested contact form
- [ ] Received email at fuhadcs@gmail.com

---

## 🎯 Expected Result

**On /#env-test page:**
```
✅ All credentials loaded! Contact form should work.
```

**On Contact form submission:**
- Green success message appears
- Email arrives at fuhadcs@gmail.com

---

## 🆘 If Still Not Working

After completing all steps above, if it still doesn't work:

1. **Check Console Errors**
   - Open contact page
   - Press F12 (browser console)
   - Submit form
   - Look for any red errors
   - Take a screenshot

2. **Check EmailJS Dashboard**
   - Go to: https://dashboard.emailjs.com/admin
   - Check if Gmail service is connected (green checkmark)
   - If not connected, click "Reconnect"

3. **Try Test Tool**
   - Open `verify-emailjs.html` locally
   - Test credentials
   - See if it works locally but not on Vercel

---

## 📞 Common Issues

### Issue: Env test shows "❌ Missing" after redeploy
**Fix**: 
- Double-check variable names (must be EXACT, including `VITE_` prefix)
- Make sure Production is checked
- Try redeploying again
- Clear browser cache (Ctrl+Shift+R)

### Issue: Variables load but get 400 error
**Fix**:
- Reconnect Gmail in EmailJS dashboard
- Go to: https://dashboard.emailjs.com/admin
- Find service `service_qpmysgb`
- Click "Reconnect"
- Grant all permissions

---

**Time needed: 5 minutes**
**Start here: https://vercel.com/dashboard** 🚀

