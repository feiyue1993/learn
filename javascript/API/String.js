function log(msg){
    console.log(msg);
}

/*
*   静态方法
* */

/*
*   fromCharCode
*   返回由指定的UTF-16代码单元序列创建的字符串
* */
{
    log(`String.fromCharCode(1234, 0x123) result: ${String.fromCharCode(1234, 0x123)}`);
}

/*
*   fromCodePoint
*   静态方法返回使用指定的代码点序列创建的字符串
* */
{
    log(`String.fromCodePoint(0xfffff) result: ${String.fromCodePoint(0xfffff)}`);
}

/*
*   原型方法
* */

/*
*   charAt
*   方法从一个字符串中返回指定的字符
* */
{
    log(`'123'.charAt(1) result: ${'123'.charAt(1)}`);
}

/*
*   charCodeAt 不懂
*   返回0到65535之间的整数，表示给定索引处的UTF-16代码单元，超过65535进行截取
* */
{
    log(`'󿿿'.charCodeAt(0) result: ${'󿿿'.charCodeAt(0)}`);
}

/*
*   codePointAt
*
* */
{
    log(`'󿿿'.codePointAt(0) result: ${'󿿿'.codePointAt(0)}`);
}

/*
*   concat
* */
{
    log(`'123'.concat('456','789') result: ${'123'.concat('456','789')}`);
}

/*
*   endsWith
* */
{
    log(`'123456'.endsWith('5') result: ${'123456'.endsWith('5')}`);
    log(`'123456'.endsWith('5', 5) result: ${'123456'.endsWith('5', 5)}`);
}

/*
*   includes
*   判断一个字符串是否在另一个字符串中
* */
{
    log(`'123456'.includes('123') result: ${'123456'.includes('123')}`);
    log(`'123'.includes('123456') result: ${'123'.includes('123456')}`);
}

/*
*   indexOf
*   返回指定值的索引,没有返回-1
* */
{
    log(`'123'.indexOf('3') result: ${'123'.indexOf('3')}`);
}

/*
*   lastIndexOf
*   从字符串尾部开始查找指定值索引,没有返回-1
* */
{
    log(`'3231'.lastIndexOf('3') result: ${'3231'.lastIndexOf('3')}`);
}

/*
*   检索返回一个字符串匹配正则表达式的结果
* */
{
    log(``)
}
