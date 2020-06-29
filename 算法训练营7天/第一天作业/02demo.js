/*
 *  给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 *  说明：你不能倾斜容器，且 n 的值至少为 2。
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let leftIndex = 0;
    let rightIndex = 1;
    let area = 0;

    while(leftIndex!==height.length-1){

        let tempArea = (rightIndex-leftIndex)*Math.min(height[leftIndex],height[rightIndex]);
        area = Math.max(area, tempArea);
        rightIndex++;

        if(rightIndex===height.length && leftIndex<height.length-1){
            leftIndex++;
            rightIndex = leftIndex + 1;
        }
    }
    return area;
};