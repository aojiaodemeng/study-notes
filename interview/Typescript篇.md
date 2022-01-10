# 1.type与interface的区别
[TypeScript 类型别名](https://www.wenjiangs.com/doc/typescript-typealias)
## 相同点
- 两者都可以定义对象和函数
- 都可以继承：interface定义的对象用extends继承，type用&继承
## 不同点
- interface可以声明合并，即声明了多个同样名称的接口可以合并成一个，而type不行。
- type可以声明：基本类型的别名、联合类型、元组等类型，而interface不行。
- type 语句中还可以使用 typeof 获取实例的 类型进行赋值

```ts
// 1.interface-定义对象和函数
interface Person {
    name: string;
    age: number;
}
interface SetPerson {
    (name: string, age: number): void;
}
// 2.type-定义对象和函数
type Person = {
    name: string;
    age: number;
}
type SetPerson = (name: string, age: number): void;
// 3.interface可以声明合并，即声明了多个同样名称的接口可以合并成一个，而type不行。
interface Pesron{
  name: string;
  age: number;
}
interface Person{
  sex: string;
}
/*
Person接口为 {
  name: string;
  age: number;
  sex: string ;
}
*/
// 4.type可以声明：基本类型的别名、联合类型、元组等类型，而interface不行。

type Empty=null; // 别名
interface Person1{
	sayHi();
}
interface Person2{
	eat();
}
type Person = Person1 | Person2;// 联合类型
type ex = number | string;
// 元组 数组中元素的数据类型都一般是相同的（any[] 类型的数组可以不同），如果存储的元素数据类型不同，则需要使用元组。
type tuple=[1,'good'];
// 5.type 语句中可以使用 typeof 获取实例的类型进行赋值
let tem = new Number();
type B = typeof tem;

```


# 2.ts中的泛型


# 3.ts中interface和class的区别


# 4.never关键字有什么用？never、any、unknown的区别
[尤雨溪-TypeScript中的never类型具体有什么用？](https://www.zhihu.com/question/354601204/answer/888551021)    


# 5.is关键词有什么用？
先看一串代码：
```ts
function isString(test: any): boolean{
  return typeof test === "string";
}

function example(foo: any){
  if(isString(foo)){
    console.log("it is a string" + foo);
    console.log(foo.length); 
    console.log(foo.hello());
  }
}
example("hello world");
```
上面的的代码不会有编译时错误，但是会有运行时错误。因为 字符串类型上没有 hello 方法。这时候怎么优化，才能让 TS 在编译时就能检查到错误呢？

is 关键词可以派上用场，参考下面的代码：
```ts
function isString(test: any): test is string{
  return typeof test === "string";
}

function example(foo: any){
  if(isString(foo)){
      console.log("it is a string" + foo);
      console.log(foo.length); 
      console.log(foo.hello()); // ts Error: 类型“string”上不存在属性“hello”
  }
}
```
我们把 boolean 替换成 test is string，那么当函数 isString 返回 true 时， TS 会将 test 的类型从 any 收缩到 string，从而能精确的进行类型判断。

# 6.infer 关键词有什么用?
[TypeScript 的 Infer 关键词](https://zhuanlan.zhihu.com/p/133249506)

# 7.高阶类型
[TypeScript中的一些高阶类型 Omit Pick ReturnType Parameters](https://blog.csdn.net/qq_41154298/article/details/119977307)