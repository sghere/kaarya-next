/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f4f6f7",
          100: "#e4e9e9",
          200: "#cbd4d6",
          300: "#a8b7b8",
          400: "#7c9294",
          500: "#617679",
          600: "#6A6A6B",
          700: "#232627",
          800: "#1B1E20",
          900: "#383f41",
          950: "#141718",
        },
      },
    },
  },
  plugins: [],
};
