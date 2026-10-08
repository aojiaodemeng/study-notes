/**
 * demo3.获取 http 请求信息
 */
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log("请求进来了");

  // 获取请求路径
  let { pathname, query } = url.parse(req.url, true);
  console.log(pathname, query);

  // 请求方式
  console.log(req.method);

  //版本号
  console.log(req.httpVersion);

  // 请求头
  console.log(req.headers);

  // 请求体数据获取（这里使用curl工具发起post请求，浏览器打开网页是get请求）
  // req现在是一个可读流，
  let arr = [];
  req.on("data", (data) => {
    arr.push(data);
  });
  req.on("end", () => {
    console.log(Buffer.concat(arr).toString()); // 输出'name':'lg'
  });
});

server.listen(1234, () => {
  console.log("server is start");
});
