module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "0px",
      md: "969px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "900px",
        xl: "1024px",
        "2xl": "1280px",
      },
    },
    fontFamily: {
      sans: ["Roboto"],
      serif: ["Zilla Slab"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1.05rem",
      lg: "1.15rem",
      xl: "1.3rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "3.5rem",
      "5xl": "4rem",
      "6xl": "5rem",
      "7xl": "5.3rem",
    },
    extend: {
      lineHeight: {
        12: "3.5rem",
      },
    },
  },
  plugins: [],
};
