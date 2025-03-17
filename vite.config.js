import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import path from "path";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    plugins: [react(), eslint()],
    resolve: {
      alias: {
        ui: path.resolve(__dirname, "src/ui"),
        features: path.resolve(__dirname, "src/features"),
        services: path.resolve(__dirname, "src/services"),
        hooks: path.resolve(__dirname, "src/hooks"),
        utils: path.resolve(__dirname, "src/utils"),
      },
    },
    define: {
      "process.env.SUPABASE_URL": env.SUPABASE_URL,
      "process.env.SUPABASE_KEY": env.SUPABASE_KEY,
    },
  });
};
