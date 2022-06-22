/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * * Remove Duplicates from Sorted List
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let cur = head
  while (cur && cur.next) {
      if (cur.val === cur.next.val) {
          cur.next = cur.next.next
      } else {
          cur = cur.next
      }
  }
  return head
};