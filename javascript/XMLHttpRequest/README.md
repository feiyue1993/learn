#   XMLHttpRequest

#   properties
    
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
-   status(返回响应状态)
-   timeout(定义请求的超时时间)