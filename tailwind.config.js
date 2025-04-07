/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure proper paths
    theme: {
      extend: {
        colors: {
          customBlue: "hsl(209, 23%, 22%)",
        },
      },
    },
    plugins: [],
  };
  