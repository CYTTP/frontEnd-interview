Function.prototype.myCall = function (context) {   
  var context = context || window   
  // 给 context 添加⼀个属性   
  // getValue.call(a, 'yck', '24') => a.fn = getValue   
  context.fn = this   // this指向调用者
  // 将 context 后⾯的参数取出来   
  var args = [...arguments].slice(1)  
  // getValue.call(a, 'yck', '24') => a.fn('yck', '24')   
  var result = context.fn(...args)   
  // 删除 fn   
  delete context.fn   
  return result 
}

function s (name) {
  console.log(name)
  console.log(this.value)
}

var a = {
  value: '我是a'
}

s.myCall(a, 'daes')

//function fn () {
//  console.log([...arguments].slice(1))
//}
//fn(1,3,{wa:12})
