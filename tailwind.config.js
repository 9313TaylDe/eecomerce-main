/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // exemplo: adicionando cores personalizadas
        "dark-gray": "#1f1f1f",
        "dark-gray-2": "#2a2a2a",
        primary: "#ff6b6b",
      },
    },
  },
  plugins: [],
};
