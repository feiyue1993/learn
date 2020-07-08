/*
 *  @author: feiyue
 *  @brief: 类型推断
 *  @dete: 2020-06-27 15:30
 *  @version: 1.0.0
 */

/*
 *  基础(类型推断发生的时机)
 *  1.初始化变量和成员
 *  2.设置默认值
 *  3.决定函数的返回值
 */

/* 最佳通用类型 */
{
    class Animal{
        numLegs: number
    }
    class Bee extends Animal{}
    class Lion extends Animal{}
    /* 这里想让‘zoo’推断出Animal类型,但是数组对象里面没有'Animal'类型,因此不能推断出结果 */
    let zoo = [new Bee(), new Lion()];
    /* 为了更正,我们可以明确的声明我们期望的类型 */
    let zoo: Animal[] = [new Bee(), new Lion()]
    /* 如果没有找到最佳通用类型的话,类型推断的结果为联合数组类型 (Bee|Lion)[] */
}

/* 上下文类型(和表达式的类型及所处的位置相关) */
{
    /* ts类型检查器使用window.onmousedown的类型推断函数表达式的参数类型为mouseEvent,访问一个不存的属性,所以报错 */
    window.onmousedown = function(mouseEvent){
        console.log(mouseEvent.clickTime); // Error
    }

    /* 如果有明确的参数类型注解,不会使用上下文类型,上下文类型会被忽略,就不会报错 */
    window.onmousedown = function(mouseEvent: any){
        console.log(mouseEvent.clickTime);
    }
}
