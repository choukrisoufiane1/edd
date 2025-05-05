/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        forest: '#042E15',
        'forest-light': '#228B22'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

