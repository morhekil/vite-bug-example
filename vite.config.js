import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // --- development mode build
  mode: "development",
  build: { minify: false },
  // --- development mode build

  plugins: [react()],
});
