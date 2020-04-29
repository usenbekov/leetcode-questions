/*
124. Binary Tree Maximum Path Sum

Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
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
 * @return {number}
 */
// Time -> O(N)
// Space -> if balanced: O(log(N)), if not O(N)
// or we can say O(H) where H is height of the tree
var maxPathSum = function(root) {
  const MIN_VAL = -Math.pow(2, 31);
  let maxSum = MIN_VAL;
  const pathSum = (node) => {
    if (!node) return MIN_VAL;
    let left = Math.max(0, pathSum(node.left));
    let right = Math.max(0, pathSum(node.right));
    maxSum = Math.max(maxSum, node.val+left+right);
    return node.val + Math.max(left, right);
  }
  pathSum(root);
  return maxSum;
};


