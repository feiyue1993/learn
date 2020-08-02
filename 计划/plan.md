# javascript深度剖析
---
 1. ECMAScript新特性
    - javascript vs ECMAScript
    - 块作用域、模板字符串
    - 对象与数组的解构、rest操作符
    - 函数进阶(箭头函数、默认参数)
    - 对象和数组的扩展用法
    - Proxy,Reflect,Map,Set,Symbol
    - for...of,迭代器模式,生成器函数
    - ES modules模块系统
    - ES2016-ES2020 特性一览
    - 新特性编译工具babel的使用
    - 新特性的polyfill:coreJS标准库

 2. JavaScript异步编程
    - JavaScript的单线程设计
    - 同步模式和异步模式的调用差异
    - 回调函数的执行原理
    - Promise异步方案的使用进阶与剖析
    - 处理异步任务的任务队列和事件循环
    - javascript内部的宏任务与微任务
    - es6 generator迭代器的异步应用
    - 使用async/await语法糖编写扁平的异步代码

 3. TypeScript高级编程
    - 编程语言的几种不同类型系统
    - javascript自有类型系统的问题
    - flow静态类型检查方案
    - flow工具的配置及相关插件的使用
    - typescript基本语法
    - typescript高级特性(泛型,接口)
    - typescript内置对象标准库
    - typescript的类型声明

 4. 函数式编程范式
    - 函数式编程的本质以及应用场景
    - 如何以函数式编程风格创建应用程序
    - 用简单的代码构建复杂的应用程序
    - 纯函数的定义以及为什么使用纯函数
    - 为什么消除和控制副作用如此重要
    - 柯里化、compose、高阶函数的优点
    - 不可变的数据结构
    - 常见库(loadsh、ramda.js)

 5. javascript性能优化
    - javascript中的垃圾回收
    - javascript内存管理
    - v8垃圾回收机制分类
    - 引用计数器、标记清楚、标记整理和增量标记
    - preformance工具的使用及注意事项
    - 20个代码层面的优化细节

# 前端工程化实战
---
 1. 脚手架工具
    - 脚手架设计思想与目标
    - 脚手架工具的本质作用
    - 常用的脚手架工具一览
    - Yeoman的基本使用以及自定义generator
    - Yeoman Sub Generator特性
    - 基于Yeoman创建适合自己的脚手架工具
    - Plop生成器的基本使用
    - 使用Plop提高项目创建同类文件的效率
    - 脚手架工作原理剖析
    - 手写一个自己的脚手架工具

 2. 自动化构建
    - 如何使用自动化构建提高开发效率
    - 常用的自动化构建任务执行器
    - npm scripts & script hooks
    - Grunt工具的使用及扩展开发
    - Gulp的使用以及任务结构
    - 基于Gulp创建自动化构建工作流
    - 封装独立的自动化构建工具
    - FIS 3的使用以及常用的扩展插件

 3. 自动化测试
    - 自动化测试的主要分类: 单元测试、集成测试、E2E测试
    - 高性能应用开发所必要的性能测试与压力测试
    - 常用的自动化测试框架与自动化测试的实现原理
    - Mocha、Jest、Enzyme、Cypress、Nightmare、Puppeteer
    - 前端项目中自动化测试的最佳实践(基础设施、公共组件的测试)

