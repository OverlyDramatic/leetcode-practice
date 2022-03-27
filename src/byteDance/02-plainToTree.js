const plain = [
  {
    id: '0',
  },
  {
    id: '1',
    pid: '0',
  },
  {
    id: '2',
    pid: '0',
  },
  {
    id: '3',
    pid: '1',
  },
  {
    id: '4',
    pid: '2',
  },
  {
    id: '5',
    pid: '1',
  },
  {
    id: '6',
    pid: '2',
  },
]

let count = 0

const result = plainToTree(plain)


function plainToTree(array, pid) {
  if (!array || !array.length) return []
  // * 找到根元素 id === 0
  let root = null
  if (pid === undefined) {
    // * 找根元素
    for (let i in array) {
      if (array[i].id === '0') {
        const _root = Object.assign({}, array[i])
        array.splice(i, 1)
        root = Object.assign({ children: plainToTree(array, _root.id) }, _root)
        count++
        break
      }
    }
  } else {
    root = []
    // * 寻找children
    let i = 0
    while (count < array.length) {
      const _cur = Object.assign({}, array[i])
      if (_cur.pid === pid) {
        array.splice(i, 1)
        root.push(Object.assign({ children: plainToTree(array, _cur.id) }, _cur))
        count++
      } else {
        i++
      }
    }
  }
  return root
}
