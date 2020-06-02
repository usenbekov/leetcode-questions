/*
237. Delete Node in a Linked List
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
/*
[4,5,1,9], node = 5
5 <- 1 : 4,1,1,9
1.next = 1.next.next: 4,1,9
*/
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};


