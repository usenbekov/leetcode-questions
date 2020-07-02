/*
107. Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let ans = [];
  const generate = (node, level = 0) => {
    if (!node) return;
    
    if (ans.length <= level) ans.unshift([]);
    let index = ans.length - level - 1;
    ans[index].push(node.val);
    
    generate(node.left, level+1);
    generate(node.right, level+1);
  }
  generate(root);
  return ans;
};


