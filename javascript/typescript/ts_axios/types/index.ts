export interface  AxiosRequestConfig {
    url: string
    method?: Method
    data?: any
    params?: any
}

export type Method =
    'get'|'Get'|
    'post'|'Post'|
    'put'|'Put'|
    'delete'|'Delete'|
    'head'|'Head'|
    'options'|'Options'|
    'patch'|'Patch'

