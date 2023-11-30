/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "space-background": "url('../public/background-space3.jpg')",
      }),
    },
  },
  plugins: [],
};
