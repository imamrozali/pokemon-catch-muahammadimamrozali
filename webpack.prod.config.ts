import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import WorkboxPlugin from 'workbox-webpack-plugin';
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PUBLIC = path.resolve(__dirname, 'public')
const SRC = path.resolve(__dirname, 'src')

const config: Configuration = {
  mode: "production",
  entry: `${SRC}/index.tsx`,
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
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
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new CleanWebpackPlugin(),
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
        { from: `${PUBLIC}/pokemon-logo.png`, to: 'logo.png' },
        { from: `${PUBLIC}/robots.txt`, to: 'robots.txt' },
        { from: `${PUBLIC}/pokeball.png`, to: 'pokeball.png' },
        { from: `${PUBLIC}/x-black.svg`, to: 'close.svg' },
        { from: `${PUBLIC}/arrow.svg`, to: 'arrow.svg' },
        { from: `${PUBLIC}/check.svg`, to: 'check.svg' },
      ]
    }),
  ],
};

export default config;