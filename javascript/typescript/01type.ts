/*
 *  @author: feiyue
 *  @brief: typescript类型
 *  @dete: 2020-06-27 14:46
 *  @version: 1.0.0
 */

/*
 *  布尔值
 */
let isDone: boolean = false;

/*
 *  数字
 */
let decLiteral: number = 20;
let hexLiteral: number = 0x14;
let binaryLiteral: number = 0b10100;
let octalLiteral: number = 0o24;

/*
 *  字符串
 */
{
    let name: string = 'bob';
    name = 'simth';
}
{
    let name: string = `Yee`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${name}.
        I'll be ${ age + 1 } years old next month.
    `
}


/*
 *  数组
 */
let list: Array<number> = [1,2,3,4];

/*
 *  元组:允许表示一个已知元素数量和类型的数组,各元素的类型不必相同.
 */
{
    let x: [string, number];
    x = ['hello', 10]; // ok
// x = [10, 'hello']; // error
    /* 访问越界元素,会使用联合类型替代 */
    x[3] = 'world';
}

/*
 *  枚举
 */
{
    /* 编号默认从零开始 */
    enum Color {Red, Green, Blue};
    let c: Color = Color.Green;

    /* 可以自己指定编号 */
    enum CustomColor{Red=2, Green=4, Blue = 6};

    /* 可以数值获取它的名字 */
    let colorName: string = CustomColor[2];
}

/*
 *  any: 代表任意类型,允许在编译时可选择的包含或移除类型检查
 */
{
    let list: any[] = [1, true, 'free'];
    list[1] = 100;
}

/*
 *  void: 表示没有类型,当函数没有返回值时为void
 */
{
    function warnUser():void{
        console.log('This is my warning message');
    }
}

/*
 *  null 和 undefined
 */

/*
 *  never: 表示哪些永不存在的值的类型,可以用于表示那些总是会抛出异常或根本就不会有返回值的函数表达式的返回值类型
 */
{
    function error(message: string): never{
        throw new Error(message);
    }

    /* 推断的类型为never */
    function fail(){
        return error('Something failed');
    }

    /* 存在无法达到的终点 */
    function infiniteLoop(): never{
        while(true){}
    }
}

/*
 *  object: 表示非原始类型
 */
declare function create(o: object| null): void
create({prop: 0});
create(null);

create(42);
create('string');
create(false);
create(undefined);

/*
 *  类型断言: 当你比ts更了解某个值的详细信息时,好比其他语言的类型转换
 *  两种表示法
 */
{
    /* 尖括号表示法 */
    let someValue: any = 'this is a string';
    let strLen: number = (<string> someValue).length;
}
{
    /* as语法 */
    let someValue: any = 'this is a string';
    let strLen: number = (someValue as string).length;
}