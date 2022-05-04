/**
 * * Find the Winner of the Circular Game
 * https://leetcode-cn.com/problems/find-the-winner-of-the-circular-game/
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  // const friends = new Array(n).fill(0)
  // for (const i in friends) {
  const friends = []
  for (let i = 1; i <= n; i++) {
    friends.push(i)
  }

  let index = 0

  while (friends.length > 1) {
    const length = friends.length
    const step = k % length - 1
    index = (Math.max(0, index) + step) % length
    friends.splice(index, 1)
  }
  return friends[0]
}

module.exports = findTheWinner
