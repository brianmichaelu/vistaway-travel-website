import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        tealDeep: "#064E4A",
        mintSoft: "#D9F7EF",
        coralWarm: "#FF6B5E",
        creamWhite: "#FFF8EF",
        charcoal: "#1E293B",
        skyAccent: "#38BDF8"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(6, 78, 74, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
