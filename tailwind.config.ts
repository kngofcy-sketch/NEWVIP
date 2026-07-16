import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#07080B",
        ink: "#0D1017",
        gold: "#D4AF37",
        mutedgold: "#C5A059",
        platinum: "#E6E2D8",
      },
      boxShadow: {
        glow: "0 0 40px rgba(212, 175, 55, 0.18)",
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
