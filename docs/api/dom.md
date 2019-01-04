---
sidebar: auto
---

# API 参考

## 选择器

### $()
> 获取节点 ;

* <font size="3">**参数：**</font>

  - `el:string`

    + ` #id : id选择器`
    + ` .class : class选择器`
    + ` element : 标签选择器`

    + ` :first : 第一个元素`
    + ` :last : 最后一个元素`
    + ` :even : 偶数元素`
    + ` :odd : 奇数元素`
    + ` :eq(index) : 获取某个具体元素`
    + ` :gt(index) : 获取大于某个索引的所有元素`
    + ` :lt(index) : 获取小于某个索引值的所有元素`
    + ` :empty : 获取非空的元素`
    + ` :hidden : 获取隐藏的元素`
    + ` :visible : 获取可见元素`
    + ` :hide : 获取不显示元素`
    + ` :show : 获取显示元素`
    + ` [attribute=value] : 获取某个属性值为某值的元素`
    + ` [attribute!=value] : 获取某个属性值不为某值的元素`
    + ` :text :获取所有text类型的input元素`
    + ` :password :获取所有password类型的input元素`
    + ` :redio :获取所有redio类型的input元素`
    + ` :checkbox :获取所有checkbox类型的input元素`
    + ` :submit :获取所有submit类型的input元素`
    + ` :reset :获取所有reset类型的input元素`
    + ` :button :获取所有button类型的input元素`
    + ` :image :获取所有image类型的input元素`
    + ` :file :获取所有file类型的input元素`
    + ` :enabled :获取enabled为true的input元素`
    + ` :disabled :获取disabled为true的input元素`
    + ` :selected :获取selected为true的input元素`
    + ` :checked :获取checked为true的input元素`
 

* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
```javascript
    //demo:
    $("#lastname")
    $(".intro")
    $("#app div")
    $("p:first")
    $("p:last")
    $("tr:even")
    $("tr:odd")
    $("ul li:eq(3)")
    $("ul li:gt(3)")
    $("ul li:lt(3)")
    $(":empty")
    $("p:hidden")
    $("table:visible")
    $("[class='aa']")
    $("[class!='aa']")

    $("input:text")
    $("input:password")
    $("input:radio")
    $("input:checkbox")
    $("input:submit")
    $("input:reset")
    $("input:button")
    $("input:image")
    $("input:enabled")
    $("input:disabled")
    $("input:selected")
    $("input:checked")
```

## 事件

### bind()
> 绑定可以移除的事件
* <font size="3">**参数：**</font>

  - `types:string`
  - `data:any(不包含函数) （可选）`
  - `cb:funtion`

* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 第二个参数data为选填项，其值为传入函数的数据

```javascript
    //demo:
    
    $("#aa").bind("click",{name:"lisi"},(e)=>{
      console.log(e.target)
    }) 
    
```

### unbind()
> 移除bind绑定的事件
* <font size="3">**参数：**</font>

  - `types:string`
  - `cb:funtion`

* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  
```javascript
    //demo:
    var cb=(e)=>{
      console.log(e.target)
    }
    //绑定
    $("#aa").bind("click",{name:"lisi"},cb) 
    //移除
    $("#aa").unbind("click",cb) 
    
```


### on()
> 在被选元素及子元素上添加一个事件处理程序，适用于当前及未来的元素
* <font size="3">**参数：**</font>

  - `types:string`
  - `data:any(不包含函数) （可选）`
  - `cb:funtion`

* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 第二个参数data为选填项，其值为传入函数的数据

```javascript
    //demo:
    
    $("#aa").one("click",{name:"lisi"},(e)=>{
      console.log(e.target)
    }) 
    
```

### one()
> 向被选元素添加一个事件处理程序。该处理程序只能被每个元素触发一次
* <font size="3">**参数：**</font>

  - `types:string`
  - `selector:string （可选）`
  - `data:any(不包含函数) （可选）`
  - `cb:funtion`

* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 如果第二个参数seletor不存在，则使用的是事件代理，给所有的子元素添加事件；
  - 如果第二个参数存在，则只能添加到指定的当前元素子元素上的事件处理程序，包括后续增加的元素

