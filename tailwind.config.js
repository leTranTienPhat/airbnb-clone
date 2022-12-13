/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // Theme colors
      'white': {
        basic: "#ffffff",
        transparent: "rgba(255, 255, 255, 0.8)",
      },
      'gray': "#ebebeb",
      'light-gray': "#f7f7f7",
      'main-color': "#f2375c",
      'text-inactive': "#5f5f5f",
      'text-active': "#0a0e15"
    },
    fontSize: {
      '2sl': '8px',
      '1sl': '10px',
      base: '12px',
      sl: '14px',
      xl: '16px',
      '1xl': '18px',
      '1.5xl': '20px',
      '2xl': '24px',
      '3xl': '34px',
      '4xl': '36px',
    },

    extend: {},
  },
  plugins: [],
}
