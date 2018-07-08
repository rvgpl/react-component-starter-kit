const { createConfig, match, babel, postcss, sass } = require("webpack-blocks");
const autoprefixer = require("autoprefixer");
const precss = require("precss");

module.exports = {
  components: "src/**/[A-Z]*.js",
  defaultExample: true,
  title: "React Components",
  webpackConfig: createConfig([
    babel(),
    match(
      ["*.css", "*.scss", "!*node_modules*"],
      [
        postcss({
          plugins: [precss(), autoprefixer({ browsers: ["last 2 versions"] })]
        })
      ]
    )
  ])
};
