/*
430. Flatten a Multilevel Doubly Linked List
*/

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (!head) return null;
  let newHead = new Node(head.val);
  let curr = newHead;
  const execute = (node) => {
    if (!node) return;
    curr.next = new Node(node.val, curr);
    curr = curr.next;
    execute(node.child);
    execute(node.next);
  }
  execute(head.child);
  execute(head.next);
  return newHead;
};
