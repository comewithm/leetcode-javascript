/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
    // 遍历二叉树的方式计算
    // let res = 0;
    // let depth = 0

    // function traverse(root) {
    //     if(root === null) {
    //         return
    //     }
    //     // 前序位置
    //     depth++
    //     if(root.left === null && root.right === null) {
    //         // 叶子节点
    //         res = Math.max(res, depth)
    //     }
    //     traverse(root.left)
    //     traverse(root.right)
    //     // 后序位置
    //     depth--
    // }

    // traverse(root)
    // return res

    // 分解为子树的问题
    if(root === null) {
        return 0
    }
    let leftMax = maxDepth(root.left)
    let rightMax = maxDepth(root.right)
    // 加上根节点
    let res = Math.max(leftMax, rightMax) + 1
    return res
};
// @lc code=end

