/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// 通用的比较函数
function compare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? -1 : 1;
}

// 优先队列(二叉堆)
class BinaryHeap {
    constructor(compareFn = compare) {
        this.heap = [];
        this.compare = compareFn
    }

    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    peek() {
        if (this.heap.length === 0) throw new Error('Heap is empty');
        return this.heap[0];
    }

    poll() {
        if (this.heap.length === 0) throw new Error('Heap is empty');
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (
            this.hasParent(index) && 
            this.compare(this.parent(index), this.heap[index]) > 0
        ) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (
                this.hasRightChild(index) && 
                this.compare(this.rightChild(index), this.leftChild(index)) < 0
            ) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.compare(this.heap[index], this.heap[smallerChildIndex])  < 0) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
}


var mergeKLists = function (lists) {
    function accumulateMergeTwoList() {
        const mergeTwoLists = function (list1, list2) {
            const dummy = new ListNode(-1)
            let p = dummy
            let p1 = list1
            let p2 = list2
            while (p1 !== null && p2 !== null) {
                // p指针指向较小值节点
                if (p1.val > p2.val) {
                    p.next = p2
                    p2 = p2.next
                } else {
                    p.next = p1
                    p1 = p1.next
                }
                p = p.next
            }
            // 其中一个list为空
            if (p1 !== null) {
                p.next = p1
            }

            if (p2 !== null) {
                p.next = p2
            }
            return dummy.next
        };

        if (lists.length === 1) return lists[0]
        if (lists.length === 2) return mergeTwoLists(lists[0], lists[1])

        const dummy = new ListNode(-1)
        let merge = dummy

        for (let i = 1; i < lists.length; i++) {
            // temp指向头
            let temp = i == 1 ? lists[0] : merge
            // 指向头
            merge = mergeTwoLists(temp, lists[i])
            dummy.next = merge
        }

        return dummy.next
    }

    // return accumulateMergeTwoList()


    // 最小二叉堆
    function resolveByMinHeap() {
        if (lists.length === 0) return null

        const dummy = new ListNode(-1)
        let p = dummy
        const minHeap = new BinaryHeap((a, b) => compare(a.val, b.val))

        for (let i = 0; i < lists.length; i++) {
            let head = lists[i]
            if (head != null) {
                minHeap.add(head)
            }
        }

        while (!minHeap.isEmpty()) {
            const node = minHeap.poll()
            p.next = node
            if(node.next != null) {
                minHeap.add(node.next)
            }
            p = p.next
        }

        return dummy.next
    }

    return resolveByMinHeap()
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mergeKLists;
// @after-stub-for-debug-end