/**
 * demo6.代理客户端解决跨域问题
 */
const http = require("http");

const server = http.createServer((req, res) => {
  // console.log('请求进来了')
  let arr = [];
  req.on("data", (data) => {
    arr.push(data);
  });
  req.on("end", () => {
    console.log(Buffer.concat(arr).toString());
    res.end("发送给浏览器的文字");
  });
});
server.listen(1234, () => {
  console.log("外部服务端启动了");
});
