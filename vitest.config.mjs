import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	test: {
		root: ".",
		environment: "node",
		globals: true,
		setupFiles: ["tests/setup.ts"],
		coverage: {
			reporter: ["text", "json"],
		},
		include: ["tests/**/*.test.ts"],
		typecheck: {
			tsconfig: "tsconfig.vitest.json",
		},
	},
});
