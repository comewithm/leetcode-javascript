/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
    let maxMergeLength = 0
    function maxDepth(root) {
        if(root === null) {
            return 0
        }
        let leftLength = maxDepth(root.left)
        let rightLength = maxDepth(root.right)
        // 当前最大长度
        let mergeLength = leftLength + rightLength
        // 记录最大长度
        maxMergeLength = Math.max(mergeLength, maxMergeLength)
        // 左右子树中的较大值
        return Math.max(leftLength, rightLength) + 1
    }
    maxDepth(root)
    return maxMergeLength
};
// @lc code=end

