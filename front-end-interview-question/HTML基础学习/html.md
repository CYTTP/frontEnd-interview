# HTML

## HTML5语义化
什么是语义化？就是用合理、正确的标签来展示内容，比如h1~h6定义标题。
#### 好处
* 易于用户阅读，样式丢失的时候能让页面呈现清晰的结构。
* 有利于SEO，搜索引擎根据标签来确定上下文和各个关键字的权重。
* 方便其他设备解析，如盲人阅读器根据语义渲染网页
* 有利于开发和维护，语义化更具可读性，代码更好维护，与CSS3关系更和谐。

## viewport
Viewport ：字面意思为视图窗口，在移动web开发中使用。表示将设备浏览器宽度虚拟成一个特定的值（或计算得出），这样利于移动web站点跨设备显示效果基本一致。移动版的 Safari 浏览器最新引进了 viewport 这个 meta tag，让网页开发者来控制 viewport 的大小和缩放，其他手机浏览器也基本支持。

在移动端浏览器当中，存在着两种视口，一种是可见视口（也就是我们说的设备大小），另一种是视窗视口（网页的宽度是多少）。
举个例子：如果我们的屏幕是320像素 * 480像素的大小（iPhone4），假设在浏览器中，320像素的屏幕宽度能够展示980像素宽度的内容。那么320像素的宽度就是可见视口的宽度，而能够显示的980像素的宽度就是视窗视口的宽度。

为了显示更多的内容，大多数的浏览器会把自己的视窗视口扩大，简易的理解，就是让原本320像素的屏幕宽度能够容下980像素甚至更宽的内容（将网页等比例缩小）。

### Viewport属性值

* width	设置layout viewport 的宽度，为一个正整数，或字符串"width-device"。device-width 指的是设备的物理宽度，width是页面宽度。
* initial-scale	设置页面的初始缩放值，为一个数字，可以带小数
* minimum-scale	允许用户的最小缩放值，为一个数字，可以带小数
* maximum-scale	允许用户的最大缩放值，为一个数字，可以带小数
* height	设置layout viewport 的高度，这个属性对我们并不重要，很少使用
* user-scalable	是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes代表允许这些属性可以同时使用，也可以单独使用或混合使用，多个属性同时使用时用逗号隔开就行了。


## img中的alt和元素的title属性作用
* img的alt属性<br>
如果无法显示图像，浏览器将显示alt指定的内容
* 元素title属性<br>
在鼠标移到元素上时显示title的内容



## href和src区别
* href <br>
href标识超文本引用，用在link和a等元素上，href是引用和页面关联，是在当前元素和引用资源之间建立联系<br>
若在文档中添加href ，浏览器会识别该文档为 CSS 文件，就会并行下载资源并且不会停止对当前文档的处理。这也是为什么建议使用 link 方式加载 CSS，而不是使用 @import 方式。
* src <br>
src表示引用资源，替换当前元素，用在img，script，iframe上，src是页面内容不可缺少的一部分。<br>
当浏览器解析到src ，会暂停其他资源的下载和处理（图片不会暂停其他资源下载和处理），直到将该资源加载、编译、执行完毕，图片和框架等也如此，类似于将所指向资源应用到当前内容。这也是为什么建议把 js 脚本放在底部而不是头部的原因。




## doctype有什么用
doctype是一种标准通用标记语言的文档类型声明，目的是告诉标准通用标记语言解析器要使用什么样的文档类型定义（DTD）来解析文档。

<!DOCTYPE>声明是用来指示web浏览器关于页面使用哪个HTML版本进行编写的指令。

<!DOCTYPE>声明必须是HTML文档的第一行，位于html标签之前。

浏览器本身分为两种模式，一种是标准模式，一种是怪异模式。

浏览器通过doctype来区分这两种模式，doctype在html中的作用就是触发浏览器的标准模式，如果html中省略了doctype，浏览器就会进入到Quirks模式的怪异状态。

在这种模式下，有些样式会和标准模式存在差异。

而html标准和dom标准值规定了标准模式下的行为，没有对怪异模式做出规定，因此不同浏览器在怪异模式下的处理也是不同的，所以一定要在html开头使用doctype。




## 行内元素和块级元素有哪些
### 行内元素
一个行内元素只占据它对应标签的边框所包含的空间<br>
一般情况下，行内元素只能包含数据和其他行内元素
```
b, big, i, small, tt
abbr, acronym, cite, code, dfn, em, kbd, strong, samp, var
a, bdo, br, img, map, object, q, script, span, sub, sup
button, input, label, select, textarea
```
### 块级元素
占据一整行，高度、行高、内边距和外边距都可以改变，可以容纳块级标签和其他行内标签<br>
```
header,form,ul,ol,table,article,div,hr,aside,figure,canvas,video,audio,footer
```



## 行内元素、块级元素区别
行内元素：和其他元素都在一行上，高度、行高及外边距和内边距都不可改变（边距上下方向不可改变，左右方向可以改变），文字图片的宽度不可改变，只能容纳文本或者其他行内元素；其中img是行元素

块级元素：总是在新行上开始，高度、行高及外边距和内边距都可控制，可以容纳内敛元素和其他元素；行元素转换为块级元素方式：display：block；



## iframe框架有那些优缺点
#### 优点：

* iframe能够原封不动的把嵌入的网页展现出来。
* 如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷。
* 网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用。
* 如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决。
#### 缺点：

* 搜索引擎的爬虫程序无法解读这种页面
* 框架结构中出现各种滚动条
* 使用框架结构时，保证设置正确的导航链接。
* iframe页面会增加服务器的http请求



## label标签有什么作用
`label` 标签通常是写在表单内，它关联一个控件，使用 `label` 可以实现点击文字选取对应的控件。
```html
<input type="checkbox" id="test">
<label for="test" >test</label>
```




## HTML5的form如何关闭自动完成功能
将不想要自动完成的 `form` 或 `input` 设置为 `autocomplete=off`



## DOM和BOM有什么区别
### DOM

Document Object Model，文档对象模型

DOM 是为了操作文档出现的 API，document 是其的一个对象

DOM和文档有关，这里的文档指的是网页，也就是html文档。DOM和浏览器无关，他关注的是网页本身的内容。

### BOM

Browser Object Model，浏览器对象模型

BOM 是为了操作浏览器出现的 API，window 是其的一个对象

window 对象既为 javascript 访问浏览器提供API，同时在 ECMAScript 中充当 Global 对象

