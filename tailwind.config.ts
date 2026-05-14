import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'third': 'var(--color-third)',
        'fourth': 'var(--color-fourth)'
      },
    },
  },
  plugins: [],
} satisfies Config;
