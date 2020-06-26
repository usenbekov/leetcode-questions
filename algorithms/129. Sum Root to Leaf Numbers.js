/*
129. Sum Root to Leaf Numbers
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
 * @return {number}
 */
var sumNumbers = function(root, val = 0) {
  if (!root) return 0;
  val = val*10 + root.val;
  if (!root.left && !root.right) {
    return val;
  }
  return sumNumbers(root.left, val) + sumNumbers(root.right, val);
};


