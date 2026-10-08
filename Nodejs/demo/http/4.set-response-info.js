/**
 * demo4.设置 http 响应
 */
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("有请求进来了");

  // 1.简单的响应：用write方法进行回写，用end方法表示写操作完成
  // res.write("Ok");
  // res.end(); // 这两行代码可以合并为res.end('ok')，浏览器访问后在网页上就会显示OK；

  // 2.按照http协议规则设置响应，否则按上面的代码是无法正常显示中文的
  res.statusCode = 302; //还可以设置状态码
  res.setHeader("Content-type", "text/html;charset=utf-8");
  res.end("你好");
});

server.listen(1234, () => {
  console.log("server is start.....");
});
