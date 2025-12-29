/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. ダークモードを「クラス」で制御するように明示
  darkMode: 'class', 
  
  // 2. スタイルを適用する対象ファイルを正しく指定（appとcomponents）
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      colors: {
        koyomike: '#b28c6e',
      },
    },
  },
  plugins: [],
};