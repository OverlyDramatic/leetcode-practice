/**
 * * Remove Nth Node From End of List
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const nodeArr = []
  let currentNode = head
  while (currentNode) {
      nodeArr.push(currentNode)
      currentNode = currentNode.next
  }
  const { length } = nodeArr
  const prev = nodeArr[length - n - 1]
  if (!prev) {
      head = head.next
  } else {
    prev.next = prev.next.next
  }
  return head
};