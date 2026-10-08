const net = require("net");
const MyTransform = require("./myTransform.js");

let overageBuffer = null;
let ts = new MyTransform();

const client = net.createConnection({
  host: "localhost",
  port: 1234,
});

client.write(ts.encode("test1"));
client.write(ts.encode("test2"));
client.write(ts.encode("test3"));
client.write(ts.encode("test4"));
client.write(ts.encode("test5"));

client.on("data", (chunk) => {
  if (overageBuffer) {
    chunk = Buffer.concat([overageBuffer, chunk]);
  }
  let packageLen = 0;
  while ((packageLen = ts.getPackageLen(chunk))) {
    const packageCon = chunk.slice(0, packageLen);
    chunk = chunk.slice(packageLen);

    const ret = ts.decode(packageCon);
    console.log(ret);
  }
  overageBuffer = chunk;
});
