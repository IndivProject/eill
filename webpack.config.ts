const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // TypeScript 엔트리 파일
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development", // 'production'으로 설정하면 최적화
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // 확장자 우선 순위
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // TypeScript 파일 처리
        exclude: /node_modules/,
        use: "ts-loader", // Babel 대신 TypeScript 전용 로더 사용
      },
      {
        test: /\.css$/, // CSS 파일 처리
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i, // 이미지 파일 처리
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/",
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // HTML 템플릿 경로
      filename: "index.html",
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    open: true,
    hot: true,
  },
};
