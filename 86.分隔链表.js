/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    // 小链表
    const smallDummy = new ListNode(-1)
    // 大链表
    const largeDummy = new ListNode(-1)
    let small = smallDummy
    let large = largeDummy
    let cur = head

    // 双指针
    while(cur !== null) {
        if(cur.val < x) {
            small.next = cur
            small = small.next
        } else {
            // larger
            large.next = cur
            large = large.next
        }
        // 需要断开原链表的指针
        let temp = cur.next
        cur.next = null
        cur = temp
    }
    
    small.next = largeDummy.next

    return smallDummy.next
};
// @lc code=end

