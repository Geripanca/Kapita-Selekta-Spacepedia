import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";

export default {
  input: "components/index.js",
  output: {
    file: "dist/main.js",
    format: "cjs",
  },
  plugins: [
    babel({
      babelrc: false,
      exclude: "node_modules/**",
      plugins: [
        "transform-object-rest-spread",
        // 'external-helpers',
      ],
      presets: ["react", ["env", { modules: false }]],
    }),
    postcss({
      extensions: [".css"],
    }),
    commonjs(),
  ],
};
