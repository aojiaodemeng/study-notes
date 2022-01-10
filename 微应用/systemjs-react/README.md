# demo概述
目的：通过 webpack 将 react 应用打包为 systemjs 模块，在通过 systemjs 在浏览器中加载模块。


# demo实践步骤
## 1.项目准备工作
```
mkdir systemjs-react-demo && cs "$_"  // 1.新建systemjs-react-demo文件夹，并进入这个文件夹
npm init -y    // 2.生成一个package.json文件
// 3.安装依赖
npm install webpack@5.17.0 webpack-cli@4.4.0 webpack-dev-server@3.11.2 html-webpack-plugin@4.5.1 @babel/core@7.12.10 @babel/cli@7.12.10 @babel/preset-env@7.12.11@babel/preset-react@7.12.10 babel-loader@8.2.2
```
## 2.新建webpack.config.js文件
关键是libraryTarget、HtmlWebpackPlugin中的inject的配置以及externals的配置
```js
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.join(__dirname, "build"),
    libraryTarget: "system"   // 告诉webpack将应用打包成systemjs 模块
  },
  devtool: "source-map",
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, "build"),  // 静态资源文件夹
    historyApiFallback: true    // 允许我们在刷新页面时仍然能够实现react的browserrouter
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: false  // 不要把打包之后的文件通过script标签的形式引入到html文件中，因为我们需要通过systemjs去加载模块
    })
  ],
  externals: ["react", "react-dom", "react-router-dom"]   // 告诉webpack哪些模块不需要打包，因为在微前端中要使用公共的react
}

```

## 3.编写基本的index.html、App.js、index.js文件
注意事项：
- 1）因为react是微前端公共使用的，因此不是直接安装，而是在index.html文件中采用script标签形式引入的。其type属性需要指定为systemjs-importmap，在最新模块化规范中，有importmap特性，但是浏览器对原生的importmap的支持程度不是很好，因此这里使用systemjs提供的importmap，防止浏览器兼容性问题。
    ```js
    <script type="systemjs-importmap">
      {
        "imports": {
          "react": "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js",
          "react-dom": "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
          "react-router-dom": "https://cdn.jsdelivr.net/npm/react-router-dom@5.2.0/umd/react-router-dom.min.js"
        }
      }
    </script>
    ```
