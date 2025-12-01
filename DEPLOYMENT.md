# Deployment Guide

This guide will help you deploy your Vite + React application to make it accessible from anywhere on the internet.

## Prerequisites

1. Build your application:
   ```bash
   npm run build
   ```

2. Make sure you have a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Best for:** Quick deployments, automatic HTTPS, global CDN

1. **Install Vercel CLI** (optional but recommended):
   ```bash
   npm install -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   npm run build
   vercel
   ```
   - Follow the prompts
   - Your site will be live instantly at `https://your-project.vercel.app`

3. **Deploy via Web Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub/GitLab/Bitbucket
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

4. **Auto-deployments**: Every push to your main branch automatically deploys

**Configuration:** See `vercel.json` in project root (already created)

---

### Option 2: Netlify

**Best for:** Easy setup, form handling, serverless functions

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy via CLI**:
   ```bash
   npm run build
   netlify deploy --prod
   ```

3. **Deploy via Web Dashboard**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub/GitLab/Bitbucket
   - Click "Add new site" → "Import an existing project"
   - Connect your repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

**Configuration:** See `netlify.toml` in project root (already created)

---

### Option 3: Cloudflare Pages

**Best for:** Fast global CDN, great performance, free SSL

1. **Deploy via Web Dashboard**:
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Sign up/login
   - Click "Create a project" → "Connect to Git"
   - Select your repository
   - Build settings:
     - Framework preset: Vite
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Click "Save and Deploy"

2. **Deploy via Wrangler CLI**:
   ```bash
   npm install -g wrangler
   npm run build
   wrangler pages deploy dist
   ```

**Configuration:** See `cloudflare.toml` in project root (already created)

---

### Option 4: GitHub Pages

**Best for:** Free hosting for public repositories

1. **Install gh-pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json** (already done - see scripts section)

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

Your site will be at: `https://[username].github.io/[repository-name]`

**Configuration:** See deployment script in `package.json`

---

### Option 5: Render

**Best for:** Simple deployments, free tier

1. Go to [render.com](https://render.com)
2. Sign up/login with GitHub
3. Click "New" → "Static Site"
4. Connect your repository
5. Build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
6. Click "Create Static Site"

---

### Option 6: Railway

**Best for:** Full-stack apps with backend

1. Go to [railway.app](https://railway.app)
2. Sign up/login with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway will auto-detect and deploy

---

## Quick Comparison

| Platform | Free Tier | Ease of Use | Auto Deploy | Custom Domain | Best For |
|----------|-----------|-------------|-------------|---------------|----------|
| **Vercel** | ✅ Generous | ⭐⭐⭐⭐⭐ | ✅ Yes | ✅ Free | React apps |
| **Netlify** | ✅ Generous | ⭐⭐⭐⭐⭐ | ✅ Yes | ✅ Free | Static sites |
| **Cloudflare Pages** | ✅ Unlimited | ⭐⭐⭐⭐ | ✅ Yes | ✅ Free | Performance |
| **GitHub Pages** | ✅ Yes | ⭐⭐⭐ | ❌ Manual | ✅ Free | Open source |
| **Render** | ✅ Limited | ⭐⭐⭐⭐ | ✅ Yes | ✅ Free | Simple sites |
| **Railway** | ✅ Limited | ⭐⭐⭐⭐ | ✅ Yes | ✅ Paid | Full-stack |

## Custom Domain Setup

All platforms support custom domains:

1. **Vercel/Netlify/Cloudflare**: 
   - Go to project settings → Domains
   - Add your domain
   - Follow DNS configuration instructions

2. **DNS Configuration**:
   - Add a CNAME record pointing to your platform's URL
   - Wait for DNS propagation (5-60 minutes)
   - SSL certificate is automatically generated

## Environment Variables

If you need environment variables:

1. **Vercel**: Project Settings → Environment Variables
2. **Netlify**: Site Settings → Environment Variables
3. **Cloudflare**: Settings → Environment Variables

Add `.env` variables in the platform's dashboard (never commit secrets to Git).

## Recommended: Vercel

For this Vite + React project, **Vercel** is the easiest and most reliable option:

```bash
# Quick deploy with Vercel CLI
npm install -g vercel
npm run build
vercel
```

Or use the web interface at [vercel.com](https://vercel.com) for automatic deployments.

## Troubleshooting

### Build fails
- Check Node.js version in platform settings (use Node 18+)
- Review build logs for errors
- Ensure all dependencies are in `package.json`

### 404 errors on routes
- Configure redirects (see platform-specific config files)
- Ensure client-side routing is set up correctly

### Assets not loading
- Check that `base` in `vite.config.ts` matches your deployment path
- Verify all assets are in the `dist` folder after build

## Next Steps

1. Choose a platform from above
2. Deploy using the instructions
3. Share your live URL!

Your site will be accessible from anywhere in the world! 🌍

