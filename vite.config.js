import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/meme-generator/", // 👈 Must exactly match your repo name
});
