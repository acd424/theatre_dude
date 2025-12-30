# Theatre Dude - Conway's Reel Time Website

A modern Next.js website for Theatre Dude featuring incredible improv performances, Little Mermaids Jr production, and exclusive autographed merchandise.

## 🎭 Features

- **Homepage**: Eye-catching hero section with Theatre Dude branding
- **Listen Page**: Organized sections for Incredible Improv Playlist, Little Mermaids Jr, and Reviews
- **Store Page**: T-shirt merchandise in all sizes plus autographed items, with prominent Vinted store link
- **Responsive Design**: Looks great on all devices
- **Bold Aesthetic**: Editorial/magazine-inspired design with distinctive typography

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Your Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!** Your site will be live in minutes with a URL like: `your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be deployed!

## 🎯 Customization Guide

### Update Vinted Store Link

In `pages/store.js`, line 64, replace the href with your actual Vinted store URL:

```javascript
<a 
  href="https://www.vinted.com/YOUR_STORE_URL" 
  target="_blank" 
  rel="noopener noreferrer"
  className={styles.vintedButton}
>
```

### Add Your Show Content

Edit the `podcastCategories` array in `pages/listen.js` to add your own videos and shows.

### Add Product Images

Replace the placeholder images in `pages/store.js` with actual product photos. You can add images to the `public` folder and reference them.

### Change Colors

Edit `styles/globals.css` CSS variables:

```css
:root {
  --color-bg: #0a0a0a;          /* Background color */
  --color-text: #f5f5f5;        /* Text color */
  --color-accent: #ff6b35;      /* Primary accent */
  --color-accent-2: #f7b801;    /* Secondary accent */
}
```

### Add Product Images

Replace the placeholder in `pages/store.js` with actual image URLs or upload images to the `public` folder.

## 📁 Project Structure

```
website/
├── components/
│   └── Navigation.js       # Main navigation component
├── pages/
│   ├── _app.js            # Next.js app wrapper
│   ├── _document.js       # HTML document structure
│   ├── index.js           # Homepage
│   ├── listen.js          # Listen/Podcasts page
│   └── store.js           # Store page
├── styles/
│   ├── globals.css        # Global styles & CSS variables
│   ├── Home.module.css    # Homepage styles
│   ├── Listen.module.css  # Listen page styles
│   ├── Store.module.css   # Store page styles
│   └── Navigation.module.css # Navigation styles
├── package.json
└── README.md
```

## 🎨 Design Features

- **Bold Typography**: Using Bebas Neue for headlines and Crimson Pro for body text
- **Animated Elements**: Rotating circles, sliding effects, hover animations
- **Color Scheme**: Dark background with orange/yellow accents
- **Responsive Layout**: Mobile-first design that scales beautifully
- **Theatre-Themed**: Perfect for improv and theatre content

## 🔧 Tech Stack

- Next.js 14
- React 18
- CSS Modules
- Google Fonts

## 📝 Next Steps

1. Add your actual content (shows, videos, product images)
2. Update the Vinted store link with your actual URL
3. Customize colors to match your brand
4. Add real product photos for the store
5. Connect analytics (Google Analytics, Vercel Analytics)
6. Set up a custom domain in Vercel

---

Built with ❤️ for Theatre Dude using Next.js and deployed on Vercel
