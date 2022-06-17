/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * * Remove Linked List Elements
 * https://leetcode.cn/problems/remove-linked-list-elements/
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) {
      return head
  }
  let prev = null
  let cur = head
  while (cur) {
      if (cur.val === val) {
          if (prev) {
              cur = cur.next
              prev.next = cur
          } else {
              head = head.next
              cur = head
          }
      } else {
          prev = cur
          cur = cur.next
      }
  }
  return head
};