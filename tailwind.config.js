module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        ink: "#3d2b1f",
        muted: "#7a6555",
        ice: "#5b9bb5",
        "ice-light": "#e8f4f8",
        "ice-mid": "#b8d4de",
        beige: "#f5f0e8",
        "beige-dark": "#ede0d0",
        brown: "#8b6245",
        "brown-light": "#c4a882",
        card: "#fdfaf5",
        border: "#ddd5c8",
      },
      boxShadow: {
        card: "0 2px 8px rgba(61,43,31,0.07), 0 1px 3px rgba(61,43,31,0.04)",
        hover: "0 8px 28px rgba(91,155,181,0.18), 0 2px 8px rgba(61,43,31,0.06)",
      },
    },
  },
  plugins: [],
};
