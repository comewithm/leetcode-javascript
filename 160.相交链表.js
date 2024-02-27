/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    function cycle() {
        // 可以理解为成环起始位置的节点(转换为成环找到环的入口)
        let pA = headA, pB = headB;
        while(pA.next != null) {
            pA = pA.next;
        }
        // 0\n[2,6,4]\n[1,5]\n3\n2
        pA.next = pB
    
        let fast = headA, slow = headA
    
        while(fast != null && fast.next != null) {
            slow = slow.next
            if(fast.next.next != null) {
                fast = fast.next.next
            } else {
                fast = fast.next
            }
            if(slow === fast) {
                break
            }
        }
        // 此时如果没有成环，则是一条长链表，fast最终会为null
        if(fast.next == null) {
            pA.next = null
            return null
        }
        slow = headA
        while(slow !== fast) {
            slow = slow.next
            fast = fast.next
        }
        pA.next = null
        return slow
    }

    // return cycle()

    function concatEachOther() {
        let pA = headA, pB = headB
        // 类似于 a + b === b + a
        while(pA !== pB) {
            if(pA == null) {
                pA = headB
            } else {
                pA = pA.next
            }

            if(pB == null) {
                pB = headA
            } else {
                pB = pB.next
            }
        }
        return pA
    }

    return concatEachOther()
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = getIntersectionNode;
// @after-stub-for-debug-end