/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ← これが抜けていると dark: クラスが無視されます
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // src配下のファイルをスキャンするように設定
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};