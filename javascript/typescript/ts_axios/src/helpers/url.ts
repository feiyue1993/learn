import {isDate, isPlainObject} from "./util";

if(isDate(val)){
    val = val.toISOString();
}else if(isPlainObject(val)){
    val = JSON.stringify(val)
}