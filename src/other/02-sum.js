function sum(array) {
  if (!array.length) return 0
  const _curNum = array.shift()
  return _curNum + sum(array)
}

function num(array) {
  if (!array.length) return 0
  array.shift()
  return 1 + num(array)
}

function max(array) {
  if (!array.length) return null
  if (array.length === 1) return array[0]
  const _curNum = array.shift()
  return Math.max(_curNum, max(array))
}

module.exports = {
  sum,
  num,
  max
}
