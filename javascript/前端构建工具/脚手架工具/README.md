#   Yeoman

#   generator构成
    1.名称: 必须以“generator-”开头
    2.项目模板:一部分是固定文件,另一部分是需要做一些修改的文件。
    3.组装指令
    
#   调用generator
    1.npm install -g yo //  yo是Yeoman的一个命令,是generator的执行器,必须全局安装.
    2.mkdir projectname
    3.cd projectname
    4.yo generator-后面的名称    //  是Yeoman的约定
    
#   项目模板(脚手架材料)
    固定文件：必须要引入的文件
    灵活文件:需要根据某些选项来修改
    可选文件：由开发者选择在项目初始化的时候是否引入
    可恢复文件：可由其他文件恢复出来,比如package.json中记录的node_module文件
    
#   Yeoman的组装流程
    1.安装提示:通过向用户提问,来让用户自定义配置,使用inquirer
    2.写入文件:从项目模板中把文件复制到目录中
    3.安装依赖
    
    
    