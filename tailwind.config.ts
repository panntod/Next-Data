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
        primary: {
          yellow: "#FCA61F",
          blue: "#479BF5",
        },
        secondary: {
          blue: "#003366",
          yellow: "#FDBA09",
        },
        dark: "#332C5C",
        light: "#FEFEFE",
        accent: {
          secondary: "#494369",
          default: "#5E587A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
