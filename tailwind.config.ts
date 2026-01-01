import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a14",
        foreground: "#ededed",
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#2563eb",
        },
        dark: {
          DEFAULT: "#0a0a14",
          lighter: "#151520",
          card: "#1a1a2e",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
