/*
25. Reverse Nodes in k-Group

Given a linked list, reverse the nodes of
a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the
length of the linked list. If the number of nodes is not a
multiple of k then left-out nodes in the end should remain as it is.

Example:

Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5

Note:

Only constant extra memory is allowed.
You may not alter the values in the list's nodes, only nodes itself may be changed.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let next = head;
  let i = k;
  while(next && i-- > 0) {
    next = next.next;
  }
  if (i > 0) return head;
  
  const newHead = reverseLinkedList(head, k);
  head.next = reverseKGroup(next, k);
  
  return newHead;
};

const reverseLinkedList = (head, k) => {
  if (!head || !head.next || k <= 1) return head;
  let next = head.next;
  let reversed = reverseLinkedList(head.next, k-1);
  next.next = head;
  head.next = null;
  return reversed;
}


