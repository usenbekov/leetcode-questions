/*
101. Symmetric Tree

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 

Follow up: Solve it both recursively and iteratively.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  //return !root || isSymmetricRecursive(root.left, root.right);
  return isSymmetricIterative(root);
};

var isSymmetricRecursive = function(node1, node2) {
  if (!node1 && !node2) return true;
  if (!node1 || !node2) return false;
  return node1.val === node2.val &&
    isSymmetricRecursive(node1.left, node2.right) &&
    isSymmetricRecursive(node1.right, node2.left);
}

var isSymmetricIterative = function(root) {
  if (!root) return true;
  let queue = [root.left, root.right];
  while (queue.length > 0) {
    let node1 = queue.pop();
    let node2 = queue.pop();
    if (!node1 && !node2) continue;
    if (!node1 || !node2 || node1.val !== node2.val) return false;
    queue.push(node1.left, node2.right);
    queue.push(node1.right, node2.left);
  }
  return true;
}


