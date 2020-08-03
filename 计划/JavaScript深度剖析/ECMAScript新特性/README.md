#   ECMAScript新特性
### ECMAScript新特性
####  JavaScript vs ECMAScript
---
```
   JavaScript: 是一种脚本语言
   ECMAScript: 是一种语言规范
```
####   块作用域和模版字符串
---
```
    块作用域:   
      使用let关键字声明块级作用域

      let与var的不同之处:
        - let是在编译时才初始化
        - 作用域规则: var声明的变量的作用域是整个封闭函数. let只在其声明的块中可用。
        - 在程序和方法的最顶端: var会在全局对象里新建一个属性,let不会.
        - 重复声明: let在同一个块或函数中声明会引起stntaxError
        - 暂存死区: let存在暂存死区,let直到代码执行到它们定义的位置才开始初始化,在变量初始化前访问该变量会导致referenceError,使用typeof访问暂存死区中的变量也会引发referenceError
        - 变量提升: 指函数中后面的变量提升到函数顶部定义,var存在变量提升,let不存在。

        拓展
        - 静态作用域(即词法作用域,js使用静态作用域):静态作用域中的函数遇到既不是形参，也不是函数内部定义的局部变量时，会去函数定义时的环境中查找.
        - 动态作用域:动态作用域中的函数遇到既不是形参，也不是函数内部定义的局部变量时，会去函数调用的环境中查找.


    模版字符串(反钩号):
        - 表达式
        - 多行字符串
        - 标签模版字符串
        - 原始字符串
        - 嵌套模版
        - 带标签的模板字符串

        使用
            -   `内容`
            -   ${}识别储存的内容片段
            -   tag `内容` 触发高级函数的定义
            -   String.raw `` 取得字符串模版的原始数据
```
#### 解构赋值
---
```
  - 解构赋值:是一种javascript表达式,经过解构赋值,可以将属性/值从数组/对象取出，赋值给其他变量.

  解构数组
  1. 变量声明并赋值的解构
  var foo = ["one", "two", "three"];
  var [one, two, three] = foo;
  console.log(one, two, three);

  2. 变量先声明后赋值的解构
  var a, b;
  [a, b] = [1, 2];
  console.log(a, b);

  3. 默认值(防止从数组中取出一个值为undefined)
  var a, b;
  [a=5, b=7] = [1];
  console.log(a, b);

  4. 交换变量(没有解构的情况下,交换变量需要一个临时变量)
  var a = 1;
  var b = 3;
  [a, b] = [b, a];
  console.log(a, b);

  5. 解析一个从函数返回的数组
  function fun(){
    return [1, 2];
  }
  var [a, b] = fun();
  console.log(a, b);

  6. 忽略默写返回值
  function fun(){
    return [1, 2, 3];
  }
  var [a, ,b] = fun();
  console.log(a, b);

  7. 将剩余数组赋值给一个变量(扩展运算符后面不能有“,”号,不然会抛异常)
  var [a, ...b] = [1, 2, 3];
  console.log(a, b);

  8. 用正则表达式匹配提取值(正则表达式exec方法返回数组,数组中是匹配到的数值)


  解构对象
  1. 基本赋值
  var o = {p: 42, q: true};
  var {p, q} = o;
  console.log(p, q);

  2.  无声明赋值(使用无声明赋值时,圆括号是必须的)
  var a, b;
  ({a, b} = {a:2, b:3});

  3.  给新的变量赋值
  var o = {p:1, q:2};
  var {p: foo, q: bar} = o;
  console.log(foo, bar);

  4.  默认值
  var {a=5, b=10} = {a: 1};
  console.log(a, b);

  5.  给新的变量命名并提供默认值
  var {a: aa = 5, b: bb=10} = {a: 3};
  console.log(aa, bb);

  6.  函数参数默认值
  function fun({a= 1, b= 2, c= 3}={}){
    console.log(a, b, c);
  }
  fun({a: 4, b: 5, c: 6});

  7.  解构嵌套对象和数组
  const data = {
    a: 1,
    b: [{
        c: 3,
        d: 4
    }]
  }
  let{a: aa, b:[{c: cc}]} = data;
  console.log(aa, cc);

  8.  for...of迭代和解构

  9.  从作为参数实参的对象中提取数据
  function userId({id}){
    return id;
  }

  function whois({display: display, fullname: {firstname: name}}){
    console.log(display, name);
  }

  var user = {
    id: 42,
    displayName: "jdoe",
    fullName: {
        firstName: "John",
        lastName: "Doe"
    }
  };

  console.log("userId: " + userId(user)); // "userId: 42"
  whois(user); // "jdoe is John"

  10. 对象属性计算名和解构 (object literals)
  let key = "z";
  let {[key]: foo} = {z: "bar"};
  console.log(foo); // bar

  11. 对象解构中的rest
  let{a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
  console.log(a, b, rest);

  12. 无效的javascript标识符作为属性名称
  const foo = {'fizz-buzz': true};
  const {'fizz-buzz': fizzBuzz} = foo;
  console.log(fizzBuzz);

  13. 解构对象时会查找原型链
  var obj = {self: '123'};
  obj.__proto__.prot = '456';
  const {self, prot} = obj;
  console.log(self, prot);
```
