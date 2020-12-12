/**
 * * 两数相加 https://leetcode-cn.com/problems/add-two-numbers/
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
function addTwoNumbers(l1, l2) {
  let curNode = (res = new ListNode(0))
  let carry = 0
  while (l1 || l2) {
    let _sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    carry = _sum > 9 ? 1 : 0
    curNode.next = new ListNode(_sum % 10)
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
    curNode = curNode.next
  }
  carry && (curNode.next = new ListNode(1))
  return res.next || res
}

module.exports = addTwoNumbers
