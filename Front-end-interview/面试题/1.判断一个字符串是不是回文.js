const str = 'manam'  // 这是一个回文字符串

// 使用到三个方法
// 1.split() 方法 把一个字符串转为数组
// 2.reverse() 方法 把一个数组 颠倒过来。  只会改变状态 不会创建新的数组
// 3.join() 方法 把一个数组 转为 字符串

// 创建一个函数
// function fn (v) {
//   return v == v.split('').reverse().join('')
// }

// var s = fn(str)

// console.log(s)  // true


// ————————————————————————————————————————————————————————

// 2.用for循环 方法

function fn (v) {
  var arr = v.split('') // 把字符串转为数组
  var vs = []  // 创建一个空数组用于接收
  for (let i = 0; i < arr.length; i++) {
    vs.unshift(arr[i])
  }
  return v == vs.join('')
}
var s = fn(str)
console.log(s)