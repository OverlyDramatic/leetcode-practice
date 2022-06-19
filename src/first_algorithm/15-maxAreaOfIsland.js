/**
 * * Max Area of Island
 * https://leetcode.cn/problems/max-area-of-island/
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let answer = 0
  const m = grid.length
  const n = grid[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      answer = Math.max(answer, dfs(i, j))
    }
  }

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] !== 1) {
      return 0
    }
    grid[i][j] = 0
    let ans = 1
    for (const [_i, _j] of [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]) {
      const [curI, curJ] = [i + _i, j + _j]
      ans += dfs(curI, curJ)
    }
    return ans
  }
  return answer
}

module.exports = maxAreaOfIsland
