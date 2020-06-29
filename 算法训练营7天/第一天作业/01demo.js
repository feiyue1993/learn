/*
 *  给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 *  不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let tempObj = {};
    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        if(!tempObj[num]){
            tempObj[num] = num;
        }
        nums[Object.keys(tempObj).length-1] = num;
    }
    var len = Object.keys(tempObj).length;
    nums.length = len
    return len;
};