/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
        colors: {
          'dark-gray': '#1c1c1c',
          'gold': '#84744c',
          'green': '#132726',
      }
    },
  },
  plugins: [],
}

