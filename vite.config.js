import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss"; // ändra till import
import autoprefixer from "autoprefixer"; // ändra till import

export default defineConfig({
  plugins: [react()],
  base: "/rotorwerk-simplified/",
  css: {
    postcss: {
      plugins: [
        tailwindcss, // ändra till tailwindcss
        autoprefixer, // ändra till autoprefixer
      ],
    },
  },
});
