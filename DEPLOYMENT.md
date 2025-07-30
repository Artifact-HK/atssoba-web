# 🚀 ATS Alumni Website - Deployment Guide

This guide provides multiple deployment options for your ATS Alumni website.

## 🔧 **Fix GitHub Pages Error**

### **Step 1: Enable GitHub Pages**
1. Go to your GitHub repository
2. Click **Settings** tab
3. Scroll to **Pages** section in left sidebar
4. Under **Source**, select **"GitHub Actions"**
5. Save changes

### **Step 2: Repository Setup**
Make sure your repository has these files:
- `.github/workflows/deploy.yml` ✅ (Already created)
- `next.config.ts` ✅ (Already configured)
- Updated `package.json` ✅ (Already updated)

## 🌐 **Deployment Options**

### **Option 1: Vercel (Recommended for Full-Stack)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: ats-alumni
# - Directory: ./ats-alumni
# - Override settings? N
```

**Environment Variables for Vercel:**
```
DATABASE_URL="your-production-database-url"
NEXTAUTH_SECRET="your-secret-key"
STRIPE_PUBLISHABLE_KEY="your-stripe-key"
STRIPE_SECRET_KEY="your-stripe-secret"
```

### **Option 2: Netlify**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
cd ats-alumni
npm run build

# Deploy
netlify deploy --prod --dir=out
```

### **Option 3: GitHub Pages (Static Only)**

**⚠️ Limitations:**
- No server-side API routes
- No database operations
- Static content only

**Setup:**
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Select "GitHub Actions" as source
4. The workflow will automatically deploy

### **Option 4: Traditional Web Hosting**
```bash
# Build static version
cd ats-alumni
npm run build

# Upload the 'out' folder to your web host
# Point domain to the uploaded files
```

## 🔒 **Environment Configuration**

### **Production Environment Variables**
Create `.env.production` file:
```env
# Database (Use PostgreSQL for production)
DATABASE_URL="postgresql://user:password@host:port/database"

# Authentication
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="your-production-secret-key"

# Stripe (Production keys)
STRIPE_PUBLISHABLE_KEY="pk_live_your_key"
STRIPE_SECRET_KEY="sk_live_your_key"
STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"

# Email (Optional)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"

# File Upload (Optional)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

## 🗄️ **Database Setup for Production**

### **PostgreSQL (Recommended)**
```sql
-- Create database
CREATE DATABASE ats_alumni;

-- Run Prisma migrations
npx prisma migrate deploy
```

### **MySQL Alternative**
```sql
-- Create database
CREATE DATABASE ats_alumni;

-- Update DATABASE_URL in .env
DATABASE_URL="mysql://user:password@host:port/ats_alumni"
```

## 📊 **Build Commands for Different Platforms**

| Platform | Build Command | Output Directory |
|----------|---------------|------------------|
| Vercel | `npm run build` | `.next` |
| Netlify | `npm run build` | `out` |
| GitHub Pages | `npm run build` | `out` |
| Static Host | `npm run build` | `out` |

## 🔍 **Troubleshooting**

### **GitHub Pages Issues:**
```bash
# If you get "Not Found" error:
1. Check repository has Pages enabled
2. Verify workflow permissions
3. Ensure main/master branch exists
4. Check Actions tab for build errors
```

### **Build Errors:**
```bash
# Clear cache and rebuild
rm -rf .next
rm -rf out
npm run build
```

### **Database Issues:**
```bash
# Reset database
npx prisma migrate reset
npx prisma db push
```

## 🎯 **Recommended Deployment Strategy**

### **For Full Functionality:**
1. **Vercel** - Best for Next.js with database
2. **Railway** - Good alternative with database
3. **Render** - Free tier available

### **For Static Demo:**
1. **GitHub Pages** - Free, good for showcase
2. **Netlify** - Free tier with good features
3. **Surge.sh** - Simple static hosting

## 🚀 **Quick Deploy Commands**

### **Vercel (Full-Stack)**
```bash
cd ats-alumni
vercel --prod
```

### **Netlify (Static)**
```bash
cd ats-alumni
npm run build
netlify deploy --prod --dir=out
```

### **GitHub Pages**
```bash
# Just push to main branch
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

## 📞 **Support**

If you encounter deployment issues:
1. Check the build logs in your deployment platform
2. Verify environment variables are set correctly
3. Ensure database is accessible from deployment platform
4. Check Next.js configuration for static export compatibility

---

**Your ATS Alumni website is ready for deployment! 🎓✨**