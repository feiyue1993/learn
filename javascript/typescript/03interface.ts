/*
 *  @author: feiyue
 *  @brief: typescript接口语法练习
 *  @dete: 2020-06-23 14:33
 *  @version: 1.0.0
 */

interface LabelledValue {
    label: string
}

function printLabel(labelledObj: LabelledValue): void{
   console.log(labelledObj.label);
}

/*
 *  可选属性
 */
interface SquareConfig {
    color?: string,
    width?: number
}

function createSquare(opt: SquareConfig){

}

createSquare({width: 1});

/*
 *  只读属性
 *  readonly:   作为属性使用readonly
 *  const:      作为变量使用const
 */
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {x: 0, y: 0};
//  数组创建后不能修改
let arr: ReadonlyArray<number> = [1,2,3,4,5];
arr[1]=3; //    error!
arr.push(6); // error!
arr.length= 100; // error!
arr = []; //    error!

/*
 *  函数类型
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string){
    let result = source.search(subString);
    return result>-1;
}

//  函数参数名称不需要匹配
let mySearch1: SearchFunc;
mySearch1 = function(src: string, sub: string){
    return true
}

/*
 *  可索引的类型
 *  支持字符串和数字两种签名,使用数字签名时,数字签名的索引对象必须时字符串签名的子类
 */
interface StringArray {
    [index: number]: string // 描述能够通过索引得到的类型
}

let myArray: StringArray;
myArray = ["feiyue1", "feiyue2"];
let myStr: string = myArray[0];

/*
 *  类类型
 */
