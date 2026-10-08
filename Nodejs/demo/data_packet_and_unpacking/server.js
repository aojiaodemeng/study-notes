const net = require("net");
const MyTransform = require("./myTransform.js");

const server = net.createServer();

let overageBuffer = null; // 存放未处理完的包
let ts = new MyTransform();

server.listen("1234", "localhost");

server.on("listening", () => {
  console.log("服务端运行在 localhost:1234");
});

server.on("connection", (socket) => {
  socket.on("data", (chunk) => {
    if (overageBuffer) {
      //如果有未处理完的buffer，就将其与本次的chunk进行拼接
      chunk = Buffer.concat([overageBuffer, chunk]);
    }
    let packageLen = 0; // 利用while循环更新数据
    while ((packageLen = ts.getPackageLen(chunk))) {
      const packageCon = chunk.slice(0, packageLen);
      chunk = chunk.slice(packageLen);

      const ret = ts.decode(packageCon);
      console.log(ret); // 输出{ serialNum: 0, bodyLength: 5, body: 'test1' }

      socket.write(ts.encode(ret.body, ret.serialNum));
    }
    overageBuffer = chunk;
  });
});
