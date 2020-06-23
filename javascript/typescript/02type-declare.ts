/*
 *  @author: feiyue
 *  @brief: typescript变量声明语法练习
 *  @dete: 2020-06-23 14:33
 *  @version: 1.0.0
 */

/*
 *  let: 1.不存在变量提升  2.变量不能重复定义 3.块级作用域
 *  const: 在let的基础上增强,阻止对变量的再次赋值
 */

/*
 *  解构赋值
 */
//  数组解构
let input = [1, 2];
let [first, second] = input;
function fun([first, second]: [number, number]){
    console.log(first, second);
}
fun(input);
//  扩展运算符
let [test, ...rest] = [1, 2, 3, 4];
console.log(test);
console.log(rest);
//  忽略不关心的值
let [,test1] = [1, 2, 3, 4];
console.log(test1);

//  对象解构
let o = {a: "foo", b: 12, c: "bar"};
let {a, b} = o;
console.log(a);
console.log(b);
//  用没有声明的赋值
({a,b}={a: "baz", b: 101});
//  使用扩展运算符
let {a1, ...b1} = o;
let total = b1.b + b1.c.length;
//  属性重命名
let {a2: newValue1, b2: newValue2}: {a2: string, b2: string}= o;

//  默认值
function defaultValue(wholeObj: {a: string, b?: number}){
    let{a, b=1001}= wholeObj;
}

//  展开运算符
let arr1 = [1, 2, 3];
let arr = [...arr1, 4, 5];

let obj1 = {a:1,b:2};
let obj = {...obj1, c: 3};