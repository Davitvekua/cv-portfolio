import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  base: "/cv-portfolio/",
  plugins: [tailwindcss()],
  build: {
    rolldownOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        anschreiben: resolve(__dirname, "anschreiben.html"),
        impressum: resolve(__dirname, "impressum.html"),
        lebenslauf: resolve(__dirname, "lebenslauf.html"),
      },
    },
  },
});
