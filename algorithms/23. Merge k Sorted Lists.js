/*
23. Merge k Sorted Lists

Merge k sorted linked lists and return it as
one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  return mergeKLists2(lists);
};

// O(N log(k)) where k = lists.length
var mergeKLists2 = function(lists) {
  if (lists.length < 1) return null;
  for (let i = 1; i < lists.length; i*=2) {
    for (let j = 0; j < lists.length; j+=i*2) {
      lists[j] = merge2List(lists[j], lists[j+i]);
    }
  }
  return lists[0];
}

var merge2List = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let head = null;
  let tail = null;
  while(l1 && l2) {
    let node = null;
    if (l1.val < l2.val) {
      node = l1;
      l1 = l1.next;
    } else {
      node = l2;
      l2 = l2.next;
    }
    if (!head) head = node;
    if (tail) tail.next = node;
    tail = node;
  }
  if (l1) tail.next = l1;
  else if (l2) tail.next = l2;
  return head;
}

// O(N k) where k = lists.length
var mergeKLists1 = function(lists) {
  let head = null;
  let tail = null;
  while(lists.length > 0) {
    let minIndex = -1;
    let minNode = null;
    for (let i = 0; i < lists.length; i++) {
      const node = lists[i];
      if (node && (!minNode || node.val < minNode.val)) {
        minNode = node;
        minIndex = i;
      }
    }
    
    if (!minNode) break;
    
    const node = new ListNode(minNode.val);
    if (!head) head = node;
    else tail.next = node;
    tail = node;
    
    if (!minNode.next) {
      lists.splice(minIndex, 1);
    } else {
      lists[minIndex] = minNode.next;
    }
  }
  return head;
}


