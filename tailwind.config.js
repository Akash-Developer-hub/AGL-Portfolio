/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        foreground: '#f6ebef',
        primary: '#FFBF00',
        secondary: '#1a1a1a',
        muted: '#9ca3af',
      },
    },
  },
  plugins: [],
};
