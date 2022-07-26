class MyTransformCode {
  constructor() {
    // 先定义初始空间大小
    this.packageHeaderLen = 4; //定义当前header总长度为4个字节
    this.serialNum = 0; //
    this.serialLen = 2;
  }

  // 编码
  encode(data, serialNum) {
    const body = Buffer.from(data);

    // 01 先按照指定的长度来申请一片内存空间做为 header 来使用
    const headerBuf = Buffer.alloc(this.packageHeaderLen);

    // 02 写入值
    headerBuf.writeInt16BE(serialNum || this.serialNum);
    // 03 写入消息体的总长度，并跳过写入序列号长度，因为上一行代码已经写过了
    headerBuf.writeInt16BE(body.length, this.serialLen);

    // 如果没有传入序列号，序列号就自增
    if (serialNum == undefined) {
      serialNum++;
    }

    // header与body拼起来
    return Buffer.concat([headerBuf, body]);
  }

  // 解码
  decode(buffer) {
    const headerBuf = buffer.slice(0, this.packageHeaderLen);
    const bodyBuf = buffer.slice(this.packageHeaderLen);

    return {
      serialNum: headerBuf.readInt16BE(),
      bodyLength: headerBuf.readInt16BE(this.serialLen),
      body: bodyBuf.toString(),
    };
  }

  // 获取包长度的方法：用来证明当前包是否还有数据
  getPackageLen(buffer) {
    if (buffer.length < this.packageHeaderLen) {
      return 0;
    } else {
      return this.packageHeaderLen + buffer.readInt16BE(this.serialLen);
    }
  }
}

module.exports = MyTransformCode;
