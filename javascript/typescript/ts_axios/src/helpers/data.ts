import {isPlainObject} from './util';

/*
 *  对请求的请求数据进行格式化
 */
export function transformRequest (data: any): any{
    if(isPlainObject(data)){
        return JSON.stringify(data);
    }
    return data;
}

/*
 *  对响应的返回数据进行格式化
 */
export function transformResponse(data: any): any{
    if(typeof data === 'string'){
        try{
            data = JSON.parse(data);
        }catch(e){
            // do nothing
        }
    }
    return data;
}