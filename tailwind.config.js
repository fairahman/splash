// import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        customNavColor: '#2a58b5',
        navFontColor: '#2a58b5',
        heroColor: '#2a58b5',
        demoColor: '#2a58b5',
        teamColor: '#2a58b5'
        //
      }
    },
  },
  
  plugins: [require("daisyui"), require('flowbite/plugin')],
}

