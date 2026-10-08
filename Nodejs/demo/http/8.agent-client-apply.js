/**
 * demo6.代理客户端解决跨域问题
 */
const http = require("http");

let options = {
  host: "localhost",
  port: 1234,
  path: "/",
  method: "POST",
};

let server = http.createServer((request, response) => {
  let req = http.request(options, (res) => {
    let arr = [];
    res.on("data", (data) => {
      arr.push(data);
    });
    res.on("end", () => {
      // console.log(Buffer.concat(arr).toString())
      let ret = Buffer.concat(arr).toString();
      response.setHeader("Content-type", "text/html;charset=utf-8");
      response.end(ret); // 返回给浏览器
    });
  });

  req.end("这里是发送给服务端的文字");
});

server.listen(2345, () => {
  console.log("代理客户端/本地的服务端启动了");
});
