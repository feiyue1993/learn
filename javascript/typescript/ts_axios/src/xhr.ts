import {AxiosPromise, AxiosRequestConfig, AxiosResponse} from "../types";
import {parseHeaders} from "./helpers/headers";

export default function xhr(config: AxiosRequestConfig): AxiosPromise{
    return new Promise((resolve)=>{
        const {data = null, url, method = 'get', headers, responseType} = config;

        const request = new XMLHttpRequest();
        request.open(method.toLowerCase(), url, true);

        if(responseType){
            request.responseType = responseType;
        }

        /*
         *  接收响应
         */
        request.onreadystatechange = function handlerLoad(){
            if(request.readyState !== 4){
                return;
            }

            const responseHeaders = parseHeaders(request.getAllResponseHeaders());
            const responseData = responseType && responseType !== 'text' ?
                request.response: request.responseText
            const response: AxiosResponse = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            }
            resolve(response);
        }

        /*
         *  将header中字段放入请求中
         */
        Object.keys(headers).forEach((name)=>{
            if(data === null && name.toLowerCase()==='content-type'){
                delete headers[name];
            }else{
                request.setRequestHeader(name, headers[name])
            }
        })

        request.send(data);
    })
}