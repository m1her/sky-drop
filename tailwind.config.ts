import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paleBlue: "#EFFAFD",
        royalBlue: "#4A8BDF",
        eggplant: "#A0006D",
        darkBlue: "#24156b",
      },
      fontFamily: {
        urbanist: ["var(--font-urbanist)"],
        jost: ["var(--font-jost)"],
      },
    },
  },
  plugins: [],
};
export default config;
