export interface  AxiosRequestConfig {
    headers?: any
    url: string
    method?: Method
    data?: any
    params?: any
    responseType?: XMLHttpRequestResponseType
    timeout?: number
}

export type Method =
    'get'|'Get'|
    'post'|'Post'|
    'put'|'Put'|
    'delete'|'Delete'|
    'head'|'Head'|
    'options'|'Options'|
    'patch'|'Patch'

export interface AxiosResponse{
    data: any
    status: number
    statusText: string
    headers: any
    config: AxiosRequestConfig
    request: any
}

export interface AxiosError extends Error {
    config: AxiosRequestConfig
    code?: string
    request?: any
    response?: AxiosResponse
    isAxiosError: boolean
}

export type XMLHttpRequestResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";

export interface AxiosPromise extends Promise<AxiosResponse>{}
