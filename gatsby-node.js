const merge = require("webpack-merge")

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  function getOutput() {
    switch (stage) {
      case `develop`:
        return {
          filename: `dev-site-assets/[id].js`,
        }
      case `build-javascript`:
        return {
          filename: `dev-site-assets/[contenthash].js`,
          chunkFilename: `dev-site-assets/[contenthash].js`,
        }
    }
  }
  actions.replaceWebpackConfig(merge(getConfig(), { output: getOutput() }))
}
