/**
 * * 二叉树中的最大路径和 https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
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
function maxPathSum(root) {
  let ans = Number.NEGATIVE_INFINITY
  oneSideMax(root)
  return ans

  function oneSideMax(root) {
    if (root === null) return 0
    const left = Math.max(0, oneSideMax(root.left))
    const right = Math.max(0, oneSideMax(root.right))
    ans = Math.max(ans, left + right + root.val)
    return Math.max(left, right) + root.val
  }
}

module.exports = maxPathSum
