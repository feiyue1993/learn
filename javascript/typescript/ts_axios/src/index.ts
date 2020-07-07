/*
 *  @author: feiyue
 *  @brief: axios入口
 *  @dete: 2020-07-02 11:44
 *  @version: 1.0.0
 */
import {AxiosRequestConfig} from "../types";
import {transformRequest} from "./helpers/data";

function axios(config: AxiosRequestConfig){

}

function processConfig(config: AxiosRequestConfig): void{
    config.url = transformURL(config);
    config.data = transformRequest(config);
}

function transformRequestData (config: AxiosRequestConfig): any{
    return transformRequest(config.data);
}

export default axios;