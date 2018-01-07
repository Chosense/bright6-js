const path = require("path");

module.exports = {
    entry: './src/AppContext.ts',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'bright6.js',
      path: path.resolve(__dirname, 'dist')
    }
  };