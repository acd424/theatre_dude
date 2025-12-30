# 🚀 Quick Start Guide - Theatre Dude Website

## Get Your Website Running in 5 Minutes!

### Step 1: Download and Extract
Download the `website` folder to your computer.

### Step 2: Install Dependencies
Open your terminal/command prompt in the `website` folder and run:
```bash
npm install
```

### Step 3: Start the Development Server
```bash
npm run dev
```

### Step 4: View Your Site
Open your browser and go to: **http://localhost:3000**

That's it! Your website is now running locally! 🎉

---

## Deploy to Vercel (Make it Live!)

### Option 1: GitHub + Vercel (Easiest)

1. **Create a GitHub account** (if you don't have one): https://github.com
2. **Create a new repository** on GitHub
3. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

4. **Deploy to Vercel**:
   - Go to https://vercel.com
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Select your repository
   - Click "Deploy"
   
5. **Done!** Your site is live at: `your-project.vercel.app`

### Option 2: Vercel CLI (Fast)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Run from your project folder:
   ```bash
   vercel
   ```

3. Follow the prompts and you're live!

---

## Important: Update Your Vinted Store Link!

Don't forget to update the Vinted store link in:
- File: `pages/store.js`
- Line 86
- Replace with your actual Vinted store URL

---

## Need Help?

Check the full README.md for detailed instructions and customization options!
