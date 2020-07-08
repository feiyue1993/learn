/*
 *  判断对象类型
 */
export function isPlainObject(val: any): val is Object{
    return toString.call(val) === '[object Object]'
}

/*
 *  判断Date类型
 */
export function isDate(val: any): val is Date {
    return toString.call(val) === '[object Date]'
}