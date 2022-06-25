/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * * Binary Tree Preorder Traversal
 * https://leetcode.cn/problems/binary-tree-preorder-traversal/
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = []
  function dfs(node) {
      if (node) {
          res.push(node.val)
          dfs(node.left)
          dfs(node.right)
      }
  }
  dfs(root)
  return res
};