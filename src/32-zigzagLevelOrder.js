/**
 * * 二叉树的锯齿形层序遍历 https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  // * 不是很会做这道题，看着官方解答做的
  if (!root) {
    return []
  }
  const ans = []
  const nodeQueue = [root]

  let isOrderLeft = true

  while (nodeQueue.length) {
    let levelList = []
    const size = nodeQueue.length
    for (let i = 0; i < size; i++) {
      const node = nodeQueue.shift()
      // * 添加值到当前行
      if (isOrderLeft) {
        levelList.push(node.val)
      } else {
        levelList.unshift(node.val)
      }
      // * 把下一层节点添加到下一层循环
      if (node.left) {
        nodeQueue.push(node.left)
      }
      if (node.right) {
        nodeQueue.push(node.right)
      }
    }
    ans.push(levelList)
    // * 下一行调换顺序
    isOrderLeft = !isOrderLeft
  }
  return ans
}

module.exports = zigzagLevelOrder
