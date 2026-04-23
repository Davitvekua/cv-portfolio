import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/cv-portfolio/",
  plugins: [tailwindcss()],
});
