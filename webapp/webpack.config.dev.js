const { webDev } = require("@fun-stack/fun-pack"); // https://github.com/fun-stack/fun-pack/blob/master/src/webpack.config.web.dev.js

module.exports = webDev({
  indexHtml: "src/main/html/index.html",
  assetsDir: "assets",
  extraWatchDirs: [
    "local", // frontend with local backend
    "src/css",
  ],
  extraStaticDirs: [
    "src", // src for source maps
  ],
});
