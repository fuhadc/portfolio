# Vite Environment Variables Guide

## Issue Fixed ✅
Fixed `Uncaught ReferenceError: process is not defined` error by migrating from `process.env` to `import.meta.env`.

---

## What Changed?

### Before (React/CRA Style)
```javascript
process.env.REACT_APP_GA_MEASUREMENT_ID
process.env.NODE_ENV === 'development'
```

### After (Vite Style)
```javascript
import.meta.env.VITE_GA_MEASUREMENT_ID
import.meta.env.DEV
```

---

## Vite Environment Variable Rules

### 1. **Variable Naming**
- **Must** start with `VITE_` prefix to be exposed to client
- Example: `VITE_API_KEY`, `VITE_GA_ID`

### 2. **Built-in Variables**
Vite provides these automatically:
- `import.meta.env.MODE` - Current mode (`'development'` or `'production'`)
- `import.meta.env.DEV` - Boolean, `true` in development
- `import.meta.env.PROD` - Boolean, `true` in production
- `import.meta.env.BASE_URL` - Base URL of the app
- `import.meta.env.SSR` - Boolean, `true` if running in server

### 3. **Environment Files**
Create these files in your project root:
- `.env` - Loaded in all cases
- `.env.local` - Loaded in all cases, ignored by git
- `.env.development` - Loaded in development mode
- `.env.production` - Loaded in production mode

---

## Updated Files

### 1. `/src/config/analytics.js`
```javascript
// ✅ Fixed
measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-02F5YF0N07'
debug: import.meta.env.DEV || false
```

### 2. `/src/pages/Contact.jsx`
```javascript
// ✅ Fixed - EmailJS Configuration
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_1234567'
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_1234567'
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'
```

### 3. `/src/utils/seoAdvanced.js`
```javascript
// ✅ Fixed - Base URL
const baseUrl = import.meta.env.VITE_BASE_URL || 'https://www.mfuhad.xyz'
```

### 4. Development Checks
All files now use:
```javascript
// ✅ Fixed
if (import.meta.env.DEV) {
  // Development only code
}
```

---

## How to Use Environment Variables

### Step 1: Create `.env` file
```bash
# In project root
cp env.sample .env
```

### Step 2: Add your values
```env
# .env file
VITE_GA_MEASUREMENT_ID=G-YOUR-ACTUAL-ID
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_BASE_URL=https://www.mfuhad.xyz
```

### Step 3: Access in code
```javascript
// In any .js/.jsx file
const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID
const isDev = import.meta.env.DEV
const baseUrl = import.meta.env.VITE_BASE_URL
```

---

## Important Notes

### ⚠️ Security
- **NEVER** commit `.env` file to git
- `.env.local` is automatically ignored by git
- Only variables starting with `VITE_` are exposed to client
- Don't store sensitive secrets (API keys, passwords) in frontend env vars

### 🔄 Restart Required
- After changing `.env` file, **restart the dev server**
- Changes to env files are not hot-reloaded

### 📝 TypeScript Support (Optional)
If using TypeScript, you can add type definitions:

```typescript
// src/vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID: string
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  readonly VITE_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

---

## Examples

### Conditional Rendering
```javascript
// Show debug info only in development
{import.meta.env.DEV && (
  <div className="debug-panel">
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
)}
```

### API Configuration
```javascript
const API_URL = import.meta.env.DEV 
  ? 'http://localhost:3000/api'
  : import.meta.env.VITE_API_URL
```

### Feature Flags
```javascript
const enableBetaFeatures = import.meta.env.VITE_ENABLE_BETA === 'true'
```

---

## Deployment (Vercel)

### Add Environment Variables in Vercel Dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add these variables:
   - `VITE_GA_MEASUREMENT_ID`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_BASE_URL`

### Or use Vercel CLI:
```bash
vercel env add VITE_GA_MEASUREMENT_ID
vercel env add VITE_EMAILJS_SERVICE_ID
vercel env add VITE_EMAILJS_TEMPLATE_ID
vercel env add VITE_EMAILJS_PUBLIC_KEY
vercel env add VITE_BASE_URL
```

---

## Migration Checklist

- ✅ Replaced `process.env` with `import.meta.env`
- ✅ Updated variable names to use `VITE_` prefix
- ✅ Changed `process.env.NODE_ENV === 'development'` to `import.meta.env.DEV`
- ✅ Updated `env.sample` file
- ✅ Updated all affected files:
  - `src/config/analytics.js`
  - `src/pages/Contact.jsx`
  - `src/pages/Projects.jsx`
  - `src/pages/Achievements.jsx`
  - `src/utils/seoAdvanced.js`
  - `src/components/LoadingStates.jsx`
  - `src/components/ErrorBoundary.jsx`
  - `src/utils/errorHandler.js`

---

## Testing

1. **Clear browser cache and reload**
2. **Check console for errors** (should be none)
3. **Verify development mode**:
   ```javascript
   console.log('Is Dev?', import.meta.env.DEV)
   ```
4. **Test environment variables**:
   ```javascript
   console.log('GA ID:', import.meta.env.VITE_GA_MEASUREMENT_ID)
   ```

---

## Common Issues

### Issue: Variables are `undefined`
**Solution**: Make sure variable starts with `VITE_` and restart dev server

### Issue: Changes not reflecting
**Solution**: Restart the dev server (Ctrl+C then `npm run dev`)

### Issue: Works locally but not in production
**Solution**: Add environment variables in Vercel/hosting dashboard

---

## Additional Resources

- [Vite Environment Variables Documentation](https://vitejs.dev/guide/env-and-mode.html)
- [Vite GitHub Issues](https://github.com/vitejs/vite/issues)

---

**Status**: ✅ Fixed and Documented
**Date**: November 10, 2024

