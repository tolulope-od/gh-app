const tailwindcss = require('tailwindcss')
const postcssfunc = require('autoprefixer')
module.exports = {
  plugins: [tailwindcss('./tailwind.config.js'), postcssfunc()],
};
