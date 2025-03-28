/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      variants: {
        extend: {
          backdropFilter: ["responsive"],
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: "#DC3544", // Define your primary color

        background: "#121315", // Define your background color
      },
    },
  },
  plugins: [
    require("tailwindcss-backdrop-filter")({
      prefix: "backdrop",
      opacity: "20",
    }),
  ],
};
