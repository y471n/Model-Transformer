import svgr from "@svgr/rollup";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import replace from "rollup-plugin-replace";
import typescript from "rollup-plugin-typescript2";
import url from "rollup-plugin-url";
import pkg from "./package.json";

const input = "src/index.ts";

const plugins = [
  external(),
  replace({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : "development"),
  }),
  url(),
  svgr(),
  typescript({
    rollupCommonJSResolveHack: true,
    clean: true,
    tsconfig: "./tsconfig.json",
  }),
  commonjs(),
];

export default [
  {
    input,
    output: {
      file: pkg.main,
      format: "cjs",
      exports: "named",
    },
    plugins,
  },
  {
    input,
    output: {
      file: pkg.module,
      format: "es",
      exports: "named",
    },
    plugins,
  },
];
