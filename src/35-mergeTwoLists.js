/**
 * * 合并两个有序链表 https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // * 解法1
  // let result = null
  // if (l1 || l2) {
  //   if (l1 && l2) {
  //     if (l1.val < l2.val) {
  //       result = l1
  //       l1 = l1.next
  //     } else {
  //       result = l2
  //       l2 = l2.next
  //     }
  //   } else {
  //     if (l1) {
  //       result = l1
  //       l1 = l1.next
  //     } else {
  //       result = l2
  //       l2 = l2.next
  //     }
  //   }
  // } else {
  //   return null
  // }
  // let current = result
  // while (l1 || l2) {
  //   if (l1 && l2) {
  //     if (l1.val < l2.val) {
  //       current.next = l1
  //       current = l1
  //       l1 = l1.next
  //     } else {
  //       current.next = l2
  //       current = l2
  //       l2 = l2.next
  //     }
  //   } else {
  //     if (l1) {
  //       current.next = l1
  //       current = l1
  //       l1 = l1.next
  //     } else {
  //       current.next = l2
  //       current = l2
  //       l2 = l2.next
  //     }
  //   }
  // }
  // return result
  // * 解法2 - 简写
  let result = {
    next: null
  }
  let current = result
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1
      current = l1
      l1 = l1.next
    } else {
      current.next = l2
      current = l2
      l2 = l2.next
    }
  }
  current.next = l1 || l2
  return result.next
}

module.exports = mergeTwoLists
