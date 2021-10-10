const a: string = "hh";
const b: number = 100;
const c: boolean = true;

const d: string = null; // 严格模式下会报错
// 相当于 Flow，string、number、boolean 这三种类型在严格模式下是可以允许默认为空（可以赋值为 null 或 undefined）

const e: void = undefined; // 一般用在函数没有返回值，标记返回值类型；void类型只能存放null或undefined；严格模式下只能是undefined

const f: null = null;
const g: undefined = undefined;

const h: symbol = Symbol();

