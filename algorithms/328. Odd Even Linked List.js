/*
328. Odd Even Linked List
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
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  //return solution1(head);
  return solution2(head);
};

var solution2 = function(head) {
  if (!head) return head;
  let odd = head;
  let even = head.next;
  let evenHead = head.next;
  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
}

var solution1 = function(head) {
  let oddGroupTail = head;
  let evenGroupTail = head ? head.next : null;
  while (evenGroupTail && evenGroupTail.next) {
    const evenGroupHead = oddGroupTail.next;
    const oddToMove = evenGroupTail.next;
    evenGroupTail.next = oddToMove.next;
    oddGroupTail.next = oddToMove;
    oddToMove.next = evenGroupHead;
    evenGroupTail = evenGroupTail.next;
    oddGroupTail = oddGroupTail.next;
  }
  return head;
}