```javascript
    //demo:
    var cb=(e)=>{
      console.log(e.target)
    }
    //绑定
    $("ul").on("click","#aa .aa",{name:"lisi"},cb) 
    
```
### toggleFn()
> 要切换的两个或多个函数
* <font size="3">**参数：**</font>

  - `fn1:funtion`
  - `fn2:funtion`

* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - fn1,fn2为相互切换函数
  - 事件为click事件

```javascript
    //demo:
    //绑定
    $("ul").toggleFn(function(){
      console.log("状态一")
    },function(){
       console.log("状态二")
    }) 
    
```
### click()
> 点击事件
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $("ul").click(function(e){
      console.log(e.target)
    }) 
```
### blur()
> 失去焦点事件
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $("input").blur(function(e){
      console.log(e.target)
    }) 
```
### change()
> input内容改变事件
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $("input").change(function(e){
      console.log(e.target)
    }) 
```
### focus()
> input内容改变事件
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $("input").focus(function(e){
      console.log(e.target)
    }) 
```
### keydown()
> 键盘按下事件
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $("input").keydown(function(e){
      console.log(e.target)
    }) 
```


### keyup()
> 键盘抬起事件
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $("input").keyup(function(e){
      console.log(e.target)
    }) 
```
### mousedown()
> 当鼠标指针移动到元素上方，并按下鼠标左键时，会发生 mousedown 事件
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $("input").mousedown(function(e){
      console.log(e.target)
    }) 
```
### mouseenter()
> 当鼠标指针穿过（进入）被选元素时，会发生 mouseenter 事件，与 mouseover 事件不同，mouseenter 事件只有在鼠标指针进入被选元素时被触发，mouseover 事件在鼠标指针进入任意子元素时也会被触发。
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $(".app").mousedown(function(e){
      console.log(e.target)
    }) 
```
### mouseleave()
> 当鼠标指针离开被选元素时，会发生 mouseleave 事件。与 mouseout 事件不同，mouseleave 事件只有在鼠标指针离开被选元素时被触发，mouseout 事件在鼠标指针离开任意子元素时也会被触发
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $(".app").mouseleave(function(e){
      console.log(e.target)
    }) 
```
### mousemove()
> 当鼠标指针在指定的元素中移动时，就会发生 mousemove 事件。
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $(".app").mousemove(function(e){
      console.log(e.target)
    }) 
```
### mouseout()
> 当鼠标指针离开被选元素时，会发生 mouseout 事件。。
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $("input").mouseout(function(e){
      console.log(e.target)
    }) 
```
### mouseover()
> 当鼠标指针位于元素上方时，会发生 mouseover 事件。在鼠标指针进入被选元素或任意子元素时都会被触发;
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $("input").mouseover(function(e){
      console.log(e.target)
    }) 
```
### mouseup()
> 当鼠标指针移动到元素上方，并松开鼠标左键时，会发生 mouseup 事件。
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $("input").mouseup(function(e){
      console.log(e.target)
    }) 
```


### resize()
> 当调整浏览器窗口大小时，发生 resize 事件。
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $("body").resize(function(e){
      console.log(e.target)
    }) 
```
### scroll()
> 当用户滚动指定的元素时，会发生 scroll 事件。
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $("input").scroll(function(e){
      console.log(e.target)
    }) 
```

### tap()
> 移动端点击事件，相当于click
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $("input").tap(function(e){
      console.log(e.target)
    }) 
```
### longtap()
> 移动端长按事件，时间间隔为300ms
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $("input").longtap(function(e){
      console.log(e.target)
    }) 
```
### moveLeft()
> 移动端左滑事件，距离为为25px
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $("input").moveLeft(function(e){
      console.log(e.target)
    }) 
```

### moveRight()
> 移动端左滑事件，距离为为25px
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $("input").moveRight(function(e){
      console.log(e.target)
    }) 
```
### moveTop()
> 移动端左滑事件，距离为为25px
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $("input").moveTop(function(e){
      console.log(e.target)
    }) 
```

### moveBottom()
> 移动端左滑事件，距离为为25px
* <font size="3">**参数：**</font>
  - `cb:funtion`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
  - 回调函数会自动注入event事件对象

```javascript
    //demo:
    $("input").moveBottom(function(e){
      console.log(e.target)
    }) 
```

## 效果

### show()
> 元素显示

* <font size="3">**参数：无**</font>

* <font size="3">**返回值：DOM对象**</font>

* <font size="3">**用法：**</font>
  
