import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-1': 'inset -15px -15px 98px 0 rgb(68, 10, 212)',
        'inner-2': 'inset 25px 25px 98px 0 rgb(68, 10, 212)',
      },
      fontFamily: {
        broadway: ['Broadway', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        default: "#080447",
        inside: '#1C003F',
        shadow: '#440AD4',
      },
      borderRadius: {
        'def': '34px'
      }
    },
  },
  plugins: [],
};
export default config;
