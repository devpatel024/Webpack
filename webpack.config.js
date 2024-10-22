const path = require('path');

module.exports = {
    entry: './abc/index.js',
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js',
    },
    mode: "development",
    module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      }
    ]
  }
};