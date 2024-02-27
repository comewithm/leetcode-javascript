/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const memo = new Array(amount + 1).fill(-100)
    function dp(coins, amount) {
        if(amount === 0) return 0
        if(amount < 0) return -1
        let count = Infinity

        if(memo[amount] !== -100) {
            return memo[amount]
        }

        for(let i = 0; i < coins.length; i++) {
            let sub = dp(coins, amount - coins[i])

            if(sub === -1) continue

            count = Math.min(count, sub + 1)
        }
        memo[amount] = count === Infinity ? -1 : count
        return memo[amount]
    }

    return dp(coins, amount)
};
// @lc code=end

