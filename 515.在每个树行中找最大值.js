/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
var largestValues = function(root) {
    if(root === null) return []
    const queue = []
    const res = []
    queue.push(root)
    while(queue.length > 0) {
        const length = queue.length
        let max = -Infinity
        for(let i = 0; i < length; i++) {
            const node = queue.shift()
            max = Math.max(max, node.val)
            if(node.left !== null) {
                queue.push(node.left)
            }
            if(node.right !== null) {
                queue.push(node.right)
            }
        }
        res.push(max)
    }
    return res
};
// @lc code=end

