/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ 
    stage,
    rules,
    loaders,
    plugins,
    actions, 
  }) => {

  const { setWebpackConfig } = actions;
  if (stage === "build-html" || stage === 'develop-html') {
    setWebpackConfig({
      module: {
        rules: [
          {
            test: /p5/,
            use: 'null-loader'
          },
        ],
      },
      externals: {
        jquery: 'jQuery', // important: 'Q' capitalized
      }
    })
  }
}