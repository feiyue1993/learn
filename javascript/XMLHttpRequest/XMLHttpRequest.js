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
        console.log(`xhr.response===>${xhr.response}`);
        console.log(`xhr.responseType===>${xhr.responseType}`);
        console.log(`xhr.responseText===>${xhr.responseText}`);
        console.log(`xhr.responseURL===>${xhr.responseURL}`);
        console.log(`xhr.responseXML===>${xhr.responseXML}`);
        console.log(`xhr.status===>${xhr.status}`);
        console.log(`xhr.statusText===>${xhr.statusText}`);
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

xhr.send();