/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        'blue-accent-1': '#4348DC', // Primary blue from original site
        'blue-accent-2': '#283feb',
        'blue-accent-3': '#287ceb',
        'blue-accent-4': '#28b7eb',
        'green-accent': '#11A911',
        'gray-dark': '#1A1A1A',
        'gray-dark-2': '#1D1D1D',
        'gray-blue': '#18212d',
        'gray-medium': '#252e3d',
        'gray-green': '#1e3528',
        'bg-dark-1': '#0d0d0d',
        'bg-dark-2': '#121212',
        'bg-dark-3': '#131314',
        'bg-dark-4': '#131415',
        'bg-dark-5': '#151515',
        'bg-dark-6': '#161819',
        'bg-dark-7': '#181818',
      },
      fontFamily: {
        primary: ['Geist', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif'],
        body: ['Rethink Sans', 'sans-serif'],
        sans: ['Rethink Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Geist', 'Montserrat', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': ['48px', { lineHeight: '1.2' }],
        'h1-mobile': ['32px', { lineHeight: '1.2' }],
        'h2-desktop': ['36px', { lineHeight: '1.2' }],
        'h2-mobile': ['28px', { lineHeight: '1.2' }],
        'h3-desktop': ['24px', { lineHeight: '1.2' }],
        'h3-mobile': ['20px', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
}

