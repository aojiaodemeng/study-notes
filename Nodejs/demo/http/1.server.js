/**
 * demo1.用代码方式看 http 协议有哪些内容
 */

const net = require("net");

// 创建服务端
let server = net.createServer();
server.listen(1234, () => {
  console.log("服务端启动了....");
});

server.on("connection", (socket) => {
  // 监听客户端的请求
  socket.on("data", (data) => {
    console.log(data.toString());
  });
  socket.end("test http request");
});
