/*
 *  @author: feiyue
 *  @brief: 接口
 *  @dete: 2020-06-27 17:17
 *  @version: 1.0.0
 */

/*
 *  本章内容
 *  1.接口在对象中的应用
 *  2.接口在函数中的应用
 *  3.接口在类中的应用
 */

/*
 *  必需属性: 检查必需属性是否存在,以及其类型是否匹配
 */
{
    interface LabelledValue{
        label: string
    }

    function printLabel(labelledObj: LabelledValue){
        console.log(labelledObj.label);
    }

    let myObj = {size: 10, label: 'Size 10 Object'};
    printLabel(myObj);
}

/*
 *  可选属性: 接口里的属性不全是必需的
 */
{
    interface Square{
        color: string,
        area: number
    }

    interface SquareConfig{
        color?: string,
        width?: number
    }

    function createSquare(config: SquareConfig): Square{
        let newSquare = {color: 'white', area: 100};
        if (config.color) {
            newSquare.color = config.color
        }
        if (config.width) {
            newSquare.area = config.width * config.width
        }
        return newSquare
    }

    let mySquare = createSquare({color: 'black'});
}

/*
 *  只读属性
 */
//  基本类型
{
    interface Point{
        readonly x: number;
        readonly y: number;
    }

    let p1:Point = {x: 10, y: 20};
    p1.x = 5;   //  error
}
//  数组
{
    let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;
    ro[0] = 12; //  error
    ro.push(5); //  error
    ro.length = 100;    //  error
    a = ro; //  error   就算赋值给一个普通类型也不可以

    a = ro as number[]; //  使用断言就可以赋值给普通数组,断言相当于把ReadonlyArray改成number[]
}

/*
 *  readonly vs const
 *  最简单的判断：
 *      作为变量使用时用const
 *      作为属性使用readonly
 */

/*
 *  额外的属性检查
 */
{
    interface Square{
        color: string,
        area: number
    }

    interface SquareConfig{
        color?: string,
        width?: number
    }

    function createSquare(config: SquareConfig): Square{
        let newSquare = {color: 'white', area: 100};
        if (config.color) {
            newSquare.color = config.color
        }
        if (config.width) {
            newSquare.area = config.width * config.width
        }
        return newSquare
    }

    let mySquare = createSquare({coluor: 'black'});
    
    /*
     *  绕开检查的方法
     *  1.使用类型断言
     *  2.添加一个字符串索引签名
     */
    {
        //  类型断言
        let mySquare = createSquare({width: 100, opacity: .5} as SquareConfig);
        //  添加字符串索引签名
        interface SquareConfig{
            color?: string
            width?: number
            [propName: string]: any
        }
    }
}

/*
 *  函数类型
 */
interface SearchFunc{
    (source: string, subString: string): boolean
}

{
    let mySearch: SearchFunc;
    mySearch = function(source: string, subString: string): boolean{
        let result = source.search(subString);
        return result > -1;
    }
}
//  参数名可以不对应， 不指定类型系统会自己推断参数类型
{
    let mySearch: SearchFunc;
    let src = 0;
    mySearch = function(src, sub): boolean{
        let result = src.search(sub);
        return result > -1;
    }
    mySearch(src, "sub");   //  error
}

/*
 *  可索引类型
 *  ts支持两种索引签名:字符串和数字,在使用字符串索引时,会转换成string索引,所以number返回的类型必须时string的子类型
 */
interface StringArray{
    //  可以将索引签名设置为只读,防止给索引赋值
    [index: number]: string
}

let myArray: StringArray;
myArray = ['Bob', 'Fred'];

let myStr: string = myArray[0];

/*
 *  类类型
 *  接口描述了类的公共部分
 */
{
    interface ClockInterface{
        currentTime: Date
        setTime(d: Date)
    }

    class Clock implements ClockInterface{
        currentTime: Date
        setTime(d: Date) {
            this.currentTime = d;
        }

        constructor(h: number, m: number) {
        }
    }
}
//  TODO 不明白为什么要这样用,为了解决什么问题?
{
    interface ClockConstructor{
        new (hour: number, minute: number): ClockInterface
    }

    interface ClockInterface{
        tick()
    }

    class DigitalClock implements ClockInterface{
        constructor(h: number, m: number) {
        }
        tick() {
            console.log('beep');
        }
    }

    class AnalogClock implements ClockInterface{
        constructor(h: number, m: number) {
        }
        tick() {
            console.log('tick')
        }
    }

    function createClock(ctor: ClockConstructor, hour: number, minute: number):
    ClockInterface{
        return new ctor(hour, minute)
    }

    let digital = createClock(DigitalClock, 12, 17);
    let analog = createClock(AnalogClock, 7, 32);
}

/*
 *  继承接口
 */
{
    interface Shape{
        color: string
    }

    interface Square extends Shape{
        sideLenght: number
    }

    let square = {} as Square;
    square.color = 'blue';
    square.sideLenght = 10;
}

/*
 *  一个接口可以集成多个接口
 */
{
    interface Shape{
        color: string
    }

    interface PenStroke{
        penWidth: number
    }

    interface Square extends Shape, PenStroke{
        sideLength: number
    }

    let square = {} as Square;
    square.color = "blue";
    square.sideLength = 10;
    square.penWidth = 5.0;
}

/*
 *  接口继承类
 */
{
    class Control{
        private state: any
    }

    interface SelectableControl extends Control{
        select(): void
    }

    class Button extends Control implements SelectableControl{
        select() {
        }
    }

    class TextBox extends Control{
        select(){}
    }

    //  SelectableControl继承了Control，所以里面带有state，ImageC缺少了state
    class ImageC implements SelectableControl{
        select() {
        }
    }
}
