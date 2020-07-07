/*
 *  @author: feiyue
 *  @brief: axios入口
 *  @dete: 2020-07-02 11:44
 *  @version: 1.0.0
 */
import {AxiosPromise, AxiosRequestConfig, AxiosResponse} from "../types";
import xhr from "./xhr";
import {transformRequest, transformResponse} from "./helpers/data";
import {processHeaders} from "./helpers/headers";
import {buildURL} from "./helpers/url";

function axios(config: AxiosRequestConfig): AxiosPromise{
    processConfig(config);
    return xhr(config).then((res)=>{
        return transformResponseData(res);
    });
}

function processConfig(config: AxiosRequestConfig): void{
    config.url = transformURL(config);
    config.headers = transformHeaders(config)
    config.data = transformRequestData(config);
}

function transformURL (config: AxiosRequestConfig): any{
    const {url, params} = config;
    return buildURL(url, params);
}

function transformRequestData (config: AxiosRequestConfig): any{
    return transformRequest(config.data);
}

function transformHeaders (config: AxiosRequestConfig): any{
    const {headers = {}, data} = config;
    return processHeaders(headers, data);
}

function transformResponseData(res: AxiosResponse): AxiosResponse{
    res.data = transformResponse(res.data);
    return res;
}

export default axios;