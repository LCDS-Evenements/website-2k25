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
      },
      backgroundImage: {
        "layout": "linear-gradient(235.64deg, #004C59 -1.78%, rgba(0, 63, 75, 0.85) 52.42%, #004C59 134.35%)",
        "navbar": "linear-gradient(89.29deg, #FFDCDC -23.34%, #FAF7F8 46.24%, #E0E9FF 111.76%)",
        "footer": "linear-gradient(89.29deg, #FFDCDC -23.34%, #FAF7F8 46.24%, #E0E9FF 111.76%)",
        "silver-gradient": "linear-gradient(89.29deg, #FFDCDC -23.34%, #FAF7F8 46.24%, #E0E9FF 111.76%)",
        "navbar-link": "linear-gradient(89.29deg, #171121 -23.34%, #120905 48.58%, #080402 111.76%)",
        "navbar-link-hover": "linear-gradient(89.29deg, #ED1173 -23.34%, #FF978C 111.76%)",
        "button-ticket": "linear-gradient(89.29deg, #171121 -23.34%, #120905 48.58%, #080402 111.76%)",
        "button-ticket-span": "linear-gradient(103deg, #FFDCDC 23.61%, #FAF7F8 55.12%, #E0E9FF 82.8%)",
        "button-ticket-hover": "linear-gradient(89.29deg, #ED1173 -23.34%, #FF978C 111.76%)",
        "button": "linear-gradient(89.29deg, #FFDCDC -23.34%, #FAF7F8 46.24%, #E0E9FF 111.76%)",
        "artist-card": "linear-gradient(89.29deg, #FFDCDC -23.34%, #FAF7F8 48.58%, #E0E9FF 111.76%)",
        "artist-card-pillule": "linear-gradient(89.29deg, #171121 -23.34%, #120905 48.58%, #080402 111.76%)",
        "light-blut-gradient": "linear-gradient(89.29deg, #FFDCDC -23.34%, #FAF7F8 46.24%, #E0E9FF 111.76%)",
        "times-section": "linear-gradient(89.29deg, rgba(255, 220, 220, 0.24) -23.34%, rgba(250, 247, 248, 0.26) 46.24%, rgba(224, 233, 255, 0.28) 111.76%)",
        "merch-button": "linear-gradient(89.84deg, #ED1173 -22.08%, #FF978C 150.39%)"

      }
    },
  },
  plugins: [],
} satisfies Config;