/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const memo = new Array(n + 1).fill(-1)

    function dp(n) {
        if(n === 0) return 0
        if(n === 1) return 1
    
        if(memo[n] !== -1) {
            return memo[n]
        }
        memo[n] = dp(n - 1) + dp(n - 2)
        return memo[n]
    }
    return dp(n)
};
// @lc code=end

