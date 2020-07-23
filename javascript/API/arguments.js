/*
* 属性
* callee    指代当前正在执行的函数，通过它可以引用匿名函数自身，该函数只定义在函数体中
* length    实际传递给函数的参数个数，声明的参数个数使用Function.length
* */

//  递归处理斐波拉契数
{
    function fibonacci(n){
        if(n<2){
            return 1;
        }
        return arguments.callee(n-1)+arguments.callee(n-2);
    }
}
