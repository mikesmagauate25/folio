import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      fontFamily: {
        monument: ["var(--font-MonumentExtend)", "sans"],
        machina: ["var(--font-neue-machina)", "sans"],
      },
      gridTemplateRows: {
        "20": "repeat(20, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
