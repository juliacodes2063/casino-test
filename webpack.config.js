const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

  return {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProd ? "bundle.[contenthash].js" : "bundle.js",
      clean: true,
      publicPath: "/",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    devtool: isProd ? "source-map" : "eval-source-map",
    module: {
      rules: [
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: [{ loader: "@svgr/webpack", options: { icon: true } }],
        },
        {
          test: /\.tsx?$/,
          use: {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.build.json",
            },
          },
          exclude: /node_modules/,
        },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },

        {
          test: /\.(png|jpe?g|gif|webp|woff2?|ttf|eot)$/i,
          type: "asset/resource",
          generator: { filename: "assets/[name].[contenthash][ext]" },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
    ],
    devServer: {
      static: path.resolve(__dirname, "dist"),
      historyApiFallback: true,
      port: 3000,
      open: true,
      hot: true,
    },
  };
};
