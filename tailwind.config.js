/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        16: "16px",
      },
      maxHeight: {
        100: "25rem",
      },
      height: {
        100: "25rem",
      },
      maxWidth: {
        "2/5": "40%",
      },
      gridTemplateColumns: {
        "auto-fit-minmax-300": "repeat(auto-fit, minmax(300px, 1fr))",
      },
    },
    keyframes: {
      spin: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
    },
    animation: {
      spinner: "spin 1s linear infinite",
    },
  },
  plugins: [],
};
