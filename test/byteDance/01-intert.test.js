const autoRetry = require('../../src/byteDance/01-intert')

const testFun = autoRetry(foo, 3)

test('autoRelpy', () => {
  console.log(testFun())
  // testFun().then(
  //   (res) => {
  //     console.log('success', res)
  //   },
  //   (error) => {
  //     console.log('error', error)
  //   }
  // )
})

function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('finish')
    }, 1000)
  })
}
