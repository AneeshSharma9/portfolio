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
          bg0: "var(--gruv-bg0)",
          bg1: "var(--gruv-bg1)",
          bg2: "var(--gruv-bg2)",
          bg3: "var(--gruv-bg3)",
          // foregrounds
          fg0: "var(--gruv-fg0)",
          fg1: "var(--gruv-fg1)",
          fg2: "var(--gruv-fg2)",
          // accents
          yellow: "var(--gruv-yellow)",
          orange: "var(--gruv-orange)",
          red: "var(--gruv-red)",
          green: "var(--gruv-green)",
          aqua: "var(--gruv-aqua)",
          blue: "var(--gruv-blue)",
          purple: "var(--gruv-purple)",
          neutral: "var(--gruv-neutral)",
          darkred: "var(--gruv-darkred)",
          darkgreen: "var(--gruv-darkgreen)",
          darkyellow: "var(--gruv-darkyellow)",
          darkblue: "var(--gruv-darkblue)",
          darkpurple: "var(--gruv-darkpurple)",
          darkaqua: "var(--gruv-darkaqua)",
          gray: "var(--gruv-gray)",
        },
      },
    },
  },
  plugins: [],
}
