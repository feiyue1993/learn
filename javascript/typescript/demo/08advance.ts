/*
 *  @author: feiyue
 *  @brief: 高级类型
 *  @dete: 2020-07-02 10:52
 *  @version: 1.0.0
 */

/*
 *  交叉类型: 将多个类型合并为一个类型,包含了所需的所有类型的特性.
 */

{
    function extend<T, U> (first: T, second: U): T & U {
        let result = {} as T & U
        for (let id in first) {
            result[id] = first[id] as any
        }
        for (let id in second) {
            if (!result.hasOwnProperty(id)) {
                result[id] = second[id] as any
            }
        }
        return result
    }

    class Person{
        constructor(public name: string) {
        }
    }

    interface Loggable{
        log(): void
    }

    class ConsoleLogger implements  Loggable{
        log() {
        }
    }

    var jim = extend(new Person('Jim'), new ConsoleLogger())
    var n = jim.name
    jim.log()
}

/*
 *  联合类型: 表示一个值可以是几种类型之一
 */
{
    interface Fish{
        swim();
    }
    interface Bird{
        fly();
    }

    function getSmallPet(): Fish | Bird{
        return ;
    }

    let pet = getSmallPet();
    pet.swim();
}

/*
 *  类型保护: 不能确定使用的是联合类型中的哪个类型,访问类型不带有的方法可能会报错,这时候就需要类型保护
 */
{
    interface Fish{
        swim();
    }
    interface Bird{
        fly();
    }

    function getSmallPet(): Fish | Bird{
        return ;
    }

    let pet = getSmallPet();
    if ((pet as Fish).swim) {
        (pet as Fish).swim()
    } else {
        (pet as Bird).fly()
    }
}

/*
 *  用户自定义类型保护: 类型保护会存在以上多次使用类型断言的情况,自定义类型保护可以解决这个问题
 */
{
    function isFish(pet: Fish | Bird): pet is Fish {
        return (pet as Fish).swim !== undefined
    }

    if (isFish(pet)) {
        pet.swim()
    }
    else {
        pet.fly()
    }
}

/*
 *  typeof instanceof
 */

/*
 *  字符串字面量
 */
{
    type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

    class UIElement {
        animate (dx: number, dy: number, easing: Easing) {
            if (easing === 'ease-in') {
                // ...
            } else if (easing === 'ease-out') {
            } else if (easing === 'ease-in-out') {
            } else {
                // error! 不能传入 null 或者 undefined.
            }
        }
    }

    let button = new UIElement()
    button.animate(0, 0, 'ease-in')
    button.animate(0, 0, 'uneasy') // error
}
