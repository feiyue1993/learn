export function isPlainObject(val: any): val is Object{
    return Object.toString.call(val) === '[Object object]'
}

export function isDate(val: any): val is Date {
    return toString.call(val) === '[object Date]'
}