/*
 *  @author: feiyue
 *  @brief: 泛型
 *  @dete: 2020-07-02 10:24
 *  @version: 1.0.0
 */

/*
 *  由用户来定义接收类型
 */
{
    function identity<T>(arg: T):T{
        return arg;
    }
}

/*
 *  泛型接口
 */
{
    interface GenericIdentityFn{
        <T>(arg: T): T;
    }

    function identity<T>(arg: T): T{
        return arg;
    }

    let myIdentity: GenericIdentityFn = identity;
}

/*
 *  泛型接口参数
 */
{
    interface GenericIdentityFn<T>{
        (arg: T): T
    }

    function identity<T>(arg: T): T{
        return arg;
    }

    let myIdentity: GenericIdentityFn<number> = identity;
}

/*
 *  泛型类
 */
{
    class GenericNumber<T>{
        zeroValue: T
        add: (x: T, y: T) => T
    }

    let myGenericNumber = new GenericNumber<number>()
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function(x, y){
        return x + y;
    }
}

/*
 *  泛型约束
 */
{
    interface Lengthwise{
        length: number
    }

    function loggingIdentity<T extends Lengthwise>(arg: T): T{
        console.log(arg.length);
        return arg;
    }

    loggingIdentity(3); //  error
    loggingIdentity({length: 3});
}