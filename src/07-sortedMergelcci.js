/**
 * * 面试题 10.01. 合并排序的数组 https://leetcode-cn.com/problems/sorted-merge-lcci/
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
function merge(A, m, B, n) {
  // * 解法1
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
  // * 解法2
  // let i = 0
  // while (n) {
  //   A[m++] = B[i++]
  //   n--
  // }
  // A.sort((a, b) => a - b)
  // return A
  // * 解法3
  // A.splice(m, n, ...B)
  // return A.sort((a, b) => a - b)
}

module.exports = merge
