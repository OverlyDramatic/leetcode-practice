/**
 * * 面试题 10.01. 合并排序的数组 https://leetcode-cn.com/problems/sorted-merge-lcci/
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
function merge(A, m, B, n) {
  A.splice(m, A.length - m)
  let countB = 0
  for (let i = 0; i < A.length; i++) {
    if (B[countB] <= A[i]) {
      A.splice(i, 0, B[countB])
      if(++countB >= n) {
        break
      }
    }
  }
  if (A.length < m + n) {
    A.splice(A.length, 0, ...B.slice(countB))
  }
  return A
}

module.exports = merge
