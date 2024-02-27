/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head === null) {
        return null
    }
    let fast = head, slow = head;
    while(fast !== null) {
        if(fast.val !== slow.val) {
            // nums[slow] = nums[fast]
            slow.next = fast
            // slow++
            slow = slow.next;
        }
        // fast++
        fast = fast.next
    }
    slow.next = null
    return head
};
// @lc code=end

