import { pluginNodePolyfill } from "@rsbuild/plugin-node-polyfill";
/** @type {import('@rslib/core').RslibConfig} */
export default {
	lib: [
		{
			format: "esm",
			syntax: "esnext",
			autoExternal: true,
			name: "[name].esm.mjs",
			dts: { bundle: true, tsgo: true },
		},
		{
			format: "cjs",
			autoExternal: true,
			name: "[name].cjs.mjs",
			syntax: "esnext",
			dts: { bundle: true, tsgo: true },
		},
	],
	input: "src/index.ts",
	output: {
		target: "web",
		minify: true,
		sourcemap: true,
	},
	performance: {
		chunkSplit: {
			strategy: "split-by-experience",
		},
	},
	plugins: [pluginNodePolyfill()],
	external: ["fp-ts/*"],
	clean: true,
	minify: false,
	sourcemap: true,
	tsconfig: "./tsconfig.json",
};
