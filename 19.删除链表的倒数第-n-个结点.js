/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    function findFromEnd(head, k) {
        let p1 = head
        // 先走k步
        for(let i = 0; i < k; i++) {
            p1 = p1.next
        }

        let p2 = head
        // 再同时走，直到p1到达末尾,此时p2指向倒数第k个节点
        while(p1 !== null) {
            p1 = p1.next
            p2 = p2.next
        }
        return p2
    }

    // 所以先找到倒数k-1个节点
    const dummy = new ListNode(-1)
    dummy.next = head

    let p = findFromEnd(dummy, n + 1)
    p.next = p.next.next
    return dummy.next
};
// @lc code=end

