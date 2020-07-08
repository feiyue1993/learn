/*
 *  @author: feiyue
 *  @brief: node global API
 *  @date: 2020-07-06 19:16
 *  @version: 1.0.0
 */

function log(msg){
    console.log(msg);
}

const path = require('path');

/*
 *  _dirname: 当前目录
 */
{
    log(`__dirname ${__dirname}`);
    log(`path.dirname(__filename) ${path.dirname(__filename)}`);
}

/*
 *  clearImmediate(immediateObject):    清除
 *  setImmediate(callback[, ...args]): 在时间循环结束时调用
 */