const path = require('path')

console.log(__filename)  // /Users/aojiaodemeng/my-github/study-notes/Nodejs/demo.js


// 9 绝对路径
// resolve没有参数，就自动返回当前工作目录的绝对路径
console.log(path.resolve())  //   /Users/aojiaodemeng/my-github/study-notes/Nodejs
/**
 * resolve([from], to)
 */
console.log(path.resolve('/a', '../b'))     //    /b
console.log(path.resolve('index.html'))    //   /Users/aojiaodemeng/my-github/study-notes/Nodejs/index.html
