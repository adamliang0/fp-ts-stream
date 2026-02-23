import { pluginNodePolyfill } from "@rsbuild/plugin-node-polyfill";
/** @type {import('@rslib/core').RslibConfig} */
export default {
  lib: [
    {
      format: "esm",
      syntax: "es2022",
      autoExternal: true,
      bundle: true,
      dts: { bundle: true, tsgo: true },
    },
    {
      format: "cjs",
      syntax: "es2022",
      autoExternal: true,
      bundle: true,
    },
  ],
  source: {
    entry: {
      AsyncStream: "src/AsyncStream/index.ts",
      Stream: "src/Stream/index.ts",
    },
    tsconfigPath: "./tsconfig.app.json",
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
  external: [/^fp-ts(\/|$)/],
};
