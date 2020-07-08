#   入口起点
>   单入口
```
    用法: entry: string| [string]
```
>   多入口(比较灵活)
```
    用法: entry: {<entryChunkName> string | [string]}
    使用场景
        -   分离app和vendor(第三方库)入口，webpack4中使用optimization.splitChunks
        -   多页应用
```

#   输出
######  通过配置output选项,告知webpack如何向硬盘写入编译文件.
>   多个入口起点
```
    如果配置中创建出多于一个“chunk”,则应使用占位符来确保每个文件具有唯一名称
    module.exports={
        entry: {
            app: './src/app.js',
            search: './src/search.js'
        },
        output: {
            filename: '[name].js',
            path: __dirname + '/dist'
        }
    }

    占位符:
    -   [hash]: 模块标识符的hash
    -   [contenthash]:  文件内容hash
    -   [chunkhash]: chunk内容的hash
    -   [name]: 模块名称
    -   [id]:   模块标识符
    -   [query]: 模块的query,例如文件名？后面的字符串
    -   [function]: 能返回字符串文件名的函数
```

>   高级进阶
```
    对资源使用cdn和hash
    module.exports = {
      //...
      output: {
        path: '/home/proj/cdn/assets/[hash]',
        publicPath: 'https://cdn.example.com/assets/[hash]/'
      }
    };
    如果在编译时不确定,可以通过在运行时入口起点文件中的__webpack_public_path__动态设置
```



