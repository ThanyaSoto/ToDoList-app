/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#871cf8",
        "background-100": "#1A1A1A",
        "background-200": "#292929",
        "background-300": "#404040",
        "background-400": "#585858",
        "background-101": "#e57d90",
        "background-201": "#f99aaa",
        "background-301": "#fdb4bf",
        "background-401": "#ffcdd4",
        "background-000": "#E55A72",
        "background-001": "#FFD7DF",
      }
    },
  },
  plugins: [],
}

