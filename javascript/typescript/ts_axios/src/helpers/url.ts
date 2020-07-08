import {isDate, isPlainObject} from "./util";
/*
 *  对URL中的字符串进行编码
 */
function encode(val: string): string{
    return encodeURIComponent(val)
        .replace(/%40/g,'@')
        .replace(/%3A/gi,':')
        .replace(/%24/g,'$')
        .replace(/%2C/g,',')
        .replace(/%20/g,'+')
        .replace(/%5B/g,'[')
        .replace(/%5D/g,']')
}

/*
 *  TODO此处不合理,参数params应该为Object，不然调用keys还是会存在报错
 */
export function buildURL(url: string, params?: any){
    if(!params){
        return url;
    }

    const parts: string[] = [];

    Object.keys(params).forEach((key) => {
        let val = params[key]
        if (val === null || typeof val === 'undefined') {
            return
        }
        let values: string[]
        if (Array.isArray(val)) {
            values = val
            key += '[]'
        } else {
            values = [val]
        }
        values.forEach((val) => {
            if (isDate(val)) {
                val = val.toISOString()
            } else if (isPlainObject(val)) {
                val = JSON.stringify(val)
            }
            parts.push(`${encode(key)}=${encode(val)}`)
        })
    })

    let serializedParams = parts.join('&');

    if(serializedParams){
        const markIndex = url.indexOf('#');
        if(markIndex !== -1){
            url = url.slice(0, markIndex);
        }

        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }

    return url
}