# 核心框架原理与进阶
---
 1. vue原理深度剖析
    - vue.js框架基础回顾
    - vue cli基础设施深度解剖
    - 数据响应式实现原理分析
    - 虚拟dom和diff算法的实现
    - 模版编译模块的实现原理
    - vue router源码剖析

 2. vue.js高级与进阶
    - 封装自己的vue组件库
    - vue项目性能优化
    - vuex数据流管理方案
    - 使用typescript开发vue.js应用
    - 原生服务端渲染ssr的实现、同构开发
    - nuxt.js集成式ssr框架
    - 静态站点生成ssg方案及gridsome
    - vue3.0设计和用法的变化以及优势
    - vue3.0 composition apis
    - vue.js + vue router + vuex + typescript 实战项目开发

 3. react设计原理解密
    - react框架基础回顾、jsx语法
    - 分析virtual-dom目的及实现原理
    - react核心算法:fiber
    - react框架的设计哲学
    - react框架核心源码解读

 4. react进阶与实战
    - 封装react自定义组件库
    - react组件的性能优化
    - 受控和非受控组件的选用标准
    - react组件的自动化测试
    - react 16.8 hooks特性的使用以及实现原理分析
    - css-in-js 方案以及emotion库
    - 现代化react应用ui框架 chakra-ui
    - 使用typescript开发react应用
    - react数据流方案:redux，mobx
    - redux常用中间件以及中间件的开发
    - 原生服务端渲染ssr的实现,同构开发
    - next.js集成式ssr矿机
    - 静态站点生成ssg方案及gatsby框架
    - react + react router + redux + antdesign + typescript 实战

  5. angular企业实战开发
    - angular9基础
    - angular数据绑定及实现原理
    - angular组件封装及父子组件通信
    - angular服务模块及服务注入
    - angular路由模块
    - rxjs响应式编程的库
    - ngrx状态管理工具

# node.js全栈开发
---
 1. node.js高级编程
    - 非堵塞IO、EventLoop、事件队列
    - CommonJS原理解析
    - 核心模块、自定义模块、第三方模块
    - 文件系统、buffer对象、字符编码
    - 压缩和解压缩、加密和签名算法
    - 网络编程、TCP/IP、HTTP服务
    - cookie和session原理
    - 多线程和集群搭建
    - 搭建方向代理服务器

 2. nosql数据库
    - nosql数据库特性及优势介绍
    - mongoDB的安装、连接、操作
    - mongoose模块以及常用的操作api
    - redis快速上手已经它所适合的场景
    - 使用node.js操作redis

 3. graphql api 开发
    - 基于koa开发restful api
    - 应用层最佳接口实践:graphql
    - graphql规格标准与设计优势
    - graphql快速开发库:apollo
    - api鉴权标准、jsonwebtoken模块及相关api
    - docker compose + gitlab ci 自动化部署node.js应用

 4. 企业级框架
    - egg.js项目架构与脚手架工具
    - egg.js中间件机制、洋葱圈模型
    - egg.js路由、控制器、服务
    - egg.js插件机制以及插件开发
    - egg.js定时任务调度
    - egg.js + mongoose + nunjunks + typescript 项目实战
    - nest.js框架的基本概念和内部组成
    - 使用next.js框架构建高效且可伸缩的服务端应用
    - next.js面向切面编程、依赖注入的实践
    - adonis.js框架介绍

# 泛客户端开发
  1. 小程序与快应用
    - 原生小程序MINA框架回顾
    - 基于mpvue框架开发小程序应用
    - 基于mpvue框架打包快应用和H5
    - 京东taro多端统一开发方案
    - uni-app多端统一开发方案

  2. hybrid app 开发
    - 基于webview ui的基础方案
    - cordova/Ionic通用型混合app开发框架
    - cordova的实现原理分析已经它的常用插件
    - h5配合原生webview开发混合式app
    - 通过jsbridge完成h5与native的双向通讯
    - 原生app开发相关知识

  3. react native
    - react native开发环境搭建
    - 初始环节搭建以及相关配置基础
    - 热更新的开发体验
    - 使用flexbox实现界面布局
    - 常见界面布局和长列表呈现
    - 接入第三方native组件(objective-c/swift/java)
    - react native架构的实现原理

  4. flutter原生app开发
    - flutter概述以及windows/macos环境搭建
    - dart语言快速上手、包管理工具
    - flutter快速上手、开发体验、路由和导航
    - ui开发：内置material design 和 cupertino(ios风格)Widget
    - 常用widget、表单组件、布局方式
    - 数据响应:界面状态管理
    - 网络编程以及相关第三方包
    - native功能和sdk的调用
    - flutter在线课堂项目实战案例

  5. electron桌面应用开发
    - electron运行时的基本结构分析
    - 快速上手、常用api、基础案例
    - 主进程与渲染进程之间的差异以及相互通信
    - 常见桌面应用程序功能的实现
    - electron集合react/vue.js之类的前端框架
    - electron应用的调试(主进程与渲染进程)以及相关工具(spectron/devtron)
    - 集成式打包工具(electron-builder/electron-packager/electron-forge)
    - 实战案例:模仿microsoft to do

