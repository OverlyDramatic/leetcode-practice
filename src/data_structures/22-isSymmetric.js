/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * * Symmetric Tree
 * https://leetcode.cn/problems/symmetric-tree/
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function check(left, right) {
    if (!left && !right) {
      return true
    }
    if (!left || !right || left.val !== right.val) {
      return false
    }
    return check(left.left, right.right) && check(left.right, right.left)
  }
  return check(root, root)
}