```javascript
    //demo
  
    $("p").show() 
   
```
### hide()
> 元素显示

* <font size="3">**参数：无**</font>

* <font size="3">**返回值：DOM对象**</font>

* <font size="3">**用法：**</font>
  
```javascript
    //demo
  
    $("p").hide() 
   
```
### visible()
> 元素可见

* <font size="3">**参数：无**</font>

* <font size="3">**返回值：DOM对象**</font>

* <font size="3">**用法：**</font>
  
```javascript
    //demo
  
    $("p").visible() 
   
```
### hidden()
> 元素隐藏

* <font size="3">**参数：无**</font>

* <font size="3">**返回值：DOM对象**</font>

* <font size="3">**用法：**</font>
  
```javascript
    //demo
  
    $("p").hidden() 
   
```
### toggle()
> 元素隐藏与切换交替 

* <font size="3">**参数：无**</font>

* <font size="3">**返回值：DOM对象**</font>

* <font size="3">**用法：**</font>
  
```javascript
    //demo
  
    $("p").toggle() 
   
```

## HTML文档方法


### addClass()
> 向匹配的元素添加指定的类名
* <font size="3">**参数：**</font>
  - `arg:string`
* <font size="3">**返回值：DOM实例对象**</font>

* <font size="3">**用法：**</font>
 
```javascript
    //demo:
    $("#app").addClass("active") 
    
```

### hasClass()
> 检查匹配的元素是否拥有指定的类。
* <font size="3">**参数：**</font>
  - `arg:string`
* <font size="3">**返回值：Boolen | Array**</font>

* <font size="3">**用法：**</font>
  - 如果一个元素，返回值true/false
  - 如果多个元素，返回值为匹配此类名的元素
```javascript
    //demo:
    $("#app").addClass("active") 
    //返回值:true
    $("li").addClass("active") 
    //返回值：[]
```
### removeClass()
> 从所有匹配的元素中删除全部或者指定的类。
* <font size="3">**参数：**</font>
  - `arg:string`
* <font size="3">**返回值：DOM对象**</font>

* <font size="3">**用法：**</font>
  - 如果一个元素，返回值true/false
  - 如果多个元素，返回值为匹配此类名的元素
```javascript
    //demo:
    $("#app").addClass("active") 
    //返回值:true
    $("li").addClass("active") 
    //返回值：[]
```

### getClass()
> 检查匹配的元素的class属性值
* <font size="3">**参数：**</font>
  - `arg:string`
* <font size="3">**返回值：string | Array[string]**</font>

* <font size="3">**用法：**</font>
  - 如果一个元素，返回值string
  - 如果多个元素，返回值为class类名的数组
```javascript
    //demo:
    $("#app").getClass() 
    //返回值:"active"
    $("li").getClass() 
    //返回值：[]
```
### replaceClass()
> 替换匹配的元素的class属性值
* <font size="3">**参数：**</font>
  - `newClass:string`
  - `oldClass:string`
* <font size="3">**返回值：DOM对象**</font>

* <font size="3">**用法：**</font>
  - 第一个参数为新的class类名
  - 第二个参数为原class类名
```javascript
    //demo:
    $("#app").replaceClass("hide","show) 
   
```
### toggleClass()
> 切换匹配的元素的class属性值
* <font size="3">**参数：**</font>
  - `arg:string`

* <font size="3">**返回值：DOM对象**</font>

* <font size="3">**用法：**</font>
  - 如果匹配元素具备此类名，则删除
  - 如果匹配元素不具备此类名，则添加
```javascript
    //demo:
    $("#app").toggleClass("hide") 
   
```
### after()
> 在匹配的元素之后插入内容。在匹配元素之外插入
* <font size="3">**参数：**</font>
  - `arg:string|elements`

* <font size="3">**返回值：DOM对象**</font>

* <font size="3">**用法：**</font>
  - 传入的值可以为字符串节点或dom节点
  - 在匹配元素之外插入，不会在匹配元素内部
```javascript
    //demo:
    $("#app").after("<div>你好</div>") 
   
```
### before()
> 在匹配的元素之前插入内容。在匹配元素之外插入
* <font size="3">**参数：**</font>
  - `arg:string|elements`

* <font size="3">**返回值：DOM对象**</font>

* <font size="3">**用法：**</font>
  - 传入的值可以为字符串节点或dom节点
  - 在匹配元素之外插入，不会在匹配元素内部
