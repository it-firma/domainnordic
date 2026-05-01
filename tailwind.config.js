/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0F1A3D',
        'navy-deep': '#050B1F',
        blue: '#2152E8',
        'blue-soft': '#DCE5FB',
        'blue-accent': '#7AA0F0',
        text: '#1A2447',
        muted: '#6B7591',
        border: '#DEE3F0',
        soft: '#FAFBFD',
      },
      fontFamily: {
        sans: ['var(--font-general-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-tobias)', 'Iowan Old Style', 'serif'],
      },
    },
  },
  plugins: [],
}
