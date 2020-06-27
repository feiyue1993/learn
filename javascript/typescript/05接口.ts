/*
 *  @author: feiyue
 *  @brief: 接口
 *  @dete: 2020-06-27 17:17
 *  @version: 1.0.0
 */

/*
 *  必需属性: 检查必需属性是否存在,以及其类型是否匹配
 */
{
    interface LabelledValue{
        label: string
    }

    function printLabel(labelledObj: LabelledValue){
        console.log(labelledObj.label);
    }

    let myObj = {size: 10, label: 'Size 10 Object'};
    printLabel(myObj);
}

/*
 *  可选属性: 接口里的属性不全是必需的
 */
{
    interface Square{
        color: string,
        area: number
    }

    interface SquareConfig{
        color?: string,
        width?: number
    }

    function createSquare(config: SquareConfig): Square{
        let newSquare = {color: 'white', area: 100};
        if (config.color) {
            newSquare.color = config.color
        }
        if (config.width) {
            newSquare.area = config.width * config.width
        }
        return newSquare
    }

    let mySquare = createSquare({color: 'black'});
}