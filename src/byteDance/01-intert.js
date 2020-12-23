/**
 * * 面试-1
 * 封装autoRelpy方法，对执行失败的方法进行指定次数的重试

1、基于promise，实现一个自动重试的方法
// 这是一个标准的Promise化的方法
function foo(param) {
return new Promise((resolve, reject) => {
setTimeout(() => {
try{
JSON.parse('{{'); // 执行到这里会报错
return resolve(param);
} catch (err) {
return reject(err);
}
}, 1000);
})
}
// 使用autoRetry()包裹方法，并给出最大重试次数（执行数=重试次数+1）
func = autoRetry(foo, 3);
func({ a: 1, b: 1 }).then(function (res) {
console.log(res)
}, function (err) {
console.log(err)
})
 */

function foo(param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        // JSON.parse('{{') // 执行到这里会报错
        // return resolve(param)
        return reject(param)
      } catch (err) {
        return reject(err)
      }
    }, 1000)
  })
}

const func = autoRetry(foo, 3)

func({ a: 1, b: 1 }).then(
  function (res) {
    console.log('res', res)
  },
  function (err) {
    console.log('rej', err)
  }
)

// * 实现
function autoRetry(cb, time) {
  let count = 0
  return function () {
    return new Promise((resolve, reject) => {
      function exec() {
        if (count < time) {
          count++
          cb(...arguments).then(
            (res) => {
              resolve(res)
            },
            (rej) => {
              if (count >= time) {
                reject(rej)
              } else {
                console.log('retry: ' + count)
                exec(...arguments)
              }
            }
          )
        } else {
          // reject('超出执行次数')
        }
      }
      return exec(...arguments)
    })
  }
}

module.exports = autoRetry
