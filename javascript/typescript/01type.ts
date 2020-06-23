/*
 *  @author: feiyue
 *  @brief: typescript类型语法练习
 *  @dete: 2020-06-23 13:53
 *  @version: 1.0.0
 */

/*
 *  布尔值
 */
let isDone: boolean = false;

/*
 *  数字
 */
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

/*
 *  字符串
 */
let name: string = `feiyue`;
let age: number = 27;
let sentence: string = `Hello, my name is ${name}
    I'll be ${age} years old;
`

/*
 *  数组
 */
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

/*
 *  元组 各元素的类型不同的数组
 */
let x: [string, number];
x = ['hello', 27];

/*
 *  枚举
 */
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
//  枚举的便利,根据枚举的值获取它的名字
let colorName: string = Color[c];

/*
 *  Any:不希望类型检查器对变量进行类型检查,让它们通过编译阶段,使用any标记
 */
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

/*
 *  void:表示没有任何类型,函数没有返回值时使用void
 */
function warnUser(): void{
    console.log("This is my warning message");
}
//  为变量声明void没用,只能赋值undefined和null
let unusable: void = null;

/*
 *  null和undefined,多用于联合类型
 */

/*
 *  never:表示哪些永不存在的值的类型,表示总是会抛出异常和根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
 */

/*
 *  Object:表示非原始类型
 */

/*
 *  类型断言
 */
//  第一种形式:尖括号语法
{
    let someValue: any = "this is a string";
    let strLength: number = (<string> someValue).length;
}
//  第二种形式:as语法
{
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;
}