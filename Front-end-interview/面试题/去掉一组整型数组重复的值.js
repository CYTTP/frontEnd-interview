// 比如输入: [1,13,24,11,11,14,1,2] 
// 输出: [1,13,24,11,14,2]
// 需要去掉重复的11 和 1 这两个元素。

var arr =  [1,13,24,11,11,14,1,2] 

// 1. es6 去重
// function fn (arr) {
//   return Array.from( new Set(arr)) // es6
// }


// function fn (arr) {
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       // 当前这个和元素后后面一个元素相同时 就删除当前这个元素
//       if (arr[i] == arr[j]) {
//         arr.splice(j, 1)
//         j--
//       }
//     }
//   }
//   return arr
// }

// console.log(fn(arr))

// 打印九九乘法
var str = ''
for (var i = 1; i <= 9; i++ ) {
  for (var j = 1; j <= i; j++ ) {
    str = 'x' + str
  }
  str += '\n'
}
console.log(str)