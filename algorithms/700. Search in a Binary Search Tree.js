/*
700. Search in a Binary Search Tree
*/

/*
1. Recursive - O(H), O(H) -> Average: O(logN), Worst: O(N)
2. Loop - O(H), O(1)
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  //return solution1(root, val);
  return solution2(root, val);
};

var solution1 = function(root, val) {
  if (!root || root.val === val) return root;
  if (val < root.val) return solution1(root.left, val);
  return solution1(root.right, val);
}

var solution2 = function(root, val) {
  while (root && root.val !== val) {
    root = val < root.val ? root.left : root.right;
  }
  return root;
}



