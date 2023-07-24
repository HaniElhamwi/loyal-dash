/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: (theme) => ({
        "screen/2": "40vh",
        "screen/3": "calc(100vh / 3)",
        "screen/3/4": "calc(75vh)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      width: (theme) => ({
        "screen/2": "50vw",
        "screen/3": "calc(100vh / 3)",
        "screen/3/4": "calc(75vh)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1c2536",
        secondary_light: "#6366F1",
        secondary_dark: "#4338ca",
      },
    },
  },
  plugins: [],
};
