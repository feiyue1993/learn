/*
* 请使用json-server搭建本地服务,XMLHttpRequest在浏览器上存在跨域问题
* */

const xhr = new XMLHttpRequest();
console.log(`new XMLHttpRequest()===>XMLHttpRequest.readyState: ${xhr.readyState}`)

const method = "GET";
const url = "http://localhost:3000/getRequset";

xhr.open(method, url, true);
console.log(`XMLHttpRequest.open===>XMLHttpRequest.readyState: ${xhr.readyState}`)

xhr.onreadystatechange = function(){
    if(xhr.readyState === XMLHttpRequest.DONE){
        console.log(`xhr.response===>${xhr.response}`);//   {"success": true,"msg": "","data": [{"id": 1,"name": "张三"},{"id": 2,"name": "二娃"},{"id": 3,"name": "赵四"},{"id": 4,"name": "老王"}]}
        console.log(`xhr.responseType===>${xhr.responseType}`);
        console.log(`xhr.responseText===>${xhr.responseText}`);//   {"success": true,"msg": "","data": [{"id": 1,"name": "张三"},{"id": 2,"name": "二娃"},{"id": 3,"name": "赵四"},{"id": 4,"name": "老王"}]}
        console.log(`xhr.responseURL===>${xhr.responseURL}`);//   http://localhost:3000/getRequset
        console.log(`xhr.responseXML===>${xhr.responseXML}`);
        console.log(`xhr.status===>${xhr.status}`); //  200
        console.log(`xhr.statusText===>${xhr.statusText}`); //  OK
    }
}
xhr.onprogress = function(){
    console.log(`XMLHttpRequest.onprogress===>XMLHttpRequest.readyState: ${xhr.readyState}`)
}

xhr.onload = function(){
    console.log(`XMLHttpRequest.onload===>XMLHttpRequest.readyState: ${xhr.readyState}`)
}

/*
* 定义超时时间
* */
xhr.timeout = 2000;
xhr.ontimeout = function(e){
    console.log(`请求超时 ${e}`);
}

xhr.send();