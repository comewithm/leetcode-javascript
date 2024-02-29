/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = []
    const track = []
    // 是否访问过节点
    const used = new Array(nums.length).fill(false)
    
    function backtrack(track, nums) {
        if(track.length === nums.length) {
            res.push([...track])
            return
        }

        for(let i = 0; i < nums.length; i++) {
            const ele = nums[i];

            if(used[i]) {
                continue
            }

            track.push(ele)
            used[i] = true
            backtrack(track, nums)
            track.pop()
            used[i] = false
        }
    }

    backtrack(track, nums)
    return res
};
// @lc code=end

