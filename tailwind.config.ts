import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#004C59",
        "typo-black": "#0E0704",
        "typo-white": "#FFFFFF",
        "typo-light-blue": "#E0E9FF"
      }
    },
  },
  plugins: [],
} satisfies Config;
