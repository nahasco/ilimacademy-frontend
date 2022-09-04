/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.js",
    "./src/components/**/*js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#25114E",
        secondery: "#F6F5F8",
        grey: "#f8f8f8",
        greydisabled: "#C4C4C4",
        dargrey: "#313131",
        mathdark: "#CF8DD9",
        mathlight: "#FCF7FC",
        iqdark: "#F3CA94",
        iqlight: "#FDF7EF",
        geometrydark: "#94C0F3",
        geometrylight: "#F2F8FF",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  content: [
    "./src/**/*.{js,jsx,html,css}"
  ],
}
