import {isPlainObject} from "./util";

/*
 *  规范化请求头属性名
 *  没有header返回
 *  有header的话,设置Content-type为指定规范
 */
function normalizeHeaderName(headers: any, normalizedName: string): void{
    if(!headers){
        return;
    }

    Object.keys(headers).forEach(name=>{
        if(name !== normalizedName && name.toLowerCase()===normalizedName.toUpperCase()){
            headers[normalizedName] = headers[name];
            delete headers[name];
        }
    })
}

/*
 *  1.标准化Header
 *  2.检查data，如果为对象的话,检查headers的Content-Type,没有则设置默认值
 */
export function processHeaders(headers: any, data: any): any{
    normalizeHeaderName(headers, 'Content-Type');

    if(isPlainObject(data)){
        if(headers && !headers['Content-Type']){
            headers['Content-Type'] = 'application/json;charset=utf-8';
        }
    }
    return headers;
}

export function parseHeaders(headers: string): any {
    let parsed = Object.create(null)
    if (!headers) {
        return parsed
    }

    headers.split('\r\n').forEach(line => {
        let [key, val] = line.split(':')
        key = key.trim().toLowerCase()
        if (!key) {
            return
        }
        if (val) {
            val = val.trim()
        }
        parsed[key] = val
    })

    return parsed
}