/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "IBM Plex Mono", "Fira Code", "ui-monospace", "monospace"],
      },
      colors: {
        gruv: {
          // backgrounds
          bg0: "#282828",
          bg1: "#1d2021",
          bg2: "#32302f",
          bg3: "#3c3836",
          // foregrounds
          fg0: "#ebdbb2",
          fg1: "#d5c4a1",
          fg2: "#a89984",
          // accents
          yellow: "#fabd2f",
          orange: "#fe8019",
          red: "#fb4934",
          green: "#b8bb26",
          aqua: "#8ec07c",
          blue: "#83a598",
          purple: "#d3869b",
          neutral: "#a89984",
          darkred: "#cc241d",
          darkgreen: "#98971a",
          darkyellow: "#d79921",
          darkblue: "#458588",
          darkpurple: "#b16286",
          darkaqua: "#689d6a",
          gray: "#928374",
        },
      },
    },
  },
  plugins: [],
}
