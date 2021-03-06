/*
1008. Construct Binary Search Tree from Preorder Traversal

Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node,
  any descendant of node.left has a value < node.val, and any descendant
  of node.right has a value > node.val.  Also recall that a preorder
  traversal displays the value of the node first, then traverses
  node.left, then traverses node.right.)

Example 1:
Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]
https://assets.leetcode.com/uploads/2019/03/06/1266.png

Note: 
1 <= preorder.length <= 100
The values of preorder are distinct.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  //return solution1(preorder);
  return solution2(preorder);
};

var solution2 = function(preorder) {
  const root = new TreeNode(preorder[0]);
  const stack = [root];
  for (let i = 1; i < preorder.length; i++) {
    const node = new TreeNode(preorder[i]);
    let top = stack[stack.length-1];
    if (node.val < top.val) {
      top.left = node;
    } else {
      while (stack.length > 0 && stack[stack.length-1].val < node.val) {
        top = stack.pop();
      }
      top.right = node;
    }
    stack.push(node);
  }
  return root;
}

var solution1 = function(preorder) {
  if (preorder.length < 1) return null;
  let index = 0;
  const createNode = (min, max) => {
    if (index >= preorder.length) return null;
    const curr = preorder[index]
    if ((min !== null && curr <= min) || (max !== null && curr > max)) return null;
    const node = new TreeNode(curr);
    index++;
    node.left = createNode(min, node.val);
    node.right = createNode(node.val, max);
    return node;
  }
  return createNode(null, null);
}




