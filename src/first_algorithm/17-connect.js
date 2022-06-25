/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * * Populating Next Right Pointers in Each Node
 * https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  // * 1. 深度优先
  // const queue = []
  // function dfs(node, depth) {
  //   if (node) {
  //     if (!queue[depth]) {
  //       queue[depth] = []
  //     }
  //     queue[depth].push(node)
  //     dfs(node.left, depth + 1)
  //     dfs(node.right, depth + 1)
  //   }
  // }
  // dfs(root, 0)
  // for (const q of queue) {
  //   for (let i = 0, len = q.length; i < len; i++) {
  //     q[i].next = q[i + 1] || null
  //   }
  // }
  // return root
  // * 2. 广度优先
  if (!root) {
    return root
  }
  const queue = [root]
  while (queue.length) {
    const { length } = queue
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      if (i < length - 1) {
        node.next = queue[0]
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return root
}
