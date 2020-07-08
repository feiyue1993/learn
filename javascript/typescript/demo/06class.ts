/*
 *  @author: feiyue
 *  @brief: 类
 *  @dete: 2020-07-02 09:50
 *  @version: 1.0.0
 */

/*
 *  基本示例
 */
{
    class Greeter{
        greeting: string
        constructor(message: string) {
            this.greeting = message;
        }
        greet(){
            return `Hello, ${this.greeting}`
        }
    }

    let greeter = new Greeter("world");
}

/*
 *  继承
 */
{
    class Animal{
        move(distance: number = 0){
            console.log(`Animal moved ${distance} m.`)
        }
    }

    class Dog extends Animal{
        bark(){
            console.log('woof!')
        }
    }

    const dog = new Dog()
    dog.bark();
    dog.move(10)
}

/*
 *  修饰符
 *  public: 默认,自由访问程序里定义的成员
 *  private: 不能在声明它的类外部访问
 *  protected: 在派生类中仍然可以访问,类也可以被标记,表示类不能在包含它的类外部被实例化.但是能被继承
 */
class Animal{
    public name: string
    private age: number
    public constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    public move(distance: number){
        console.log(`${this.name} moved ${distance}m.`)
    }
}

var animal = new Animal('Cat', 12);
animal.name;
animal.age; //  private error

/*
 *  静态属性 static
 */
{
    class Grid{
        static origin = {x: 0, y: 0};
        displayOrigin(){
            console.log(`${Grid.origin.x} ${Grid.origin.y}`)
        }
    }
}

/*
 *  抽象关键字 abstract: 用于定义抽象类和抽象类内部的抽象方法
 *  抽象类中的抽象方法不包含具体实现但是必须在派生类中实现
 */
abstract class Animal{
    abstract makeSound: void;
    move():void{
        console.log('move');
    }
}
