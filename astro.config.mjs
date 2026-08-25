import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Astro + Tailwind CSS v4 wired through the Vite plugin.
export default defineConfig({
  site: "https://vibedevstudio.github.io",
  base: "/interior-designer-project-0901",
  vite: {
    plugins: [tailwindcss()],
  },
});
