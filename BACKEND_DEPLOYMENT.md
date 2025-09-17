# Backend API Deployment Guide

## Quick Fix for API Connection Issues

The frontend is trying to connect to a citation API that needs to be deployed. Here are the options:

### Option 1: Deploy Backend to Vercel (Recommended)

1. **Create a new Vercel project for the backend:**
   ```bash
   cd backend
   vercel --prod
   ```

2. **Update the environment variable:**
   - In your portfolio's `.env` file, set:
   ```
   VITE_CITATION_API_URL=https://your-backend-url.vercel.app/api
   ```

### Option 2: Run Backend Locally (Development)

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **The API will be available at:** `http://localhost:3001/api`

### Option 3: Disable API Calls (Temporary Fix)

If you want to temporarily disable the API calls and use mock data only, update the citation service to always return mock data.

## Current Status

- ✅ Frontend configured to use production API URL
- ✅ Environment variables set up
- ✅ Fallback to mock data when API unavailable
- ⏳ Backend needs to be deployed

## Testing the Fix

1. Build and deploy the frontend with the new configuration
2. The API connection errors should be resolved
3. Citation counts will use mock data until the backend is deployed