```javascript
    //demo:
    $("#app").before("<div>你好</div>") 
   
```
### append()
> 在匹配的元素之后插入内容。在匹配元素内部插入
* <font size="3">**参数：**</font>
  - `arg:string|elements`

* <font size="3">**返回值：DOM对象**</font>

* <font size="3">**用法：**</font>
  - 传入的值可以为字符串节点或dom节点
  - 在匹配元素内部插入
```javascript
    //demo:
    $("#app").append("<div>你好</div>") 
   
```
### prepend()
> 在匹配的元素之前插入内容。在匹配元素内部插入
* <font size="3">**参数：**</font>
  - `arg:string|elements`

* <font size="3">**返回值：DOM对象**</font>

* <font size="3">**用法：**</font>
  - 传入的值可以为字符串节点或dom节点
  - 在匹配元素内部插入
```javascript
    //demo:
    $("#app").prepend("<div>你好</div>") 
   
```
### empty()
> 清空匹配的元素的内容
* <font size="3">**参数：**</font>
  - `arg:无`

* <font size="3">**返回值：DOM对象**</font>

* <font size="3">**用法：**</font>

```javascript
    //demo:
    $("#app").empty() 
   
```
### remove()
> 删除匹配的元素本身
* <font size="3">**参数：**</font>
  - `arg:无`

* <font size="3">**返回值：DOM对象**</font>

* <font size="3">**用法：**</font>

```javascript
    //demo:
    $("#app").remove() 
   
```
### clone()
> 克隆复制匹配的元素
* <font size="3">**参数：**</font>
  - `arg:无`

* <font size="3">**返回值：elements | Array[elements]**</font>

* <font size="3">**用法：**</font>

```javascript
    //demo:
    $("#app").clone("hide") 
   
```
### attr()
> 设置获取匹配的元素的属性值
* <font size="3">**参数：**</font>
  - `attr:string | 无`
  - `val:string | 无`

* <font size="3">**返回值：DOM对象 | string | Array[object] | Array[string] |Array[Array[object]]**</font>

* <font size="3">**用法：**</font>
  - 如果第一个参数和第二参数都为字符串，则给匹配元素设置属性，返回DOM对象
  - 如果第一个参数为字符串，第二个参数为undefind，则给匹配元素获取对应的属性，返回string或者Array[string]
  - 如果第一个参数和第二个参数都为undefind，则给匹配元素获取所有的属性，返回Array[Array[object]]或者Array[object]

```javascript
    //demo:
    $("#app").attr("class","hide") 
   
```
### removeAttr()
> 删除匹配的元素的属性
* <font size="3">**参数：**</font>
  - `arg:string`

* <font size="3">**返回值：DOM对象**</font>

* <font size="3">**用法：**</font>

```javascript
    //demo:
    $("#app").removeAttr("class") 
   
```

### html()
> 设置&获取html
* <font size="3">**参数：**</font>

  - `arg:string | 无`

* <font size="3">**返回值：string | Array[string] | DOM对象**</font>

* <font size="3">**用法：**</font>
  - 如果传入参数时，设置html内容，返回的整个DOM集合；
  - 如果未传入参数，且当前DOM实例为DOM集合，返回的整个DOM集合的html，返回值为数组
  - 如果未传入参数，且当前DOM实例为单一DOM对象，返回的是单一dom的html，返回值为字符串
```javascript
    //demo:
    //设置
    
    $("p").html("测试") 

    //获取
    $("p").html()

    $("p").eq(2).html()
   
```
### text()
> 设置&获取文本内容

* <font size="3">**参数：**</font>

  - `arg:string | 无`

* <font size="3">**返回值：string | Array[string] | DOM对象**</font>

* <font size="3">**用法：**</font>
  - 如果传入参数时，设置text内容，返回的整个DOM集合；
  - 如果未传入参数，且当前DOM实例为DOM集合，返回的整个DOM集合的text，返回值为数组
  - 如果未传入参数，且当前DOM实例为单一DOM对象，返回的是单一dom的text，返回值为字符串
```javascript
    //demo:
    //设置
    
    $("p").text("测试") 

    //获取
    $("p").text()

    $("p").eq(2).text()
   
```


### val()
> 设置&获取input的内容

