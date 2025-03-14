/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#DC3544", // Define your primary color

        background: "#121315", // Define your background color
      },
    },
  },
  plugins: [],
};
