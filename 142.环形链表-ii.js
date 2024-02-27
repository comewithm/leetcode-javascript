/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head, slow = head

    while(fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next

        if(fast === slow) {
            // 成环
            break
        }
    }

    if(fast == null || fast.next == null) {
        return null
    }

    slow = head
    while(slow != fast) {
        slow = slow.next
        fast = fast.next
    }
    return slow
};
// @lc code=end

