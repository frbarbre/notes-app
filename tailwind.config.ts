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
        dark: "#080808",
        "dark-gray": "#101010",
        gray: "#121212",
        "gray-light": "#313131",
        primary: "#FF007F",
        red: "#AB192A",
      },
      backgroundImage: {
        gradient: 'url("/gradient.png")',
      },
      screens: {
        md: "644px",
      }
    },
  },
  plugins: [],
};
export default config;
