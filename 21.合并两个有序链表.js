/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(-1)
    let p = dummy
    let p1 = list1
    let p2 = list2
    while(p1 !== null && p2 !== null) {
        // p指针指向较小值节点
        if(p1.val > p2.val) {
            p.next = p2
            p2 = p2.next
        } else {
            p.next = p1
            p1 = p1.next
        }
        p = p.next
    }
    // 其中一个list为空
    if(p1 !== null) {
        p.next = p1
    }

    if(p2 !== null) {
        p.next = p2
    }
    return dummy.next
};
// @lc code=end

