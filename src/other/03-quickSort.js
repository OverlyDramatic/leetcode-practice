function quickSortRecursion(array) {
  const length = array.length
  if (length < 2) return array
  const index = Math.floor(length / 2)
  const pivot = array[index]
  const less = []
  const greater = []
  for (let i = 0; i < length; i++) {
    if (i === index) continue
    const _cur = array[i]
    if (array[i] <= pivot) {
      less.push(_cur)
    } else {
      greater.push(_cur)
    }
  }
  return [...quickSortRecursion(less), pivot, ...quickSortRecursion(greater)]
}

module.exports = quickSortRecursion
