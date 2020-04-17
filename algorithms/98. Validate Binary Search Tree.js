/*
98. Validate Binary Search Tree

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
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
var isValidBST = function(root) {
  return isValidBSTNode(root);
  //return isValidBSTNode2(root);
};

// O(N) O(N)
const isValidBSTNode = (node, min, max) => {
  if (!node) return true;
  
  const val = node.val;
  if (min !== undefined && val <= min) return false;
  if (max !== undefined && val >= max) return false;
  
  if (!isValidBSTNode(node.left, min, val)) return false;
  if (!isValidBSTNode(node.right, val, max)) return false;
  
  return true;
}

// Inorder - O(N) O(N)
const isValidBSTNode2 = (root) => {
  if (!root) return true;
  let stack = [root];
  let val = undefined;
  let node = root.left;
  while(stack.length > 0 || node) {
      while(node) {
          stack.push(node);
          node = node.left;
      }
      node = stack.pop();
      if (val !== undefined && node.val <= val) return false;
      val = node.val;
      node = node.right;
  }
  return true;
}




