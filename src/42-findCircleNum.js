/**
 * * Number of Provinces https://leetcode-cn.com/problems/number-of-provinces/
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  // * 深度优先
  const cities = isConnected.length
  const visited = new Set()
  let provinces = 0
  for (let i = 0; i < cities; i++) {
    if (!visited.has(i)) {
      dfs(isConnected, visited, cities, i)
      provinces++
    }
  }
  return provinces
}

function dfs(isConnected, visited, cities, i) {
  for (let j = 0; j < cities; j++) {
    if (isConnected[i][j] === 1 && !visited.has(j)) {
      visited.add(j)
      dfs(isConnected, visited, cities, j)
    }
  }
}

module.exports = findCircleNum
