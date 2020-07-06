#   XMLHttpRequest

###   properties

---
    
-   onreadystatechange(一个事件处理器,当readyState属性发生改变的时候调用)
-   readyState(返回XMLHttpRequest客户端的状态) Read only
```
0 UNSENT  实例被创建,open方法未被调用时
1 OPENED  open方法被调用时
2 HEADERS_REVEIVED    send方法被调用,并且头和状态可用
3 LOADING 下载,响应报文持有部分数据
4 DONE    完成操作
```
-   response(根据responseType返回响应实体内容) Read only
-   responseText(返回一个文本形式的domString) Read only
-   responseType(定义响应类型)
-   responseURL(返回响应的序列化url) Read only
-   responseXML(返回响应文档) Read only
-   status(返回响应状态) Read only
-   statusText(返回响应状态文本) Read only
-   timeout(定义请求的超时时间)
-   upload(代表上传进度)
-   withCredentials(指定跨域Access-Control请求是否应当带有授权,如cookie或授权header)

###   methods

---

-   abort(如果请求已经发出,则中止请求)
-   getAllResponseHeaders(以字符串的形式返回所有用cslf分隔的响应头,如果没有收到响应,则返回null)
-   getResponseHeader(返回包含指定响应头的字符串,响应未收到或没有则返回null)
-   open(初始化一个请求,该方法只能在js中使用)
-   overrideMimeType(重写服务器返回的mime类型)
-   send(发送请求,如果是异步的,该方法将在请求后立即返回)
-   setRequestHeader(设置http请求头的值)

### event

--- 

-   abort(当请求被停止时触发)
-   error(当请求遇到错误时触发)
-   load(请求成功完成时触发)
-   loadstart(接收到响应数据时触发)
-   loadend(请求结束时触发,无论请求成功还是失败)
-   progress(当请求接收到更多数据时,周期性触发)
-   timeout(在请求超时时触发)

### 请求类型

--- 

```
XMLHttpRequest 生成的请求获取数据的方式(通过open的第三参数设置)
    -   false 同步
    -   true(默认) 异步
```

### 处理响应

---

-   获取xml文档

```
解析方式
    1.使用 XPath 定位到文档的指定部分。
    2.手动 解析和序列化 XML 为字符串或对象。
    3.使用 XMLSerializer 把 DOM 树序列化成字符串或文件。
    4.预先知道 XML 文档的内容，你可以使用 RegExp。
```

-   获取html文档

```
解析方式
    1.使用 XMLHttpRequest.responseXML 属性。
    2.将fragment.body.innerHTML注入到文档片段,遍历DOM中的片段
    3.预先知道HTML文档的内容，你可以使用RegExp。
```

-   处理二进制数据(通过设置resposeType和response处理)

### 监测进度

--- 

-   progress(检索的数据量发生了变化)
-   load(传输完成,所有数据保存在response中)
```
1.在请求调用 open() 之前添加事件监听。否则 progress 事件将不会被触发。
2.responseType为moz-blob时,progress被触发,接收到的是包含了接收到的数据的Blob。
3.使用 loadend 事件可以侦测到所有的三种加载结束条件（abort、load，或 error）
```

### 提交表单和上传文件

---

```
    1.ajax
    2.formdata API
        -   post enctype:application/x-www-form-urlencoded
        -   post enctype:text/plain
        -   post multipart/form-data
        -   get
```



