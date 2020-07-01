#   bower 安装
    npm install -g bower
    
#   初始化项目
    bower init
    
#   安装组件
    bower install --save jquery#1.8.0   // save会把元信息保存再bower.json文件
   
#   将组件升级最新版本
    bower install jquery
    
#   解决依赖冲突
    1.先升级所有依赖,看看有没有过时的组件
    2.选择给出选项中最大的版本
    3.彻底测试
    
#   集成gulp
    1.使用wiredep在html文件中添加特定标记,告诉插件在什么位置插入文件,wiredep会把bower.json中的所有组件都加载一遍，然后找到相关主文件，在正确的位置插入。
        (1)npm install --save-dev wiredep
        (2)引入: var wiredep = require('wiredep').stream;
        (3)选择需要插入的html文件
    
    2.使用main-bower-files
        (1)在html中删除引用
        (2)npm install --save-dev main-bower-files
        (3)引入: var mainBowerFiles = require('main-bower-files');
        (4)var glob = mainBowerFiles('**/*.js');    //将返回的数组赋值给变量
        (5)glob.push('app/scripts/**/*/js');    //筛选出js文件
    
    
       