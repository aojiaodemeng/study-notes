# 深拷贝与浅拷贝
[原来深拷贝和浅拷贝是这样？](https://zhuanlan.zhihu.com/p/80922071)  

此概念是针对引用数据类型的赋值，对于基本数据类型没有这一说。因为浅拷贝的是引用地址，而不是数据。

对象A赋值给了B，当改变B时，A如果会跟着变化，就是浅拷贝，如果不会变化就是深拷贝。

## 浅拷贝方式
- 直接赋值

## 深拷贝方式
- json序列化：JSON.parse(JSON.stringify(A))，但是遇到数据为undefined和函数时，或出现循环引用时会出现问题
- Object.assign()，注意只是对于第一层进行了深拷贝，更深层次的还是浅拷贝


# 数据不可变性
- 利用Object.defineProperty()，设置writable与configure属性为false，使对象不可修改、重定义或者删除
- 利用Object.preventExtensions(obj)，禁止对象添加新属性并保留已有属性
- Object.seal()会创建一个“密封”对象。实质上是preventExtensions方法+configure属性为false的结合。“密封”之后不能添加新属性，不能重新配置或删除属性（虽然可以改变属性值）
- Object.freeze()会创建一个“冻结”对象。实质上是preventExtensions方法+writable属性为false的结合。冻结之后不可修改值。
- Immutable.js 是一个第三方工具，使用它生成一个immutable对象，这个对象是不可改变的。
利用这个特性将数据库里面的state变成immutable对象；在react中可以用redux-immutable统一数据格式


