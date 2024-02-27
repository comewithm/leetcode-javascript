/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
var middleNode = function(head) {
    let p = new ListNode(-1)
    let fast = head
    let slow = head

    while(fast.next !== null) {
        if(fast.next.next) {
            fast = fast.next.next
        } else {
            fast = fast.next
        }
        slow = slow.next
    }

    p = slow

    return p
};
// @lc code=end

