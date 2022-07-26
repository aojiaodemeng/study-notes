const MyTransform = require("./myTransform.js");

let ts = new MyTransform();

let str1 = "ahhhh";

console.log(Buffer.from(str1)); // 输出<Buffer 61 68 68 68 68>
console.log(ts.encode(str1, 1)); // 输出<Buffer 00 01 00 05 61 68 68 68 68>， 00 01是序列号，00 05是消息长度，后面是消息体

let encodeBuf = ts.encode(str1, 1); // 将编码结果保存

let a = ts.decode(encodeBuf);
console.log(a); // 输出{ serialNum: 1, bodyLength: 5, body: 'ahhhh' }

let len = ts.getPackageLen(encodeBuf);
console.log(len); // 输出9
