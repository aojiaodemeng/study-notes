const fp = require("lodash/fp");
const fs = require("fs");
class IO {
  static of(x) {
    // 接收一个数据，返回一个函子
    return new IO(function () {
      return x;
    });
  }
  constructor(fn) {
    this._value = fn;
  }
  map(fn) {
    // 把当前的 value 和 传入的 fn 组合成一个新的函数
    return new IO(fp.flowRight(fn, this._value));
  }
  join() {}
}

// let io = IO.of(process).map((p) => p.execPath);
// console.log(io._value());

// linux中有个cat命令，作用是读取文件内容并打印
// 现在实现cat函数，功能是：读取文件、打印

let readFile = function (filename) {
  return new IO(function () {
    return fs.readFileSync(filename, "utf-8");
  });
};

let print = function (x) {
  return new IO(function () {
    console.log(x);
    return x;
  });
};

let cat = fp.flowRight(print, readFile);
// IO(IO(x))
let r = cat("./package.json")._value()._value();

console.log(r);

// 发现已经实现了cat的功能，但是cat其实是IO里嵌套了一个IO，因此如果要得到最终结果，就必须调用两次_value，这种api风格并不是最好的
