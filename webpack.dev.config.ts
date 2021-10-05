import path from "path";
import { Configuration, HotModuleReplacementPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import WorkboxPlugin from 'workbox-webpack-plugin';
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PUBLIC = path.resolve(__dirname, 'public')
const SRC = path.resolve(__dirname, 'src')

const config: Configuration = {
  mode: "development",
  output: {
    publicPath: "/",
  },
  entry: `${SRC}/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${PUBLIC}/index.html`,
      favicon: `${PUBLIC}/icon.png`
    }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),

    new WorkboxPlugin.GenerateSW({
      maximumFileSizeToCacheInBytes: 500000000,
      clientsClaim: true,
      skipWaiting: true,
      cleanupOutdatedCaches: true
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: `${PUBLIC}/manifest.webmanifest`, to: 'manifest.webmanifest' },
        { from: `${PUBLIC}/icon.png`, to: 'favicon.png' },
        { from: `${PUBLIC}/robots.txt`, to: 'robots.txt' },
      ]
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  },
};

export default config;
