import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	test: {
		environment: "node",
		globals: true,
		setupFiles: ["tests/setup.ts"],
		coverage: {
			reporter: ["text", "json"],
		},
		include: ["tests/**/*.test.ts"],
		root: ".",
		typecheck: {
			tsconfig: "tsconfig.vitest.json",
		},
	},
});
