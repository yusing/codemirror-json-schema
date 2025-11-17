import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    tsconfigPaths({
      ignoreConfigErrors: true,
    }),
  ],
  test: {
    maxConcurrency: 10,
    // configuration to be able to view console.log messages while debugging
    pool: "forks",
    disableConsoleIntercept: Boolean(process.env.CI),
    exclude: [".trunk/**", "node_modules/**"],
  },
});