# 商业级技术解决方案
  1. serverless无服务端方案
    - baas/faas/paas服务
    - serverless架构与实现原理
    - serverless应用场景与局限性
    - 国外常见的serverless服务(zeit now、Netlify)
    - 国外常见的serverless服务(阿里云、腾讯云)

  2. 中途岛/中间层方案
    - bff架构的优势及常见方式
    - 基于node.js的中间层架构
    - 实现更合理的前后端分析架构
    - 中间层的目标与职责
    - 后端细粒度接口聚合
    - 服务端模版渲染
    - 前端路由设计

  3. 首屏性能提升方案
    - 白屏加载和首屏加载实践的区别
    - 骨架屏:渲染一些简单元素进行占位
    - 使用pwa开发可离线化应用
    - 客户端缓存策略
    - 利用script的async和defer异步加载
    - 前端资源的分块/按需加载

  4. 数据埋点方案
    - 数据埋点的原理分析
    - 页面访问量统计
    - 功能点击量统计
    - 埋点系统的实现

  5. 长列表无限滚动方案
    - 触底加载更多功能的实现
    - 长列表渲染卡顿问题的原因
    - 高性能长列表渲染的思路:虚拟列表
    - 不同框架下长列表无限滚动的实现方法
    - 高性能滚动及页面渲染优化

  6. API接口鉴权方案
    - JSON Web Token 方案介绍
    - jsonwebtoken模块及相关api
    - jwt创建与签发、解码与验证
    - nodejs鉴权中间件的实现
    - axios统一鉴权模块
    - react/vue框架下客户端路由鉴权

  7. 更多常见方案
    - 渐进式加载方案
    - RBAC权限管理解决方案
    - 接口mock方案
    - oss云存储方案
    - h5直播方案
    - 多语言化方案
    - 防盗链方案
    - cdn加速方案

# 高阶技术专题
---
  1. 微前端架构与实践
    - 微前端诞生的北京和解决的问题
    - 微前端下的工程实践
    - 如何同时支持react/vue/angular等不同的框架
    - 开发一个简单的微前端框架

  2. pwa渐进式web应用
    - pwa使用场景分析
    - 服务端/客户端离线缓存技术
    - 浏览器多线程环境
    - 通过service workers让pwa离线工作
    - serviceworkers的声明周期
    - 基于pwa的消息推送、应用更新
    - 渐进式加载

  3. 数据可视化
    - 相关知识储备: canvas，svg
    - 数据可视化的目标
    - 实现数据可视化的常用方式
    - 相关库: d3.js、antv、echart.js

  4. 现代化 web 101 架构剖析
    - web应用主流架构概览
    - 域名、dns、负载均衡等相关概念的普及
    - web应用服务端、数据库服务器
    - 缓存服务、任务队列服务
    - 云存储、cdn

  5. web components
    - custom elements
    - shadow dom
    - html templates
    - web components案例
    - vue组件转换成原生组件

  6. 更多技术专题
    - css 预/后处理器(sass、postcss)
    - css架构(BEM、 css in js、 emotion、styled-components)
    - 移动端针剂调试
    - web安全专题(https、xss/CSRF、csp)
    - web应用性能专题
    - web assembly

# 大厂面试指导
  1. leetcode精选题
    - 常用数据结构介绍
    - 常见算法题解析
    - 常见数据结构题解析

  2. batj 高频面试真题
    - batj 高频原理题解析
    - batj 高频应用题解析

  3. 面试专项能力突击
    - 一面:编程基础能力考察
    - 二面:项目经验考察
    - 三面:方案设计综合能力考察
    - 四面:hr综合软素质靠擦

  4. 面试过程发挥应有水平
    - 学会表达:如何把硬实力表达出来
    - 扬长避短:如何表现出自己的闪光点
    - 洞悉套路:面试考察点与答题套路指导
    - 模拟训练:大厂面试官1v1模拟面试
    - 模拟面试复盘

  5. 打造一份让人无法拒绝的简历
    - 高分简历模版分析
    - 打造一份高分简历的方法
    - 模拟训练:重写简历1v1指导服务
