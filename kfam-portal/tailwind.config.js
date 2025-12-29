/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ダークモードをクラス制御にする
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // app フォルダ内の全ファイル
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // components フォルダ内の全ファイル
    "./src/**/*.{js,ts,jsx,tsx,mdx}",        // src フォルダがある場合もカバー
  ],
  theme: {
    extend: {
      colors: {
        // 必要に応じて暦家カラーを登録しておくと便利です
        koyomike: '#b28c6e',
      },
    },
  },
  plugins: [],
};