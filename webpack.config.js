const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  target: "web",
  devServer: {
    port: "5000",
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    open: true,
    hot: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // base html
    }),
  ],
  module: {
    rules: [{
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use:'babel-loader'
    }],
  },
  resolve:{
    extensions:[".js",".jsx"],
    alias:{
      languages:path.resolve(__dirname,"public/locales")
    }
  }
};
