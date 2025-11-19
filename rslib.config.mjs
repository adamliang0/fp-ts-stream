import { pluginNodePolyfill } from "@rsbuild/plugin-node-polyfill";
/** @type {import('@rslib/core').RslibConfig} */
export default {
	lib: [
		{
			format: "esm",
			syntax: "es2022",
			autoExternal: true,
			name: "[name].esm.mjs",
			dts: { bundle: true, tsgo: true },
		},
		{
			format: "cjs",
			syntax: "es2022",
			autoExternal: true,
			name: "[name].cjs.mjs",
			dts: { bundle: true, tsgo: true },
		},
	],
	input: "src/index.ts",
	source: {
		tsconfigPath: "./tsconfig.json",
	},
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
};
