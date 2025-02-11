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
        typoBlack: "#0E0704",
        typoWhite: "#FFFFFF",
        typoLightBlue: "#E0E9FF"
      }
    },
  },
  plugins: [],
} satisfies Config;
