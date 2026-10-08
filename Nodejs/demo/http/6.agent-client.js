/**
 * demo5.创建一个简单的代理客户端（代理客户端与服务端之间的交互通信）
 */
const http = require("http");

// http.get({
//   host: 'localhost',
//   port: 1234,
//   path: '/?a=1'
// }, (res) => {

// })

let options = {
  host: "localhost",
  port: 1234,
  path: "/?a=1",
  method: "POST",
  headers: {
    // "Content-type": "application/json",
    "Content-type": "application/x-www-form-urlencoded",
  },
};

let req = http.request(options, (res) => {
  let arr = [];
  res.on("data", (data) => {
    arr.push(data);
  });
  res.on("end", () => {
    console.log(Buffer.concat(arr).toString());
  });
});
// req.end('拉勾教育')
// req.end('{"name":"lg"}'); // 数据为json格式，content-type设置为application/json
req.end("a=1&b=2"); // content-type设置为application/x-www-form-urlencoded
