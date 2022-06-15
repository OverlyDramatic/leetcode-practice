/**
 * * Middle of the Linked List
 * https://leetcode.cn/problems/middle-of-the-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  // * 1. use array
  // const nodeArr = []
  // let currentNode = head
  // while (currentNode) {
  //     nodeArr.push(currentNode)
  //     currentNode = currentNode.next
  // }
  // return nodeArr[nodeArr.length >> 1]
  // * 2. use pointer
  // let p = 0
  //   let currentNode = head
  //   while (currentNode) {
  //       p++
  //       currentNode = currentNode.next
  //   }
  //   const index = p >> 1
  //   p = 0
  //   currentNode = head
  //   while (p++ < index) {
  //       currentNode = currentNode.next
  //   }
  // return currentNode
  // * 3. fast slow
  let fast = (slow = head)
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

module.exports = middleNode
