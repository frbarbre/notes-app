import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#080808',
        gray: '#121212',
        'gray-light': '#313131',
        primary: '#6910DA',
        red: '#AB192A',
      },
    },
  },
  plugins: [],
};
export default config;
