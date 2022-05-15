/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FriendlyErrorsWebpackPlugin = require("@soda/friendly-errors-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  output: {
    publicPath: "/",
    path: path.join(__dirname, "..", "dist"),
    filename: "ts/[name].bundle.min.js",
    chunkFilename: "ts/[name].bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.ts$|tsx/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      node: "12",
                    },
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
          { loader: "ts-loader" },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          // 'style-loader', not to be used with MiniCssExtractPlugin
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|woff|woff2|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              modifyVars: {
                "primary-color": "#219653",
                "link-color": "#219653",
                "border-radius-base": "2px",
              },
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    new HTMLWebpackPlugin({
      favicon: "./assets/favicon-32x32.png",
      template: path.resolve(__dirname, "..", "./src/index.html"),
      title: "Flexiana Code Challenge",
    }),
    new CompressionWebpackPlugin({
      test: /\.(html|ts|css|js|gif|svg|ico|woff|ttf|eot)$/,
      exclude: /(node_modules)/,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["Your application is running on http://localhost:5002"],
      },
    }),
  ],
  devServer: {
    historyApiFallback: true,
    compress:true,
    port:5002
  },
};
