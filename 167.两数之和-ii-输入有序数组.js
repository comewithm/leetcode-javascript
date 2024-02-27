/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;
    while(left < right) {
        const restNum = target - numbers[left]
        if(numbers[right] === restNum) {
            return [left + 1, right + 1]
        } else if(numbers[right] < restNum) {
            left++
        } else if(numbers[right] > restNum) {
            right--
        }
    }
    return [-1, -1]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end