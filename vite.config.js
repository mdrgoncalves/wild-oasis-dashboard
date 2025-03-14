import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    plugins: [react(), eslint()],
    define: {
      "process.env.SUPABASE_URL": env.SUPABASE_URL,
      "process.env.SUPABASE_KEY": env.SUPABASE_KEY,
    },
  });
};
