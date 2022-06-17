/**
 * * Merge Two Sorted Lists
 * https://leetcode.cn/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = null
  let cur1 = list1
  let cur2 = list2
  if (!list1) {
    return list2
  } else if (!list2) {
    return list1
  }
  if (cur1.val > cur2.val) {
    head = cur2
    cur2 = cur2.next
  } else {
    head = cur1
    cur1 = cur1.next
  }
  let cur = head
  while (cur1 || cur2) {
    if (!cur1) {
      cur.next = cur2
      cur2 = cur2.next
    } else if (!cur2) {
      cur.next = cur1
      cur1 = cur1.next
    } else if (cur1.val > cur2.val) {
      cur.next = cur2
      cur2 = cur2.next
    } else {
      cur.next = cur1
      cur1 = cur1.next
    }
    cur = cur.next
  }
  cur.next = null
  return head
}
