/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    function splitStr(s) {
        if(s.length < 2) {
            return s
        }
        let index = 0;
        let res = ''

        while(index < s.length) {
            helper(index, index)
            helper(index, index + 1)
            index++
        }

        function helper(left, right) {
            // 左右两边扩散
            while(left >=0 && right < s.length && s[left] === s[right]) {
                left--
                right++
            }
            // 两边间距（right - left）开区间
            if(right - left - 1 > res.length) {
                res = s.slice(left + 1, right)
            }
        }

        return res
    }

    const res = splitStr(s)
    console.log('res', res)
    return res

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestPalindrome;
// @after-stub-for-debug-end