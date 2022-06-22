/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * * Reverse Linked List
 * https://leetcode.cn/problems/reverse-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const list = []
  if (!head) {
      return head
  }
  let cur = head
  while (cur) {
      list.push(cur)
      cur = cur.next
  }
  let output = list.pop()
  let outCur = output
  while(list.length) {
      outCur.next = list.pop()
      outCur = outCur.next
  }
  outCur.next = null
  return output
};