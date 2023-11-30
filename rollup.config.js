// rollup.config.js
import css from "rollup-plugin-css-only";

export default {
  input: "src/entry.js",
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [
    // ... plugin lainnya ...
    css({ output: "bundle.css" }), // Menggunakan rollup-plugin-css-only
  ],
};
