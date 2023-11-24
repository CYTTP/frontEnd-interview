//method: 请求方式
//url: 请求地址、
// 默认为true
// success 成功回调函数
// error 错误回调函数

function objs (v) {
  v.t = Math.random()
  var arr = []
  for ( key in v) {
    arr.push((key + '=' + v[key])) // name = 123
  }
  return arr.join('&')
}

function ajax (mehtod, url, obj,success, error) {
  var xmlHttp
  var str = objs(obj)
  if (window.XMLHttpRequest) {
    // ie 8以上
    xmlHttp = new XMLHttpRequest()
  } else {
    // ie6 一下创建
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP")
  }
  // 请求格式
  xmlHttp.open(mehtod, url+ '?' + str, true)

  // 发送请求
  xmlHttp.send()

  // 请求
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4) {
      if (xmlHttp.status >= 200 && xmlHttp.status < 300) {
        success(xmlHttp)
      } else {
        error(xmlHttp)
      }
    }
  }
}