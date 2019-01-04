---
sidebar: auto
---

# API 参考

## 其他常用方法


### $.getEndTime()
> 倒计时方法计算，从当前时间到目标时间的倒计时
* <font size="3">**参数：**</font>

  - `arg:String`

* <font size="3">**返回值：[day,hour,min,sec]**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arg为必填项，传入的值为目标结束日期时间，格式为"----/--/-- -:-:-"

```javascript
    //demo1:
    $.getEndTime('2018/12/25 0:0:0')
    //参数为目标日期
    //result：[day,hour,min,sec]
    //result：[10,4,24,0]
```

### $.getFormetTime()
> 格式化时间
* <font size="3">**参数：**</font>

  - `arg1:String`
  - `arg2:String`

* <font size="3">**返回值：String**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arg为选填项，代表输出时间的格式如"yyyy-MM-dd hh:mm:ss"

  - 第二个参数arg为选填项，代表格式化的时间，格式为：yyyy/MM/dd hh:mm:ss

```javascript
    //demo1:
   $.getFormetTime("yyyy-MM-dd hh:mm:ss",'2018/12/25 0:0:0')
    //第一个参数为格式，选填
    //第二个参数为时间，选填
    //result：'2018-12-25 00:00:00'

    //demo2:
   $.getFormetTime()
```

### $.generateUUID()
> 生成唯一标识
* <font size="3">**参数：**</font>

  - `arg:无`

* <font size="3">**返回值：String**</font>

* <font size="3">**用法：**</font>
  - 生成默认的32位唯一标识

```javascript
    //demo1:
   $.generateUUID()
    //result：'NmNjZjU5NjMtMTRkOS00Nzk2LWI1MTQtZWZkNWQxMmQ5ZWQ3'
```


### $.randomColor()
> 产生随机颜色
* <font size="3">**参数：**</font>

  - `arg:无`

* <font size="3">**返回值：String**</font>

* <font size="3">**用法：**</font>
  - 返回值为随机颜色

```javascript
    //demo1:
    $.randomColor()
```

### $.randomNumber()
> 返回值为一个范围内的数值
* <font size="3">**参数：**</font>

  - `arg1:number`
  - `arg2:number`

* <font size="3">**返回值：number**</font>

* <font size="3">**用法：**</font>
  - 第一个参数为开始的数值,选填
  - 第二个参数为结束的数值，选填

```javascript
    //demo1:
    $.randomNumber(5,10)
    //返回5-10的随机整数，包括5，10
    $.randomNumber(10)
    //返回0-10的随机整数，包括0，10
     $.randomNumber()
    //返回0-255的随机整数，包括0，255
```

### $.setUrlPrmt()
> 设置url参数
* <font size="3">**参数：**</font>

  - `arg:Object`

* <font size="3">**返回值：String**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arg为对象

```javascript
    //demo1:
   $.setUrlPrmt({'a':1,'b':2})
    //result：'a=1&b=2'

```

### $.getUrlPrmt()
> 获取url参数
* <font size="3">**参数：**</font>

  - `arg:string`

* <font size="3">**返回值：Object**</font>

* <font size="3">**用法：**</font>
  - 传入地址，以对象的形式返回地址参数；

```javascript
    //demo1:
   $.getUrlPrmt('segmentfault.com/write?draftId=122000011938')
    //result：Object{draftId: "122000011938"}
```

### $.upDigit()
> 现金额大写转换函数
* <font size="3">**参数：**</font>

  - `arg:string`

* <font size="3">**返回值：String**</font>

* <font size="3">**用法：**</font>
  - 传入现金，将数字现金转换为大写；

```javascript
    $.upDigit(168752632)
    //result："人民币壹亿陆仟捌佰柒拾伍万贰仟陆佰叁拾贰元整"
    $.upDigit(1682)
    //result："人民币壹仟陆佰捌拾贰元整"
    $.upDigit(-1693)
    //result："欠人民币壹仟陆佰玖拾叁元整"
```
