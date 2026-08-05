/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scoped deliberately. A bare "./**/*.js" also swept public/chroma.vendors.js
  // and .vitepress/cache, and Tailwind extracted junk class names out of the
  // minified bundle — which surfaced as css-syntax-error warnings at build time.
  content: [
    "./*.md",
    "./.vitepress/components/**/*.vue",
    "./.vitepress/theme/**/*.{vue,ts,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

