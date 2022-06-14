/**
 * * Intersection of Two Arrays II
 * https://leetcode.cn/problems/intersection-of-two-arrays-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const table = {}
  const result = []
  for (const num of nums1) {
    if (!table[num]) {
      table[num] = 0
    }
    table[num]++
  }
  for (const num of nums2) {
    if (table[num]) {
      table[num]--
      result.push(num)
    }
  }
  return result
}

module.exports = intersect
