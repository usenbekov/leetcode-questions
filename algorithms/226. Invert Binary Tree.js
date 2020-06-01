/*
226. Invert Binary Tree
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
 * @return {TreeNode}
 */
/*
     4
   /   \
  2     7
 / \   / \
1   3 6   9

     4
   /   \
  7     2
 / \   / \
6   9 1   3

     4
   /   \
  7     2
 / \   / \
9   6 1   3
*/
var invertTree = function(root) {
  if (!root) return root;
  const left = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(left);
  return root;
};


