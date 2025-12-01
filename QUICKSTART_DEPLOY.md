# 🚀 Quick Deploy Guide

Get your site live in **under 5 minutes**!

## Fastest Method: Vercel (Recommended)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready to deploy"
git push origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" → Use GitHub to login
3. Click "Add New Project"
4. Select your repository
5. Click "Deploy" (settings are auto-detected!)

**Done!** Your site is live at `https://your-project-name.vercel.app`

---

## Alternative: Deploy via Command Line

### Install Vercel CLI
```bash
npm install -g vercel
```

### Deploy
```bash
npm run build
vercel
```

Follow the prompts - it's that simple!

---

## What You Get

✅ **Free HTTPS** (SSL certificate)  
✅ **Global CDN** (fast loading worldwide)  
✅ **Auto-deployments** (every git push)  
✅ **Custom domain support** (free!)  
✅ **No credit card required**

---

## Next Steps

- **Custom Domain**: Add your domain in Vercel project settings
- **Environment Variables**: Add in Project Settings → Environment Variables
- **Automatic Deployments**: Every push to main branch auto-deploys!

---

For more deployment options (Netlify, Cloudflare, GitHub Pages), see [DEPLOYMENT.md](./DEPLOYMENT.md)

