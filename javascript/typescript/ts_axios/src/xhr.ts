import {AxiosPromise, AxiosRequestConfig, AxiosResponse} from "../types";
import {parseHeaders} from "./helpers/headers";
import {createError} from "./helpers/error";

export default function xhr(config: AxiosRequestConfig): AxiosPromise{
    return new Promise((resolve, reject)=>{
        const {data = null, url, method = 'get', headers, responseType, timeout} = config;

        const request = new XMLHttpRequest();
        request.open(method.toLowerCase(), url, true);

        if (timeout) {
            request.timeout = timeout
        }

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

            if (request.status === 0) {
                return
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
            handleResponse(response);
        }

        function handleResponse(response: AxiosResponse){
            if(response.status >= 200 && response.status < 300){
                resolve(response);
            }else{
                reject(createError(
                    `Request failed with status code ${response.status}`,
                    config,
                    null,
                    request,
                    response
                ))
            }
        }

        request.ontimeout = function handleTimeout() {
            reject(createError(
                `Timeout of ${config.timeout} ms exceeded`,
                config,
                'ECONNABORTED',
                request
            ))
        }

        request.onerror = function handleError(){
            reject(createError(
                'Network Error',
                config,
                null,
                request
            ))
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