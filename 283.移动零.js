/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    // [1, 0, 3, 5, 0, 7, 8, 0, 9]
    // [1, 3, 5, 7, 8, 0, 0, 0, 9]
    // 从左到右遍历
    function moveZeroFromLeft (nums) {
        // 左侧的0索引
        let start = 0;
        // 多次移动累计的偏移量
        let accumulateIndex = 0;
        // 右侧的0索引
        let current = 0
        // 找到第一个0的标识
        let moveFlag = false
        for(let i = 0; i < nums.length; i++) {
            const num = nums[i]
            if(num === 0) {
                if(!moveFlag) {
                    // 非0开始标识
                    start = current = i
                    moveFlag = true
                } else {
                    // 找到第二个0
                    current = i;
                    moveNumbers(start, current)
                    // start始终是左侧非零数字
                    start = current - 1 - accumulateIndex;
                    // 多次移动会有一个累计0的差值(start~current之间)
                    accumulateIndex = current - start
                }
            } 
            // 最后
            if(i === nums.length - 1 && nums[i] !== 0 && moveFlag) {
                moveNumbers(start, i)
            }
        }
        // 双0之间的非零数移动
        function moveNumbers(startIndex, endIndex) {
            for(let i = startIndex + 1 + accumulateIndex; i <= endIndex; i++) {
                if(nums[i] !== 0) {
                    nums[i - 1 - accumulateIndex] = nums[i]
                    nums[i] = 0
                }
            }
        }
    }

    // moveZeroFromLeft(nums)


    // 27.移除元素 方法复用
    function removeElement(nums, val) {
        let i = 0;
        for(let j = 0; j < nums.length; j++) {
            if(nums[j] !== val) {
                nums[i] = nums[j]
                i++
            }
        }
        return i
    }

    let p = removeElement(nums, 0);
    for(; p < nums.length; p++) {
        // p索引之后的元素赋值为0
        nums[p] = 0
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = moveZeroes;
// @after-stub-for-debug-end