(function flexible(window, document) {//首先是一个立即执行函数，执行的时候传入参数window,document
    var docEl = document.documentElement //返回文档的root元素，即根元素html
    var dpr = window.devicePixelRatio || 1 //获取设备的dpr，即当前设置下物理像素与虚拟像素的比值


    //调整body标签的fontSize
    //设置默认字体的大小，默认字体的大小继承自body
    function setBodyFontSize() {
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else {
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    //设置 1rem = viewWidth / 10
    function setRemUnit() {
        var rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit();

    //在页面resize或者pageshow重新设置rem
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {//某些浏览器，重新展示页面时，走的是页面展示缓存
            setRemUnit();
        }
    })

    //检测0.5px的支持，支持则root元素的class有hairlines
    //解决1px在高清屏多像素问题
    if (dpr >= 2) {
        var fakeBody = document.createElement('doby');
        var testElement = document.createElement('div');
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement);
        docEl.appendChild(fakeBody);
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))