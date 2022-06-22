/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * * Invert Binary Tree
 * https://leetcode.cn/problems/invert-binary-tree/
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  function dfs(node) {
    if (node) {
      const temp = node.right
      node.right = node.left
      node.left = temp
      dfs(node.left)
      dfs(node.right)
    }
  }
  dfs(root)
  return root
}
