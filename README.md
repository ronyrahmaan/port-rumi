# Academic Portfolio Website

A modern, responsive academic portfolio website built with Next.js, TypeScript, and Tailwind CSS. This website is designed for academics, researchers, and professors to showcase their work, publications, and professional activities.

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Modern Tech Stack**: Built with Next.js 16, TypeScript, and Tailwind CSS
- **Academic-Focused**: Sections for books, articles, media appearances, CV, and contact
- **SEO Optimized**: Server-side rendering and optimized meta tags
- **Easy Customization**: Clean code structure for easy content updates

## Pages

- **Home**: Hero section with featured books and newsletter signup
- **About**: Academic biography and research interests
- **Books**: Showcase of published works with purchase links and reviews
- **Articles**: Published articles and op-eds from various publications
- **Media**: Podcast interviews, TV appearances, and radio segments
- **CV**: Complete curriculum vitae with downloadable PDF
- **Contact**: Contact form and professional information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Git installed

### Installation

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd academic-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Customization

#### Content Updates

1. **Personal Information**: Update `src/components/Header.tsx` and `src/components/Footer.tsx` with your name and details

2. **Books**: Edit `src/data/books.ts` to add your publications

3. **Articles**: Update `src/data/articles.ts` with your published articles

4. **Media Appearances**: Modify `src/data/media.ts` with your interviews and appearances

5. **CV**: Update `src/data/cv.ts` with your academic credentials and experience

#### Images

Replace the placeholder images in the `public/` folder:

- `placeholder-photo.jpg` - Your professional headshot
- `book-1.jpg`, `book-2.jpg`, `book-3.jpg` - Book cover images
- `placeholder-research.jpg` - Research or academic setting photo
- Media appearance thumbnails as needed

#### Styling

The website uses Tailwind CSS for styling. You can customize colors, fonts, and layout by modifying the Tailwind classes in the component files.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

This Next.js application can be deployed to any platform that supports Node.js applications:

- Netlify
- AWS Amplify
- Google Cloud Platform
- Digital Ocean App Platform

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (via SVG)
- **Deployment**: Vercel (recommended)

## Performance

- ✅ Server-side rendering for SEO
- ✅ Static generation for fast loading
- ✅ Optimized images with Next.js Image component
- ✅ Mobile-first responsive design
- ✅ Accessibility features included

## License

This project is licensed under the MIT License.
