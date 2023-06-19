/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakartaPlus: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        bgDark: "#F9FAFC",
        primary: "#2F84FE",
        warning: "#FFE8C8",
        danger: "#F8B6BF",
        form: "#EFF3F4",
        text: "#5E5F63",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
