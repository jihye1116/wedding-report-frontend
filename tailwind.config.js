const { fontFamily: defaultFontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard Variable", "Pretendard"],
        pretendard: ["Pretendard Variable", "Pretendard", "sans-serif"],
      },

      fontSize: {
        "display-xl": ["15px", { lineHeight: "auto" }],
        "heading-lg": ["12px", { lineHeight: "15px" }],
        "heading-md": ["11px", { lineHeight: "15px" }],
        "body-base": ["10px", { lineHeight: "16px" }],
        "caption-sm": ["8px", { lineHeight: "10px" }],
      },
    },
  },
  plugins: [],
};
