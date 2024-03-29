/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity
    function subMaxSum(root) {
        if(root == null) {
            return 0
        }
        let leftVal = Math.max(0, subMaxSum(root.left))
        let rightVal = Math.max(0, subMaxSum(root.right))
        let currentSum = root.val + leftVal + rightVal

        maxSum = Math.max(maxSum, currentSum)

        return root.val + Math.max(leftVal, rightVal)
    }

    subMaxSum(root)
    return maxSum
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxPathSum;
// @after-stub-for-debug-end