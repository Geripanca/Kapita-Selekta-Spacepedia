// rollup.config.js
import css from "rollup-plugin-css-only";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs", // atau format lain sesuai kebutuhan
  },
  plugins: [css({ output: "dist/bundle.css" })],
};
