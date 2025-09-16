# Savariya - Groom Wear Website

A beautiful, responsive React+vite website for Savariya, a groom wear shop specializing in traditional Indian menswear including sherwanis, kurtas, and Coats suits.

## 🌟 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Modern UI/UX**: Beautiful brown and golden color theme with smooth animations
- **Product Showcase**: Interactive collection gallery with filtering options
- **Contact System**: Comprehensive contact form with validation
- **Google Maps Integration**: Store location with embedded map
- **Social Media Integration**: Links to Instagram, Facebook, and WhatsApp
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with custom brown/golden theme
- **Icons**: Heroicons and custom SVG icons
- **Fonts**: Google Fonts (Playfair Display + Inter)

## 🚀 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Step 1: Install Dependencies
```bash
npm install react react-dom react-router-dom
npm install -D vite @vitejs/plugin-react tailwindcss postcss autoprefixer
```

### Step 2: Project Structure
Create the following folder structure:
```
savariya-website/
├── public/
│   ├── logo.png              # Shop logo
│   ├── hero.jpg              # Hero banner image
│   └── collection/           # Product images
│       ├── sherwani1.jpg
│       ├── kurta1.jpg
│       └── Coats1.jpg
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Step 3: Add Images
Place the following images in the `public` folder:
- `logo.png` - Company logo
- `hero.jpg` - Hero section background image
- `collection/sherwani1.jpg` - Sherwani product image
- `collection/kurta1.jpg` - Kurta product image
- `collection/Coats1.jpg` - Coats product image

### Step 4: Run the Development Server
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

## 📱 Pages & Components

### Pages
- **Home**: Hero section, featured collection, testimonials, and CTA
- **About**: Company story, mission, vision, values, and team
- **Collection**: Product gallery with category filtering
- **Contact**: Contact form, store info, map, and social media links

### Components
- **Navbar**: Responsive navigation with mobile hamburger menu
- **Footer**: Links, contact info, and social media icons
- **HeroSection**: Full-screen banner with call-to-action buttons
- **CollectionCard**: Product display cards with hover effects
- **ContactForm**: Contact form with validation and success states

## 🎨 Design Features

### Color Scheme
- **Primary**: Brown (#8B4513, #A0522D)
- **Accent**: Golden (#D4AF37)
- **Background**: Light brown tones (#FDF8F6, #F2E8E5)
- **Text**: Dark brown (#5D2F02, #6F3F0A)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Animations
- Smooth hover effects on cards and buttons
- Fade-in animations on page load
- Scale transformations on interactive elements
- Gradient backgrounds with transitions

## 📋 Build & Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy
The built files will be in the `dist` folder and can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## 🔧 Customization

### Changing Colors
Update the Tailwind config in `index.html`:
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'golden': '#your-color',
        'brown': { /* your brown shades */ }
      }
    }
  }
}
```

### Adding New Products
Update the product arrays in `src/pages/Collection.jsx` and `src/pages/Home.jsx`:
```javascript
const products = [
  {
    image: '/path/to/image.jpg',
    name: 'Product Name',
    price: '15000',
    description: 'Product description',
    category: 'Category'
  }
]
```

### Modifying Contact Information
Update contact details in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`
- `src/components/ContactForm.jsx`

## 📞 Contact Information

**Savariya Premium Groom Wear**
- 📍  5/38, Ajmal Khan Rd, Block 5, WEA, Karol Bagh, Delhi-110005, India
- 📞 +91 8700293206
- ✉️ savariyagroomselection@gmail.com
- 🌐 www.savariya.com

## 📄 License

This project is created for Savariya Groom Selection. All rights reserved.

---

**Made with ❤️ for premium groom wear fashion**