* <font size="3">**参数：**</font>

  - `arg:string | 无`

* <font size="3">**返回值：string | Array[string] | DOM对象**</font>

* <font size="3">**用法：**</font>
  - 如果传入参数时，设置内容，返回的整个DOM集合；
  - 如果未传入参数，且当前DOM实例为DOM集合，返回的整个DOM集合的text，返回值为数组
  - 如果未传入参数，且当前DOM实例为单一DOM对象，返回的是单一dom的text，返回值为字符串
```javascript
    //demo:
    //设置
    
    $("p").val("测试") 

    //获取
    $("p").val()

    $("p").eq(2).val()
   
```

### wrap()
> 把匹配的元素用指定的内容或元素包裹起来。

* <font size="3">**参数：**</font>

  - `arg:string`

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>
  - 如果传入参数时，必须传入字符串dom，如"<div></div>"；
  
```javascript
    //demo:
    $("p").wrap("<div></div>") 

```


## css操作

### css()
> 设置&获取css
* <font size="3">**参数：**</font>

  - `arg:string`

* <font size="3">**返回值：string | Array[string] | DOM对象**</font>

* <font size="3">**用法：**</font>
  - 如果传入参数时，设置样式，返回的整个DOM集合；
  - 如果未传入参数，且当前DOM实例为DOM集合，返回的整个DOM集合的样式，返回值为数组
  - 如果未传入参数，且当前DOM实例为单一DOM对象，返回的是单一dom的样式，返回值为字符串
```javascript
    //demo:
    //设置

    $("p").css("background:red") 

    //获取
    $("p").css()

    $("p").eq(2).css()
   
```

### height()
> 设置&获取高度
* <font size="3">**参数：**</font>

  - `arg:string`

* <font size="3">**返回值：string | Array[string] | DOM对象**</font>

* <font size="3">**用法：**</font>
  - 如果传入参数时，设置高度，返回的整个DOM集合；
  - 如果未传入参数，且当前DOM实例为DOM集合，返回的整个DOM集合的高度，返回值为数组
  - 如果未传入参数，且当前DOM实例为单一DOM对象，返回的是单一dom的高度，返回值为字符串
```javascript
    //demo:
    //设置

    $("p").height("100px") 
    $("p").height("100")

    //获取
    $("p").height()
   
```

### width()
> 设置&获取高度
* <font size="3">**参数：**</font>

  - `arg:string`

* <font size="3">**返回值：string | Array[string] | DOM对象**</font>

* <font size="3">**用法：**</font>
  - 如果传入参数时，设置高度，返回的整个DOM集合；
  - 如果未传入参数，且当前DOM实例为DOM集合，返回的整个DOM集合的高度，返回值为数组
  - 如果未传入参数，且当前DOM实例为单一DOM对象，返回的是单一dom的高度，返回值为字符串
```javascript
    //demo:
    //设置

    $("p").width("100px") 
    $("p").width("100")

    //获取
    $("p").width()
   
```
### offset()
> 设置&获取元素的偏移量，针对定位的元素
* <font size="3">**参数：**</font>

  - `arg:object`

* <font size="3">**返回值：object | Array[object] | DOM对象**</font>

* <font size="3">**用法：**</font>
  - 如果传入参数时，设置元素偏移量，返回的整个DOM集合；
  - 如果未传入参数，且当前DOM实例为DOM集合，返回的整个DOM集合的偏移量，返回值为数组
  - 如果未传入参数，且当前DOM实例为单一DOM对象，返回的是单一dom的偏移量，返回值为对象
```javascript
    //demo:
    //设置

    $("p").offset({top:"100px",left:"100px"}) 
  
    //获取
    $("p").offset()
   
```
### offsetParent()
> 返回最近的祖先定位元素
* <font size="3">**参数：无**</font>

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>
  - 返回最近的祖先定位元素，可能为dom元素或者dom元素集合

```javascript
    //demo:
    //获取
    $("p").offsetParent() 
   
```

## dom遍历操作

### add()
> 方法元素添加到匹配元素的集合中。
* <font size="3">**参数：**</font>

  - `arg:string | Dom | $(dom)`

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>
  - 传入参数为选择器字符串；
  - 传入参数为jsDom；
  - 传入参数为$(dom)；
 
```javascript
    //demo:

    $("p").add(".a").css("background:red") 
   
```

