/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // 递归
    function recursiveNode() {
        let prev = head
        function recursiveCheck(node) {
            if(node !== null) {
                if(!recursiveCheck(node.next)) {
                    // 不是最后的node
                    return false
                }
                // 从尾结点开始(后续遍历)
                if(node.val !== prev.val) {
                    return false
                }
                prev = prev.next
            }
            return true
        }
        return recursiveCheck(head)
    }

    return recursiveNode()
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end