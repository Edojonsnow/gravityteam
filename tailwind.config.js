/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: "var(--yellow)",
        grey: "var(--grey)",
        darkGrey: "var(--dark-grey)",
      },
      fontFamily: {
        autourOne: ["var(--font-autour-one)"],
        gilroy: ["var(--font-gilroy)"],
        electrolize: ["var(--font-electrolize)"],
      },
      fontSize: {
        h1: "72px",
        h2: "28px",
        h4: "14px",
        p: "19px",
      },
    },
  },
  plugins: [],
};