### children()
> 获得匹配元素集合中每个元素的所有子元素。
* <font size="3">**参数：无**</font>

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>
 
```javascript
    //demo:

    $("p").children() 
   
```
### siblings()
> 获得匹配元素集合中所有元素的同辈元素，由选择器筛选（可选）。（同标签的兄弟元素）
* <font size="3">**参数：**</font>

  - `arg:string | 无`

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>
  - 如果参数为选择器字符串，则从同辈元素中选取与选择器匹配且与当前元素同类标签的元素
```javascript
    //demo:

    $("p").siblings() 
   
```
### find()
> 获得当前匹配元素集合中每个元素的后代，由选择器进行筛选。
* <font size="3">**参数：**</font>

  - `arg:string | 无`

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>
   - 如果参数为选择器字符串，从所有的子元素中选取与选择器相匹配的元素
```javascript
    //demo:

    $("p").find(".aa") 
   
```
### parent()
> 获得当前匹配元素集合中每个元素的父元素
* <font size="3">**参数：无**</font>

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>
   - 只匹配临近的一个父元素
```javascript
    //demo:

    $("p").parent() 
   
```
### parents()
> 获得当前匹配元素集合中每个元素的所有父元素，直到document
* <font size="3">**参数：无**</font>

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>
   - 匹配每个元素的所有父元素，直到document
```javascript
    //demo:

    $("p").parents() 
   
```
### each()
> 为匹配到的每一个元素对象进行迭代，为每个匹配元素执行函数
* <font size="3">**参数：**</font>

  - `arg: function`

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>
   - 在为每一个匹配元素执行函数的时候，会自动注入到函数内部三个参数：
    + item：第一个参数为每个匹配元素
    + index:为每个元素在集合中的索引；
    + arr：为原对象集合
```javascript
    //demo:

    $("p").each(function(item,index,arr){
          console.log(item,index,arr)
    }) 
   
```

### filter()
> 为匹配到的每一个元素对象进行迭代，为每个匹配元素执行函数,返回过滤后的dom集合
* <font size="3">**参数：**</font>

  - `arg: function`

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>
   - 在为每一个匹配元素执行函数的时候，会自动注入到函数内部三个参数：
    + item：第一个参数为每个匹配元素
    + index:为每个元素在集合中的索引；
    + arr：为原对象集合
```javascript
    //demo:

    $("p").filter(function(item,index,arr){
      if(index>2){
        return true
      }else{
        return false
      }
    }) 
   
```
### map()
> 为匹配到的每一个元素对象进行迭代，为每个匹配元素执行函数,返回处理后的dom集合
* <font size="3">**参数：**</font>

  - `arg: function`

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>
   - 在为每一个匹配元素执行函数的时候，会自动注入到函数内部三个参数：
    + item：第一个参数为每个匹配元素
    + index:为每个元素在集合中的索引；
    + arr：为原对象集合
```javascript
    //demo:

    $("p").map(function(item,index,arr){
        return item.getElementsTagName("i")[0]
    }) 
   
```
### slice()
> 截取匹配dom集处理后新的dom集合
* <font size="3">**参数：**</font>

  - `startIndex: number`
  - `endIndex: number`

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>

```javascript
    //demo:

    $("p").slice(1,3) 
   
```

### first()
> 截取匹配dom集合中的第一个元素
* <font size="3">**参数：无**</font>

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>

```javascript
    //demo:
    $("p").first() 
```

### last()
> 截取匹配dom集合中的最后一个元素
* <font size="3">**参数：无**</font>

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>

```javascript
    //demo:
    $("p").last() 
```
### end()
> 结束当前链中最近的一次筛选操作，并将匹配元素集合返回到前一次的状态。
* <font size="3">**参数：无**</font>

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>

```javascript
    //demo:
    $("p").find("span").end().css("border", "2px red solid");
```
### is()
> 根据选择器检查当前匹配元素集合，如果存在至少一个匹配元素，则返回 true
* <font size="3">**参数：无**</font>

* <font size="3">**返回值： Boolen**</font>

* <font size="3">**用法：**</font>

```javascript
    //demo:
    $("p").is();
```
### prev()
> 获得匹配元素集合中每个元素紧邻的前一个同辈元素。
* <font size="3">**参数：无**</font>

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>

