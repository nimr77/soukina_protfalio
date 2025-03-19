// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://nimr77.github.io",
  base: "soukina_protfalio",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