```javascript
    //demo:
    $("p").prev();
```
### prevAll()
> 获得匹配元素集合中每个元素之前的所有同辈元素。
* <font size="3">**参数：无**</font>

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>

```javascript
    //demo:
    $("p").prevAll();
```
### next()
> 获得匹配元素集合中每个元素紧邻的下一个同辈元素。
* <font size="3">**参数：无**</font>

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>

```javascript
    //demo:
    $("p").prevAll();
```
### nextAll()
> 获得匹配元素集合中每个元素之后的所有同辈元素。
* <font size="3">**参数：无**</font>

* <font size="3">**返回值： DOM对象**</font>

* <font size="3">**用法：**</font>

```javascript
    //demo:
    $("p").prevAll();
```
### eq()
> 根据索引查找匹配集合中的某个元素，
> 根据某个元素得出其在父元素中的某个索引
* <font size="3">**参数：无**</font>
  - options:number | 无

* <font size="3">**返回值： DOM对象 | number**</font>

* <font size="3">**用法：**</font>

```javascript
    //demo:
    $("p").eq();
    $("p").eq(2);
```

### size()
> 返回匹配元素的个数；
* <font size="3">**参数：无**</font>

* <font size="3">**返回值：number**</font>

* <font size="3">**用法：**</font>

```javascript
    //demo:
    $("p").size();
```
### siblings()
> 获得匹配元素集合中所有元素的同辈元素；
* <font size="3">**参数：无**</font>

* <font size="3">**返回值：DOM对象**</font>

* <font size="3">**用法：**</font>

```javascript
    //demo:
    $("p").siblings();
```

## ajax操作

### $.ajax()
> 使用 HTTP ajax 请求从服务器加载数据。
* <font size="3">**参数：**</font>

  - `arg:object`
    + `url:地址`
    + `type:方式(get/post)`
    + `data:请求数据`

* <font size="3">**返回值：Promise**</font>

* <font size="3">**用法：**</font>
  - 传入对象的url属性代表请求地址；type参数为请求类型get或post；  data为请求参数；
  - 返回值为promise；
  - 通过.then方法可以获取到ajax响应 回来的数据
 
```javascript
    //demo:
    $.ajax({
      url:"http://www.baidu.com/api",
      type:"get",
      data:{
        id:1
      }
    }).then((data)=>{
      console.log(data)
    })
   
```

## dom操作相关插件

### loadImg()
> 实现图片的懒加载
* <font size="3">**参数：**</font>

  - `className：string (选填)` 
  - `num ：number (选填)` 

* <font size="3">**返回值：DOM集合**</font>

* <font size="3">**用法：**</font>
  - 第一个参数选填项：距离多少的时候开始加载 默认 0 
  - 第二个参数选填项：图片加载失败时的图片地址
 
```html
    //demo:
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <p><img data-src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544592542075&di=fddca16834bc33b587a2bf2b8a166970&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F5bafa40f4bfbfbed5572eb3875f0f736afc31f4a.jpg"
                class="load-img" width='528' height='304' /></p>

        <p><img data-src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544592589704&di=36d26def5152c9376a1bcf8ee8670de8&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb999a9014c086e062550d0020f087bf40bd1cbfb.jpg"
                class="load-img" width='528' height='304' /></p>

        <p><img data-src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544592589702&di=5c7966826e6329d510a0cd339c4c7245&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fbf096b63f6246b605ee26e3ce6f81a4c500fa28e.jpg"
                class="load-img" width='528' height='304' /></p>
        <script src="./heigo.js"></script>
        <script>
            window.onload = function() {
                $(".load-img").loadImg(100);
                window.onscroll = function() {
                    $(".load-img").loadImg(100);
                    }
              }
        </script>
    </body>

    </html>
   
```

### delayFn()
> 函数节流
* <font size="3">**参数：**</font>

  - `fn：string ` 
  - `delay ：number ` 
  - `mustDelay number ` 

* <font size="3">**返回值：DOM集合**</font>

* <font size="3">**用法：**</font>
  - 第一个参数必填项：事件的回调函数
  - 第二个参数必填项：延迟的时间，如100ms内连续触发的调用，后一个调用会把前一个调用的等待处理掉
  - 第三个参数必填项：多久最少执行一次，如每隔200ms至少执行一次
 
```javascript
    $("button").click($.delayFn(function() {
                console.log(1)
            }, 100, 200))
```


